// console.log(document.querySelector('.screen-reader-text'))
// console.log(document.querySelectorAll('input'))

const users = []

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault() // we do not want default browser behavior

  // add new users to array
  const add2Users = {}

  add2Users.firstName = document.getElementById('firstName').value
  add2Users.lastName = document.getElementById('lastName').value
  add2Users.email = document.getElementById('email').value
  add2Users.phone = document.getElementById('phone').value
  add2Users.userName = document.getElementById('userName').value
  add2Users.password = document.getElementById('password').value

  // check to see if user already exists
  const alreadyAUser = users.find(function (user) {
    return user.userName === add2Users.userName && user.password === add2Users.password
  })

  // Add if userName does not exist
  if (!alreadyAUser) {
    users.push(add2Users)
    console.log(users)
  }
})
