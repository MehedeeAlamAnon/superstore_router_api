<template>
    <ul class="list-group">

        <li class="list-group-item d-flex justify-content-between">
            <span>Item</span>
            <span>Price</span>
       </li>

        <li v-for="(item,index) in items" :key="index" class="list-group-item d-flex justify-content-between">
            <span>{{item.title}}</span>
            <button @click="removeItem(index)" class="btn btn-sm btn-danger">-</button>
            <span>{{item.price}}</span>
       </li>

        <li class="list-group-item d-flex justify-content-between">
            <span>Total</span>
            <span>${{totalPrice}}</span>
        </li>

        <li v-if="items.length>0" class="list-group-item">
            <button @click="checkout" class="btn btn-block btn-success">Checkout</button>
        </li>
    </ul>
</template>

<script>
export default {
    computed:{
        items(){
            return this.$store.getters.getCart
        },
        totalPrice(){
            var total=0
            this.items.forEach(item => {
                total=total+parseFloat(item.price)
            })
            return total.toFixed(2)
        }
    },
    methods:{
        removeItem(index){
            this.$store.commit('removeItem',index)
        }, 
        checkout(){
            if(confirm('Are you sure you want to checkout?')){
                this.$store.commit('clearCart')
            }
        }
    }
}
</script>

<style>

</style>