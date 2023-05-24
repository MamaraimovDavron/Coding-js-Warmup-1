const nearHundred = (n) => {
    if((n >= 90 && n <= 110) || (n >= 190 && n <= 200)){
        return true;
        }
     else return false;
}

console.log(nearHundred(99));