/*var fruits = ["mango","orange","grapes",11];
console.log(fruits.length);
fruits[4]="pineapple";
fruits.push("xyx");
fruits.pop();
fruits.shift();
fruits.unshift("added");
console.log(fruits);
*/
/*var person = [
    {name:"tiya",
     place:"koratty",
     age:10
    },
    {name:"maya",
     place:"tvm",
     age:20}
];
console.log(`${person[0].name} lives in ${person[0].place}`);
console.log(`${person[1].name} age is ${person[1].age}`);*/
/*varfunction add(a,b){
let c= a+b;
console.log(c);
}*/
/*var add =(a,b)=>{
     let c = a+b;
     console.log(c);
}
add(5,2);*/

/*for(i=0,i<=10,i++){
console.log(i)};*/
/*let num =[2,4,6,10];
let sum =0;
for( let i=0;i<num.length;i++){
    sum = sum+num[i];
}
console.log(sum);*/
/*let i=1;
while(i<=10)
{
    console.log(i)
    i++;
}*/
/*let i=1;
do{
    console.log(i);
    i++
 } while(i<=11);
*/
let num = [2,3,5,6,8,11];
for(let index= 0;index <num.length;index++){
   if(num[index]%2 == 0)
   {
     console.log(`${num[index]} is even`);
   }
   else 
   {
 console.log(`${num[index]} is odd`);
   }
}