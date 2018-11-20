window.onload = function(){
    (function(){

        var oImgs = document.getElementById('imgs').getElementsByTagName('img'),  //图片数组 
            oLis = document.getElementById('nav').getElementsByTagName('li'),
            container = document.getElementById('banner'),
            banner_bg = document.getElementById('banner_bg'),
            oLeft = document.getElementById('left'),
            oRight = document.getElementById('right'),
            now = 1,    //动态控制(图片, li)数组下标, 完成图片切换
            timer = null;
        for(var i = 0;i < oLis.length;i++){ //li按钮组切换图片
            oLis[i].index = i;
            oLis[i].onmouseover = function(){
                now = this.index    //建立li按钮组与图片组之间 一一 对应的关系
                play();
            }
        }
        function play(){
            show();
            now++;
            if(now == oImgs.length) now = 0;
        }
        function show(){
            for(var i = 0;i < oImgs.length;i++){
                oImgs[i].className = '';    //图片
                oLis[i].className = ''; //li
            }
            oImgs[now].className = 'on';
            oLis[now].className = 'on';
            if(now == 0) banner_bg.style.background = '#FED0B9';
            else if(now == 1) banner_bg.style.background = '#D1B5FC';
            else if(now == 2) banner_bg.style.background = '#FA8CA5';
        }
        function go(){  //主函数
            timer = setInterval(play, 3000);
        }
        go();
        container.onmouseover = function(){
            clearInterval(timer);
        }
        container.onmouseout = function(){
            go();
        }
    })();

    (function(){
        function Time(){
            var oHour = document.getElementById('hour'),
                oMinute = document.getElementById('minute'),
                oSecond = document.getElementById('second'),
                curr = new Date(),
                hour = curr.getHours(),
                minute = curr.getMinutes(),
                second = curr.getSeconds();
            hour = hour < 10 ? '0' + hour : hour;
            minute = minute < 10 ? '0' + minute : minute;
            second = second < 10 ? '0' + second : second;
            oHour.innerText = hour;
            oMinute.innerText = minute;
            oSecond.innerText = second;
        }
        setInterval(Time,1000)
    })();

}