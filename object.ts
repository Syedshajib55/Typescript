const city:string = 'Dhaka';
const fruits: string[] = ['mango', 'banana'];
type Person = {
	name:string,
	 id:number,
	 salary:number}
const students: Person = {
	name:'kamal',
	id:23,
	salary: 2390
}
const employee: {
	name:string,
	 id:number,
	 salary:number} = {
	name: 'amran',
	id: 23,
	salary: 0
}

function getSalary(player: { name: string, salary: number }): number {
    return player.salary;
}

getSalary({ name: 'kuddus', salary: 50 });


function getSalary2(player: Person): number {
    return player.salary;
}