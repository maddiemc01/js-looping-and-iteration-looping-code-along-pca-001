// Code your solutions in this file
//const names = ["Ada", "Brendan", "Ali"]
//const type = "birthday"
function writeCards(names, type) {
  let thankYous = []
  for (let i = 0; i < names.length; i++) {
    thankYous.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`)
  }
  return thankYous
}

function countDown( startingNumber ) {
  while ( startingNumber > 0 ) {
    console.log( startingNumber );
    startingNumber -= 1;
  }
  console.log( startingNumber );
}