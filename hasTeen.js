let hasTeen = (a, b, c) => {
    if((a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19)){
        return true;
    }
    else{
        return false;
    }
}

console.log(hasTeen(10,15,20));