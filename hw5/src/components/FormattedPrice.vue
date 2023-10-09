<template>
    <div>
        {{ foormattedPrice }}
    </div>
</template>

<script>
    export default {
        props:{
            price: Number
        },
        
        name: 'formattedPrice',
        data(){
            return{
                currencyFormat: '$'
            }
        },
        computed:{
            foormattedPrice() {
                return(this.currencyFormat + this.price)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>