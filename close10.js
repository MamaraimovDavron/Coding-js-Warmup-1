let close10 = (a, b) => {
    if(Math.abs(a - 10) > Math.abs(b - 10)){
        return b
    }

    if(Math.abs(a - 10) < Math.abs(b - 10)){
        return a
    }

    if(Math.abs(a - 10) == Math.abs(b - 10)){
        return 0
    }
}

console.log(close10(8,12));