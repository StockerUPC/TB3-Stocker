<script>
export default {
  name: "subscription"
}
</script>

<template>
  <div>
    <div>
      <div class="containerS">
        <div class="boxS">
          <pv-card>
            <template #header>
              <h3>Sales Overview</h3>
              <pv-divider/>
            </template>
            <template #content>
              <p>
                <ul>
                  <li></li>
                </ul>
              </p>
            </template>
          </pv-card>

        </div>

        <div class="boxS">
          <h3>Inventory Summary</h3>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.containerS{
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% 50%;
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
</style>