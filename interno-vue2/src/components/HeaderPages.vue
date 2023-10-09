<template>
    <header class="header">
        <div class="header__container">
            <a href="#"><img :src="logo" alt="Logo"></a>
            <nav class="menu">
                <ul class="menu__list">
                    <li class="menu__item"><a href="#" class="menu__link">Home </a></li>
                    <li class="menu__item"><a href="#" class="menu__link">Project</a></li>
                    <li class="menu__item"><a href="#" class="menu__link">Blog</a></li>
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