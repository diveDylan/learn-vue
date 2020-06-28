<template>
    <div>
        <div @click="getData">{{name}}</div>
        <slot name="title" v-bind:user="user">

                    这是一个测试的cacao
            
        </slot>
    </div>

</template>

<script>
export default {
    name:"iSerach",
    props:{
        name: String,
        List:[],
        user:Object
    },
    data(){
        return {
            userInfo:{
                name:'xx',
                age:'18'
            }
        }
    },
    methods:{
        getData(){
            console.log('xxxzz',111)
            this.$emit('s',this.userInfo)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>