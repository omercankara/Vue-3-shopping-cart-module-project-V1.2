<template>
  <div class="container-fluid">
        <div class="row">
                <div class="col-12 col-md-12 d-flex justify-content-center logo p-5  ">
                          <img class="img-fluid" alt="Vue logo" src="../assets/logo.png">
                </div>
        </div>
  </div>

  <div class="container-fluid mt-5">
        <div class="row">
                <div class="col-12 col-md-12 background d-flex justify-content-center  ">
                        <img class="img-fluid" src="../assets/banner.png">
                </div>
        </div>
  </div>

  <div class="container-fluid">
        <div class="row">
                <div class="col-md-12 mt-2">
                        <price/>
                        
                </div>
        </div>
  </div>
</template>

<script>
import price from "../views/priceValue.vue"

export default {
   
        components:{
                price
        },
        
}
</script>

<style scoped>
.logo{
        border: 0.1px solid black;
}

.background{
        background-image: url(../assets/anasayfa203.png);
        background-size: cover;
        background-position: center;
}
</style>