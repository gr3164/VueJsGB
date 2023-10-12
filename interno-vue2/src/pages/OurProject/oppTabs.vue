<template>
     <ul class="opp__tabs">
        <li v-for="tab in tabs" :key="tab.id" :class="{'active-tab': tab.flag}" @click="cuerrentTab(tab.category), togleActiveTab(tab), $emit('category',cuerrentCat)">{{ tab.category }}</li>
    </ul>
</template>

<script>
    export default {
      
        data(){
            return{
                tabs:[
                    {id: 1, category: 'Bathroom', flag: false},
                    {id: 2, category: 'Bed Room', flag: false},
                    {id: 3, category: 'Kitchan', flag: false},
                    {id: 4, category: 'Living Area', flag: false},
                ],
               cuerrentCat: ''
            }
        },
     
        methods:{
            cuerrentTab(category){
                this.cuerrentCat = category
            },
            togleActiveTab(tab){
                this.tabs.forEach((el,idx)=>{
                    this.tabs[idx].flag=false
                })
                tab.flag=true
            }
        },
        computed:{
           
        }
    }
</script>

<style lang="scss">

</style>