<template>
<div id="app">
        <div class="container-fluid">
                <div class="row">
                        <div class="col-md-12 ">
                                        <bannerItem/>
                                        <contextItem  :bilgiler="contentItem" />
                                         <itemList/>
                                        <footList/>
                                        <sonuclar class="testsx" />
                        </div>
                </div>
        </div>
</div>
</template>

<script>
import contextItem from "./components/contentItem.vue"
import itemList from "./components/itemList.vue"
import bannerItem from "./components/bannerItem.vue"
import footList from "./components/myFooterİtem.vue"
import sonuclar from "./components/resultData.vue"
 

 

export default {

       components:{
       
        contextItem,
        itemList,
        bannerItem,
        footList,
        sonuclar
       },

       data(){
                return{
                         
                }
       },
   
}
</script>

<style scoped>
 
</style>