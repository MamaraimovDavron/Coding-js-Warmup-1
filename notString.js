const notString = (str) => {
    if(str === 'not'){
        return str;
      }
      
      else if(str){
        return "not " + str;
      }
      
      else if(str.match(/not/)){
        return str; 
      }
      
      else {
        return str;
      }
}

console.log(notString('is not'));