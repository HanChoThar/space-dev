<template>
  <div>
    <ul :class="rout2[$route.path]">
      <li :class="rout[$route.path]" v-for="title in tabTitles" :key="title" @click="selectedTitle = title">{{ title }}</li>
    </ul>
    <slot/>
  </div>
</template>

<script>
import { ref, provide } from 'vue'

export default {
  data() {
    return {
      rout: {
        '/destination' : 'okay',
        '/crew': 'pwer',
        '/technology': 'nober'
      },
      rout2: {
        '/destination': 'damn',
        '/crew': 'holy',
        '/technology': 'nobertwo'
      }
    }
  },
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title))
    const selectedTitle = ref(tabTitles.value[0])
    provide("selectedTitle", selectedTitle)
    return { tabTitles, selectedTitle }
  }
}
</script>

<style scoped>
.holy{
  text-align: center;
  padding: 1rem;
}
.pwer{
  position: relative;
  bottom: 0;
  left: 2rem;
  padding: 1.5rem;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  border: 1px solid white;
    border-radius: 50%;
  margin-right: 20px;
  flex-direction: row;
  display: inline-block;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}
.pwer:hover{
  background: white;
  color: black;
}

/* .not{
  position: relative;
  left: 2rem;
  bottom: 4rem;
} */
.damn{
  position: relative;
  top: 1rem;
  margin: 2rem 0;
  text-align: center;
  /* padding: 0 1rem; */
  list-style: none;
}
  .okay{
    color: white;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    /* text-decoration: underline; */
  }
  .okay:not(:last-child){
    margin-right: 2rem;
  }

  .okay:hover{
    border-bottom: 2px solid yellowgreen;
  }

  .nober{
    height: 5rem;
    width: 5rem;
    margin: 1.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: white;
    border: 1px solid white;
    /* background: white; */
    font-size: 2rem;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .nober:hover{
    color: black;
    background: white;
  }
  .nobertwo{
    position: absolute;
    width: fit-content;
    padding: 2rem;
    left: 0;
  }

@media (max-width: 968px){
  .nobertwo{
    position: relative;
    display: flex;
    padding: 0;
    margin-left: 50%;
    transform: translateX(-50%);
}
  .nober{
    margin-right: 2rem !important;
    margin: 0;
  }
}

@media (min-width: 1025px) {
  .damn{
    /* padding-bottom: 3rem; */
    width: 50%;
    margin-left: 45%;
  }
}


  
  

</style>
