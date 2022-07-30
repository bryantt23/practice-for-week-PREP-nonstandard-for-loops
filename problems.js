function oddIndices(arr) {
  let res = [];
  const n = arr.length;
  for (let i = 1; i < n; i += 2) {
    res.push(arr[i]);
  }
  return res;
  // Return an array containing all the odd indices in the array
  // Your code here
}

function oddReverse(arr) {
  // Return an array containing all the odd indices starting from the end
  // Your code here
  let res = [];
  const n = arr.length;
  const last = n % 2 == 0 ? n - 1 : n - 2;
  for (let i = last; i >= 0; i -= 2) {
    res.push(arr[i]);
  }
  return res;
}

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  // Your code here
  const len = arr.length;
  let i = 0;
  let res = [];
  let power = 0;
  while (true) {
    power = Number(Math.pow(2, i++));
    if (power >= len) break;
    res.push(arr[power]);
  }
  return res;
}

function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  // Your code here
  const len = arr.length;
  let i = 0;
  let res = [];
  let power = Number(Math.pow(n, i++));
  while (power < len) {
    res.push(arr[power]);
    power = Number(Math.pow(n, i++));
  }
  return res;
}

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  // Your code here
  const n = arr.length;
  return arr.slice(0, Math.ceil(n / 2));
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  // Your code here
  const n = arr.length;
  return arr.slice(Math.ceil(n / 2));
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf
};
