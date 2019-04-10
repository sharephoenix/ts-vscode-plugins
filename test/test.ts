
interface User {
  name?: string
  age: string
  address: string
}

class Fix {

  user: User

  constructor(params: User) {
    this.user = params
  }
}

let user = {age: '11', address: 'shanghai'}

let fixg = new Fix(user)
console.log(JSON.stringify(fixg.user))

