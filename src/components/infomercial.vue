<template>
<v-app>
     <v-content>
       <router-view/>
        <div class="bgInf">
          <iframe id="bigboxYt" width="100%" height="750vh" src="https://www.youtube.com/embed/GbJ9W9IPUZM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div id="infotextbox"><span id="infoText">This is the first project I have done in a group, which I/we were very proud of. <br> I was the editor, and one of two animators. It made me realise how amazing editing and animating can be.</span>
        </div>
    </v-content>
  </v-app>
</template>


<script>
export default {
       
    }
</script>

<style lang="scss" scoped>

@media (min-width:600px) {
 .v-content__wrap {
   height: 100vh;
   background-color: #cecece;
 }
.bgInf {
    margin-top: -64px;
  }  
#bigboxYt{
  height: 93vh;
  width: 100%
}

 #infotextbox {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: map-get($colorz, heda );
    margin-top: -7px;
    background-color: map-get($colorz, heda );
    height: 15vh;
    border-style: solid;
    border-bottom-color: gray;
    border-top-color: gray;
    }

#infoText{
    text-align:center;
    font-family: 'Segoe UI';
    font-weight: bold;
    font-size: 1.3em;
    @include mixiColor(map-get($colorz, secondary));
    height: 30px;
    margin-bottom: 20px
    }

}
@media (max-width:600px){
    .bgInf {
    margin-top: -56px;
}
  #bigboxYt{
  height: 100vh;
  width: 100%
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
    padding-top: 15px;
    }
}

</style>