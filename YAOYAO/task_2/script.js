/**
 * Created by Su Chuan on 2017/7/7.
 */
let button = document.getElementsByTagName("button")[0];
let div = document.getElementsByTagName("div");
let input = document.getElementsByTagName("input");

let password = document.getElementById("password").value;

function prompt(event,txt){
    event.target.nextSibling.innerHTML = txt;
    event.target.nextSibling.style.color = "gray";
}

function unprompt(event){
    event.target.nextSibling.innerHTML = null;
    event.target.nextSibling.style.color = "";
}

function validity(event){
    event = event? event:window.event;
    if(event.target.id == "repassword")
    {
        if(event.target.value == password)
        {
            event.target.nextSibling.innerHTML = "密码一致！";
            event.target.nextSibling.style.color = "green";
        }
    }
}

input[2].addEventListener("focusout",function(){
    validity(event);
});

for(let i = 0;i < input.length;i ++)
{
    // input[i].addEventListener("focusout",function(){
    //    validity(event);
    // });
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
}

initialize();