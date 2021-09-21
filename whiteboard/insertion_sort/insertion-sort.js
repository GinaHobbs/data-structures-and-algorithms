const arr = [8,4,23,42,16,15]

// Pseudocode
// InsertionSort(int[] arr)

//     FOR i = 1 to arr.length

//       int j <-- i - 1
//       int temp <-- arr[i]

//       WHILE j >= 0 AND temp < arr[j]
//         arr[j + 1] <-- arr[j]
//         j <-- j - 1

//       arr[j + 1] <-- temp

// Declare a function, insertionSort
// start at i = index 1 and iterate through the array
// assign a new variable, j, to one index before i, in the initial 
// case, 0.
// set a new variable, temp, to the array at i.
// while j greater than or equal to zero and the value of the array at i
// is less then the value at j, set j to move one spot to the left.
// set the array at j + 1 to temp.

function insertionSort() {
  for (let i=1; i < arr.length; i++) {
    let j = i - 1
    let temp = arr[i]

    while ((j>=0) && (temp < arr[j])) {
      arr[j + 1] = arr[j]
      j = j - 1
    }

    arr[j + 1] = temp
  }
  return arr
}
console.log(arr)
console.log(insertionSort())