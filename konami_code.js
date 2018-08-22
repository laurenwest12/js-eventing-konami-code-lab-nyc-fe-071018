const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//up up down down left right left right e a

//We have an array of keycodes (event.which)
//We want to add an event listener somewhere so that when we press this, something happens
//We need to keep track of where we are in the combo

function init() {
  //tracker keeps track of where we are in an array
  let tracker = 0
  // Write your JavaScript code inside the init() function
  const body = document.querySelector('body')
  body.addEventListener('keydown', (event) => {
    if (event.which === code[tracker]){
      console.log('Success!')
      tracker++;
      if (tracker === code.length){
        alert('You found it!')
      }
    } else {
      console.log('Failure')
      tracker = 0
    }
  })
}

init()