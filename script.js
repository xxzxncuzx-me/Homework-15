const arr = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    for (let i = 0; i < array.length; i++)
      if (array[i] === item) {
        array.splice(i, 1);
      }  
    return array;
}

const result = removeElement(arr, 3)
console.log(result);


