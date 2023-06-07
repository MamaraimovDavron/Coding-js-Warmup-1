let endUp = (str) => {
    if(str.length >= 3){
        return str.slice(0, str.length - 3) + str.slice(str.length - 3, str.length).toUpperCase();
    }

    if(str.length < 3){
        return str.toUpperCase();
    }
}

console.log(endUp('Elloasda'));