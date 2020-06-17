//Array Properties and Methods
// /https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// reverse
// sort
// push and pop
// Following is the syntax of splice() method: arrayName.splice(arg1, arg2, item1, ....., itemX); where,

// arg1 = Mandatory argument. Specifies the starting index position to add/remove items. You can use a negative value to specify the position from the end of the array e.g., -1 specifies the last element.

// arg2 = Optional argument. Specifies the count of elements to be removed. If set to 0, no items will be removed.

// item1, ....., itemX are the items to be added at index position arg1

// splice() method returns the item(s) that were removed.
var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

rainbow.splice(2, 1, "Yellow", "Green")
rainbow.splice(5, 0, "Purple")
console.log(rainbow)
