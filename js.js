// the delete button
const list=document.querySelector("#sec-b #uclass"); // grab the ul element

list.addEventListener('click',function(e) // i add click event on ul element
{
if(e.target.className=="deletebtn") // searching for a classname deletebtn, when someone click on classname=deletebtn
{
const del=e.target.parentElement; // then grab the parent element of it
del.remove(); // then remove the parent element
}

});

// the add button

const search=document.querySelector("#add"); // grabbing the form 2
// then adding a onsubmit event on it.
search.addEventListener('submit',function(e)
{
e.preventDefault(); // on this line, i'm preventing default behavior of form when someone click on button. default behavior is when someone click on button it referesh the page. but it will not referesh it.
const inputvalue=e.target.querySelector("input").value;
const newli=document.createElement("li");
const title=document.createElement("span");
const btn=document.createElement("span");

title.textContent=inputvalue; // setting the input value into routine title
btn.textContent="Delete"; // setting the new button element value delete

title.classList.add("r-name"); // giving a new class to new elemeent
btn.classList.add("deletebtn");

newli.appendChild(title); // now appending it parent
newli.appendChild(btn);

list.appendChild(newli); // now appending whole li element into ul

});

// the on search input

const get=document.forms['search'].querySelector("input"); // grab the input of search form
get.addEventListener("keyup",function(e) //adding a key up event on input

{
const term=e.target.value.toLowerCase(); // getting a value of input and convert into lower case
const select=list.getElementsByTagName("li"); // grabbing the li tags
Array.from(select).forEach(function(items) // because of more than one elements we are converting it into array first
{
const value=items.firstElementChild.textContent.toLowerCase(); //getting the routine title from every list and convert it into lowercase
if(value.indexOf(term)!=-1) // if index value does not match with -1 it means it founds the same index
{
items.style.display="block";

}
else{ // if index value matches with -1 then it will show nothing.
items.style.display="none";

}
});

});