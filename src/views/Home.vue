<template>
    <v-app > 

          <kinesis-container>
            <kinesis-element :strength="4">
          <div id="bg">
            
      <div id="slider">
        My projects
            <v-carousel id="carousel"  contain style="max-width:100%; max-height:100%" hide-delimiter-background="true" hide-delimiters="true" show-arrows-on-hover >
              <v-carousel-item contain
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>
      </div>

      <div id="headlinebox"><h1 id="headline">Links to my works</h1></div>
      
 <div id="ullibox">
      <ul>
      <li class="div_one">   <router-link class="routerLink"  to="/minime"> <span id="infoboxlink1">MiniMe </span> <div class="div_bg">  </div>
                  </router-link></li> 

      <li class="div_two"><router-link class="routerLink"  to="/cv"><span id="infoboxlink"> CV </span><div class="div_bg">  </div>
                  </router-link></li>

      <li class="div_three"><router-link class="routerLink" to="/videoCV"><span id="infoboxlink"> Video CV </span><div class="div_bg">  </div>
                  </router-link></li>

      <li class="div_four"><router-link class="routerLink"  to="/infomercial"><span id="infoboxlink"> Infomercial </span><div class="div_bg">  </div>
                  </router-link></li>

      <li class="div_five"><router-link class="routerLink"  to="/photocomp"><span id="infoboxlink"> Photo Competition </span><div class="div_bg">  </div>
                  </router-link></li>
      </ul>
</div>
</div>
</kinesis-element>
 </kinesis-container>
    </v-app>
</template>
<script>
export default {

data: () => {
    return {
    items: [
        {
        src:  require('../assets/CvCard.svg'),
        },
        {
        src: require('../assets/Mushroom.jpg'),
        },
        {
        src: require('../assets/VideoCv.svg'),
        },
        {
        src: require('../assets/Minime4x1.svg'),
        },
        {
        src: require('../assets/Infomercial.svg'),
        },
    ],
    }
  },

}
</script>

<style lang="scss" scoped >
@media (min-width:1024px) {
  #bg {
width: 100%;
    width: 100vw;
    height: 140vh;
    transform: scale(1);
    z-index: 1;
    background-color: black;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/167792/mountains_copy.jpg') no-repeat center center;
    object-fit: cover;
     padding-top: 50px;
}

.v-content{
  object-fit: cover;
 padding-top: 50px;
 background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/167792/mountains_copy.jpg') no-repeat center center;
}

  #slider {
  text-align:center;
  color: #D9D9D9;
  font-size: 2.5em;
  font-family: 'Segoe UI';
  font-weight: bold;
  text-shadow: 1.4px 2.3px #7e7e7e;
  margin-top: -40px;
  margin-bottom: 20px;
  }

#headlinebox {
  text-align:center;
  font-family: 'Segoe UI';
  font-weight: bold;
  @include mixiColor(map-get($colorz, #D9D9D9));
  margin-bottom: 50px;  
  text-shadow: 1.4px 2.3px #7e7e7e;
}

#headline {
  text-align:center;
  @include mixiColor(map-get($colorz, #D9D9D9));
  font-size: 0em;

   font-family: 'Segoe UI';
    font-weight: bold;
  }
  
#ullibox {
  text-align: center;
  height: 650px;
}


#infoboxlink, #infoboxlink1 {
    text-align: center;
    @include mixiColor(map-get($colorz, #D9D9D9));
    font-size: 1.5em;
    font-family: 'Segoe UI';
    font-weight: bold;
    display:flex;
    justify-content: center;
    align-items:center;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 800;
    transform:  translateX(-50%) translateY(-50%) rotate(-45deg);
    background-color: #D9D9D9;
    width: 500px;
    height:50px;
    
}


 .div_one:hover  #infoboxlink1, .div_two:hover #infoboxlink, .div_three:hover #infoboxlink ,.div_four:hover #infoboxlink ,.div_five:hover #infoboxlink {
    opacity:0;
    height: 10px;
}

  ul{
    position: absolute;
    top: 72%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    width: 900px;
    height: 225px;
    
}

ul li {
    list-style: none;
    position: absolute;
    width: 300px;
    height: 300px;
    background: #000;
    transform: rotate(45deg);
    transition: .5s;
    margin: -150px;
    overflow:hidden;
    opacity: .5;
    transition: all .2s ease-in-out;
}

ul li:hover {
    opacity: 1;
    transform: scale(1.1) ;
     z-index: 1;
    filter: blur(0px);
}

.wrapper ul li.div_one {
  position: absolute;
  
}

ul li.div_one {
    top: 0;
    left: 0;
}

ul li.div_two {
    bottom: 0;
    left: 25%;
   
}

ul li.div_three {
    top: 0;
    left: 50%;
}

ul li.div_four {
    bottom: 0;
    left: 75%;
}

ul li.div_five {
    top: 0;
    left: 100%;
}

ul li .div_bg {
    width: 100%;
    height: 100%;
    transform: rotate(-10deg) scale(1.42);
    
}

ul li.div_one .div_bg {
    background: url(../assets/minime.svg) no-repeat;
    background-size: cover;
    background-position: center;
    transform: scale(0.9);
    filter:blur(3px);
    
}

ul li.div_two .div_bg {
    background: url(../assets/CvCard.svg) no-repeat;
    background-size: contain;
    background-position: center;
    transform: scale(2);
    
}

ul li.div_three .div_bg {
    background: url(../assets/VideoCv.svg) no-repeat;
    background-size: contain;
    background-position: center;
    transform: scale(2)
}

ul li.div_four .div_bg {
    background: url(../assets/Infomercial.svg) no-repeat;
    background-size: contain;
    background-position: center;
    // rotate: 10deg;
    transform: scale(2)
}

ul li.div_five .div_bg {
    background: url(../assets/Mushroom.jpg) no-repeat;
    background-size: contain;
    background-position: center;
    // rotate: 10deg;
    transform: scale(2  );
    filter: blur(0px)
}

}

@media (max-width:1023px) {
.v-application ul, .v-application ol {
  padding: 0;
}

  #bg {
    height:100%;
    transform: scale(1);
    z-index: 1;
    background-color: black;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/167792/mountains_copy.jpg') no-repeat center center;
    background-size: cover;
    
}



  #slider {
  text-align:center;
  @include mixiColor(map-get($colorz, primary));
  font-size: 0em;
  font-family: 'Segoe UI';
  font-weight: bold;
  text-shadow: 1.4px 2.3px #7e7e7e;
  margin-top: -70px;
  margin-bottom: 20px;
  width:100%;
  height:100%;
  
  }

#headlinebox {
  text-align:center;
  font-family: 'Segoe UI';
  font-weight: bold;
  background-color: #D9D9D9;
  margin-top: 50px;  
  text-shadow: 1.4px 2.3px #7e7e7e;
}

#headline {
  text-align:center;
  color: #D9D9D9;
  font-size: 2.5em;
   font-family: 'Segoe UI';
    font-weight: bold;
    margin-bottom: 20px
  }

  //ul li - 5 kasser nedad

#ullibox {
  text-align: center;
  
}
#infoboxlink1 {
    text-align: center;
    @include mixiColor(map-get($colorz, primary));
    font-size: 1em;
    font-family: 'Segoe UI';
    font-weight: bold;
    display:flex;
    justify-content: center;
    align-items:center;
    top: 50%;
    left: 50%;
    z-index: 800;
    background-color: #D9D9D9;
    width: 270px;
    height:50px;
    
}
#infoboxlink {
    text-align: center;
    @include mixiColor(map-get($colorz, primary));
    font-size: 1em;
    font-family: 'Segoe UI';
    font-weight: bold;
    display:flex;
    justify-content: center;
    align-items:center;
    margin-bottom: -15px;
    top: 50%;
    left: 50%;
    z-index: 800;
    background-color: #D9D9D9;
    width: 270px;
    height:50px;

    margin-top: 45px;
  }

ul li {
  list-style-type: none;
display:flex;
  justify-content: center;
  align-content: center;
}

ul li.div_one {
    width: 100%;
    height: 300px;
    
}

ul li.div_two {
    width: 100%;
    height: 300px;
}

ul li.div_three {
    width: 100%;
    height: 300px;
}

ul li.div_four {
    width: 100%;
    height: 300px;
}

ul li.div_five {
    width: 100%;
    height: 200px;
    padding-bottom: 50px;
}

ul li .div_bg {
    max-width: 100%;

    height: 100%;
    
}



ul li.div_one .div_bg {
    background: url(../assets/minime.svg) no-repeat;
    background-size: cover;
    background-position: center;

}

ul li.div_two .div_bg {
    background: url(../assets/CvCard.svg) no-repeat;
    background-size: contain;
    background-position: center;
    transform: scale(1.7);
}

ul li.div_three .div_bg {
    background: url(../assets/VideoCv.svg) no-repeat;
    background-size: contain;
    background-position: center;
    transform: scale(1.7);
}

ul li.div_four .div_bg {
    background: url(../assets/Infomercial.svg) no-repeat;
    background-size: contain;
    background-position: center;
    transform: scale(1.7);
}

ul li.div_five .div_bg {
    background: url(../assets/Mushroom.jpg) no-repeat;
    background-size: contain;
    background-position: center;
    transform: scale(1);
    filter: blur(0px)
}


  .v-image__image{
 background-size:100% 100%;
}
}



</style>