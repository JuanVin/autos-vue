<template>
  <b><h1 class="text-center mt-5 titulo">A TODO MOTOR AUTOS</h1></b>
  <p class="text-center" style="font-size: 25px">
    Publicá sin registrarte y en un sólo paso. ¿Apurado por vender? Recibí
    ofertas en Efectivo de concesionarios registrados. ¡Súper!
  </p>
  <div class="contenedorAuto mt-5">
    <h1 class="m-3 destacados">Destacados</h1>
    <div class="grid-container">
      <div v-for="auto in destacados" :key="auto.id">
        <div class="grid-item">
          <AutoVue :auto="auto" :modelo="auto.modelo"></AutoVue>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import autos from "../autos.json";
import AutoVue from "./Auto.vue";
export default {
  name: "HomeAutos",
  data() {
    return {
      destacados: [],
    };
  },
  props: ["autoSearch"],
  components: {
    AutoVue,
  },
  mounted() {
    this.$root.$on('nav', (msg) => {
      console.log(msg);
    });
  },
  beforeMount() {
    this.cargarDestacados();
  },
  methods: {
    async cargarDestacados() {
      let _destacados = [];
      autos.forEach((auto) => {
        if (auto.destacado && auto.destacado.toLowerCase() === "y") {
          _destacados.push(auto);
        }
      });
      this.destacados = _destacados;
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
.titulo {
  color: red;
  font-size: 60px;
}
</style>
