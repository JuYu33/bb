const myObj = {
  main: 123,
  temp: [50]
}

const newObj = {
  ...myObj,
  main: myObj.main + 99,
  temp: [...myObj.temp, this.main]
}

console.log(myObj.temp)
console.log(newObj.temp);
console.log(newObj)