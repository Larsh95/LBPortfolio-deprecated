<template>
<v-app class="bgVcv" >
     <v-content>
       <router-view/>
        <div class="bgVcv">
            <iframe id="bigboxYt" width="100%" height="750vh" src="https://www.youtube.com/embed/aU8kt_SlR44" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div id="infotextbox"><span id="infoText">Above is a short video about me and what makes myself as a multimedia designer.</span></div>

        
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  }
}
</script>

<style lang="scss" scoped >
@media (min-width:600px) {
  main {
  @include mixiColor(map-get($colorz, white));
  height: auto;
}
#bigboxYt{
  height: 100vh;
  width: 100%
}
.bgVcv {
    margin-top: -64px;
    background-color: map-get($colorz, #cecece );
}
 #infotextbox {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: map-get($colorz, heda );
    margin-top: -7px;
    background-color: map-get($colorz, heda );
    height: 10vh;
    border-style: solid;
    border-bottom-color: gray;
    border-top-color: gray;
    }

#infoText{
    text-align:center;
    font-family: 'Segoe UI';
    font-weight: bold;
    @include mixiColor(map-get($colorz, secondary));
    height: 30px;
    font-size: 1.3em;
    }

}



@media (max-width:600px){
  #bigboxYt{
  height: 100vh;
  width: 100%
}
    .bgVcv {
    margin-top: -56px;
}
 #infotextbox {
    width: 100%;
    border-top-color: gray;
    background-color: map-get($colorz, heda );
    height: 23vh;
        font-family: 'Segoe UI';
    font-weight: bold;
    @include mixiColor(map-get($colorz, secondary));
    overflow: auto;
    text-align: center;
    text-overflow: ellipsis;
    align-items: baseline; 
    scrollbar-width: none;
    display:flex;
    justify-content: center;
    align-items: center;
    }

#infoText{
    font-family: 'Segoe UI';
    font-weight: bold;
    @include mixiColor(map-get($colorz, secondary));
    overflow: auto;
    text-align: center;
    text-overflow: ellipsis;
    align-items: baseline; 
    scrollbar-width: none;
    display:flex;
    justify-content: center;
    align-items: center;
    
    }
}

</style>