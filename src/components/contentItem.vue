<template>
        <div class="container-fluid  test px-5" >
                <div class="row">
                        <div class="col-md-12">
                                <div class="row">
                                
                                        <div class="col-12 col-md-3 mt-3  " v-for="item in getVeri" :key="item">
                                                <div class="card ">
                                                        <div class="card-header  p-0">
                                                               <img class="img-fluid w-100" :src="item.contentİmg">
                                                        </div>
                                                        <div class="card-body d-flex flex-column">
                                                                <h5 class="">{{item.title}}</h5>
                                                                       
                                                                <p style="color:gray;"> Fiyat:{{$filters.currencyUSD(item.price)}}</p>
                                                        </div>
                                                        <div class="card-footer">
                                                                <button class="btn btn-success w-100" @click="getİtem(item)">Satın Al</button>
                                                        </div>
                                                </div>
                                        </div>


                                </div>
                        </div>
                </div>
        </div>
</template>


<script>
import {mapGetters} from "vuex"
export default {
        computed:{
                ...mapGetters(['getVeri','toplamFiyat']) },

        data(){
                return{  }

        },
   
        methods:{
                 getİtem(item){  
                                const newItem = item
                                this.$store.commit("basketList", newItem)                         
                 }
        },
        


}
</script>

<style scoped>
.test{
        background-image: url(../assets/anasayfa203.png);
        background-size: cover;
        background-repeat: repeat;
        background-position: center;
       
}
</style>