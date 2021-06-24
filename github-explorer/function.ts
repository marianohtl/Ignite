type User = {
  name:string,
  email:string,
  address:{
      city:string,
      state?:string
}
}

function showWelcomeMessage(user: User){
  return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}`;
}

// showWelcomeMessage('random');

const message = showWelcomeMessage({
  name:'Nana Niaw',
  email:'nana@email.com',
  address:{
    city:'Random',
    state:'RD'
  }
}); //retorno será string, ou seja, a variável será uma string

