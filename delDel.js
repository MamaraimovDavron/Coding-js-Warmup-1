let delDel = (str) => {
    if(str.slice(1,4) == 'del'){
        return str.slice(0, 1) + str.slice(4, str.length);
    }

    else{
        return str;
    }
}

console.log(delDel('adelasd'));