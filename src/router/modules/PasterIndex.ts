import { RouteRecordRaw } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
    {
        path:"/paster",
        name:"PasterIndex",
        component:()=>import("@/views/paster/views/IndexView.vue")
    },
    {
        path:"/paster/:url_id",
        name:"PasteDisplay",
        component:()=>import("@/views/paster/views/PasteDisplay.vue")

    },
]

export default routes;