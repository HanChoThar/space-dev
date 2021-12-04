<template>
  <nav class="nav">
    <div class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
    </div>
    <!-- for desktop -->
    <ul v-if="desktop" class="links desk">
        <li>
          <router-link   class="link" to="/"><span>00</span>Home</router-link>
        </li>
        <li>
          <router-link   class="link" to="/destination"><span>01</span>Destination</router-link>
        </li>
        <li>
          <router-link   class="link" to="/crew"><span>02</span>Crew</router-link>
        </li>
        <li>
          <router-link   class="link" to="/technology"><span>03</span>Technology</router-link>
        </li>
    </ul>
    <!-- for mobile -->
    <div v-else>
      <div @click="burger = !burger"  class="burger">
        <svg v-show="!burger" xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
        <svg v-show="burger" xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
      </div>
     <transition mode="out-in" name="slide">
        <ul v-show="burger" class="mob" >
          <li>
            <router-link @click="close"   class="link" to="/"><span>00</span>Home</router-link>
          </li>
          <li>
            <router-link @click="close"  class="link" to="/destination"><span>01</span>Destination</router-link>
          </li>
          <li>
            <router-link @click="close"  class="link" to="/crew"><span>02</span>Crew</router-link>
          </li>
          <li>
            <router-link @click="close"  class="link" to="/technology"><span>03</span>Technology</router-link>
          </li>
        </ul>
     </transition>
    </div>
  </nav>
</template>

<script>
export default {
  
  data() {
    return {
      desktop : null,
      mobile: null,
      burger: false,
    }
  },
  methods: {
    close() {
      this.burger = false
    }
  },
  mounted() {
    let check = window.innerWidth
    if(check < 768){
      this.mobile = true
      console.log('mob')
    }
    else{
      this.desktop = true
    }
  },
  

}
</script>

<style>
  .nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;
    text-transform: uppercase;
    /* background: blue; */
  }

  .links{
    background: hsla( 0, 0%, 100%, 0.1 );
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    display: flex;
    padding: 2rem 6rem 2rem 4rem;
    margin-right: -3rem;
  }

  .links li{
    list-style: none;
  }

  .link{
    text-decoration: none;
    margin-right: 2rem;
    color: white;
    padding-bottom: 2rem;
  }
  .link.router-link-exact-active{
    border-bottom: 4px solid white;

  }
  .under{
    border-bottom: 4px solid white;
  }
  .link:nth-child(0):active{
    border-bottom: 4px solid white
  }

  .link span{
    font-weight: bold;
    margin-right: 10px;
  }

  .mob{
    list-style: none;
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 80%;
    z-index: 90;
    background: rgba( 255, 255, 255, 0.25 );
    backdrop-filter: blur( 15px );
    -webkit-backdrop-filter: blur( 15px );
    text-align: left;
    padding-top: 4.5rem;
    overflow: auto;
  }

  .mob li{
    padding: 1rem;
    font-size: 2rem;
    list-style: none;
    margin-bottom: 2rem;
  }

  .burger svg{
    z-index: 99999;
    position: relative;
    cursor: pointer;
  }

  /* animation */
  .slide-enter-from,
  .slide-leave-to{
    opacity: 0;
    transform: translateX(200px);
  }
  .slide-leave-active,
  .slide-enter-active{
    transition: all 0.6s ease;
  }

  @media (max-width: 768px) {
    .nav{
      padding: 2rem;
      flex-direction: row;
    }
  }
</style>