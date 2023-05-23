const monkeyTrouble = (aSmile, bSmile) => {
    if((aSmile && bSmile) || (!aSmile && !bSmile)){
        return true;
    }

    else{
        return false;
    }
}

console.log(monkeyTrouble());