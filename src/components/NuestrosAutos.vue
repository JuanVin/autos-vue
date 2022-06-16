<template>
  <div class="contenedorAuto mt-5">
    <h1 class="m-3 destacados">Nuestros autos</h1>
    <div class="grid-container">
      <div v-for="auto in autos" :key="auto.id">
        <div class="grid-item">
          <AutoVue :auto="auto" :modelo="auto.modelo"></AutoVue>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "../autos.json";
import AutoVue from "./Auto.vue";
export default {
  name: "NuestrosAutos",
  data() {
    return {
      autos: null,
    };
  },
  components: {
    AutoVue
  },
  beforeMount() {
    this.cargarAutos();
  },
  methods: {
    async cargarAutos() {
      this.autos = json;
    },
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  column-gap: 10px;
  grid-template-columns: auto auto auto auto;
  padding: 20px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid grey(0, 0, 0, 0.8);
  text-align: center;
}

.contenedorAuto {
  border: 2px solid rgb(193, 193, 193);
}
.destacados {
  background-color: orangered;
  color: white;
  border-radius: 5px;
  padding: 15px;
}
</style>
