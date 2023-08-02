
const BASE_URL = "http://numbersapi.com";
let favNumber = 7;

// Question 1.
$.getJSON(`${BASE_URL}/${favNumber}?json`).then(response => {
  console.log(response);
});

// Question 2.
let favNumbers = [12, 17, 28];
$.getJSON(`${BASE_URL}/${favNumbers}?json`).then(response => {
  console.log(response);
});

// Question 3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${BASE_URL}/${favNumber}?json`);
  })
).then(facts => {
  facts.forEach(response => $("body").append(`<p>${response.text}</p>`));
});
