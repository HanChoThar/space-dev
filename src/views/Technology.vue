<template>
  <div class="head"><span style="margin-right: 1rem;color:#d0d2f9">03</span>SPACE LAUNCH 101</div>
  <transition name="desani" appear>
  <TabWrapper style="color: white">
    <Tab title="1">
      <div class="tech">
          <div class="techText">
            <div class="ship">THE TERMINOLOGY...</div>
            <div class="launcher">LAUNCH VEHICLE</div>
            <div class="powerinfo">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
            </div>
          </div>
          <div class="vehicle">
            <img src="~@/assets/technology/image-launch-vehicle-portrait.jpg" alt="">
          </div>
        </div>
    </Tab>
    <Tab title="2">
      <div class="tech">
          <div class="techText">
            <div class="ship">THE TERMINOLOGY...</div>
            <div class="launcher">SPACEPORT</div>
            <div class="powerinfo">
              A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
            </div>
          </div>
          <div class="vehicle">
            <img src="~@/assets/technology/image-spaceport-portrait.jpg" alt="">
          </div>
        </div>
    </Tab>
    <Tab title="3">
      <div class="tech">
      <div class="techText">
            <div class="ship">THE TERMINOLOGY...</div>
            <div class="launcher">SPACE CAPSULE</div>
            <div class="powerinfo">
              A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
            </div>
          </div>
          <div class="vehicle">
            <img src="~@/assets/technology/image-space-capsule-portrait.jpg" alt="">
          </div>
        </div>
    </Tab>
  </TabWrapper>
  </transition>
</template>

<script>
import TabWrapper from '../components/TabWrapper.vue'
import Tab from '../components/Tab.vue'

export default {
  components: {TabWrapper, Tab}
}
</script>

<style>
  .head{
    margin-bottom: 3rem;
    margin-left: 2rem;
    color: white;
    font-size: 2rem;
  }
  .tech{
    display: flex;
    width: 90%;
    float: right;
}
  .techText, .vehicle{
    flex-basis: 50%;
    padding: 2rem;
  }
  .ship{
    font-size: 2rem;
    font-family: "Bellefair",serif !important;
    color: grey;
  }
  .launcher{
    font-size: 3rem;
    padding: 2rem 0;
    font-family: "Bellefair",serif !important;
  }
  .powerinfo{
    font-size: 1.5rem;
    font-family: "Bellefair",serif !important;
    letter-spacing: 1.7;
  }
  .vehicle img{
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }

  @media (max-width: 968px){
    .tech{
      flex-direction: column-reverse;
      width: 100%;
    }
    .techText, .vehicle{
      text-align: center;
    }
  }

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