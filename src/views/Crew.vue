<template>
    <div class="head"><span style="margin-right: 1rem;color:#d0d2f9">02</span>MEET YOUT CREW</div>
    <transition name="desani" appear>
    <TabWrapper style="color: white">
      <Tab title="1">
        <div class="mighty">
          <div class="crewText">
            <div class="star">Commander</div>
            <div class="name">DOUGLAS HURLEY</div>
            <div class="info">
              Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
            </div>
          </div>
          <div class="pilot">
            <img src="~@/assets/crew/image-douglas-hurley.png" alt="">
          </div>
        </div>
      </Tab>
      <Tab title="2">
        <div class="mighty">
          <div class="crewText">
            <div class="star">MISSION SPECIALIST</div>
            <div class="name">MARK SHUTTLEWORTH</div>
            <div class="info">
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.
            </div>
          </div>
          <div class="pilot">
            <img src="~@/assets/crew/image-mark-shuttleworth.png" alt="">
          </div>
        </div>
      </Tab>
      <Tab title="3">
        <div class="mighty">
          <div class="crewText">
            <div class="star">PILOT</div>
            <div class="name">VICTOR GLOVER</div>
            <div class="info">
              Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.
            </div>
          </div>
          <div class="pilot">
            <img src="~@/assets/crew/image-victor-glover.png" alt="">
          </div>
        </div>
      </Tab>
      <Tab title="4">
        <div class="mighty">
          <div class="crewText">
            <div class="star">FLIGHT ENGINEER</div>
            <div class="name">ANOUSHEH ANSARI</div>
            <div class="info">
              Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.
            </div>
          </div>
          <div class="pilot">
            <img src="~@/assets/crew/image-anousheh-ansari.png" alt="">
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

<style>
  .head{
    margin-bottom: 3rem;
    margin-left: 2rem;
    color: white;
    font-size: 2rem;
  }
  .star{
    font-size: 2rem;
    font-weight: 400;
    color: grey;
    font-family: "Bellefair",serif;
  }
  .name{
    font-size: 3rem;
    font-family: "Bellefair",serif !important;
    padding: 1rem 0 2rem 0;
  }
  .info{
    letter-spacing: 1.7;
    font-size: 1.5rem;
    font-family: "Bellefair",serif !important;

  }
  .mighty{
    display: flex;
    padding-left: 4rem;
    
  }
  .crewText, .pilot{
    flex-basis: 50%;
  }
  .pilot img{
    height: 35em;
    width: 25em;
    margin-left: 2rem;
  }

  @media (max-width: 968px){
    .mighty{
      padding-left: 0;
      width: 80%;
      display: block;
      margin: 0 auto;
    }
    .crewText, .pilot{
      text-align: center;
    }

    .pilot img{
      margin: 0;
      height: 30rem;
      width: 20rem;
    }
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
</style>