import './font-awesome.css'
import './style.css'
import  Icon from './icon.jpg'
import  data from './data.xml'
import  lib from './lib'

let myIcon = new Image();
myIcon.src = Icon;
myIcon.width = 100;
myIcon.height = 100;
// document.querySelector('.container').appendChild(myIcon);

const hello = () => console.log("你好");
console.log(data);
hello();

if (module.hot) {
    module.hot.accept('./lib', function () {
        console.log('接受更新的库模块!');
        lib.log();
    })
}

/**
 * @desc helloword
 * @param user
 */
function helloword(user) {
    console.log(user + '你好')
    throw new Error("报错了");
}
helloword("wll");