//index of strings
var my_string = "Udacity";

// Iterate using a Loop
for (var i = 0; i < my_string.length; i++) {
  console.log(`${my_string[i]} ${my_string.charCodeAt(i)}`);
}

console.log('Ola meu povo\nestou aqui na segunda linha \' com esta "CITACAO"continuacao da string e continuando a \n \ linha com pagrafo')
// Code	Character
// \\	\ (backslash)
// \"	'' (double quote)
// \'	' (single quote)
// \n	newline
// \t	tab


var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
var madLib = 'The Intro to JavaScript course is' + adjective1 + '. James and Julia are so' + adjective2 + '. I cannot wait to work through the rest of this' + adjective3 + ' content!';
console.log(madLib)


if (true) {
  console.log("the value is truthy");
} else {
  console.log("the value is falsy");
}

/*true
42
"pizza"
"0"
"null"
"undefined"
{}
[]*/