let lastDigit = (a, b, c) => {
    if(a % 10 == b % 10 || a % 10 == c % 10 || b % 10 == c % 10){
        return true;
    }

    else{
        return false;
    }
}


console.log(lastDigit(10,123,33));