<template>
        <div class="container">
                <div class="row">
                        <div class="col-12 col-md-12 mt-5  ">
                                <table class="table text-center border border-dark">
                                        <thead>
                                                <tr>
                                                        <th class="" style="font-size:3vh;">Ürün</th>
                                                         <th class="" style="font-size:3vh;">Adet</th>
                                                        <th id="price" class="" style="font-size:3vh;">Birim Fiyati</th>
                                                        <th class="" style="font-size:3vh;">Toplam Fiyat</th>
                                                        <th>İşlem</th>
                                                </tr>
                                              
                                        </thead>
                                        <tbody v-for="(item,index) in getItem" :key="index" >
                                                <tr>
                                                        <td class="font-weight-bold">{{item.title}}</td>
                                                        <td class="font-weight-bold">{{item.count}}</td>
                                                        <td  id="price" class="font-weight-bold">{{item.price}}</td>
                                                        <td class="font-weight-bold">{{item.totalCount}}</td>    
                                                        <td> <button @click="removeİtem(item)"  class="btn btn-danger btn-sm">Sil</button> </td>                          
                                                </tr>
                                        </tbody>
                                     
                                </table>
                                <p class="text-center font-weight-bold">Toplam Fiyat :{{$filters.currencyUSD(toplamFiyat)}} </p>
                        </div>
                        
                </div>
        </div>

        <div>
              
        </div>
</template>


<script>
import {mapGetters} from "vuex"
export default {
       computed:{
           ...mapGetters(['getItem','toplamFiyat','getPrice','']),
       },
        data(){
                return{
                    
                }
        },
        methods:{
                removeİtem(item){
                        this.$store.commit("removeİtem",item)
                }
        },

        watch:{
              
        }
     

        
     
}       
</script>


<style scoped>
@media only screen and (max-width: 768px) {
  #price{
        display: none;
  }
}
</style>