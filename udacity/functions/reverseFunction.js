function reverse(text) {
  let finalText = "";
  for (let i = text.length - 1; i >= 0; i--) {
    finalText += text[i];
  }
  return finalText;
}
console.log(reverse("Andre"));
