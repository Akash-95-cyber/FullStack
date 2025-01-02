array = [10, 20, 30, 40, 50, "KEC", true]
console.log(array);
array.forEach((element, index) => {
    console.log("Index is",element,"and Element is",index)    
});

//Example 1
objtype1 = {
    "FirstName": "Jai",
    "LastName": "Akash",
    "Age": 19
}
console.log(objtype1)

objtype1.forEach((key, value) => {
    console.log(value)
});

for(key in objtype1){
    value = objtype1.key
    console.log(key, value)
}

var a = 10
console.log(a)
//async b = 20
console.log(b)

async function funName(){
    setTimeout:()=>{
    return "Hello"
    },2000
    console.log(await "Hello")
}
arrowfunName = async()=>{
    setTimeout:()=>{
    return "KEC"
    },2000
    console.log(await "KEC")
}
funName()
arrowfunName()

//*another method👆
async function funName(){
    console.log("Hello!")
}
arrowfunName = async()=>{
    console.log("KEC") 
}
funName()
arrowfunName()

async function funName(){
    return await "Hello"
}
console.log("KEC")

arrowfunName = async()=>{
    return await "KEC"
}
funName().then((a)=>{
    console.log(a)
})
console.log(arrowfunName())

function locationfinder(){
    train = 95
    return new Promise((trainArrived, train)=>{
        if(train == 7)
        {
            resolve("Train has Arrived")
        }
        else
        {
            reject("Train has been delayed")
        }
    })
}
locationfinder().then((resolvedMsg)=>{
    console.log(resolvedMsg)
}).catch(function(rejectedMsg){
    console.log(resolvedMsg)
})

//New
console.log(a);//OUTPUT: undefined
var a = 20;
console.log(a);//OUTPUT: 20

console.log(b);
const b = 3.14;
console.log(b);
//OUTPUT: ReferenceError: Cannot access 'b' before initialization

console.log(c);
let c = 4;
console.log(c);
//OUTPUT: ReferenceError: Cannot access 'c' before initialization

async function Fn1() {  //async await are indirect form of promises.
    setTimeout(()=>{
        console.log("Hello");
    },4000);
    return (await "Message 1");
}

arrFN = async () => {
    setTimeout(()=>{
        console.log("Hi");
    },2000);
    return (await "Message 2"); // with await, displays Promise { <pending> } ; without it { <'Message 2'> } 
}

Fn1().then((a)=>{  //to remove promise from displaying.
    console.log(a) //resolving promises.
})
console.log(arrFN())

function LocFind(){
    return new Promise((resolve,reject)=>{
        traffic_rate=50;
        if(traffic_rate<=50){
            resolve("Traffic is moderate.");
        }else{
            reject("Traffic is high");
        }
    })
}
LocFind().then((ResMsg)=>{
    console.log(ResMsg);
}).catch(function(RejMsg){
    console.log(RejMsg)
})