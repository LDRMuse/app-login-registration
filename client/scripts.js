console.log(document.querySelector('.screen-reader-text'))
console.log(document.querySelectorAll('input'))

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault() // we do not want default browser behavior

  console.log('YOOO')
})

const x = 3
// gives back undefined primitive data type
console.log(x.happy)
