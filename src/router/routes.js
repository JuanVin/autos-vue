import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home";
const routes = [
  {
    path: "/",
    name: "HomeAutos",
    component: Home,
  },
  {
    path: "/nuestros",
    name: "NuestrosAutos",
    component: () => import("../components/NuestrosAutos"),
  },
  {
    path: "/detalle/:mod",
    name: "DetalleAuto",
    component: () => import("../components/DetalleAuto"),
  }/*,
  {
    path: "/modificar/:id",
    name: "FormularioActualizar",
    component: () => import("../components/FormularioAgenda"),
  },
  {
    path: "/crear",
    name: "FormularioCrear",
    component: () => import("../components/FormularioAgenda"),
  },
  */
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;