const user = {
        name : 'Rafi',
        id : '2021-3-60-292',
        email : 'rafialsakif92640@gmail.com',

        designation : 

        {
          comapany_name : 'Bur5nley',
          position : 'Software developer'

        }

}

console.log(user.designation.comapany_name)

const arrayOf_object = [
  {
    id : 123,
    name : 'kalia',
    fullname : {
      firstName : 'Hamim',
      surname : 'Pasha'
    }
  },

  {
    id : 456,
    name : 'kala',
    fullname : {
      firstName : 'Rizbee',
      surname : 'Pasha'
    }
  }
]

arrayOf_object.push({
  id : 456,
    name : 'Nala',
    fullname : {
      firstName : 'Anbir',
      surname : 'Pasha'
    }
})

console.log(Object.keys(arrayOf_object))
console.log(Object.values(arrayOf_object))


