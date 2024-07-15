function analyzeSentence(sentence) {
	// Check if the sentence ends with a period
	if (sentence[sentence.length - 1] !== ".") {
		throw new Error("Sentence must end with a period.");
	}

	// Initialize variables
	let sentenceLength = 0;
	let wordCount = 0;
	let vowelCount = 0;

	// Define vowels set (both lowercase and uppercase)
	const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

	// Iterate through each character in the sentence
	for (let i = 0; i < sentence.length; i++) {
		let char = sentence[i];

		// Increment sentence length
		sentenceLength++;

		// Count vowels
		if (vowels.has(char)) {
			vowelCount++;
		}

		// Count words based on spaces
		if (char === " ") {
			wordCount++;
		}
	}

	// Add 1 to wordCount for the last word after the last space
	wordCount++;

	return {
		sentenceLength: sentenceLength,
		wordCount: wordCount,
		vowelCount: vowelCount,
	};
}
