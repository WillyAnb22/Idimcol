
import Inicio from "../views/Inicio.vue"
import Nosotros from "../views/Nosotros.vue"
import Servicios from "../views/Servicios.vue"
import Sectores from "../views/Sectores.vue"

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: "/", component: Inicio },
    { path: "/Nosotros", component: Nosotros},
    { path: "/Servicios", component: Servicios},
    { path: "/Sectores", component: Sectores },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});
