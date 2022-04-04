<template>
        <div class="container-fluid">
                                     <div class="row">
                        <div class="col-12 col-md-12">
                                <div class="modal fade" id="myModal">
                                <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                        <div class="modal-header d-flex flex-column  bg-primary justify-content-center align-items-center">
                                                <h1 class="text-center text-white">Tebrikler</h1>
                                                <h4 class="text-center text-white" >128 Milyar dan {{$filters.currencyUSD(toplamFiyat)}} Harcama Yaptınız</h4>
                                                <h5 class="text-center text-white">Kalan Bakiyeniz {{$filters.currencyUSD(getNewPrice)}} </h5>
                                        </div>
                                        <div class="modal-body">
                                                           <div class="col-md-12">
                                                               <table class="table text-center border border-dark">
                                        <thead>
                                                <tr>
                                                        <th  style="">Ürün</th>
                                                         <th  style="">Adet</th>
                                                        <th id="price"  style="">Birim Fiyati</th>
                                                        <th  style="">Toplam Fiyat</th>
                                                </tr>
                                              
                                        </thead>
                                        <tbody v-for="item in getItem" :key="item" >
                                                <tr>
                                                        <td class="">{{item.title}}</td>
                                                        <td class="">{{item.count}}</td>
                                                        <td id="price" class="">{{item.price}}</td>
                                                        <td class="">{{item.totalCount}}</td>                              
                                                </tr>
                                        </tbody>
                                     
                                </table>
                                <p class="text-center font-weight-bold">Toplam Fiyat :{{$filters.currencyUSD(toplamFiyat)}} </p>
                                                </div>
                                        </div>
                                        <div class="modal-footer">
                                                <input type="button" class="btn btn-danger" value="Kapat" data-dismiss="modal"> 
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
           ...mapGetters(['getItem','toplamFiyat','getPrice','getNewPrice']),
       },
        data(){
                return{
                       
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