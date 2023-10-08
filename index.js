function hasTargetSum(array, target) {
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
  Time complexity: O(n), where n is the number of elements in the input array.
  Space complexity: O(n), where n is the number of elements in the input array.
*/

/* 
  Add your pseudocode here
  1. Initialize an empty set called 'visited'.
  2. For each number 'num' in the 'array':
     - Calculate the difference 'diff' as 'target - num'.
     - If 'diff' is in the 'visited' set, return true (pair found).
     - Add 'num' to the 'visited' set.
  3. If no pair is found, return false.
*/

/*
  Add written explanation of your solution here
  The hasTargetSum function uses a set to keep track of visited numbers. 
  It iterates through the given array of numbers and for each number, 
  it calculates the difference between the target and the current number. 
  If this difference is already in the visited set, it means we have found a pair that adds up to the target, and we return true. 
  If no such pair is found after traversing the array, we return false.
*/function hasTargetSum(array, target) {
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
  Time complexity: O(n), where n is the number of elements in the input array.
  Space complexity: O(n), where n is the number of elements in the input array.
*/

/* 
  Add your pseudocode here
  1. Initialize an empty set called 'visited'.
  2. For each number 'num' in the 'array':
     - Calculate the difference 'diff' as 'target - num'.
     - If 'diff' is in the 'visited' set, return true (pair found).
     - Add 'num' to the 'visited' set.
  3. If no pair is found, return false.
*/

/*
  Add written explanation of your solution here
  The hasTargetSum function uses a set to keep track of visited numbers. 
  It iterates through the given array of numbers and for each number, 
  it calculates the difference between the target and the current number. 
  If this difference is already in the visited set, it means we have found a pair that adds up to the target, and we return true. 
  If no such pair is found after traversing the array, we return false.
*/


if (require.main === module) {
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;



