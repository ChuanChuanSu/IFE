/**
 * Created by Su Chuan on 2017/7/12.
 */
let float = document.getElementsByClassName("float")[0];
let button = document.getElementsByTagName("button");
let size = document.getElementById("size");

function disappear(){
    float.style.display = "none";
    blo.initialize();
}

function appear(){
    float.style.display = "block";
}

button[0].addEventListener("click",appear);
button[1].addEventListener("click",disappear);
button[2].addEventListener("click",disappear);

function Horizon(float){
    this.target = float;
    this.initialize();
}

Horizon.prototype = {
    initialize:function(){
        this.setDrag();
        this.setSize();
        document.body.style.height = document.documentElement.clientHeight + "px";

    },

    setDrag:function(){
        let block = this.target;
        let isDown = false;
        block.addEventListener("mousedown",function(){
            isDown = true;
            if(isDown)
            {
                let x = event.clientX - block.offsetLeft;
                let y = event.clientY - block.offsetTop;
                //block.style.transform = null;
                function move(){
                    if(isDown)
                    {
                        block.style.left = event.clientX - x + "px";
                        block.style.top = event.clientY - y + "px";

                    }
                }
                document.addEventListener("mousemove",move);
                //block.addEventListener("mouseup",() => {isDown = false;});
                document.addEventListener("mouseup",function(){
                    isDown = false;
                });
            }
        })
    },

    setSize:function(){
        let block = this.target;
        let isDown = false;
        size.addEventListener("mousedown",function(){
           isDown = true;
            if(isDown) {
                let x = event.clientX;
                let y = event.clientY;


                block.style.left = block.offsetLeft + 'px';
                block.style.top = block.offsetTop + "px";


                function getStyle(node, property){//取得样式表的函数
                    if (node.style[property]) {
                        return node.style[property];

                    }
                    else if (node.currentStyle) {
                        return node.currentStyle[property];
                    }
                    else if (document.defaultView && document.defaultView.getComputedStyle) {
                        var style = document.defaultView.getComputedStyle(node, null);
                        return style.getPropertyValue(property);
                    }
                    return null;
                }

                let width = parseInt(getStyle(block,"width"),10);
                let height = parseInt(getStyle(block,"height"),10);
                document.addEventListener("mouseup",function(){
                    isDown = false;
                });
                document.addEventListener("mousemove",() => {
                    if(isDown)
                    {
                        let hor = event.clientX - x;
                        let ver = event.clientY - y;
                        block.style.width = width + hor + "px";
                        block.style.height = height + ver + "px";

                    }
                });
            }
            event.stopPropagation();
        });
    }
};

let blo = new Horizon(float);