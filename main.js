// https://type.fit/api/quotes
const content = document.querySelector('#content');
const author = document.querySelector('#author');
const btn = document.querySelector('#btn');

btn.addEventListener('click', fetchData);
async function fetchData(){
    let res = await fetch('https://type.fit/api/quotes');
    let data = await res.json();
    let random = Math.floor(Math.random() * 151);
    content.innerHTML = `<span id="cha">&#10077 </span> ${data[random].text}`;
    author.innerHTML = `<em>${data[random].author}</em>`;
}