let front3 = (str) => {
    if(str.substring(0,3)){
        return str.substring(0,3) + str.substring(0,3) + str.substring(0,3);
    }
    else{
        return str;
    }
}

console.log(front3('Java'));