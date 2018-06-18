import './style.css';
import Img from './DSCN3627.JPG';
import Data from './data.xml';
import  './aaa.js';
console.log('zhanghang1');
console.log(Data);
function component(){
    let el = document.createElement('div');;
    let btn = document.createElement('button');
    btn.innerHTML = 'click me and check the console';
    btn.onclick = printMe;
    el.appendChild(btn);
    // let img = new Image();
    // img.src = Img;
    // el.appendChild(img);
    return el;
}
// document.body.appendChild(component());
if(process.env.NODE_ENV == 'production'){
    console.log('这是生产环境！');
}else if(process.env.NODE_ENV == 'development'){
    console.log('这是开发环境！');
}
alert('index');
alert('zhanghang');
