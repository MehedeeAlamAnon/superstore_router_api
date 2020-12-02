<template>
    <div class="row">
        <div class="col-sm-6">
            <img :src="item.photo" alt="Photo">
        </div>
        <div class="col-sm-6">
            <h4>{{item.title}}</h4>
            <p>{{item.description}}</p>
            <div class="d-flex justify-content-between align-items-center">
                <h3 class="mb-0 text-danger">${{item.price}}</h3>
                <button @click="addToCart(item)" class="btn btn-primary">+ADD</button>
            </div>
            
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            item:null
        }
    },
    mounted(){
        this.fetchItem()
    },
    methods:{
        fetchItem(){
            var self=this
            axios.get('http://localhost:3000/item/' +this.$route.params.id).then(response=>{
                self.item=response.data
            })
        },
        addToCart(item){
            this.$store.commit('addToCart',item)
        },
    }
}
</script>

<style>

</style>