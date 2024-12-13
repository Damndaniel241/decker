import { RouteRecordRaw } from 'vue-router';



const routes: Array<RouteRecordRaw> = [
    {
        path:"/krypta",
        name:"KryptaIndex",
        component:()=>import("@/views/krypta/views/IndexView.vue")
    },
    {
        path:"/krypta/sign-in",
        name:"SignIn",
        component:()=>import("@/views/krypta/views/SignInView.vue")
    },
    {
        path:"/krypta/sign-up",
        name:"SignUp",
        component:()=>import("@/views/krypta/views/SignUpView.vue")
    },

]


export default routes;