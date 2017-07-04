/**
 * Created by Su Chuan on 2017/7/3.
 */
window.onload = function() {
    function $(id) {
        return document.getElementById(id);
    }
    var input = document.getElementsByTagName("input");
    var contain = $("contain");
    var btn = document.getElementsByTagName("button");
    var query = {
        arr: [],

        leftPush: function(num) {
            if (this.isLong()) {
                alert("长度超过60");
            }
            this.arr.unshift(num);
            this.show();
        },

        rightPush: function(num) {
            this.arr.push(num);
            if (this.isLong()) {
                alert("长度超过60");
            }
            this.show();
        },

        isEmpty: function(arr) {
            return (this.arr.length === 0);
        },

        isLong: function(arr) {
            return (this.arr.length > 60);
        },

        leftPop: function() {
            if (this.isEmpty()) {
                alert("队列为空");
            }

            alert(this.arr.shift());
            this.show();
        },

        rightPop: function() {
            if (this.isEmpty()) {
                alert("队列为空");
            }

            alert(this.arr.pop());
            this.show();
        },

        show: function(arr) {
            var str = "";
            this.arr.map(function(item) {
                var heights = 2 * item;
                str += '<div style="height: ' + heights + 'px;"></div>';
            });
            contain.innerHTML = str;
        }


    }

    function bubbleSort(arr) {
        var count = 0,
            i = 0;
        timer = setInterval(function() {
            if (count == arr.length) {
                clearInterval(timer);
            }
            if (i == arr.length - 1 - count) {
                i = 0;
                count++;
            }
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                query.show();
            }
            i++;
        }, 5000);
    }

    function selectionSort(arr) {
        var i = 0;
        var j = 1;
        var temp = 0;
        timer = setInterval(function() {
            if (i == arr.length) {
                clearInterval(timer);
            }
            if (j == arr.length) {
                var pos = arr[i];
                arr[i] = arr[temp];
                arr[temp] = pos;
                query.show();
                i++;
                j = i + 1;
                temp = i;
            }
            if (arr[temp] > arr[j]) {
                temp = j;
            }
            j++;
        }, 100)
    }

    var EventUtil = {

        addHandler: function(element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = handler;
            }
        },
        getEvent: function(event) {
            return event ? event : window.event;
        },
        getTarget: function(event) {
            return event.target || event.srcElement;
        }
    }


    var body = $("outer");
    EventUtil.addHandler(body, "click", function(event) {
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);

        switch (target.id) {
            case "btn1":
                var number = parseInt($("num-input").value);
                if (isNaN(number) || number < 10 || number > 100) {
                    alert("请输入正确的数字");
                    $("num-input").value = null;
                    return false;
                }
                query.leftPush(number);
                $("num-input").value = null;
                break;

            case "btn2":
                var number = parseInt($("num-input").value);
                if (isNaN(number) || number < 10 || number > 100) {
                    alert("请输入正确的数字");
                    $("num-input").value = null;
                    return false;
                }
                query.rightPush(number);
                $("num-input").value = null;
                break;

            case "btn3":
                query.leftPop();
                break;

            case "btn4":
                query.rightPop();
                break;

            case "sort1":
                var arr1 = query.arr;
                bubbleSort(arr1);
                break;

            case "sort2":
                var arr2 = query.arr;
                selectionSort(arr2);
                break;
        }
    })

};