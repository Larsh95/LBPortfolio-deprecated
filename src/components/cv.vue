<template>
<v-app class="bgCv">
     <v-content>
       <router-view/>
  
          
        
        <div><iframe src="https://www.docdroid.net/akmQbCL/bcv-pdf" frameborder="0" height="900vh" width="100%"></iframe></div>
    </v-content>
  </v-app>
</template>

<script> 
export default {
  components: {
  }
}

</script>

<style lang="scss" scoped>
@media (min-width:600px) {
  main {
  @include mixiColor(map-get($colorz, white));
  height: auto;
}
.bgCv {
    margin-top: -64px;
    background-color: #cecece;
}
 #infotextbox {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-color: gray;
    background-color: map-get($colorz, heda );
    height: 10vh;
    }

#infoText{
    text-align:center;
    font-family: 'Segoe UI';
    font-weight: bold;
    @include mixiColor(map-get($colorz, secondary));
    }
 }

@media (max-width:600px){
    .bgCv {
    margin-top: -56px;
}
}
</style>