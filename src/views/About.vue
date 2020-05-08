<template>
<v-app id="about" class="container_prev">
 <div id="about_container" class="container_width">
                <div id="about_left">
                    <div id="about_left_container">
                        <p id="text_about1">
                            Hello !
                            <br><br>
                            My name is Lars Pedersen. I am currently studying at EASV in Esbjerg as a <strong> MultiMedia Designer. </strong> <sup></sup> 
                            <br><br>
                            Following this Education, I intend to continue my studies towards a school of audio-visual/webdesign/VR creations,
                            and possibly more specifically in the field of production. 
                            <br> <br>
                            I put my CV at your disposal. You are free to check out my creations in the home-tab.  
                        </p>
                    </div>
                </div>
                
                <div id="about_right">
                    <p id="text_about">
                         Hello !
                            <br><br>
                            My name is Lars Pedersen. I am currently studying at EASV in Esbjerg as a <strong> MultiMedia Designer. </strong> <sup></sup> 
                            <br><br>
                            Following this Education, I intend to continue my studies towards a school of audio-visual/webdesign/VR creations,
                            and possibly more specifically in the field of production. 
                            <br> <br>
                            I put my CV at your disposal. You are free to check out my creations in the home-tab.  
                        </p>
                    
                </div>
            </div>
          


           
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
@media (min-width:1025px) {

#about {
    width: 100%;
    height: 800px;
    overflow: hidden;
    background-color: #181D26;
}
#about_container {
    height: 100%;
    height: 100vh;
    width: 100vw;
    display: flex;
}
#about_left {
    width: 55%;
    height: 100%;
    background-image: url(../assets/Me.png);
    background-position: -300px -185px;
    background-size: cover;
    background-repeat: no-repeat;
    clip-path: polygon(0 0, 72% 0, 78% 100%, 0% 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    margin-top: 3%;
    filter:grayscale(100%);
}

#about_left_container {
    display: none;
}

#about_right {
    width: 45%;
    width: 55vw;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: -15%;
    margin-right:50px;
}

#text_about {
    margin: 350px 50px 0px 50px;
    color: #D9D9D9;
    width: 25vw;
    height: 25vh;
}

}


@media (max-width:1024px){


#about_left {
   width: 100%;
   height: 100%;
   height: 1024px;
clip-path: none;
background-position: center;
background-position-x: -1050px;
background-image: url(../assets/Me.png);
filter:grayscale(100%);
}

#about_left_container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #D9D9D9;
    background-color: rgba(0, 0, 0, 0.5);
}
#about_left_container p {
    width: 70%;
}
#text_about1{
    margin: 0px 10px 0px 10px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: white;
    text-align: left;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#text_about {
    display: none;
}

}

</style>