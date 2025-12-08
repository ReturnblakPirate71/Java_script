function user (name , id , passward){

  if (typeof passward === "string"){
    return `${name} and your userID : ${id} passward : ${passward}`
  }
  else{
    passward = String(passward)
    return user (name , id , passward)
  }
 


}

let arr = ['Rafi' , 242 , 132467]


console.log(user(...arr))