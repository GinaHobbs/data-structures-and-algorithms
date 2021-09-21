// ALGORITHM Mergesort(arr)
// // n is the length of the array
//     DECLARE n <-- arr.length
// // if n is greater than 1
//     if n > 1
//     // mid is equal to n divided by 2
//       DECLARE mid <-- n/2
//     // left is equal to the array from index 0 to mid
//       DECLARE left <-- arr[0...mid]
//     // right is equal to the array from index mid to n
//       DECLARE right <-- arr[mid...n]
//       // sort the left side
//       Mergesort(left)
//       // sort the right side
//       Mergesort(right)
//       // merge the sorted left and right sides together
//       Merge(left, right, arr)

// ALGORITHM Merge(left, right, arr)
// // i is equal to 0
//     DECLARE i <-- 0
// // j is equal to 0
//     DECLARE j <-- 0
// // k is equal to 0
//     DECLARE k <-- 0

//     // while i is less than the length of the left array and j is less
//     // than the length of the right array
//     while i < left.length && j < right.length
//     // if left at index i is less than or equal to the right at index j
//         if left[i] <= right[j]
//         // assign the left at index i to the array at k
//             arr[k] <-- left[i]
//         // assign i the index of i + 1
//             i <-- i + 1
//         // otherwise...
//         else
//         // assign the array at index k the value of the array right at
//         // index k
//             arr[k] <-- right[j]
//         // assign j the index of j + 1
//             j <-- j + 1
//         // assign k the index of k + 1
//         k <-- k + 1
//     // if index i is equal to the length of the array left
//     if i = left.length
//     //  copy the values in the array to the right array
//        set remaining entries in arr to remaining values in right
//     // otherwise...
//     else
//     // copy the value in the array to the left array
//        set remaining entries in arr to remaining values in left

let arr = [8,4,23,42,16,15]

function Mergesort(arr) {
  let n = arr.length

  if (n > 1) {
    let mid = n/2
    let left = []
    let right = []
    for (i = 0; i <= mid; i++) {
      left[i] = arr[i];
    }
    for (j = mid; j <= n; j++) {
      right[j] = arr[j];
    }
    // sort the left side
    Mergesort(left)
    // sort the right side
    Mergesort(right)
    // merge the sorted left and right sides together
    Merge(left, right, arr)
  }
  return arr
}
   
function Merge(left, right, arr) {
  let i = 0
  let j = 0
  let k = 0

  while ((i < length.length) && (j < right.length)) {
    if (left[i] <= right[j]){
      arr[k] = left[i]
      i = i + 1
    }
    else {
      arr[k] = right[j]
      j = j + 1
    }
    k = k + 1
  }
  if (i = left.length) {
// set remaining entries in arr to remaining values in right
  }
  else {
// set remaining entries in arr to remaining values in left
  }
}

console.log(Mergesort(arr))