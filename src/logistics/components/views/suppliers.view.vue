<script>
import apiService from "../../services/stocker-api.service.js";
import {Supplier} from "../../model/supplier.entity.js";

export default {
  name: "suppliers",
  data() {
    return {
      suppliers: []
    }
  },
  async created(){
    try{
      const response = await apiService.getAllSuppliers();
      if (response && response.data) {
        this.suppliers = response.data.map(supplier => new Supplier(supplier));
      }
      else{
        console.error("Error al obtener los proveedores");
      }
    } catch (error) {
      console.error("Error al obtener los proveedores", error);
    }
  }
}
</script>

<template>
  <div class="contenido-principal">
    <div>
      <div class="containerS2">
        <div class="boxS">
          <h3>Suppliers</h3>
          <div class="table">
            <table>
              <thead>
              <tr>
                <th>Supplier Name</th>
                <th>Product</th>
                <th>Contact Number</th>
                <th>Email</th>
                <th>Type</th>
                <th>On the Way</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="supplier in suppliers" :key="supplier.id">
                <td>{{ supplier.name }}</td>
                <td>{{ supplier.product }}</td>
                <td>{{ supplier.number }}</td>

                <td style="color: blue; text-decoration: underline"> <a :href="'mailto:' + supplier.email "> {{ supplier.email }}</a></td>
                <td :style="{color: supplier.type === 'Taking Return' ? '#17bc6e' : '#ff0000'}">{{ supplier.type }}</td>
                <td>{{ supplier.deliveryDays > 0 ? supplier.deliveryDays + ' days' : '-' }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenido-principal {
  margin-left: 250px;
}

.containerS2{
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 2rem;
  padding: 1rem 0;

}
.boxS{

  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  border: white 1px solid;

}

.table table {
  width: 100%;
}
.table {
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 2em 0; /* Ajusta el padding en la parte inferior */
}
.table thead th {
  padding: 0.5em 2em;
}
.table tr {
  border-bottom: 1px solid #F0F1F3;
}
.table tbody tr:last-child {
  border-bottom: none; /* Quita la línea del último elemento de Name */
}
.table tbody tr td {
  font-size: 1.2em; /* Aumenta el tamaño de la fuente */
  word-spacing: 0.2em; /* Agrega espacio entre las palabras */
  text-align: center; /* Centra el texto */
  padding: 1em 0;
}

.table tbody tr td:first-child {
  text-align: left; /* Alinea a la izquierda el texto de la primera celda (Name) */
  padding-left: 1em; /* Ajusta el padding a la izquierda */
}
h3{
  color: #000000;
  font-size: 1.5rem;
  padding: 2rem 0 1rem 2rem;
  text-align: left;
}

.boxS p{
  text-align: center;
  color: #000000;
}
</style>