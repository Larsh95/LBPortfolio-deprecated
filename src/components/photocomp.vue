<template>
<v-app>
    <router-view/>
         <kinesis-container>
            <kinesis-element :strength="10">
          
          
            <div class="MBG">

            

            </div>
  
            </kinesis-element>
             <kinesis-element id="content-kinesis">

              
       
        <div id="phBg">
            
        </div>
        <div id="infotextbox"><span id="infoText">This is the first photo for a competition, i have taken and edited. Which was a part of our first semester project. <br> I choose this specific photo, as it shows a cluster of mushrooms, which resembles how big cities looks.</span>
        </div>
          </kinesis-element>
                      </kinesis-container>
    
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
@media (min-width:1024px) {
  main {
  @include mixiColor(map-get($colorz, white));
  height: auto;
}
.v-content {
  object-fit: cover;
 padding-top: 50px;
 background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/167792/mountains_copy.jpg') no-repeat center center;  padding: 0;
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
    left:0;
    top:20%;
    position: fixed;
  }
#phBg {
    margin-top: -64px;
     display:flex;
    justify-content: center;
    align-content: center;
    margin: auto;
    height: 50vh;
    width: 75%;
    background: url(../assets/Mushroom.jpg) no-repeat;
    filter:grayscale(35%);
    background-size: cover;
    background-position: center;
}
    #infotextbox {
    width: 100%;
    border-top-color: gray;
    background-color: map-get($colorz, heda );
    height: 23vh;
    
    font-family: 'Segoe UI';
    font-weight: bold;
    @include mixiColor(map-get($colorz, heda));
    overflow: auto;
    text-align: center;
    text-overflow: ellipsis;
    align-items: baseline; 
    scrollbar-width: none;
    display:flex;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-bottom-color: gray;
    border-top-color: gray;
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
    font-size: 1.3em;
    width: 100vw;
    }
}



@media (max-width:1023px){
#phBg {
    margin-top: -56px;
    background-color: map-get($colorz, #cecece );
     display:flex;
    justify-content: center;
    align-content: center;
    margin: auto;
    height: 400px;
    width: 600px;
    background: url(../assets/Mushroom.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    background-position-x: -200px;
}
    #infotextbox {
    width: 100%;
    border-top-color: gray;
    background-color: map-get($colorz, heda );
    height: 23vh;
    font-family: 'Segoe UI';
    font-weight: bold;
    @include mixiColor(map-get($colorz, heda));
    overflow: auto;
    text-align: center;
    text-overflow: ellipsis;
    align-items: baseline; 
    scrollbar-width: none;
    display:flex;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-bottom-color: gray;
    border-top-color: gray;
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
    left:0;
    top:20%;
    position: fixed;
  }
}

 

</style>