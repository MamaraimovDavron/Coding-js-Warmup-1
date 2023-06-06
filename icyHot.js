let icyHot = (temp1, temp2) => {
    if((temp1 <= 0 && temp2 > 100) || (temp1 > 100 && temp2 <= 0)) {
        return true;
    }

    else{
        return false;
    }
}

console.log(icyHot(120,15));