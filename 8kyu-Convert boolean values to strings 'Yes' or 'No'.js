// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// my original solution
function boolToWord( bool ){
  if (bool === true) {
    return 'Yes';
  } else {
    return 'No';
  }
}

// refactored solution:

// function boolToWord( bool ){
//   if (bool) return 'Yes';
//   else return 'No';
// }
