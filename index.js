// Write your code here!
const removeMain = document.getElementById('main');
removeMain.remove()


const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory')
document.body.appendChild(newHeader);

newHeader.innerHTML = "Tara is the champion"
