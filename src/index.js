import './index.css';
import Data from './assign/data/data.xml';
console.log(Data);
if(process.env.NODE_ENV == 'production'){
    console.log('这是生产环境！');
}else if(process.env.NODE_ENV == 'development'){
    console.log('这是开发环境！');
}
console.log('这是首页！！！！！');
