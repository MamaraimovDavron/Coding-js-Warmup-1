let startHi = (str) => {
    if(str.slice(0,2) == 'hi'){
        return true;
    }

    else{
        return false;
    }
}

console.log(startHi('hi hey'));