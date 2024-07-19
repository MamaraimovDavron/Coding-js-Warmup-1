function stringE(str) {
  let count = 0;

  if (str.includes("e")) {
    for (let i = 1; i <= str.length; i++) {
      if (str.slice(i - 1, i) === "e") {
        count += 1;
      }
    }
    if (count >= 1 && count <= 3) {
      return true;
    } else {
      return false;
    }
  } else return false;
}

console.log(stringE("heleel"));
