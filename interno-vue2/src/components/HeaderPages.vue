<template>
    <header class="header">
        <div class="header__container">
            <router-link to="/"><img :src="logo" alt="Logo"></router-link>
            <nav class="menu">
                <ul class="menu__list">
                    <li class="menu__item"><router-link to="/" class="menu__link">Home </router-link></li>
                    <li class="menu__item"><router-link to="/project" class="menu__link">Project</router-link></li>
                    <li class="menu__item"><router-link to="/blog" class="menu__link">Blog</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import logo from "../assets/images/logo.svg"
    export default {
        data(){
            return{
                logo: logo,
               
            }  
        },
        
    }
</script>

<style lang="scss" >

</style>