// Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
  let string = '';
  if (b) {
    string = 'true';
  } else {
    string = 'false';
  }
  return string;
}

// refactored version:

// function booleanToString(b){
//   return b ? 'true' : 'false';
// }
