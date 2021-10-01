const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function titleCased(members) {
//   let arr = [];
//   for (let t = 0; t < members.length; t++) {
//     const element = members[t];
//     arr.push(toTitleCase(element));
//   }
//   return arr;
// }
// function toTitleCase(str) {
//   print(str)
//   str = str.toLowerCase().split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//   return str.join(' ');
// }

// titleCased(tutorials)

const titleCased = () => {
  const tutorialsIntoWords = tutorials.map(string => string.split(' '));
  const capitalizedWords = [];
  for (const element of tutorialsIntoWords) {
    const x = (element.map (word => word[0].toUpperCase() + word.substring(1)).join(" "));
    capitalizedWords.push(x);
  }
  return capitalizedWords;
}