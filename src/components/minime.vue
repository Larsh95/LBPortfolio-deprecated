<template>
<v-app class="bgMinime">
     <v-content>
         
       <router-view/>
       <kinesis-container>
            <kinesis-element :strength="10">
          
          
            <div class="MBG">

            

            </div>
  
            </kinesis-element>
              <kinesis-element id="content-kinesis">
                    
                
           
        <div id="mmBg">
            
        </div>
        <div id="infotextbox"><span id="infoText">This is my first "handdrawn Minime" figure, which we had to create for our first semester project. <br> I choose to do it a bit out of the ordinary, since it reflects to my humor.</span>
        </div>
        </kinesis-element>
                      </kinesis-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@media (min-width:1024px) {
  main {
  @include mixiColor(map-get($colorz, white));
  height: auto;
}
  .MBG {
    width: 100%;
    width: 100vw;
    height: 100vh;
    transform: scale(1);
    z-index: 1;
    background-color: black;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/167792/mountains_copy.jpg') no-repeat center center;
    background-size: cover;
}
  #content-kinesis 
  {
    top:0;
    position: absolute;
  }

.bgMinime {
    margin-top: -64px;
    // background-color: #cecece;
}
 #infotextbox {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-color: gray;
    background-color: map-get($colorz, heda );
    height: 13vh;
    
    width: 100vw;
    }

#infoText{
    text-align:center;
    font-family: 'Segoe UI';
    font-weight: bold;
    font-size: 1.3em;
    @include mixiColor(map-get($colorz, secondary));
    }
#mmBg {
    display:flex;
    justify-content: center;
    align-content: center;
    margin: auto;
    height: 600px;
    width: 600px;
    background: url(../assets/minime.svg) no-repeat;
    background-size: cover;
    background-position: center;
    }
}
@media (max-width:1023px){
    .bgMinime {
    margin-top: -150px;
    background-color: #cecece;
}
  .MBG {
    width: 100%;
    width: 100vw;
    height: 100vh;
    transform: scale(1);
    z-index: 1;
    background-color: black;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/167792/mountains_copy.jpg') no-repeat center center;
    object-fit: cover;
}
  #content-kinesis 
  {
    top:0;
    position: absolute;
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

    #mmBg {
    display:flex;
    justify-content: center;
    align-content: center;
    margin: auto;
    height: 600px;
    width: 400px;
    background: url(../assets/minime.svg) no-repeat;
    background-size: cover;
    background-position: center;
    
    }
}

</style>