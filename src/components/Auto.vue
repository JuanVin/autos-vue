<template>
  <div class="card" style="width: 18rem">
    <a :href="'/detalle/' + modelo">
      <img
        class="card-img-top"
        :src="'/img/' + auto.imagen"
        alt="Card image cap"
      />
    </a>
    <div class="card-body">
      <h2 class="card-title" style="color: grey">{{ auto.marca }}</h2>
      <h4 class="card-title">{{ auto.modelo }}</h4>
      <h2 v-if="auto.precio !== '0'" style="color: orangered">
        ${{ auto.precio }}
      </h2>
      <h2 v-else style="color: orangered">Consultar</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "AutoCard",
  props: ["auto", "modelo"],
};
</script>

<style lang="scss" scoped></style>
