import { createRouter, createWebHistory } from "vue-router";


import Main from '/src/components/Main.vue'
import Home from '/src/components/pages/home/Home.vue'
import Login from '/src/components/Login.vue'
import Signup from '/src/components/Signup.vue'

import NProgress from 'nprogress'

const componentsUrl = '/src/components';
const pagesUrl = '/src/components/pages';

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home

            },
            
            {
                path: '/profile',
                name: 'Profile',
                component: () => import('/src/components/pages/profile/Profile.vue')
            },
            
            {
                path: '/user/:username',
                name: 'User',
                component: () => import('/src/components/pages/userprofile/UserProfile.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeResolve((to, from, next) => {
    // Nếu đây không phải là lần tải trang đầu tiên.
    if (to.name) {
        NProgress.start()
    }

    next()
})


router.afterEach((to, from) => {
    // Hoàn thành hoạt ảnh của thanh tiến trình tuyến đường.
    NProgress.done()
})


//thiết lập trang
router.beforeEach((to, from) => {
    //kiểm tra trang nào
    switch (to.name) {
        case 'Login':
            document.title = 'Enjoy Social Media - Login';
            break;
        case 'Signup':
            document.title = 'Enjoy Social Media - Sign Up';
            break;
        case 'Home':
            document.title = 'Enjoy Social Media - Home';
            break;

        case 'Profile':
            document.title = 'Enjoy Social Media - Profile';
            break;
        
        case 'User Profile':
                document.title = 'Enjoy Social Media - User Profile';
                break;
        default:
            document.title = 'Enjoy Social Media';
            break;
    }
})

export default router