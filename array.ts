const salary:number = 23;
const friendsalaries: number[] = [12,34,53,34,23];
const friends: string[] = ['syed','shajib'];
friendsalaries[0] = 1234;
friendsalaries.push(12222);

friends[0] = 'shakil';

let max = 0;
for (const salary of friendsalaries) {
	if(salary > max) max = salary;
}