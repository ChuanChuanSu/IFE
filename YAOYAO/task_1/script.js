/**
 * Created by Su Chuan on 2017/7/7.
 */
let input = document.getElementById("name");
let span = document.getElementById("error");
let button = document.getElementsByTagName("button")[0];
let length = 0;

function getLength(){
    let str = input.value;
    for(let i = 0;i < str.length;i ++)
    {
        if(str.charCodeAt(i) > 255)//汉字
        {
            length += 2;
        }
        else if(str.charCodeAt(i) > 32 && str.charCodeAt(i) < 127)//英文字母、符号及数字
        {
            length ++;
        }
        else
        {
            return false; //若为非法字符，返回false
        }
    }
    return true;
}

function validity(){
    if(!getLength())
    {
        span.innerHTML = "请输入正确的字符";
        input.style.borderColor = "red";
        span.style.color = "red";
        if(event.target.id == "submit")
        {
            event.preventDefault();
        }
    }
    else if(length == 0)
    {
        span.innerHTML = "姓名不能为空";
        input.style.borderColor = "red";
        span.style.color = "red";
        if(event.target.id == "submit")
        {
            event.preventDefault();
        }
    }
    else if(length < 4 || length > 16)
    {
        span.innerHTML = "请控制字符数在4~16范围内！";
        input.style.borderColor = "red";
        span.style.color = "red";
        if(event.target.id == "submit")
        {
            event.preventDefault();
        }
    }
    else
    {
        span.innerHTML = "名称格式正确";
        input.style.borderColor = "green";
        span.style.color = "green";
    }
    length = 0;
}

input.addEventListener("keyup",validity);

button.addEventListener("click",validity);