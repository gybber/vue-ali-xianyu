<template>
<div class="banner">
	<mt-swipe :auto="3000">
      <mt-swipe-item
       v-for="data in banner" key="data.id">
        <img :src="data.src">
      </mt-swipe-item>
    </mt-swipe>
</div>
</template>
<script>
    export default {
        data () {
            return {
              banner: []
            }
        },
        mounted () {
          this.axios.get('https://easy-mock.com/mock/593ebbfe8ac26d795feb44f8/index/indexbanner')
              .then((response) => {
                this.banner = response.data.banner
                console.log(this.banner)
            })
            .catch(function (error) {
              console.log(error) 
            })
        }
    }
</script>
<style lang="css" scoped>
.banner{
    width: 100%;
    height: 15rem;
}
.banner img{
    width: 100%;
    height: 100%;
    float: left;
}

</style>