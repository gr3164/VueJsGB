<template>
    <div>
        <ul>
            <li v-for="product in products" :key="product.name">
                {{ isAvailable(product.available) }}
                <div>{{ product.name }}</div>
                <formatted-price :price="product.price"/>
                <div>----</div>
            </li>
        </ul>
    </div>
</template>

<script>
import FormattedPrice from './FormattedPrice.vue'
    export default {
  components: { FormattedPrice },
       data(){
        return{
            products:[
                {name: "Название 1", price: 56, available: true},
                {name: "Название 2", price: 53, available: true},
                {name: "Название 3", price: 41, available: true}
            ]
        }
       }, 
       methods:{
        isAvailable(flag){
            return flag? "Available" :  "Out of stock"
        }
        }
    }
</script>

<style lang="sass" scoped>

</style>