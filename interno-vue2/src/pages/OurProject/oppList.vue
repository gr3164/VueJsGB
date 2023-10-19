<template>
    <div>
        <div class="opp__list projects__list">
        <div v-for="item in data" :key="item.id" class="projects__item opp__item">
            <div class="projects__item-img hide-tr opp__item-img"><img :src="item.img"
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
        <div class="blog-news__dots">
                <ul>
                    <li><a href="#">01</a></li>
                    <li><a href="#">02</a></li>
                    <li><a href="#">03</a></li>
                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="16"
                        viewBox="0 0 9 16" fill="none">
                        <path d="M1.55714 15L7.5 8.31429L1.55714 1.62857" stroke="#292F36"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></a></li>
                </ul>
            </div>
    </div>
  
</template>

<script>

    export default {
        
        props:['data'],
        data(){
            return{      
            } 
        },
        computed:{
            
        }
    }
</script>

<style lang="sass" scoped>

</style>