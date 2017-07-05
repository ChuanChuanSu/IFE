/**
 * Created by Su Chuan on 2017/7/5.
 */
function bind(fn,obj)
{
    return function(){
        fn.apply(obj,arguments);
    }
}

function removeColor(){
    this.style.backgroundColor = "white";
}


function last(){
    if (this.previousSibling && this.previousSibling.mvisited)//每次运行第一步去除前一个兄弟节点的背景色
    {
        this.previousSibling.style.backgroundColor = "white";
    }

    if(this.childNodes[1] && !this.childNodes[1].mvisited)//若该节点左子树存在且未访问过，则继续向下寻找最底层左子树，否则执行else
    {
        bind(last,this.childNodes[1])();
    }
    else//当前节点为最底层左子树时执行
    {

        this.style.backgroundColor = "yellow";
        this.mvisited = true;

        if (this.nextSibling && this.id != "super") {
            setTimeout(last.bind(this.nextSibling), 500);  //0.5s后遍历右子树（兄弟节点）
        }
        if (!this.childNodes[1] && !this.nextSibling || this.firstChild.data == "bike" || this.firstChild.data == "program" || this.id == "super")
        {
            setTimeout(bind(removeColor,this),500);  //为某些不方便改变背景色的节点硬绑定removeColor函数
        }
        if (this.previousSibling && this.previousSibling.mvisited && !this.nextSibling || this.parentNode.childNodes.length == 2) {
            setTimeout(bind(last, this.parentNode), 500); //当该节点为最底层右子树时，0.5s后遍历父节点
        }
        if(this.id == "super")//遍历结束，执行重置函数
        {
            reset();
        }
    }
}

function reset(){
    let a = document.getElementsByTagName("div");
    for(let i = 0;i < a.length;i ++)
    {
        a[i].mvisited = false; //为每个树节点设置的参数，表示是否已遍历过
    }
}

reset();

document.getElementById("ergodic").addEventListener("click",bind(last,document.getElementById("super")));
