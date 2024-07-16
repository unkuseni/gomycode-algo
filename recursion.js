function isLeapYear(year) {
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		return `${year} is a leap year.`;
	} else {
		return `${year} is not a leap year.`;
	}
}


function ticketPrice(age) {
	let price;
	if (age <= 12) {
		price = 10;
	} else if (age >= 13 && age <= 17) {
		price = 15;
	} else {
		price = 20;
	}
	return `The ticket price for age ${age} is $${price}.`;
}

function fibonacci(n) {
	if (n <= 1) {
		return n;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

function isPalindrome(str) {
	str = str.toLowerCase().replace(/[\W_]/g, "");
	let left = 0;
	let right = str.length - 1;

	while (left < right) {
		if (str[left] !== str[right]) {
			return false;
		}
		left++;
		right--;
	}

	return true;
}
