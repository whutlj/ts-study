import {trim} from './utils.js'
function greeter(name: string) {
  return  trim(' hello' + name)
}
let ele  = document.createElement('div')
ele.innerHTML = 'Typescript文件添加元素'
document.body.appendChild(ele)