
console.log('Inside the 1st scope......');

{
  let popularTeas = ["green tea", "oolong tea", "chai"];
  let softCopyTeas = popularTeas;
  //popularTeas.pop();
  softCopyTeas.pop()
  
  console.log(popularTeas);
  console.log(softCopyTeas);
}

 
//didn’t copy the array—only the reference
// —so both variables pointed to the same array and changes affected both.

console.log('Inside the 2nd scope......');


{
  let popularTeas = ["green tea", "oolong tea", "chai"];
  let softCopyTeas = [...popularTeas];
  
  softCopyTeas.pop()
  console.log(popularTeas);     // unchanged
  console.log(softCopyTeas);    // changed
  
}
//Spread operator creates a shallow copy of the array 
// — a new array with the same elements

console.log('Inside the 3rd scope......');

{
  let popularTeas = ["green tea", "oolong tea", "chai"];
  let softCopyTeas = Array.from(popularTeas); // shallow copy
  
  softCopyTeas.pop()
  console.log(popularTeas);     // unchanged
  console.log(softCopyTeas);    // changed
  
}