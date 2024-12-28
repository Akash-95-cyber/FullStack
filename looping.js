array = [10, 20, 30, 40, 50, "KEC", true]
console.log(array);

for(var a in array)
{
    console.log(a);
}

for(var b in array)
{
    console.log(array[b]);
}

var var1 = 10
var var2 = 20
var sum = var1+var2
console.log(sum)

var rel1 = 25
var rel2 = "25"
if (rel1 == rel2)
{
    console.log("Both the values are not same so it's printing true.");
    console.log(rel1 === rel2);
}