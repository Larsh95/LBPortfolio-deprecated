<template>
  <v-app>
    <v-app-bar id="header"
      app
      color="heda"
      dark>
<v-spacer></v-spacer>
<div class="d-flex-shrink-1">
<router-link class="routerLink" to="/">
        <v-img
          alt="Name"
          class="dmt " 
          contain
          position
          min-height="100"
          min-width="100"
          src="./assets/Logo.svg"
          height="100"
          width="100"
          />
          </router-link>
      </div>
        <v-spacer></v-spacer>
        <div>
      <v-btn id="navbtn">
        |<router-link class="routerLink" to="/">Home | </router-link> |
        <router-link class="routerLink" to="/about">About</router-link>|
      </v-btn>
     </div>
    </v-app-bar>

    <v-content>
       <router-view/>
   
    </v-content>
    
    <footer>
      <h2>Contact me!</h2>
      <div id="social_media_footer">
        <i style="font-size: 1.7em;" class="fas fa-mobile"></i>
        <span>+45 31 57 16 67 </span>
        <v-spacer></v-spacer>
        <a href="https://www.linkedin.com/in/lars-pedersen-8282561a1/" target="_blank"><i style="font-size: 1.7em; color: white; background-color: #006097; background-size: 1.5em;" class="fab fa-linkedin"></i> 
        </a>
      </div>
    </footer>
  </v-app>
</template>


<script>
import Vue from 'vue'
import VueKinesis from 'vue-kinesis'
 
Vue.use(VueKinesis)
export default {
  name: 'App',

  components: {
  }
}

</script>

<style lang="scss">

@media (min-width: 1024px) {
// .v-content{
//  background-color: #181D26;
// }
// .v-app{
//  background-color: #181D26;
// }
.routerLink {
  text-decoration: none;
}

//skal ændres
#navbtn {
  background-color: white;
  margin-left: -125px;
  font-family: 'Segoe UI';
  font-weight: bold;
  font-size: 0.8em;
  
}

.d-flex-shrink-1 {
  margin-left: 6px;
  margin-right: -25px;
}

    footer {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: map-get($colorz, heda );
    text-align: center;
     font-size: 2em;
     text-align:center;
    font-family: 'Segoe UI';
    font-weight: bold;
  }
  #social_media_footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15%;
    margin-right: 25%;
    text-align:center;
    font-family: 'Segoe UI';
    font-weight: bold;

  }
  
  #social_media_footer a {
    color: white;
    margin-left: 20px;
    text-align: center;
  }
//   .MBG {
//     max-height:100%;
//     max-width: 100%;
//     width: 1920px;
//     height: 1080px;
//     transform: scale(1.1);
//     z-index: 1;
//     background-color: black;
//     background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/167792/mountains_copy.jpg') no-repeat center center;
//     background-size: contain;
    
// }

// .wrap {
//   height: 100%;  
//   position: relative;
//   overflow: hidden;
//   z-index: 1;
// }
}

@media (max-width: 1024PX) {
.v-content{
 background-color: #181D26;
}
  .routerLink {
  text-decoration: none;
}

//skal ændres
#navbtn {
  background-color: white;
  margin-left: -125px;
  font-family: 'Segoe UI';
  font-weight: bold;
  font-size: 0.8em;
}


.d-flex {
  margin-left: 25px;
  margin-right: -25px;
  
}
   footer {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: map-get($colorz, heda );
    text-align: center;
     font-size: 1.1em;
     text-align:center;
    font-family: 'Segoe UI';
    font-weight: bold;
    z-index: 900;
  }
  #social_media_footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10%;
    margin-top: 5%;
    margin-right: 10%;
    text-align:center;
    font-family: 'Segoe UI';
    font-weight: bold;
    margin-bottom: 0px;
    
}
  
  #social_media_footer a {
    color: #D9D9D9;
    margin-left: 20px;
    text-align: center;
  }
}

@media (max-width:600px) {
.d-flex-shrink-1{
  margin-left: 125px
}
  #navbtn {
  background-color: white;
  margin-left: -125px;
  font-family: 'Segoe UI';
  font-weight: bold;
  font-size: 0.8em;
  padding: 0px !important;
  margin-left: 25px;
  margin-right: 30px;
}

#navbtn .routerLink {
  font-size: 10px;
  
}
}
</style>