/**
 * Created by Su Chuan on 2017/7/9.
 */
let block = document.getElementById("block");
block.direction = 1;
block.coordinate = [6,6];
let button = document.getElementsByTagName("button")[0];
let input = document.getElementsByTagName("input")[0];
let blueBlock = block.children;

let dir = [1,2,3,4];//方向数组

function go(coordinate,direction){//基于当前坐标及方向求下一步坐标
    switch(direction){
        case 1: coordinate[1]--;break;
        case 2: coordinate[0]++;break;
        case 3: coordinate[1]++;break;
        case 4: coordinate[0]--;break;
    }
    if(coordinate[0] < 1 || coordinate[0] > 10 || coordinate[1] < 1 || coordinate[1] > 10)
    {
        alert("Beyond board range!");
        location.reload();
    }
    block.style.left = String((coordinate[0] - 1) * 40) + "px";
    block.style.top = String((coordinate[1] - 1) * 40) + "px";//移动棋子
}

function rotate(command){
    switch(command){
        case "TUN LEF":
            block.direction = dir[((block.direction - 1 + 4) - 1) % 4];//求下一步坐标
            for(let i = 0;i < blueBlock.length;i ++)
            {
                if(block.direction == i + 1)
                {
                    blueBlock[i].style.display = "block";//让对应方向上的蓝色部分显现
                }
                else
                {
                    blueBlock[i].style.display = "none";
                }
            }
            break;
        case "TUN RIG":
            block.direction = dir[((block.direction - 1) + 1) % 4];
            for(let i = 0;i < blueBlock.length;i ++)
            {
                if(block.direction == i + 1)
                {
                    blueBlock[i].style.display = "block";
                }
                else
                {
                    blueBlock[i].style.display = "none";
                }
            }
            break;
        case "TUN BAC":
            block.direction = dir[((block.direction - 1) + 2) % 4];
            for(let i = 0;i < blueBlock.length;i ++)
            {
                if(block.direction == i + 1)
                {
                    blueBlock[i].style.display = "block";
                }
                else
                {
                    blueBlock[i].style.display = "none";
                }
            }
            break;
    }
}

button.addEventListener("click",function(){
   let command = input.value;
    if(command == "GO")
    {
        go(block.coordinate,block.direction);
    }
    else
    {
        rotate(command);
    }
});