// Given an array of integers your solution should find the smallest integer. 

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let sorted = args.sort((a, b) => a - b);
    return sorted[0];
  }
}

// Refactored version:

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return args.sort((a, b) => a - b)[0];
//   }
// }
