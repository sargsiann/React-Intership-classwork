"use strict"

// UTILS

function isValidNum(n)
{
	if (typeof n != "number" || isNaN(n)){
		console.log("Invalid Number input");
		return false;
	}
	return true;
}

// EXERCISE 1

function sumOfSquares(n)
{
	if (!isValidNum(n))
		return ;
	if (n <= 0){
		console.log("N is not natural");
	}
	let sum = 0;
	for (let i = 1;i <= n; i++)
		sum += i ** 2;
	console.log(sum);
}

// sumOfSquares(3);

// EXERCISE 2

function sumOfCubes(n)
{
	if (!isValidNum(n))
		return ;
	if (n <= 0){
		console.log("N is not natural");
	}
	let sum = 0;
	for (let i = 1;i <= n; i++)
		sum += i ** 3;
	console.log(sum);
}


// EXERCISE 3

function sumOfNeighbourMul(n)
{
	if (!isValidNum(n))
		return ;
	if (n <= 0){
		console.log("N is not natural");
	}
	let sum = 0;
	let i = 1;
	do {
		sum += i * (i + 1);
	}	while(i < n);
	console.log(sum);
}

// sumOfNeighbourMul(3)


// EXERCISE 4

function	printNameSurname(n)
{
	if (!isValidNum(n)){
		return ;
	}
	if (n < 0){
		console.log("N cant be negative");
		return ;
	}
	for (let i = 0;i < n;i++)
		console.log("David Sargsian\n");
}

// printNameSurname(4);

// EXERCISE 5

function	printCubeTable(x,y,a)
{
	if (isValidNum(x) && isValidNum(y) && isValidNum(a)){
		for (let i = x;i <= y;i++)
		{
			if (i ** 3 % a == 0)
				console.log(i ** 3);
		}
	}
}

// printCubeTable(1,10,1);

// EXERCISE 6

function	defineArr(size)
{
	if (!isValidNum(size))
		return ;
	if (size <= 0){
		console.log("Size is not natural");
		return ;
	}
	let arr = [];
	for (let i = 0;i < size;i++)
	{
		arr[i] = prompt("Enter element");
	}
	console.log(arr);
}

// defineArr(3);

// EXERCISE 7

// A)

function drawA(size)
{
	let str = "";
	if (isValidNum(size) && size >= 1)
	{
		for (let i = 0;i < size;i++)
		{
			str = "";
			for (let j = 0; j <= i; j++)
			{
				str += "*";
			}
			console.log(`${str}\n`);
		}
	}
}

// drawA(4);

// B)

function drawB(size)
{
	let str = "";
	if (isValidNum(size) && size >= 1)
	{
		for (let i = 0;i < size;i++)
		{
			str = "";
			for (let j = size; j > i; j--)
			{
				str += "*";
			}
			console.log(`${str}\n`);
		}
	}
}

// drawB(5);

// C)

function drawC(size)
{
	let str = "";
	if (isValidNum(size) && size >= 1)
	{
		for (let i = 0;i < size;i++)
		{
			str = "";
			for (let j = 0; j < size ; j++)
			{
				if (j < i)
					str += " ";
				else
					str += "*";
			}
			console.log(`${str}\n`);
		}
	}
}

// drawC(7);


function drawD(size)
{
	let str = "";
	if (isValidNum(size) && size >= 1)
	{
		for (let i = 0;i <= size;i++)
		{
			str = "";
			for (let j = 0; j < size ; j++)
			{
				if (j < size - i)
					str += " ";
				else
					str += "*";
			}
			console.log(`${str}\n`);
		}
	}
}

// drawD(7);


// EXERCISE 8

function findOccurences(digit,num)
{
	if (!isValidNum(n) || !isValidNum(digit))
		return ;
	if (digit < 0 || digit > 9)
	{
		console.log("Invalid digit");
		return ;
	}
	let count = 0;
	num += "";
	for (let i = 0;i < num.length;i++)
	{
		if (num[i] == digit)
			count++;
	}
	console.log(count);
}

// findOccurences(2,222);