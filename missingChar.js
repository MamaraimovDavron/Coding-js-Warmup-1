let missingChar = (str,n) => {
    return str.slice(0,n) + str.slice(n + 1);
}

console.log(missingChar('kitten',3));