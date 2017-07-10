/**
 * Created by Su Chuan on 2017/7/10.
 */
let block = document.getElementById("block");
block.direction = 1;
block.coordinate = [6,6];
let button = document.getElementsByTagName("button")[0];
let input = document.getElementsByTagName("input")[0];


function go(command){//基于当前坐标及方向求下一步坐标
    switch(command){
        case "TRA TOP": block.coordinate[1]--;break;
        case "TRA RIG": block.coordinate[0]++;break;
        case "TRA BOT": block.coordinate[1]++;break;
        case "TRA LEF": block.coordinate[0]--;break;
    }
    if(block.coordinate[0] < 1 || block.coordinate[0] > 10 || block.coordinate[1] < 1 || block.coordinate[1] > 10)
    {
        alert("Beyond board range!");
        location.reload();
    }
    block.style.left = String((block.coordinate[0] - 1) * 40) + "px";
    block.style.top = String((block.coordinate[1] - 1) * 40) + "px";//移动棋子
}

function forward(command){
    return function(){
        return go.call(window,command);
    };
}//为了给setTimeout中的函数传参数（已不需要延时函数）

function rotate(command){
    switch(command){
        case "MOV LEF":
            if(block.direction != 4)
            {
                block.style.transform = "rotate(-90deg)";//rotate每次都是从初始状态开始旋转
                block.direction = 4;
                forward("TRA LEF")();
            }
            else
            {
                forward("TRA LEF")();
            }
            break;
        case "MOV TOP":
            if(block.direction != 1)
            {
                block.style.transform = "rotate(0deg)";
                block.direction = 1;
                forward("TRA TOP")();
            }
            else
            {
                forward("TRA TOP")();
            }
            break;
        case "MOV RIG":
            if(block.direction != 2)
            {
                block.style.transform = "rotate(90deg)";
                block.direction = 2;
                forward("TRA RIG")();
            }
            else
            {
                forward("TRA RIG")();
            }
            break;
        case "MOV BOT":
            if(block.direction != 3)
            {
                block.style.transform = "rotate(180deg)";
                block.direction = 3;
                forward("TRA BOT")();
            }
            else
            {
                forward("TRA BOT")();
            }
            break;
    }
}

button.addEventListener("click",function(){
    let command = input.value;
    let a = /TRA./;
    if(a.test(command))
    {
        go(command);
    }
    else
    {
        rotate(command);
    }
});