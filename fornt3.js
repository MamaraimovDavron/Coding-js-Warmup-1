let front3 = (str) => {
  if (str.length <= 3) {
    return str + str + str;
  } else {
    return str.slice(0, 3) + str.slice(0, 3) + str.slice(0, 3);
  }
}

console.log(front3('Java'));
