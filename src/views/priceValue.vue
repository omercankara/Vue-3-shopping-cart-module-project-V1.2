<template>
        <h2 class="text-center"> Bakiyeniz : {{$filters.currencyUSD(getNewPrice)}}</h2>
</template>

<script>
import { mapGetters } from "vuex";
export default {
computed:{
           ...mapGetters(['getPrice','getNewPrice'])
        }       ,

      
}
</script>