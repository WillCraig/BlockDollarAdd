function submitText() {
  // Get the value entered in the text input
  let enteredText = document.getElementById("textInput").value;

  // Display the entered text in the console (you can modify this part to perform other actions)
  console.log("Entered Text: ", enteredText);




  // split text by spaces (including spaces, tabs, and newlines)
  // let words = enteredText.split(/\s+/);

  // remove all words that do not begin with "$"
  // let dollarWords = words.filter(word => word.startsWith("$"));

  let dollarWords = enteredText.split(/\s+/).filter(word => word.startsWith("$"));


  // what remains should be that looks like "$600.56", extract the number value in a list of numbers
  // let numbers = dollarWords.map(word => parseFloat(word.replace("$", "")));

  // sum the numbers
  // let sum = numbers.reduce((a, b) => a + b, 0);

  // create a string that contains a list of all dollar words separated by a newline
  let dollarWordsString = dollarWords.join("\n");

  let sum = dollarWords.map(word => parseFloat(word.replace("$", ""))).reduce((a, b) => a + b, 0);

  // alter output area
  document.getElementById("priceList").innerHTML = dollarWordsString;
  document.getElementById("totalOutput").innerHTML = "Total: $" + sum.toFixed(2);
}
