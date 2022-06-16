// ADD NEW ITEM TO END OF LIST
// Made a new li and inserted it at the end with the text "cream"
var new_item = document.createElement("li");
new_item.innerHTML = "cream";
var current_last = document.getElementById("four");
current_last.parentNode.insertBefore(new_item, current_last.nextSibling);
// ADD NEW ITEM START OF LIST
// Made a new li and inserted it at the begining with the text "kale"
var new_item = document.createElement("li");
new_item.innerHTML = "kale";
var current_first = document.getElementById("one");
current_first.parentNode.insertBefore(new_item, current_first);
// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Looped over all li and add class cool
for (i = 0; i < document.querySelectorAll("li").length; i++) {
  document.querySelectorAll("li")[i].setAttribute("class", "cool");
}
// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// added a span (found in css file) and the value inside is the number of li elements
var number = document.createElement("span");
number.innerHTML = document.querySelectorAll("li").length;
document.querySelector("h2").appendChild(number);
