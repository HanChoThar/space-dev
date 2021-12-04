<template>
  <transition name="faded" appear>
  <div class="home">
    <div class="theone">
      <h3>So, you want to travel to</h3>
      <div class="fun">SPACE</div>
      <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
        outer space and not hover kind of on the edge of it. Well sit back, and relax 
        because we’ll give you a truly out of this world experience!</p>
    </div>
    <div class="thetwo">
      <router-link style="text-decoration:none;color:black" to="/destination">Explorer</router-link>
    </div>
  </div>
  </transition>
</template>

<style scoped>

  .home{
    display: flex;
    /* min-height: 10vh; */
    width: 80%;
    margin: 0 auto;
    justify-content: space-between;
    /* padding: 5rem 10rem; */
    align-items: flex-end;
    position: relative;
    color: white;
    /* margin-top: 5rem; */
    padding-top: 8rem;
  }
  .theone{
    width: 35rem;
    color: #d0d2f9;
  }
  .theone h3{
    font-size: 1.5rem;
    font-family: "Bellefair",serif;
  }
  .theone .fun{
    font-family: "Bellefair",serif;
    font-size: 8rem;
    font-weight: bold;
    padding: 1rem 0;
  }

  .thetwo{
    width: 15rem;
    height: 15rem;
    background-color: white;
    border-radius: 50%;
    display: flex;
    color: black;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    text-transform: uppercase; 
   margin-right: 2rem;
   cursor: pointer;
  }
  .thetwo:hover{
    transition: all 0.3s ease;
    transform: scale(1.1);
  }

  /* animation */
  .faded-enter-from,
  .faded-leave-to{
    opacity: 0;
  }
  .faded-enter-active,
  .faded-leave-active{
    transition: all 2s ease;
  }
  

  @media (max-width: 768px) {
    .home{
      flex-direction: column;
      padding: 0;
      align-items: center;
      margin-top: 35%;
      /* position: absolute; */
      bottom: 3rem;
      margin-left: 50%;
      transform: translateX(-50%);
    }
    .theone{
      width: auto;
      text-align: center;
    }
    .theone .fun{
      font-size: 4rem;
    }

    .thetwo{
      margin: 2rem 0 0 0;
      width: 10rem;
      height: 10rem;
    }
  }

  @media (max-width: 280px){
    .theone .fun{
      font-size: 2rem;
    }
    .theone{
      font-size: medium;
    }
    .thetwo{
      width: 5rem;
      height: 5rem;
    }
  }
  
</style>
