let in1020 = (a, b) => {
    if((a >= 10 && a <= 20) || (b <= 20 && b >= 10)){
        return true;
    }

    else{
        return false;
    }
}

console.log(in1020(10,30));