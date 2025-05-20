import { createRouter, createWebHashHistory } from "vue-router";

import Inicio from "../views/Inicio.vue"
import NuestraEmpresa from "../views/NuestraEmpresa.vue"
import Servicios from "../views/Servicios.vue"
import Sectores from "../views/Sectores.vue"
import Conocenos from "../views/Conocenos.vue"
import Bienestar from "../views/Bienestar.vue"
import PQRS from "../views/PQRS.vue"


const routes = [
    { path: "/", component: Inicio },
    { path: "/NuestraEmpresa", component: NuestraEmpresa},
    { path: "/Servicios", component: Servicios},
    { path: "/Sectores", component: Sectores },
    { path: "/Conocenos", component: Conocenos },
    { path: "/Bienestar", component: Bienestar},
    { path: "/PQRS", component: PQRS},
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition){
        return { top: 0 }
    }
});

export default router