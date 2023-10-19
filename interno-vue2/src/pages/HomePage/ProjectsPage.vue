<template>
     <section class="projects">
                <div class="projects__container">
                    <div class="projects__text block-text">
                        <h2 class="block-text__title">Follow Our Projects</h2>
                        <p class="block-text__text">It is a long established fact that a reader will be distracted by
                            the of readable content of page lookings at its layouts points.</p>
                    </div>
                    <div class="projects__list">
                        <div v-for="item in listProj" :key="item.id" class="projects__item">
                            <div class="projects__item-img hide-tr"><img :src="item.img"
                                    alt="project-01"></div>
                            <div class="projects__item-content">
                                <div class="projects__item-text">
                                    <h3 class="projects__item-title">{{item.title}}</h3>
                                    <p class="projects__item-category">{{item.category}}</p>
                                </div>
                                <router-link to="/project-details" class="projects__item-btn btn-arrow"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"
                                        fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
</template>

<script>
import img01 from "@/assets/images/projects/01.jpg"
import img02 from "@/assets/images/projects/02.jpg"
import img03 from "@/assets/images/projects/03.jpg"
import img04 from "@/assets/images/projects/04.jpg"
    export default {
        data(){
            return{
                listProj: [
                    {id: 1, img: img01, title: 'Modern Kitchan', category: 'Decor / Artchitecture'},
                    {id: 2, img: img02, title: 'Modern Kitchan', category: 'Decor / Artchitecture'},
                    {id: 3, img: img03, title: 'Modern Kitchan', category: 'Decor / Artchitecture'},
                    {id: 4, img: img04, title: 'Modern Kitchan', category: 'Decor / Artchitecture'},
                ]
            }
        }
    }
</script>

<style lang="scss" >

</style>