// var shirtWidth = 18; var shirtLength = 28; var shirtSleeve = 8.13
// var shirtWidth = 19.99; var shirtLength = 28.99; var shirtSleeve = 8.379
// var shirtWidth = 20; var shirtLength = 29; var shirtSleeve = 8.38
// var shirtWidth = 22; var shirtLength = 30; var shirtSleeve = 8.63
// var shirtWidth = 24; var shirtLength = 31; var shirtSleeve = 8.88;
// var shirtWidth = 26; var shirtLength = 33; var shirtSleeve = 9.63;
// var shirtWidth = 27.99; var shirtLength = 33.99; var shirtSleeve = 10.129;
// var shirtWidth = 28; var shirtLength = 34; var shirtSleeve = 10.13;
// var shirtWidth = 18; var shirtLength = 29; var shirtSleeve = 8.47;
var shirtWidth = 23; var shirtLength = 30; var shirtSleeve = 8.71;

var size = "N/A"
if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
  size = "3XL"
} else if (shirtWidth >= 26 && shirtLength >= 33 && shirtSleeve >= 9.63) {
  size = "2XL"
} else if (shirtWidth >= 24 && shirtLength >= 31 && shirtSleeve >= 8.88) {
  size = "XL"
} else if (shirtWidth >= 22 && shirtLength == 30 && shirtSleeve >= 8.63) {
  size = "Large"
} else if (shirtWidth >= 20 && shirtLength >= 29 && shirtSleeve >= 8.38) {
  size = "Medium"
} else if (shirtWidth >= 18 && shirtLength >= 28 && shirtSleeve >= 8.13) {
  size = "S"
} else {
  size = "N/A"
}
console.log(size);
