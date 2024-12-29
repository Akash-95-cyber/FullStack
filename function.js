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
