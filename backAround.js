let backAround = (str) => {
    return str.slice(str.length - 1) + str + str.slice(str.length - 1);
}

console.log(backAround('hello'));