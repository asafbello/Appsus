// 25. Write a function that prints the multiplication table
// 25. Write a function that prints the multiplication table





var num = 0
for (var i = 0; i < 11; i++) {
    num = i
    multiplication(i);

}

function multiplication(num) {
    var str = ''
    for (var i = 1; i < 11; i++) {

        str = (str + '\t' + num * i)
    }
    console.log(str);
}




