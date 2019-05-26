import { checkLogin } from "./services/api";
import "./index.scss";
// import "./assets/font/iconfont.css";
import Data from "./assets/data/data.xml";
console.log(Data);
if(process.env.NODE_ENV == "production"){
    console.log("这是生产环境！");
}else if(process.env.NODE_ENV == "development"){
    console.log("这是开发环境！");
}
console.log("这是首页！！！！！");
async function aa(){
    let bb = await cc();
    console.log(bb);
}
function cc(){
    return new Promise((resolve,reject)=>{
        resolve('123456789');
    })
}
aa();
let ab = {a:1,b:2,c:{d:3}};
let cd = Object.assign({},ab,{f:4})
ab.a = 5;
console.log(ab);
console.log(cd);
// checkLogin();