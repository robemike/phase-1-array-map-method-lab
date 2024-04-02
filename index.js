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

function titleCased() {
  for (let i = 0; i < tutorials.length; i++) {
    let words = tutorials[i].split(' ');
    for (let j = 0; j < words.length; j++) {
      words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
    }

    tutorials[i] = words.join(' ');
  }

  return tutorials;
}