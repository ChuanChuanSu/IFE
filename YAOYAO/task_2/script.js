/**
 * Created by Su Chuan on 2017/7/7.
 */
let button = document.getElementsByTagName("button")[0];
let div = document.getElementsByTagName("div");
let input = document.getElementsByTagName("input");
let email = document.getElementById("email");
let tel = document.getElementById("tel");

let password = document.getElementById("password").value;
let length = 0;

function prompt(event,txt){
    event.target.nextSibling.innerHTML = txt;
    event.target.nextSibling.style.color = "gray";
}

/*function unprompt(event){
    event.target.nextSibling.innerHTML = null;
    event.target.nextSibling.style.color = "";
}*/

function getLength(){
    let str = input[0].value;
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

function validity(event){
    event = event? event:window.event;
    if(event.target.id == "name")
    {
        if(!getLength())
        {
            event.target.nextSibling.innerHTML = "请输入正确的字符!";
            event.target.nextSibling.style.color = "red";
            event.target.style.borderColor = "red";
        }
        else if(length == 0)
        {
            event.target.nextSibling.innerHTML = "姓名不能为空!";
            event.target.nextSibling.style.color = "red";
            event.target.style.borderColor = "red";
        }
        else if(length < 4 || length > 16)
        {
            event.target.nextSibling.innerHTML = "请控制字符数在4~16范围内!";
            event.target.nextSibling.style.color = "red";
            event.target.style.borderColor = "red";
        }
        else
        {
            event.target.nextSibling.innerHTML = "名称格式正确！";
            event.target.nextSibling.style.color = "green";
            event.target.style.borderColor = "green";
        }
        length = 0;
    }
    else if(event.target.id == "password")
    {
        password = document.getElementById("password").value;
        let lowCase = false,highCase = false,number = false,right = true;
        let str = "";
        for(let i = 0;i < password.length;i ++)
        {
            console.log(password.charCodeAt(i));
            if(parseInt(password.charCodeAt(i),10) > 96 && parseInt(password.charCodeAt(i),10) < 123)
            {
                lowCase = true;
            }
            else if(parseInt(password.charCodeAt(i),10) > 64 && parseInt(password.charCodeAt(i),10) < 91)
            {
                highCase = true;
            }
            else if(parseInt(password.charCodeAt(i),10) > 47 && parseInt(password.charCodeAt(i),10) < 58)
            {
                number = true;
            }
            else
            {
                right = false;
            }
        }
        if(lowCase && highCase && number && right)
        {
            event.target.nextSibling.innerHTML = "密码可用！";
            event.target.nextSibling.style.color = "green";
        }
        else
        {
            if(!lowCase)
            {
                str += "无小写字母 ";
            }
            if(!highCase)
            {
                str += "无大写字母 ";
            }
            if(!number)
            {
                str += "无数字 ";
            }
            if(!right)
            {
                str += "无效字符";
            }
            event.target.nextSibling.innerHTML = str;
            event.target.nextSibling.style.color = "red";
            event.target.style.borderColor = "red";
        }
    }
    else if(event.target.id == "repassword")
    {
        password = document.getElementById("password").value;
        if(!password)
        {
            event.target.nextSibling.innerHTML = "密码不能为空！";
            event.target.nextSibling.style.color = "red";
            event.target.style.borderColor = "red";
        }

        else if(event.target.value == password)
        {
            event.target.nextSibling.innerHTML = "密码一致！";
            event.target.nextSibling.style.color = "green";
            event.target.style.borderColor = "green";
        }

        else
        {
            event.target.nextSibling.innerHTML = "请确保两次输入密码一致！";
            event.target.nextSibling.style.color = "red";
            event.target.style.borderColor = "red";
        }
    }
    else if(event.target.id == "email")
    {
        if(email.validity.valid && email.value)
        {
            event.target.nextSibling.innerHTML = "邮箱有效！";
            event.target.nextSibling.style.color = "green";
            event.target.style.borderColor = "green";
        }
        else
        {
            event.target.nextSibling.innerHTML = "请确保输入格式正确的邮箱！";
            event.target.nextSibling.style.color = "red";
            event.target.style.borderColor = "red";
        }
    }
    else if(event.target.id == "tel")
    {
        let valid = true;
        let telNumber = tel.value;
        if(telNumber.length == 0)
        {
            valid = false;
        }
        for(let i = 0;i < telNumber.length;i ++)
        {
            if(telNumber[i] > '9' || telNumber[i] < '0')
            {
                valid = false;
            }
        }
        if(valid)
        {
            event.target.nextSibling.innerHTML = "手机号有效！";
            event.target.nextSibling.style.color = "green";
            event.target.style.borderColor = "green";
        }
        else
        {
            event.target.nextSibling.innerHTML = "请确保输入格式正确的手机号！";
            event.target.nextSibling.style.color = "red";
            event.target.style.borderColor = "red";
        }
    }
}

function submitForm(){
    let str = '';
    if(div[0].lastElementChild.innerHTML == "名称格式正确！" && div[1].lastElementChild.innerHTML == "密码可用！" && div[2].lastElementChild.innerHTML == "密码一致！" && div[3].lastElementChild.innerHTML == "邮箱有效！" && div[4].lastElementChild.innerHTML == "手机号有效！")
    {
        str = "输入正确，即将提交！";
    }
    else{
        if(div[0].lastElementChild.innerHTML != "名称格式正确！")
        {
            str += "名称格式有误！\r\n";
        }
        if(div[1].lastElementChild.innerHTML != "密码可用！")
        {
            str += "密码格式有误！\r\n";
        }
        if(div[2].lastElementChild.innerHTML != "密码一致！")
        {
            str += "密码不一致！\r\n";
        }
        if(div[3].lastElementChild.innerHTML != "邮箱有效！")
        {
            str += "邮箱格式有误！\r\n";
        }
        if(div[4].lastElementChild.innerHTML != "手机号有效！")
        {
            str += "手机号格式有误！";
        }
    }
    alert(str);
}



function initialize(){
    input[0].addEventListener("focusin",function(){
        prompt(event,"必填，长度为4~16个字符");
    });

    input[1].addEventListener("focusin",function(){
        prompt(event,"请输入密码");
    });

    input[2].addEventListener("focusin",function(){
        prompt(event,"请再次输入密码");
    });

    input[3].addEventListener("focusin",function(){
        prompt(event,"请输入邮箱");
    });

    input[4].addEventListener("focusin",function(){
        prompt(event,"请输入手机号");
    });


    for(let i = 0;i < input.length;i ++)
    {
        input[i].addEventListener("focusout",function(){
            validity(event);
        });
    }

    div[5].firstElementChild.addEventListener("click",submitForm);
}

initialize();