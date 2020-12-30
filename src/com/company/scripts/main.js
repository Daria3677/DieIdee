// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';

let myName = 'Karin';

// document.querySelector('html').onclick = function() {
//    alert('Ouch! Stop poking me!');
// }

let myImage = document.querySelector('img');

myImage.onclick = function()
{
    let mySrc = myImage.getAttribute('src');
    if (mySrc === '/src/com/company/images/010627_Ausstand07.jpg')
    {
        myImage.setAttribute('src', '/src/com/company/images/Karin_Schnut.jpg');
    }
    else
    {
        myImage.setAttribute('src', '/src/com/company/images/010627_Ausstand07.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName()
{
    let myName = prompt('Bitte Namen eingeben:');
    if(!myName)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mein Name ist ' + myName;
    }

}

if(!localStorage.getItem('name'))
{
    setUserName();
}
else
{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mein Name ist ' + storedName;
}

myButton.onclick = function()
{
    setUserName();
}