let h1 = document.createElement('h1');
let h1_text = document.createTextNode('10')
let img = document.createElement('img');
img.src = '../../image/bomb1.jpg';
let btn = document.createElement('button');
let btn_text = document.createTextNode('카운트다운시작');

h1.appendChild(h1_text);
document.body.appendChild(h1);
document.body.appendChild(img);
btn.appendChild(btn_text);
document.body.appendChild(btn);

