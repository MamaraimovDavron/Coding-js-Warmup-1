let startOz = (str) => {
    if(str.slice(0,1) == 'o' && str.slice(1,2) == 'z'){
        return 'oz'
    }

    if(str.slice(0,1) == 'o') {
        return 'o'
    }

    if(str.slice(1,2) == 'z'){
        return 'z'
    }

    else {
        return ''
    }
}

console.log(startOz('oxs'));