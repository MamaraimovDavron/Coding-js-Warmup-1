let in3050 = (a, b) => {
    if((a >= 30 && a <= 40) && (b >= 30 && b <= 40)){
        return true;
    }

    if((a >= 40 && a <= 50) && (b >= 40 && b <= 50)){
        return true;
    }

    else{
        return false;
    }
}

console.log(in3050(12,41));