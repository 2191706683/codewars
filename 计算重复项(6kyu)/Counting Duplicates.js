function duplicateCount(text) {
    let temp = []
    let arr = text.toLowerCase().split('')
    for (var i = 0; i < text.length; i++) {
        for (var j = i + 1; j < text.length; j++) {
            if (arr[i] == arr[j] && temp.indexOf(arr[i]) == -1) {
                temp.push(arr[i])
            }
        }
    }
    return temp.length
}
console.log(duplicateCount('ABBA'))