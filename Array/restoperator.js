function collect (...numbers){
  console.log(numbers)
}

collect(1,2,3,4)

const [first ,second,...others] = [1 ,2 ,3 , 4]
console.log(first)
console.log(second)
console.log(others)
 