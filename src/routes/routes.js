import { createRouter, createWebHashHistory } from "vue-router";

import Inicio from "../views/Inicio.vue"
import NuestraEmpresa from "../views/NuestraEmpresa.vue"
import Servicios from "../views/Servicios.vue"
import Sectores from "../views/Sectores.vue"
import Conocenos from "../views/Conocenos.vue"
import Eventos from "../views/Eventos.vue"


const routes = [
    { path: "/", component: Inicio },
    { path: "/NuestraEmpresa", component: NuestraEmpresa},
    { path: "/Servicios", component: Servicios},
    { path: "/Sectores", component: Sectores },
    { path: "/Conocenos", component: Conocenos },
    { path: "/Eventos", component: Eventos},
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});
