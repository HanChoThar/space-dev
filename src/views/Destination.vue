<template>
  <div class="head"><span style="margin-right: 1rem;color:#d0d2f9">01</span>PICK YOUR DESTINATION</div>
  <transition name="desani" appear>
  <TabWrapper style="display: inline-block;">
    <Tab title="MOON" class="main">
      <div class="planet">
          <img src="~@/assets/destination/image-moon.png" alt="moon">
      </div>
      <div class="text">
        <div class="titl">MOON</div>
        <p class="info">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
        <div class="details">
          <div>
            <p>AVG.DINSTANCE</p>
            <div class="miles">384,400 KM</div>
          </div>
          <div>
            <p>EST. TRAVEL TIME</p>
            <p class="miles">3 DAYS</p>
          </div>
        </div>
      </div>
    </Tab>
    <Tab title="MARS" class="main">
      <div class="planet">
        <img src="~@/assets/destination/image-mars.png" alt="mars">
      </div>
      <div class="text">
        <div class="titl">MARS</div>
        <p class="info">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
  the tallest planetary mountain in our solar system. It’s two and a half times 
  the size of Everest!</p>
        <div class="details">
          <div>
            <p>AVG.DINSTANCE</p>
            <div class="miles">225 mil. km</div>
          </div>
          <div>
            <p>EST. TRAVEL TIME</p>
            <p class="miles">9 months</p>
          </div>
        </div>
      </div>
    </Tab>
    <Tab title="EUROPA" class="main">
      <div class="planet">
        <img src="~@/assets/destination/image-europa.png" alt="europa">
      </div>
      <div class="text">
        <div class="titl">EUROPA</div>
        <p class="info">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
        <div class="details">
          <div>
            <p>AVG.DINSTANCE</p>
            <div class="miles">628 MIL. KM</div>
          </div>
          <div>
            <p>EST. TRAVEL TIME</p>
            <p class="miles">3 YEARS</p>
          </div>
        </div>
      </div>
    </Tab>
    <Tab title="TITAN" class="main">
      <div class="planet">
        
          <img src="~@/assets/destination/image-titan.png" alt="titan">
        
      </div>
      <div class="text">
        <transition name="hello">
        <div class="titl">TITAN</div>
        </transition>
        <p class="info">The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
        <div class="details">
          <div>
            <p>AVG.DINSTANCE</p>
            <div class="miles">628 MIL. KM</div>
          </div>
          <div>
            <p>EST. TRAVEL TIME</p>
            <p class="miles">3 YEARS</p>
          </div>
        </div>
      </div>
    </Tab>
  </TabWrapper>
  </transition>
</template>

<script>
import Tab from '../components/Tab.vue'
import TabWrapper from '../components/TabWrapper.vue'
export default {
  components: {Tab, TabWrapper},
}
</script>

<style scoped>
  .head{
    margin-bottom: 3rem;
    margin-left: 2rem;
    color: white;
    font-size: 2rem;
  }
  .main{
    color: #d0d2f9;
    display: flex;
    justify-content: center;
    /* justify-content: space-around; */
    align-items: center;
    height: 90%;
    width: 100%;
    padding-top: 2rem;
    transition: all 0.6s ease;
  }
  .planet img{
    max-width: 100%;
    height: auto;
    padding: 0 3rem;
  }
  .text{
    max-width: 100%;
    width: 30%;
    height: auto;
  }
  .text .info{
    line-height: 1.7;
    padding: 2rem 0;
    border-bottom: 1px solid white;
  }
  .titl{
    font-size: 6rem;
    font-family: "Bellefair",serif;
    font-weight: bold;
  }
  .titl:focus{
    border-bottom: 1px solid yellowgreen;
  }
  .details{
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
  }

  .miles{
    font-size: 2rem;
    font-family: "Bellefair",serif;
    font-weight: bold;
  }

  /* animation */
  .desani-enter-from,
  .desani-leave-to{
    opacity: 0;
    transform: translateX(-3rem);
  }
  .desani-enter-active,
  .desani-leave-active{
    transition: all 1s ease;
  }
  

  

  @media (max-width: 1024px){
    .head{
      text-align: center;
      margin: 0;
      font-size: 1.5rem;
    }
    .main{
      flex-direction: column;
    }
    .text{
      width: 80%;
      text-align: center;
    }
    .planet img{
      padding: 0 3rem;
    }
    .details{
      padding: 2rem 0;
    }
    .titl{
      font-size: 5rem;
    }
  }

  
</style>

