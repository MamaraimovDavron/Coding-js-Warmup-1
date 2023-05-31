const notString = (str) => {
  if(str.startsWith('not')){
    return str;
  }

  else{
    return "not " + str;
  }
}

console.log(notString('is not'));