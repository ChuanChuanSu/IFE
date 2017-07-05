/**
 * Created by Su Chuan on 2017/7/4.
 */

//类似于function.bin()函数，运用硬绑定改变函数的this
function bind(fn,obj)
{
    return function(){
        fn.apply(obj,arguments);
    }
}

//部分节点去除背景颜色
function removeColor(){
    this.style.backgroundColor = "white";
}

//后序遍历
function last(){
    if (this.previousSibling && this.previousSibling.mvisited)//每次运行第一步去除前一个兄弟节点的背景色
    {
        this.previousSibling.style.backgroundColor = "white";
    }

    if(this.firstChild && !this.firstChild.mvisited)//若该节点左子树存在且未访问过，则继续向下寻找最底层左子树，否则执行else
    {
        bind(last,this.firstChild)();
    }
    else//当前节点为最底层左子树时执行
    {

        this.style.backgroundColor = "yellow";
        this.mvisited = true;

        if (this.nextSibling && this.id != "root") {
            setTimeout(last.bind(this.nextSibling), 500);  //0.5s后遍历右子树（兄弟节点）
        }
        if (!this.firstChild && !this.lastChild && !this.nextSibling || this.id == "lr" || this.id == "rr" || this.id == "r" || this.id == "root")
        {
            setTimeout(bind(removeColor,this),500);  //为某些不方便改变背景色的节点硬绑定removeColor函数
        }
        if (this.previousSibling && this.previousSibling.mvisited) {
            setTimeout(bind(last, this.parentNode), 500); //当该节点为最底层右子树时，0.5s后遍历父节点
        }
        if(this.id == "root")//遍历结束，执行重置函数
        {
            reset();
        }
    }
}

//中序遍历
function middle(){
    if(this.firstChild && !this.firstChild.mvisited){
        this.parentNode.style.backgroundColor = "white";
        bind(middle,this.firstChild)();
    }
    else
    {
        if (this.firstChild) {
            this.firstChild.style.backgroundColor = "white";
        }

        if (this.parentNode.mvisited) {
            this.parentNode.style.backgroundColor = "white";
        }
        this.style.backgroundColor = "yellow";
        this.mvisited = true;

        //计算延时时间
        //设置父节点计时器
        let p;

        if(this.id == "l")
        {
            p = 4;
        }
        if(this.id == "ll" || this.id == "rl")
        {
            p = 2;
        }
        if(this.id == "lll" || this.id == "lrl" || this.id == "rll" || this.id == "rrl")
        {
            p = 1;
        }

        if (this.lastChild) {
            setTimeout(middle.bind(this.lastChild), 500);
        }
        if (!this.firstChild && !this.lastChild && this.nextSibling || this.firstChild && this.firstChild.mvisited && !this.lastChild.mvisited && this.nextSibling && this.id!="root") {
            setTimeout(bind(middle, this.parentNode), 500 * p);
        }
        if (!this.firstChild && !this.lastChild && !this.nextSibling)
        {
            setTimeout(bind(removeColor,this),500);
        }
        if(this.id == "rrr")
        {
            reset();
        }
    }
}

//先序遍历
function first(){
    this.parentNode.style.backgroundColor = "white";
    this.style.backgroundColor = "yellow";
    //计算延时时间
    let t;
    if(this.id == "root"){t = 8;}
    else if(this.id == "l" || this.id == "r"){t = 4;}
    else if(this.id == "ll" || this.id == "rl" || this.id == "lr" || this.id == "rr"){t = 2;}
    if(this.firstChild){
        //隐式绑定丢失
        //setTimeout(this.firstChild.first,500);
        setTimeout(first.bind(this.firstChild),500);
    }
    if(this.lastChild){
        setTimeout(first.bind(this.lastChild),500 * t);
    }
    if(!this.firstChild && !this.lastChild)
    {
        setTimeout(bind(removeColor,this),500);

    }
    if(this.id == "rrr")
    {
        reset();
    }
}




//重置函数，每次遍历完成后执行，重置参数
function reset(){
    let a = document.getElementsByTagName("div");
    for(let i = 0;i < a.length;i ++)
    {
        a[i].first = first;
        a[i].middle = middle;
        a[i].mvisited = false; //为每个树节点设置的参数，表示是否已遍历过
    }
}

//初始化函数
function initialize(){
    document.getElementById("first").addEventListener("click",bind(first,document.getElementById("root")));
    document.getElementById("middle").addEventListener("click",bind(middle,document.getElementById("root")));
    document.getElementById("last").addEventListener("click",bind(last,document.getElementById("root")));
}

initialize();
reset();