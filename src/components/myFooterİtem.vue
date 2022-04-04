<template>
        <div class="container-fluid"  id="test" >
                <div class="row">
                        <div class="col-md-12 ">
                                <button v-if="data" class="btn btn-success w-100" data-toggle="modal" data-target="#myModal">Harcamayı Bitir</button>
                        </div>
                </div>
        </div>
</template>


<script>

import {mapGetters} from "vuex"
export default {
computed:{
        ...mapGetters(['getPrice','getNewPrice'])
},

data(){
        return{
                data:false
        }
},
  watch:{
                getNewPrice(){
                        if(this.getNewPrice >1){
                                this.data=true
                                
                        }
                }
        }
      
}
</script>
<style scoped>
        #test{
                
                 position: sticky;
                 bottom: 0;
                 background-color: yellow;
                 padding: 0px;
                 font-size: 20px;
                 overflow: hidden;
                
        
        }
        #test button{
                font-size: 3vh;
                font-weight: bold;
        }
        #test:hover button{
                background-color: white !important;
                color:black !important
        }       

</style>


