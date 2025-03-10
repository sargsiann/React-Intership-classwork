"use strict"

// CLASSWORK

// UTILS

function	checkNumber(num)
{
	if (typeof(num) != "number" || isNaN(num))
		{
			return false;
		}
	return true;
}

// EXERCISE 1

function	findQuadratic()
{
	let a = +prompt("a");
	let b = +prompt("b");
	let c = +prompt("c");
	let x0 = +prompt("x0");
	if (!a || !b || !c || !x0)
	{
		console.log("Invalid Input, input digits");
		return ;
	}
	let value = a * ((x0) ** 2) + b * x0 + c;
	console.log(`value at ${x0} is ${value}`);
}

// findQuadratic();

// EXERCISE 2

function	findNthTerm()
{
	let firstTerm = +prompt("First term");
	let secondTerm = +prompt("Second term");
	let n = +prompt("n");
	if (!firstTerm || !secondTerm || !n)
	{
		console.log("Invalid Input, input digits");
		return ;
	}
	if (n <= 0)
	{
		console.log("N must be natural number");
		return ;
	}
	let diff = secondTerm - firstTerm;
	let nthTerm = firstTerm + (n - 1) * diff;
	console.log(`N th Term of Sequence is ${nthTerm}`);
}

// findNthTerm();

// EXERCISE 3

function	sumOfTwoDigits(num)
{
	let a = typeof num;
	if ((num + '').length != 4 || typeof(num) != "number" || isNaN(num))
	{
		console.log("Wrong Input");
		return ;
	}
	let firstDigit = Math.floor(num / 1000);
	let secondDigit = Math.floor((num - 1000 * firstDigit)/100);
	let thirdDigit = Math.floor((num - firstDigit * 1000 - secondDigit * 100)/ 10);
	let forthDigit = (num - firstDigit * 1000 - secondDigit * 100 - thirdDigit * 10);
	console.log(`First two sum is ${firstDigit + secondDigit}`);
	console.log(`Last two sum is ${thirdDigit + forthDigit}`);
}

// sumOfTwoDigits(1234);

// EXERCISE 4

function checkNegativity(num)
{
	if (typeof(num) != "number" || isNaN(num))
	{
		console.log("Invalid input");
		return ;
	}
	console.log(num < 0);
}

// checkNegativity(NaN)


// EXERCISE 5

function	checkBounds(num1,num2,num3)
{
	if (!checkNumber(num1) || !checkNumber(num2) || !checkNumber(num3))
	{
		console.log("numeric arguments required");
		return ;
	}
	if (num2 > num1 && num2 < num3)
		console.log("In Bounds");
	else
		console.log("Out of Bounds");
}

// checkBounds(12,4,7);

// EXERCISE 6

function	checkNumDigits(num)
{
	if (checkNumber(num) == 0)
	{
		console.log("numeric arguments required");
		return ;
	}
	let strNum = num + '';
	if (strNum[0] == '-')
	{
		if (strNum.length != 3 || strNum[0] < strNum[1])
		{
			console.log("no");
			return ;
		}
	}
	else
	{
		if (strNum.length != 2 || strNum[0] < strNum[1])
		{
			console.log("no");
			return ;
		}
	}
	console.log("yes");
}

// checkNumDigits();

// EXERCISE 7

function	checkNameLength(name)
{
	if (typeof name != "string")
	{
		console.log("String argument required");
		return ;
	}
	if (name.length > 3)
		console.log("Your name is valid")
	else
		console.log("Invalid name");
}

// checkNameLength("Davit");

// EXERCISE 8
function	checkAlpha(char)
{
	if (typeof char != "string" || char.length != 1)
	{
		console.log("Invalid Argument");
		return ;
	}
	if ((char[0] >= 'a' && char[0] <= 'z') || (char[0] >= 'A' && char[0] <= 'Z'))
		console.log("Character is an ALPHABET.")
	else
		console.log("Character is NOT ALPHABET.");
}

// checkAlpha(111);

// EXERCISE 9

function checkProfit(cost,sell)
{
	if (!checkNumber(sell) || !checkNumber(cost))
	{
		console.log("Invalid Arguments");
		return ;
	}
	if (sell > cost)
		console.log(`Profit is ${sell - cost}`);
	else if (sell < cost)
		console.log(`Loss is ${cost - sell}`);
	else
		console.log("No profit no loss");
}

// checkProfit(1200,450);

// EXERCISE 10

function	dayOfWeek(num)
{
	if (!checkNumber(num))
	{
		console.log("Invalid Arguments");
		return ;
	}
	switch (num)
	{
		case 1:
			console.log("Monday");
			break;
		case 2:
			console.log("Tuesday");
			break;
		case 3:
			console.log("Wednesday");
			break;
		case 4:
			console.log("Thursday");
			break;
		case 5:
			console.log("Friday");
			break;
		case 6:
			console.log("Saturday");
			break;
		case 7:
			console.log("Sunday");
			break;
		default:
			console.log("Invalid Day");
	}
}

// dayOfWeek(1);

// EXERCISE 11

function isPerfectSquare(num)
{
	if (!checkNumber(num))
	{
		console.log("Invalid Arguments");
		return ;
	}
	let sqrt = Math.sqrt(num);
	if (sqrt * sqrt == num)
		console.log("Perfect Square");
	else
		console.log("Not a Perfect Square");
}

// isPerfectSquare(16);

// EXERCISE 12

function checkTriangleType(a,b,c)
{
	if (!checkNumber(a) || !checkNumber(b) || !checkNumber(c))
	{
		console.log("Invalid Arguments");
		return ;
	}
	if (a + b + c == 180)
	{
		if (a == 90 || b == 90 || c == 90)
			console.log("Right Triangle");
		else if (a > 90 || b > 90 || c > 90)
			console.log("Obtuse Triangle");
		else
			console.log("Acute Triangle");
	}
	else
		console.log("Not a Triangle");
}

// checkTriangleType(90,45,45);
// checkTriangleType(60,40,80);
// checkTriangleType(90,90,90);
// checkTriangleType(90,90,45);
// checkTriangleType(90,90,90);
// checkTriangleType(180,45,45);

// EXERCISE 13

// true && null || true -> true
// 5 > 3 && 10 <= 20 || false -> true
// (7 + 3 === 10) && (true || false) ->true
// false || true && (5 !== '5') -> true
// (4 < 6 || 10 >= 15) && true -> true
// (8 === 8 || 9 !== '9') && false -> false
// true && (null || 189) || false -> 189
// (3 === 3 || NaN) && (true && true) -> true
// true || (7 < 5 && 10 >= 11) -> true 
// (20 <= 20 && 3 > 1) || (false && true) -> true
// (9 >= 10 || 15 < 20) && (12 || false) -> 12
// (5 + 5 == ‘10’) && (89 || null) -> false
// true && (false || true) || false -> true
// (6 == ‘6’ && true) || (false && true) -> false
// (10 < 5 || 20 >= 15) && true -> true
// (3 === ‘3’ && 567) || (undefined || (5 > 10 && (20 <= 30 || true))) -> false
// ((5 === 5 || false) && (true && (10 !== 20 || (30 >= 40 && false)))) -> true
// (true || (false && (true || (10 === 5 && (20 > 15 || false))))) && (3 < 5 || 0) -> true
// ((7 >= 5 && true) || (false || (10 === 10 && (20 < 15 || true)))) && (false || true) -> true

/* ((true || (false && (true || (5 !== 5 && (10 > 15 || false))))) && (3 <= 5 || false)) || (true &&
 (false || (3 > 1 && (true || false)))) -> true */
