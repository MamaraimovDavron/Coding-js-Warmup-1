const makes10 = (a, b) => {
    if((a == 10 || b == 10) || (a + b == 10)){
        return true;
    }

    else{
        return false;
    }
}

console.log(makes10(1,0));