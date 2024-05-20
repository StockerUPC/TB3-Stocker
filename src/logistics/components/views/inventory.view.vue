<script>
import {Product} from "../../model/product.entity.js";
import apiService from "../../../logistics/services/stocker-api.service.js";
export default {
  name: "inventory",
  data() {
    return {
      products: []
    }
  },
  methods: {
    setImageWidth(event) {
      const img = event.target;
      if (img.naturalHeight > img.naturalWidth) {
        img.style.width = '50px';
        img.style.height = 'auto';
      } else {
        img.style.width = '100px';
        img.style.height = 'auto';
      }
    }
  },
  async created() {
    try{
      const response = await apiService.getAllProducts();
      if (response && response.data) {
        this.products = response.data.map(product => new Product(product));
      }
      else{
        console.error("Error al obtener los productos");
      }
    } catch (error) {
      console.error("Error al obtener los productos", error);
    }
  }
}
</script>

<template>
  <div class="contenido-principal">
    <div>
      <section class="services">
        <div class="containerS">
          <div class="boxS">
            <h3>{{$t('inventory.overallInventory')}}</h3>
            <img style="width: 90%; height: auto" src="../../../assets/images/overallInventory.png"/>
          </div>
        </div>
        <div class="containerS">
          <div class="boxS">
            <h3>{{$t('inventory.topSelling')}}</h3>
            <div class="table">
              <table>
                <thead>
                <tr>
                  <th>{{$t('inventory.tableNames')}}</th>
                  <th>{{$t('inventory.tablePrice')}}</th>
                  <th>{{$t('inventory.tableQuantity')}}</th>
                  <th>{{$t('inventory.tableExpiry')}}</th>
                  <th>{{$t('inventory.tableAvailability')}}</th>
                  <th>{{$t('inventory.tablePhoto')}}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="product in products" :key="product.name">
                  <td>{{ product.name }}</td>
                  <td>S/.{{ product.price }}</td>
                  <td>{{ product.quantity }}</td>
                  <td>{{ product.expiryDate }}</td>
                  <td :style="{color: product.available ? '#17bc6e' : '#DA3E33'}">{{ product.available ? $t('inventory.inStock') : $t('inventory.outOfStock') }}</td>
                  <td><img :src="product.photoUrl" @load="setImageWidth" ref="productImage"></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </section>
    </div>
  </div>
</template>

<style scoped>
.contenido-principal {
  margin-left: 250px;
}
.services{
  padding: 3rem 0;
}

.containerS{
  width: 90%;
  margin: 0 auto;
  display: grid;
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
.boxS img{
  margin: 0 auto;
  padding: 2rem 0;
  display: block;

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