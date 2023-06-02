const frontBack = (str) => {
    let first = str.slice(0,1);
    let last = str.slice(str.length - 1);
    if(str.length == 1){
        return str;
    }

    else{
        return last + str.slice(1,str.length - 1) + first;
    }
}
console.log(frontBack('code'));