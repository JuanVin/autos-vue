<template>
  <nav class="navbar container  navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/nuestros">Nuestros Autos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contacto">Contacto</a>
        </li>
      </ul>

      <input
        class="form-control mr-sm-2 w-25"
        type="text"
        placeholder="Search"
        aria-label="Search"
        v-model="parametro"
      />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MenuAuto",
  data(){
    return{
      parametro: null
    }
  },
};
</script>

<style scoped></style>
