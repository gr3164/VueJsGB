import Vue from "vue";
import Router from "vue-router"
import BlogPage from "@/pages/Blog/BlogPage.vue"
import BlogDetails from "@/pages/BlogDetails/BlogDetails.vue"
import HomePage from "@/pages/HomePage/HomePage.vue"
import OurProject from "@/pages/OurProject/OurProject.vue"
import ProjectDetails from "@/pages/ProjectDetails/ProjectDetails.vue"
import NotFound from "@/pages/NotFound/NotFound.vue"

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/blog',
            name: 'blog',
            component: BlogPage
        },
        {
            path: '/blog-details',
            name: 'blog-details',
            component: BlogDetails
        },
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/project',
            name: 'project',
            component: OurProject
        },
        {
            path: '/project-details',
            name: 'project-details',
            component: ProjectDetails
        },
        {
            path: '/404',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/404'
        }
       
    ]
})