function removeDuplicates(arr) {
  const newArray = [];
  arr.forEach((item) => {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
}

const numbers = [1, 1, 3, 4, 4, 5, 8, 3];

console.log(removeDuplicates(numbers));
