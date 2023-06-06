let front22 = (str) => {
    let word = str.slice(0,2);
    return word + str + word;
}

console.log(front22('kitten'));