/**
 * Create a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:
 * 
 * Expected Output
thisIsAString "camel"s
ThisIsAString "pascal"
this_is_a_string "snake"
this-is-a-string "kebab"
This Is A String "title"
thIs Is A strIng "vowel"
THiS iS a STRiNG "consonant"
THIS_IS_A_STRING ["upper", "snake"]
 */


const makeCase = function (input, casing) {

  if (casing === 'camel') {
    return input.split(" ").map((s, i) => i !== 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s).join('');
  }

  if (casing === 'pascal') {
    return input.split(" ").map((s, i) => s.charAt(0).toUpperCase() + s.slice(1)).join('');
  }

  if (casing === 'snake') {
    return input.split(" ").map((s, i) => s == " " ? s.replace('_') : s).join('_');
  }

  if (casing === 'kebab') {
    return input.split(" ").map((s, i) => s == " " ? s.replace('-') : s).join('-');
  }

  if (casing === 'title') {
    return input.split(" ").map((s, i) => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
  }

  if (casing === 'vowel') {
    let arrString = input.split('')
    let vowel = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < arrString.length; i++) {
      if (vowel.includes(arrString[i])) {
        arrString[i] = arrString[i].toUpperCase();
      }
      else {
        arrString[i] = arrString[i];
      }
    }
    let result = arrString.join('');
    return result;
  }

  if (casing === 'consonant') {
    let arrString = input.split('')
    let vowel = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < arrString.length; i++) {
      if (!vowel.includes(arrString[i])) {
        arrString[i] = arrString[i].toUpperCase();
      }
      else {
        arrString[i] = arrString[i];
      }
    }
    let result = arrString.join('');
    return result;
  }

  if (casing === 'upper') {
    return input.split(" ").map((s, i) => s.toUpperCase()).join(' ');
  }
  if (casing === 'lower') {
    return input.split(" ").map((s, i) => s.toLowerCase()).join(' ');
  }

}
// console.log(makeCase("this is a string", "camel"));
// console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", "upper"));
// console.log(makeCase("this is a string", ["upper", "snake"]));
