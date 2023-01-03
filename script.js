const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = array.filter(function (el) {
    return el !== 5
})

console.log(removeElement)
