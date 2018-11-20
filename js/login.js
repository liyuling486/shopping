window.onload = function(){
    (function(){
        var phone = document.getElementById('phone'),
        com = document.getElementById('com'),
        ph_login = document.getElementById('ph_login'),
        com_login = document.getElementById('com_login');
        
        phone.onclick = com.onclick = function(){
            if(this == phone){
                phone.className = 'tit';
                com.className = '';
                ph_login.className = 'content';
                com_login.className = 'content fn';
            }else if(this == com){
                phone.className = '';
                com.className = 'tit';
                ph_login.className = 'content fn';
                com_login.className = 'content';
            }
        }
        var tra = document.getElementById('tra'),
            title = document.getElementById('title'),
            a = true;

        tra.onclick = function(){
            if(a){
                title.style.background = 'url(images/login_pc.png) no-repeat right 10px';
            }else{
                title.style.background = 'url(images/login_erweima.png) no-repeat right 10px';
            }
            a = !a;
        }

    })()
}