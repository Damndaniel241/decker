import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path:"/mika",
        name:"MikaIndex",
        component:()=>import("@/views/mika/views/IndexView.vue")
    },
]

export default routes;