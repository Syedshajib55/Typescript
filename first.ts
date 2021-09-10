// const myNumber = 5;
// console.log('helloo', myNumber);
// // let money = 500;
// let nmoney = '12';
let money: number = 23;
let Name: string = 'syed';
// console.log(money, Name);
// console.log('syed');

// function add (first:number, second:number):number{
// 	return first+second;
// }
// console.log(add(12,23));

//Multipurpose
function add (first:number | string, second:number | string):number|string{
	const res:number|string = first + second;
	return res;
}
console.log(add('syed','shajib'));