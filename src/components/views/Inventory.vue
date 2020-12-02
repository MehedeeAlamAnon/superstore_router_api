<template>

    <div v-if="!loading" class="row">
        <div class="col-sm-4" v-for="(item,index) in items" :key="index">
            <div class="card">
                <router-link tag="div" :to="{path:'/item/' + item.id}">
                    <img :src="item.photo" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">{{item.title}}</h5>     
                    </div>
                </router-link>
                <div class="card-footer d-flex justify-content-between">
                    <span class="card-text">{{item.price}}</span>
                    <a @click="addToCart(item)" class="btn btn-primary">+ADD</a>
                </div>
            </div>
        </div>
    </div>
    <h1 v-else>Loading</h1>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            loading:true,
        }
    },
    computed:{
        items(){
            return this.$store.getters.getInventory
        }
    },
    mounted(){
        this.fetchInventory()
    },
    methods:{
        addToCart(item){
            this.$store.commit('addToCart',item)
        },
        fetchInventory(){
                var self=this
                axios.get('http://localhost:3000/items').then(response=>{
                setTimeout(function(){
                    self.$store.commit('setInventory',response.data)
                    self.loading=false
                },3000)

            })
        }
    }
}
</script>

<style>

</style>