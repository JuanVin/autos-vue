<template>
  <div class="row mt-5">
    <div class="col">
      <img :src="'/img/'+auto.imagen" class="w-100">
    </div>
    <div class="col p-5">
      <h3 class="mt-5">Marca: <span>{{ auto.marca }}</span></h3>
      <h3>Modelo: <span>{{ auto.modelo }}</span></h3>
      <h3>Localidad: <span>{{ auto.localidad }}</span></h3>
      <h3>Año: <span>{{ auto.anio }}</span></h3>
      <h3>Precio: <span style="color: orangered !important">${{ auto.precio }}</span></h3>
    </div>
  </div>
</template>

<script>
import autos from "../autos.json";
export default {
  name: "DetalleAuto",
  data() {
    return {
      auto: null,
      modelo: null,
    };
  },
  beforeMount() {
    this.modelo = this.$route.params.mod;
    this.traerAuto();
  },
  methods: {
    async traerAuto() {
      for (let index = 0; index < autos.length; index++) {
        if (autos[index].modelo === this.modelo) {
          this.auto = autos[index];
          break;
        }
      }
    },
  },
};
</script>

<style scoped>
img{
  border-radius: 10px;
}
span{
  color: grey
}
</style>
