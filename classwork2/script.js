"use strict"

const payments = [
	{
	studentId: 1, // Unique identifier for each student
	studentName: "John Doe", // Name of the student
	payedAmount: 600, // Amount payed with this transaction
	year: 2020, // The payment year
	},
	{
	studentId: 1, // Unique for each student
	studentName: "John Doe",
	payedAmount: 500,
	year: 2021
	},
	{
	studentId: 1, // Unique for each student
	studentName: "John Doe",
	payedAmount: 400,
	year: 2022
	},
	{
	studentId: 1, // Unique for each student
	studentName: "John Doe",
	payedAmount: 300,
	year: 2023
	},
	{
	studentId: 2, // Unique for each student
	studentName: "Lu Kang",
	payedAmount: 500,
	year: 2020
	},
	{
	studentId: 2, // Unique for each student
	studentName: "Lu Kang",
	payedAmount: 2400,
	year: 2021
	},
	{
	studentId: 2, // Unique for each student
	studentName: "Lu Kang",
	payedAmount: 300,
	year: 2023
	},
	{
	studentId: 2, // Unique for each student
	studentName: "Lu Kang",
	payedAmount: 2100,
	year: 2023
	}
];

function	findMax(arr){
	return arr.reduce((max,elem)=> max < elem.payedAmount ? elem.payedAmount : max, arr[0].payedAmount);
}

function	findSum(arr){
	return arr.reduce((sum,elem)=> sum += elem.payedAmount, arr[0].payedAmount);
}

function	findFilteredCount(arr){
	return arr.reduce((count = 0,elem)=>elem.payedAmount > 1500 ? ++count : count,0);
}

function	findAverage(arr){
	return findSum(arr)/arr.length;
}

// 5 

function	hasPerson(arr,obj)
{
	for (let i = 0; i < arr.length; i++){
		if (arr[i].studentId == obj.studentId){
			return arr[i];
		}
	}
	return null;
}


function	newUniqueArr(arr){
	let filteredArr = [];
	let filteredElem;

	for (let elem of arr){
		filteredElem = hasPerson(filteredArr,elem);
		if (filteredElem == null){
			filteredArr.push({
				studentId : elem.studentId,
				studentName : elem.studentName,
				payedAmount : elem.payedAmount, 
				years : [],
			});
		}
		else{
			filteredElem.payedAmount += elem.payedAmount;
			filteredElem.years.push(elem.year);
		}
	}
	return filteredArr;
}


// console.log(findMax(payments));

// console.log(findSum(payments));

// console.log(findFilteredCount(payments));


// console.log(findAverage(payments));

// console.log(newUniqueArr(payments))

/*

// GET NAME
const obj = {};

obj.setName = function(name) {
	this.name = name;
}

obj.getName = function() {
	return this.name
}

obj.setName('John');
obj.getName(); 
*/

// GET SUM

const obj = {}

obj.setSum = function(sum) {
	this.sum = sum;
}

obj.add = function(num) {
	this.sum += num;
}

obj.getSum = function(sum) {
	return this.sum
}


// GROUPING BY USER ID

function	groupArticles(arr){
	let container = {};
	for (let elem of arr){
		if (container[elem.userId] != undefined){
			let article = {
				id : elem.id,
				title:	elem.title,
				body:	elem.body 
			}
			container[elem.userId].articles.push(article);
		}
		else{
			container[elem.userId] = {
				userId : elem.userId,
				articles : []
			}
		}
	}
	return container;
}

// console.log(groupArticles(arr));

function	freeSheeping(obj){
	let arr = Object.values(obj);
	let sum = arr.reduce((a,b)=>a + b)
	if (sum >= 50)
		return true;
	return false;
}

function	mapLetters(str){
	let map = {};
	for (let  i = 0; i < str.length; i++){
		if (map[str[i]] != undefined)
			map[str[i]].push(i);
		else{
			map[str[i]] = [i]; 
		}
	}
	return map;
}

console.log(mapLetters("AABBACD"));
// console.log(freeSheeping({a:40 ,b : 22}));