// let fruite= 'apple'
// let obj={
//     [fruite + 'computer']: true
// }
// console.log(obj);

// let fruite =[1,2,3,4,5]
// let obj={
//     [fruite]: true
// }
// console.log(obj);


// let user={
//     name:'rahul',
//     age:24
// } 

// console.log("age" in user);

//-------------------for in loop

// let user={
//     name:'grishma',
//     age:24,
//     isAdmin:true
// }
// for(let key in user){
//     console.log( key, user[key]);
// }

// let salaries ={
//     john:100,
//     ann:160,
//     peter:130
// }
// let sum = 0;
// for(let key in salaries){
//     sum+=salaries[key]
// }

// console.log(sum);
// // for(let i =0; i<=10;i++ ){
// //     console.log();
  
// // }

// let menu={
//     width:200,
//     height:300,
//     title:'my menu'
// }
// console.log(menu);
// for(let key in menu){
//     if(typeof menu[key]==='number'){
//         menu[key]=menu[key]*2
         
//     }
    
// }
// console.log(menu);



// //----------------------------object refrencing and copying
// let message="hello"
// phrase = message+"world"
// console.log(message);
// console.log(phrase);

// let use ={
// name:"rahul"
// }
// admin= use
// console.log(use);
// console.log(admin);
// admin.name='pooja'
// console.log(use,"use");
// console.log(admin,"admin");
// console.log(admin===use);


// let us={name:'Rahul'}
// let admin={name:'grishma'}
// admin.name='dipti'
// console.log(us);
// console.log(admin);
// console.log(admin===user);


// let user ={
//     name:'rahul',
//     age:23,
//     isHappy:true

// }
// let duplicate={}
// for(let key in user){
//     duplicate[key]=user[key]
// }
// Object.assign(duplicate,user)

// duplicate.isHappy=false  //to show that duplicate is independent
// console.log(user);
// console.log(duplicate);

//-------------spread oprators
let user={
    name:'grishma',
    age:23,
}
let clone={...user}
clone.lastName='bansod'
console.log(user);
console.log(clone);


let arr1=[0,1,2]
let arr2=[3,4,5]
let arr3=[...arr1, ...arr2]
console.log(arr3);

let obj1={name:'grisjma', x:13}
let obj2={name:'sayali', x:23}
let obj3={...obj1, ...obj2}
console.log(obj3);