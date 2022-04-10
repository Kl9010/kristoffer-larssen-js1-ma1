const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1

const cat = {
  complain: "Meow!",
};

// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.className = "subheading";

// Question 5

const paragraphs = document.querySelectorAll("p");

//console.log(paragraphs); (Trenger ikke denne)

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7

function names(list) {
  for (var i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

names(cats);

// Question 8

function createCats(cats) {
  const catContainer = document.querySelector(".cat-container");
  for (var i = 0; i < cats.length; i++) {
    //console.log(cats[i].name);
  }
  catContainer.innerHTML = `<h5>${catContainer.name}</h5>`;
  catContainer.innerHTML = `<p>${catContainer.age}</p>`;
}

createCats(cats);
