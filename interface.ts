interface Player {
	name: string,
	club:string,
	salary:number,
	wife?: string,
	prevClubs?: string[]
}
const messi: Player = {
	name: 'l messi',
	club: 'PSG',
	salary:12000,
	wife: 'Nusa'
}
const hannan: Player = {
	name: 'A hasan',
	club: 'kolabagan',
	salary:2000,
}
interface EMployee{
	name:string,
	designation:string,
	salary:number,
	age: number
}
interface Developer extends EMployee{
	language:string,
	codeEditor?:string,
	typeSpeed: number
}
const karim: Developer = {
	name: 'syed',
	age: 23,
	language: 'js',
	typeSpeed: 45,
	//codeEditor: "",
	designation: "",
	salary: 0
}