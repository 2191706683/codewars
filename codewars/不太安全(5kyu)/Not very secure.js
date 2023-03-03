function alphanumeric(string) {
    const reg = new RegExp(/[\W_]/g)
    if (string.length === 0 || reg.test(string)) {
        return false
    } else {
        return true
    }
}
console.log(alphanumeric(""))