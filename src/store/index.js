
import { createStore } from 'vuex'

const store  = createStore({
        state: {
                price: 128000000000,
                itemList: [],
                contentItem:[ 
                                {       
                                         id:1,
                                         contentİmg:require("/src/assets/anasayfa205.jpg"),
                                         title:"Ekmek",
                                         price:1,
                                         count:1,
                                         totalCount:null
                                },
                                    {       
                                      id:2,
                                        contentİmg:require("/src/assets/anasayfa206.jpg"),
                                        title:"1 Litre Süt",
                                        price:1,
                                        count:1,
                                        totalCount:null

                                },
                                   {       
                                        id:3,
                                         contentİmg:require("/src/assets/anasayfa207.jpg"),
                                        title:"BionTech Aşısı",
                                         price:50,
                                         count:1,
                                         totalCount:null

                                },
                                    {       
                                        id:4,
                                        contentİmg:require("/src/assets/anasayfa208.jpg"),
                                        title:"Ejder Meyvesi",
                                        price:8,
                                        count:1,
                                         totalCount:null

                                },
                                   {       
                                        id:5,
                                         contentİmg:require("/src/assets/anasayfa209.jpg"),
                                        title:"Burj Khalifa",
                                        price:1500000000,
                                        count:1,
                                         totalCount:null
                                },
                                    {       
                                        id:6,
                                        contentİmg:require("/src/assets/anasayfa210.jpg"),
                                        title:"35Li Çokomel",
                                        price:3,
                                        count:1,
                                         totalCount:null
                                },
                                  {       
                                        id:7,
                                         contentİmg:require("/src/assets/anasayfa211.jpg"),
                                        title:"Big Mac Menu",
                                        price:3,
                                        count:1,
                                         totalCount:null
                                },
                                    {       
                                        id:8,
                                        contentİmg:require("/src/assets/anasayfa212.jpg"),
                                        title:"Lil Uzi'nin Altındaki Araba",
                                         price:300000,
                                         count:1,
                                         totalCount:null
                                },
                                   {       
                                        id:9,
                                         contentİmg:require("/src/assets/anasayfa213.jpg"),
                                        title:"Lil Uzi'nin Alnındaki ELMAS",
                                         price:24000000,
                                         count:1,
                                         totalCount:null
                                },
                                    {       
                                        id:10,
                                        contentİmg:require("/src/assets/anasayfa214.jpg"),
                                        title:"20Kg Patates  Soğan",
                                         price:10,
                                         count:1,
                                         totalCount:null
                                },
                                   {       
                                        id:11,
                                         contentİmg:require("/src/assets/anasayfa215.jpg"),
                                        title:" Newyork Yankees",
                                        price:5000000000,
                                        count:1,
                                         totalCount:null
                                },
                                    {       
                                        id:12,
                                        contentİmg:require("/src/assets/anasayfa216.jpg"),
                                        title:"İphone 12 Pro Max 512 Gb",
                                        price:2500,
                                        count:1,
                                         totalCount:null
                                },
                                   {       
                                        id:13,
                                         contentİmg:require("/src/assets/anasayfa217.jpg"),
                                        title:"Airpods",
                                        price:125,
                                        count:1,
                                         totalCount:null
                                },
                                    {       
                                        id:14,                                        
                                        contentİmg:require("/src/assets/anasayfa218.jpg"),
                                        title:"1 KG Kuzu Pirzola",
                                        price:15,
                                        count:1,
                                         totalCount:null
                                },
                                   {       
                                        id:15,
                                         contentİmg:require("/src/assets/anasayfa219.jpg"),
                                        title:"Pudra Şekeri",
                                        price:1,
                                        count:1,
                                         totalCount:null
                                },
                                    {       
                                        id:16,
                                        contentİmg:require("/src/assets/anasayfa220.jpg"),
                                        title:"PlayStation 5",
                                        price:1200,
                                        count:1,
                                         totalCount:null
                                },
                                   {       
                                        id:17,
                                         contentİmg:require("/src/assets/anasayfa221.jpg"),
                                        title:"Gemicik",
                                        price:35000000,
                                        count:1,
                                         totalCount:null
                                },
                                    {       
                                        id:18,
                                        contentİmg:require("/src/assets/anasayfa222.jpg"),
                                        title:"Housten Rockets",
                                        price:2500000000,
                                        count:1,
                                         totalCount:null
                                },
                                  {       
                                        id:19,
                                         contentİmg:require("/src/assets/anasayfa223.jpg"),
                                        title:"Tesla Model X",
                                        price:250000,
                                        count:1,
                                         totalCount:null
                                },
                                    {       
                                        id:20,
                                        contentİmg:require("/src/assets/anasayfa224.jpg"),
                                        title:"Çeyrek Altın",
                                        price:20,
                                        count:1,
                                         totalCount:null
                                },
                                   {       
                                        id:21,
                                         contentİmg:require("/src/assets/anasayfa225.jpg"),
                                        title:"2+1 Ev",
                                        price:35000,
                                        count:1,
                                         totalCount:null
                                },
                                    {       
                                        id:22,
                                        contentİmg:require("/src/assets/anasayfa226.jpg"),
                                        title:"Fiat Egea",
                                        price:24000,
                                        count:1,
                                         totalCount:1
                                },

                           

                                   {       
                                        id:23,
                                         contentİmg:require("/src/assets/anasayfa227.jpg"),
                                        title:"Osmangazi Köprüsü",
                                        price:1200000000,
                                        count:1,
                                         totalCount:null
                                },
                                         {       
                                        id:24,
                                        contentİmg:require("/src/assets/anasayfa228.jpg"),
                                        title:"5 Litre Ay Çiçek Yağı",
                                        price:15,
                                        count:1,
                                        totalCount:null
                                }
                ]
        },
        getters: {
                getPrice(state) {
                        return state.price
                },
                getItem(state) {
                        return state.itemList
                },
        
                getVeri(state){
                        return state.contentItem
                }, 
               
                toplamFiyat: state => state.itemList.reduce((sum, itemList) => sum + itemList.totalCount, 0),
                getNewPrice(state){
                      const price = state.price
                      const totalPrice = state.itemList.reduce((sum, itemList) => sum + itemList.totalCount, 0)
                      const resultPrice  = price - totalPrice
                      return resultPrice
                }    
        },

        mutations: {
                basketList(state, newItem) { 
                                const oneİtem = state.itemList.findIndex(x=> x.id == newItem.id)                   
                                 if(oneİtem === -1){ 
                                         state.itemList.push(newItem)           
                                          //  state.itemList.totalCount = state.itemList.price * state.itemList.count
                                         state.itemList.forEach(items=>{                                       
                                                 var idBilgi = state.itemList.indexOf(items) //seçtiğim elemanın  id değerini yakala 
                                                 console.log(idBilgi)                       
                                                 state.itemList[idBilgi].totalCount = state.itemList[idBilgi].price * state.itemList[idBilgi].count                       
                                          }) 
                                } 
                            else{ 
                                        state.itemList[oneİtem].count++
                                        state.itemList[oneİtem].totalCount = state.itemList[oneİtem].price * newItem.count
                                } 
                        },

                        removeİtem(state,data){ //state içindeki itemlisti filtlere gelen data ile eşit olmayanları yeniden dön 
                                state.itemList = state.itemList.filter(todo => data!= todo)
                        }
      
},
        actions: {
  
},
        modules: {
},

})
export default store  // dışarıya aç


