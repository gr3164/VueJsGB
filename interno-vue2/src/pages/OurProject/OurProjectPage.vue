<template>
    <section class="opp">
        <div class="opp__container">
            <div class="opp__wrapp">
                <opp-tabs @category="updateCat"/>
                <opp-list :data="filterList"/>
            </div>
        </div>
    </section>
</template>

<script>
import OppList from './oppList.vue'

import oppTabs from './oppTabs.vue'
import img01 from "@/assets/images/our-project/01.jpg"
import img02 from "@/assets/images/our-project/02.jpg"
import img03 from "@/assets/images/our-project/03.jpg"
import img04 from "@/assets/images/our-project/04.jpg"
    export default {
  components: { oppTabs, OppList },
      
        data(){
            return{
                listProj: [
                    {id: 1, img: img01, title: 'Modern Kitchan', category: 'Decor / Artchitecture', filterCat:'Bathroom'},
                    {id: 2, img: img02, title: 'Modern Kitchan', category: 'Decor / Artchitecture', filterCat:'Bed Room'},
                    {id: 3, img: img03, title: 'Modern Kitchan', category: 'Decor / Artchitecture', filterCat:'Bed Room'},
                    {id: 4, img: img04, title: 'Modern Kitchan', category: 'Decor / Artchitecture', filterCat:'Kitchan'},
                    {id: 5, img: img01, title: 'Modern Kitchan', category: 'Decor / Artchitecture', filterCat:'Kitchan'},
                    {id: 6, img: img02, title: 'Modern Kitchan', category: 'Decor / Artchitecture', filterCat:'Living Area'},
                    {id: 7, img: img03, title: 'Modern Kitchan', category: 'Decor / Artchitecture', filterCat:'Kitchan'},
                    {id: 8, img: img04, title: 'Modern Kitchan', category: 'Decor / Artchitecture', filterCat:'Kitchan'},
                ],
                cuerrentCat: '',
            }
        },
        mounted(){
            this.$on('category', this.updateCat);
            
        },
        methods:{
            updateCat(message){
                this.cuerrentCat = message
            }
              
        },
        computed:{
           filterList(){
            return(!this.cuerrentCat)?
            
            this.listProj:
            this.listProj.filter(el=>el.filterCat === this.cuerrentCat)
           }
        }
       
    }
</script>

<style lang="scss">

</style>