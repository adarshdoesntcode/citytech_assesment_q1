// CITYTECH INTERNSHIP ASSESMENT QUESTION 1

const array = [2, 3, 8, 6, 1];

const countInversions = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }
  return count;
};

console.log("Total inversions:", countInversions(array));
