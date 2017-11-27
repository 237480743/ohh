$(function(){   
    var nav  = document.querySelectorAll('.nav ul li')
    var ul = document.querySelectorAll('.cont .ul');
    var item = document.querySelectorAll('.item');
    var cont = document.querySelector('.cont');
    var front = document.querySelectorAll('.front');
    var item3 = document.querySelectorAll('.item3');
    var front3 = document.querySelectorAll('.front3');

    var backdelete = document.querySelectorAll('.backdelete');
    var backdeleteq = document.querySelector('.backdeleteq');
    var del = document.querySelectorAll('.delete');
    var delq = document.querySelectorAll('.deleteq');

    var pop = document.querySelector('.pop');   
    var pop2 = document.querySelector('.pop2');
    var popbg = document.querySelector('.popbg');
    var popdel = document.querySelectorAll('.popdel');
    var itemfumn = document.querySelectorAll('.itemfumn');

    var backadd = document.querySelectorAll('.backadd');
    var deldevice = document.querySelector('.deldevice');
    var shortcutflip = document.querySelector('.shortcutflip');
    var shortcut = document.querySelectorAll('.shortcut');
    var backedit = document.querySelectorAll('.back-edit');
    var backrevise = document.querySelectorAll('.back-revise');

//tab切换
    for(var i = 0;i < nav.length;i++){        // i=6 
        (function(i){
            touch.on(nav[i],"tap",function(){
                for(var j = 0;j < ul.length;j++){
                    ul[j].style.display = "none"
                    nav[j].classList.remove('active')
                }
                ul[i].style.display = 'flex'
                nav[i].classList.add('active')
            })
        })(i)
    }

    var n = 0;
    touch.on(cont,"swipeleft",function(){
        n=n+1;
        if(n>=ul.length){
            return n=ul.length-1;
        }else{
            for(var j = 0;j < ul.length;j++){
                ul[j].style.display = "none"
                nav[j].classList.remove('active')
            }
            ul[n].style.display = 'flex'
            nav[n].classList.add('active')
        }
    })

    touch.on(cont,"swiperight",function(){
        n=n-1;
        if(n<0){
            return n=0;
        }else{
            for(var j = 0;j < ul.length;j++){
                ul[j].style.display = "none"
                nav[j].classList.remove('active')
            }
            ul[n].style.display = 'flex'
            nav[n].classList.add('active')
        }
    })

//======================================================================

    for(var i = 0;i < front.length;i++){
        (function(i){ 
            touch.on(front[i],"tap",function(){
                front[i].classList.add('bgc');
                window.open("order.html","_self");
                // if (front[i].classList.contains('clickcolor')) {
                //     front[i].classList.remove('clickcolor');
                // }else {
                //     front[i].classList.add('clickcolor');
                // }
                function t3() {
                    front[i].classList.remove('bgc');
                }
                setTimeout(t3,350);
            })
        })(i) 
    }

    // for(var i = 0;i < shortcut.length;i++){
    //     (function(i){ 
    //         touch.on(shortcut[i],"tap",function(){
    //             if (shortcut[i].classList.contains('clickcolor')) {
    //                 shortcut[i].classList.remove('clickcolor');
    //             }else {
    //                 shortcut[i].classList.add('clickcolor');
    //             }
    //         })
    //     })(i) 
    // }

    var front3 = document.querySelectorAll('.front3');

    for(var i = 0;i < front3.length;i++){
        (function(i){ 
            touch.on(front3[i],"tap",function(){
                front3[i].classList.add('bgc');
                // if (front3[i].classList.contains('clickcolor')) {
                //     front3[i].classList.remove('clickcolor');
                // }else {
                //     front3[i].classList.add('clickcolor');
                // }
                function t3() {
                    front3[i].classList.remove('bgc');
                }
                setTimeout(t3,350);
            })
        })(i) 
    }

    for(var i = 0;i < backedit.length;i++){
        (function(i){ 
            touch.on(backedit[i],"tap",function(){
                window.open("order.html","_self");
            })
        })(i) 
    }

    for(var i = 0;i < backrevise.length;i++){
        (function(i){ 
            touch.on(backrevise[i],"tap",function(){
                window.open("reviseinstall.html","_self");
            })
        })(i) 
    }

    var backedit3 = document.querySelectorAll('.back-edit3');

    for(var i = 0;i < backedit3.length;i++){
        (function(i){ 
            touch.on(backedit3[i],"tap",function(){
                window.open("checkorder.html","_self");
            })
        })(i) 
    }

    var backrevise3 = document.querySelectorAll('.back-revise3');

    for(var i = 0;i < backrevise3.length;i++){
        (function(i){ 
            touch.on(backrevise3[i],"tap",function(){
                window.open("intelligent.html","_self");
            })
        })(i) 
    }

    

//===================================弹窗========================================

    for(var i = 0;i < backadd.length;i++){
        (function(i){
            touch.on(backadd[i],"tap",function(){
                pop.style.display = 'block'
                popbg.style.display = 'block'
            })
        })(i)
    }

    for(var i = 0;i < itemfumn.length;i++){
        (function(i){
            touch.on(itemfumn[i],"tap",function(){
                pop2.style.display = "block";
                popbg.style.display = 'block'
            })
        })(i)
    }

    touch.on(backdelete,"tap",function(){
        for(var i = 0;i<del.length;i++){
            (function(i){
                del[i].style.display = 'block'
                function t4() {
                    del[i].style.display = "none";
                }
                setTimeout(t4,400);
            })(i)
        }
    })

    touch.on(backdeleteq,"tap",function(){
        for(var i = 0;i<delq.length;i++){
            (function(i){
                delq[i].style.display = 'block'
                function t4() {
                    delq[i].style.display = "none";
                }
                setTimeout(t4,4000);
            })(i)
        }
    })
    
    touch.on(popbg,"tap",function(){
        pop2.style.display = 'none'
        pop.style.display = 'none'
        popbg.style.display = 'none'
    })

    for(var i = 0;i < popdel.length;i++){
        (function(i){
            touch.on(popdel[i],"tap",function(){
                pop2.style.display = 'none'
                pop.style.display = 'none'
                popbg.style.display = 'none'
            })
        })(i)
    }

    touch.on(deldevice,"tap",function(){
        for(var i = 0;i<del.length;i++){
            (function(i){
                del[i].style.display = 'block'
                pop2.style.display = 'none'
                popbg.style.display = 'none'
                function t4() {
                    del[i].style.display = "none";
                }
                setTimeout(t4,4000);
            })(i)
        }
    })

//=====================================翻转=======================================

    document.querySelector(".cont").ontouchstart = function(e) { e.preventDefault(); };    
    document.querySelector(".cont3").ontouchstart = function(e) { e.preventDefault(); };

    for(var i = 0;i < front.length;i++){
        (function(i){
            touch.on(front[i],"hold",function(ev){
                item[i].classList.add('flip')
                function t2() {
                    item[i].classList.remove('flip')
                }
                setTimeout(t2,2500);
            })
        })(i)
    }

    for(var i = 0;i < front3.length;i++){
        (function(i){
            touch.on(front3[i],"hold",function(ev){
                item3[i].classList.add('flip');
                function t2() {
                    item3[i].classList.remove('flip');
                }
                setTimeout(t2,2500);
            })
        })(i)
    }

    touch.on(shortcutflip,"tap",function(){
        shortcutflip.classList.add('flip');
        function t2() {
            shortcutflip.classList.remove('flip');
        }
        setTimeout(t2,2500);
    })

    var itemfumn4 = document.querySelector('.itemfumn4');

    touch.on(itemfumn4,"tap",function(){
        itemfumn4.classList.add('flip');
        function t2() {
            itemfumn4.classList.remove('flip');
        }
        setTimeout(t2,2500);
    })

    var backdelete4 = document.querySelector('.backdelete4');

    touch.on(backdelete4,"tap",function(){
        for(var i = 0;i<del.length;i++){
            (function(i){
                del[i].style.display = 'block'
                function t4() {
                    del[i].style.display = "none";
                }
                setTimeout(t4,4000);
            })(i)
        }
    })
})