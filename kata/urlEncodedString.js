/**
 * To safely send data in a URL, the data first has to be encoded to convert any special characters to URL safe characters. For this assignment we will only focus on the following URL encoding rules:

%20 represents a space character.
Key-value pairs are represented using an = character: key=value
Multiple key-value pairs are separated using a & character: key1=value1&key2=value2
So the following URL encoded string:

city=Vancouver&weather=lots%20of%20rain
Could be converted to the following JavaScript object:

{
  city: "Vancouver",
  weather: "lots of rain"
}

Expected Output
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
 */


const urlDecode = function (text) {
  let arrString = text.split('')
  let prop = ["=", "&", "%20"];
  let url = {}
  for (let i = 0; i < arrString.length; i++) {
    if (prop.includes(arrString[i]) && arrString[i] == '=') {
      url.arrString.substring(0, arrString[i].length) = ''
      console.log(url)
    }
    else if (prop.includes(arrString[i]) && arrString[i] == "&") {
      console.log('i found &')
    }
    else if (prop.includes(arrString[i]) && arrString[i] == "%20") {
      console.log('i found &20')
    }
  }
  let result = arrString.join('');
  return result;
};

// console.log(urlDecode("duck=rubber"));
// console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);