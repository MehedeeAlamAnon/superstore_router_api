<template>
  <div id="app">
    <navbar @search="search"></navbar>
    <div class="container pt-5">
      <div class="row">
        <div class="col-sm-9">
          <router-view></router-view>
          <!-- <inventory @newItemAdded="addCartItem" :items="items"></inventory> -->
        </div>
        <div class="col-sm-3">
          <cart @itemRemoved="removeItem" :items="cart">

          </cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/views/Navbar.vue'
import Cart from './components/views/Cart.vue'
//import Inventory from './components/views/Inventory.vue'
import data from './data.js'

export default {
  components:{
    Navbar,
    Cart,
    //Inventory,
  },
  data(){
    return{
      items:[],
      cart:[]
    }
  },
  mounted(){
    this.items=data
  },
  methods:{
    addCartItem(item){
      this.cart.push(item)
    },
    removeItem(index){
      this.cart.splice(index,1)
    },
    search(keyword){
        this.items=data.filter(item=>{
          return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !==-1
        })
    }
  }
}
</script>

<style>

</style>
