let loneTeen = (a , b) => {
    if((a >= 13 && a <= 19) && (b >= 13 && b <= 19)){
        return false;
    }
    if(a == b){
        return false;
    }

    else return true;
}

console.log(loneTeen(21,19));