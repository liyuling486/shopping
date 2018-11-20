window.onload = function(){
    (function(){
        var num_dec = document.getElementById('num_dec'),
            num_add = document.getElementById('num_add'),
            num_price = document.getElementById('num_price');
        num_dec.onclick = num_add.onclick = function(){
            var num = parseInt(num_price.innerHTML);
            if (this == num_dec){
                num--;
                if(num == 0) num = 1;
            }else if(this == num_add){
                num++;
            }
            num_price.innerHTML = num;
        }

        var size = document.getElementById('size');
        var nSize = size.getElementsByTagName('span');
        size.onclick = function(e){
            var target = e.target || window.event.srcElement;
            if (target == size) {
                target.style.background = '';
                target.style.color = '';
            }
            else {
                for (var i=0;i<nSize.length;i++) {
                    nSize[i].style.background = '';
                    nSize[i].style.color = '';
                }
                target.style.background = '#EF2F23';
                target.style.color = '#fff';
            }
        }
    })()
}