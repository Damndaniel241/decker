import { RouteRecordRaw } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
    {
        path:"/puzzler",
        name:"PuzzlerIndex",
        component:()=>import("@/views/puzzler/views/IndexView.vue")
    },
]

export default routes;