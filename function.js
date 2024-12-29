ArrowFunction
arrowfun = (StudentsDept) =>{
    console.log(StudentsDept)
}
arrowfun(["AIML", "CSE", "IT"])

arrowfunc = (StudentsDept) => {
    return StudentsDept[0];
}
console.log(arrowfunc = ['AIML, CSE, IT', "AIML, CSE, IT"]);

arrowfun = () =>{
    console.log("Hello, KEC!")
}
arrowfun()

StudentList = ["Tom", "Cruise", "Holland", "Tony", "Stark", "Robert", "Downey", "jr"]
NewStudent = ["Kavin", "Akash", "Dinesh"]
CombinedStudentList = [...StudentList, ...NewStudent]
console.log(CombinedStudentList)

//Destructuring Operator
var marks = [90, 95, 98]
var [m1,m2,m3] = marks
console.log(m1,m2,m3)

//Ternary Operator
a = 95
out = (a%2==0)?"Even":"Odd"
console.log(a,"is",out)

//Spread Operator
arr1 = [10,20,30]
arr2 = [...arr1, 95, 98]
console.log(arr2)

databaseSharing = () =>(
    console.log("Data Stored Sucessfuly")
)
function submitForm(formMsg, dbs){
    setTimeout(()=>{
    dbs();
    console.log(formMsg)
    },2000)
}
submitForm("Form Submitted Sucessfully", databaseSharing)


