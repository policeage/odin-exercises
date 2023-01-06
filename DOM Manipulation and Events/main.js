const container = document.querySelector('#container');


const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const firsttask = document.createElement('p');
firsttask.classList.add('first');
firsttask.style.color = 'red';
firsttask.textContent = "Hey I'm Red!"
container.appendChild(firsttask);

const secondtask = document.createElement('h3');
secondtask.classList.add('second');
secondtask.style.color = 'blue';
secondtask.textContent = "I'm a blue h3!"
container.appendChild(secondtask);

const thirdtask = document.createElement('div');
thirdtask.setAttribute('id', 'newdiv');
thirdtask.style.cssText = 'background-color: pink; border: solid;';
document.body.appendChild(thirdtask);

const newdiv = document.querySelector('#newdiv');

const fourthtask = document.createElement('h1');
fourthtask.textContent = "I'm in a div";
newdiv.appendChild(fourthtask);

const fifthtask = document.createElement('p');
fifthtask.textContent = 'ME TOO!';
newdiv.appendChild(fifthtask);

// Button section

//Method 2

const btn = document.querySelector('#btn');
//btn.onclick = () => alert("Hello World");

//Method 3

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});

// Button Experiments
/* btn.addEventListener('click', function (e) {
    console.log(e);
  }); */

/*   btn.addEventListener('click', function (e) {
    console.log(e.target);
  }); */

  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });