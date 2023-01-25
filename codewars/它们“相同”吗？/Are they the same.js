function comp(array1, array2) {
    let index
    if (array1 == null || array2 == null) {
        return false
    }
    if (array1.length == 0 && array2.length == 0) {
        return true
    }
    if (array1.length > 0 && array2.length > 0) {
        for (let i = 0; i < array1.length;) {
            for (let j = 0; j < array2.length; j++) {
                index = array2.indexOf(Math.pow(array1[i], 2))
                if (index !== -1) {
                    array1.splice(i, 1)
                    array2.splice(index, 1)
                } else {
                    return false
                }
                if (array1.length==0 && array2.length==0) {
                    return true
                }
            }
        }
    }
}
console.log(comp([],null))
// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11]  ,[121, 14641, 20736, 361, 25921, 361, 20736, 361]))