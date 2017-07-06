/**
 * Created by Su Chuan on 2017/7/5.
 */
function bind(fn,obj)
{
    return function(){
        fn.apply(obj,arguments);
    }
}

//比bind多传一个参数
function query(fn,obj)
{
    return function(){
        fn.apply(obj,[document.getElementsByTagName("input")[0].value]);
    }
}

function removeColor(){
    this.style.backgroundColor = "white";
}

//查询成功后执行操作
function find(){
    alert("Mission completed!");
    setTimeout(bind(removeColor,this),500);
    document.getElementsByTagName("input")[0].value = null;
}


//使用后续遍历查询
function last(){
    if(event && event.currentTarget.id == "ergodic")//使用事件对象判断target，若是“遍历”操作，则立即清除input中的内容
    {
        document.getElementsByTagName("input")[0].value = null;
    }
    if (this.previousSibling && this.previousSibling.mvisited)//每次运行第一步去除前一个兄弟节点的背景色
    {
        this.previousSibling.style.backgroundColor = "white";
    }

    if(this.firstElementChild && !this.firstElementChild.mvisited)//若该节点左子树存在且未访问过，则继续向下寻找最底层左子树，否则执行else
    {
        query(last,this.childNodes[1])();
    }
    else//当前节点为最底层左子树时执行
    {
        if(arguments[0] == this.firstChild.data)//当执行查询操作，先进行匹配，若匹配成功，则停止查询；否则继续else中的操作
        {
            this.style.backgroundColor = "blue";
            reset();
            arguments = null;
            setTimeout(bind(find,this),500);
            //this.style.backgroundColor = "white";
        }
        else{
            this.style.backgroundColor = "yellow";
            this.mvisited = true;

            if (this.nextSibling && this.id != "super") {
                setTimeout(query(last,this.nextSibling), 500);  //0.5s后遍历右子树（兄弟节点）
            }
            if (!this.firstElementChild && !this.nextSibling || this.firstChild.data == "bike" || this.firstChild.data == "program" || this.id == "super")
            {
                setTimeout(query(removeColor,this),500);  //为某些不方便改变背景色的节点硬绑定removeColor函数
            }
            if (this.previousSibling && this.previousSibling.mvisited && !this.nextSibling || this.parentNode.childNodes.length == 2) {
                setTimeout(query(last,this.parentNode), 500); //当该节点为最底层右子树时，0.5s后遍历父节点
            }
            if(this.id == "super")//遍历结束，执行重置函数
            {
                reset();
            }
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
document.getElementById("query").addEventListener("click",query(last,document.getElementById("super")));
