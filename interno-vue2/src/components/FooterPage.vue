<template>
    <footer class="footer">
    <div class="footer__container">
        <div class="footer__left">
            <div class="footer__content">
                <img :src="logo" alt="logo">
                <p>It is a long established fact that a reader will be distracted lookings.</p>
                <div class="footer__social">
                    <a href="#"><img :src="twiter" alt="twiter"></a>
                    <a href="#"><img :src="inn" alt="in"></a>
                </div>
            </div>
            <div class="footer__pages">
                <h3 class="footer__title">Pages</h3>
                <nav class=" footer__menu menu">
                    <ul class="footer__menu-list menu__list">
                        <li class="menu__item"><router-link to="/" class="menu__link">Home </router-link></li>
                        <li class="menu__item"><router-link to="/project" class="menu__link">Project</router-link></li>
                        <li class="menu__item"><router-link to="/blog" class="menu__link">Blog</router-link></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="footer__contact">
            <h3 class="footer__title">Contact</h3>
            <ul class="footer__contact-list">
                <li>55 East Birchwood Ave. Brooklyn, New York 11201</li>
                <li><a class="footer__contact-link" href="mailto:contact@interno.com">contact@interno.com</a>
                </li>
                <li><a class="footer__contact-link" href="tel:1234567890">(123) 456 - 7890</a></li>
            </ul>
        </div>
    </div>
    </footer>
</template>

<script>
import logo from "../assets/images/logo.svg"
import twit from "../assets/images/icon/twiter.svg"
import inn from "../assets/images/icon/in.svg"
    export default {
        data(){
            return{
                logo: logo,
                twiter: twit,
                inn: inn
            }
        }
    }
</script>

<style lang="scss">

</style>