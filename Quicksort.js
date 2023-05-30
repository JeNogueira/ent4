function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr.splice(pivotIndex, 1)[0];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [4, 2, 1, 5, 3, 10, 89, 54, 87, 98, 6, 12, 11];
const sortedArr = quickSort(arr);

console.log("Array ordenado:", sortedArr);

module.exports = quickSort;