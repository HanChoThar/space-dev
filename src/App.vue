<template>
    <div :class="Bg[$route.path]" class="back">
      <Navbar />
      <router-view/>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './views/Home.vue'
export default {
  components: { Navbar, Home },
  data() {
    return {
      Bg: {
        '/': 'backgroundA',
        '/destination': 'backgroundB',
        '/crew': 'backgroundC',
        '/technology': 'backgroundD'
      } 

    }
  },
  methods: {
    check() {
      let check = window.innerWidth
      if(check < 768){
        this.mobile = true
        console.log('mob')
      }
      else{
        this.desktop = true
      }
    }
    }
}
</script>


<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.back{
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    overflow: auto;
}
  .backgroundA{
    background: url('~@/assets/home/background-home-desktop.jpg');
  }
  .backgroundB{
    background: url('~@/assets/destination/background-destination-desktop.jpg');
  }
  .backgroundC{
    background: url('~@/assets/crew/background-crew-desktop.jpg');
  }
  
  .backgroundD{
    background: url('~@/assets/technology/background-technology-desktop.jpg');
  }

/* for tablet */
@media (max-width: 768px){
  .backgroundA{
    background: url('~@/assets/home/background-home-tablet.jpg');
  }
  .backgroundB{
    background: url('~@/assets/destination/background-destination-tablet.jpg');
  }
  .backgroundC{
    background: url('~@/assets/crew/background-crew-tablet.jpg');
  }
  .backgroundD{
    background: url('~@/assets/technology/background-technology-tablet.jpg');
  }
}

/* for mobile */
@media (max-width: 480px){
  .backgroundA{
    background: url('~@/assets/home/background-home-mobile.jpg');
  }
  .backgroundB{
    background: url('~@/assets/destination/background-destination-mobile.jpg');
  }
  .backgroundC{
    background: url('~@/assets/crew/background-crew-mobile.jpg');
  }
  .backgroundD{
    background: url('~@/assets/technology/background-technology-mobile.jpg');
  }
}


</style>
