var main = document.querySelector("main");
console.log(main);
var joke = 'Why don’t scientists trust atoms? Because they make up everything. ';
var jokeTwo = 'Where are average things manufactured? The satisfactory. ';
var jokeThree = 'How do you drown a hipster? Throw him in the mainstream. ';

let header = "My Jokes";

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${joke}</li>`;
          '<li>${jokeTwo}</li>';
          '<li>${jokeThree}</li>';
}
var para = document.createElement("P");               
para.innerText = "That's all folks! ";               
document.body.appendChild(para);