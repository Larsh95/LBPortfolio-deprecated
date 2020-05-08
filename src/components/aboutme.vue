<template>


    
        <kinesis-container>
            <kinesis-element :strength="20">
          
          
            <div class="MBG">

            

            </div>
  
            </kinesis-element>
              <kinesis-element :strength="20" id="content-kinesis">
                      <h4>  Tesy</h4>
                  
                  <h4>  Tesy</h4>
                  
                  <h4>  Tesy</h4>
                  
                  <h4>  Tesy</h4>
                  
                  <h4>  Tesy</h4>
                  
                  <h4>  Tesy</h4>
                </kinesis-element>
                      </kinesis-container>
           
       

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
  #content-kinesis 
  {
    top:0;
    position: absolute;
  }
.MBG {
    height: 100vh;
    width:100vw;
  
    transform: scale(1.1);
    z-index: 1;
    background-color: black;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/167792/mountains_copy.jpg') no-repeat center center;
    background-size: contain;
}
}

@media (max-width:1024px){
.MBG {
    max-height:100%;
    max-width: 100%;
    width: 800px;
    height: 800px;
    background-color: black;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/167792/mountains_copy.jpg') no-repeat center center;
    background-size: contain;  
    display:flex;
    
}

.wrap {
  height: 100%;  
  position: relative;
  overflow: hidden;

}

}

</style>