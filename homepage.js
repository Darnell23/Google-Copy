console.log('Hello')
$(document).ready( ()=>{
const btn_search = document.querySelector('#btn_search');
console.log(btn_search);
const btn_lucky = document.querySelector('#btn_lucky');
console.log(btn_lucky);

btn_search.addEventListener("click", event=>{
console.log('search button was clicked')



});

btn_lucky.addEventListener("click", event =>{
    console.log('lucky lucky')
})







});