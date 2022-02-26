function trim() {
    let name = '  Ashis Bisoi   '
    console.log('Trimmed name is: ',name.trim())
}

function changetoLowerCase() {
    let name = 'AsHis BiSOi'
    console.log('Name in lowercase is: ',name.toLowerCase())
}

function changeToUpperCase() {
    let name = 'ashis bisoi'
    console.log('Name in uppercase is: ',name.toUpperCase())
}

module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changeToUpperCase = changeToUpperCase