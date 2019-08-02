<template>
    <div>
        <div class="row" >
          <div class="col-sm-12">
            <Header />
          </div>
        </div>
        <div class="row" >
          <div class="col-sm-8">
           <Rates />
          </div>
          <div class="col-sm-4">
            <Stories />
          </div>
        </div>
        <div class="row'" >
          <div classe="col-sm-12" >
            <Footer />
          </div>
        </div>
    </div>
</template>

<script>
import Header from './header'
import Rates from './rates'
import Stories from './stories'
import Footer from './footer'

export default {
    components: {
        Header,
        Rates,
        Stories,
        Footer,
    }
}
</script>

<style scoped>
</style>