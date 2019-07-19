<template>
  <div>

    <div id='plus'>
      <h3 style="display:inline-block">C++ Function Plus:</h3>
      <input type="text" v-model='input1' ref='input1'>+
      <input type="text" v-model='input2' ref='input2'>=
      <input type="text" ref='input3'>
      <button type="button" @click="plus">计算</button>
    </div>


  </div>
</template>

<script>
export default {
  name: 'Test',
  mounted(){
  },
  created() {
     try {
        // Call *.dll with ffi
        let ffi = require('ffi');
        let path = require('path');
        let libpath = path.join(__dirname, '/dll/MyDLL.dll');
        // Create funtions
        window.Dll = ffi.Library(libpath, {
          'Add': ['float', ['float', 'float']],
        })
        console.log('fii.Library result:',Dll);
      } catch (error) {
        console.error('ffi.Library', error);
      }
  },
  data() {
    return {
      input1: '1',
      input2: '2',
    }
  },
  methods: {
    plus( ) {
     
        let a = Number(this.$refs.input1.value), b= Number(this.$refs.input2.value);
        // Call C++ function Add
        let sum = Dll.Add(a, b);
        console.log(`${a}+${b}=${sum}`);
        this.$refs.input3.value = sum;      
    },
  },
}
</script>

<style scoped>
#hello,#str-length{
    color: #ff0000;
}
#plus>input{
    width: 150px;
}
</style>


