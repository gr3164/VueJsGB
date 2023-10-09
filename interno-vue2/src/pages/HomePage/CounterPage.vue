<template>
      <div class="counter">
                <div class="counter__container">
                    <ul class="counter__list">
                        <li v-for="item in listCouner" :key="item.id" class="counter__item">
                            <span class="counter__item-number">{{item.number}}</span>
                            <p class="counter__item-text">{{item.text}}</p>
                        </li>
                    </ul>
                </div>
            </div>
</template>

<script>
    export default {
        data(){
            return{
                listCouner: [
                    {id: 1, number: 12, text: 'Years Of Experiance'},
                    {id: 2, number: 85, text: 'Success Project'},
                    {id: 3, number: 15, text: 'Active Project'},
                    {id: 4, number: 95, text: 'Happy CUstomers'}
                ]
            }
        }
    }
</script>

<style lang="scss" >

</style>