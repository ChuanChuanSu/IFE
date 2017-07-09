/**
 * Created by Su Chuan on 2017/7/9.
 */
let label = document.getElementsByTagName("label");
let school = document.getElementsByClassName("school")[0];
let work = document.getElementsByClassName("work")[0];
let select = document.getElementsByTagName("select");

let universities = [
    ["北京大学","清华大学","中国人民大学","北京航空航天大学","北京邮电大学"],
    ["南京大学","东南大学","南京航空航天大学","南京理工大学","南京邮电大学"]
];//大学列表

for(let i = 0;i < label.length;i ++)
{
    label[i].addEventListener("click",function(){
        if(event.target.className == "student")
        {
            school.style.display = "flex";
            work.style.display = "none";
            label[1].style.border = "4px solid #0f88eb";//因为preventDefault()，所以样式变化不能靠css
            label[3].style.border = "1px solid black";
        }
        else
        {
            school.style.display = "none";
            work.style.display = "flex";
            label[1].style.border = "1px solid black";
            label[3].style.border = "4px solid #0f88eb";
        }
        event.preventDefault();//防止label绑定的input触发click事件
    });
}

select[0].addEventListener("change",function(){
    let a = event.target.selectedIndex;
    while(select[1].children.length > 0){
        select[1].remove(0);
    }
    for(let i = 0;i < universities[a].length;i ++)
    {
        let newOption = new Option(universities[a][i]);
        select[1].add(newOption,undefined);
    }
});