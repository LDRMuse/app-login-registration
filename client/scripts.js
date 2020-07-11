// console.log(document.querySelector('.screen-reader-text'))
// console.log(document.querySelectorAll('input'))

const users = []

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault() // we do not want default browser behavior

  // add new users to array
  const add2Users = {

    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    userName: document.getElementById('userName').value,
    password: document.getElementById('password').value

  }

  // check to see if user already exists
  const alreadyAUser = users.find(function (user) {
    return user.userName === add2Users.userName
  })

  // Add if userName does not exist
  if (!alreadyAUser) {
    users.push(add2Users)
    console.log(users)
  }
})
