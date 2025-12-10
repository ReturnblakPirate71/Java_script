
// To keep the correct 'this' value after taking a function out of an object,
// we use call(), apply(), or bind() to explicitly set 'this'.


{

      let user = {

        Name : "Sakif",
        Id : "2021-3-60-292",
        Department : "CSE",
        Credit : "134",

        "Add Course" : function (){
          console.log(`Hello ${this.Name} you have only 6 credit left`);
          

        },

        "myinfo" : function(){
          console.log(`Name : ${this.Name}`);
          console.log(`Department : ${this.Department}`);
          
        }

      }

      

      let personalInfo = {
        "Father's name " : "Mizanur Rahaman",
        "Mother's name"  : "Shahida Begum",
        "Permanent Address" : "Badda Dhaka",

        

      }

      let PaymentDue = function(){
        console.log(`No dues ID ${this.Id}`);
        
      }

      let  Sent_Mail = function () {

          let msg = PaymentDue.bind(user)
          console.log (`Assalamualaikum your son`)
          user["myinfo"].apply(user)
          msg()
          
        console.log(`\n`);
        

          let msg1 = PaymentDue.bind(user2)
          console.log (`Assalamualaikum your son  `)
          user["myinfo"].apply(user2)
          msg1()
          
        }

     
      let user2 = {
        Name : "Shihab",
        Id : "2021-3-60-001",
        Department : "CSE",
        Credit : "123",

      }


   //let advising = user["Add Course"]
   //console.log(advising); output [Function: Add Course]

   // advising() output : Hello undefined you have only 6 credit left
   

  // user["Add Course"].call(user)
  //PaymentDue.call(user)
  //let  advising = user["Add Course"].bind(PaymentDue) 

  // // bind() requires an object as its argument 
  // so it can set the correct 'this' value not a function.

  let advising = PaymentDue.bind(user)
  let advising1 = PaymentDue.bind(user2)
  advising()
  advising1()

  Sent_Mail.call()
 

}