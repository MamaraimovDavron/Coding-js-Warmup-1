const posNeg = (a, b, negative) => {
    if((negative) && (a < 0 && b < 0)){
        return true;
    }

    else if(((a < 0 && b > 0) || (a > 0 && b < 0)) && (!negative)){
        return true;
    }

    else return false;
}

console.log(posNeg(-1,-2,true));