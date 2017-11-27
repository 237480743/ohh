 $(function(){   
    
    // $('.item').on('click', function() {
    //     $(this).addClass('flip');
    //     function t2() {
    //         $(this).removeClass('flip');
    //     }
    //     setTimeout(t2,1500);
    // });

    // $('.item').on('click', function() {
    //     if ($(this).hasClass('bgc')) {
    //         $(this).removeClass('bgc');
    //     }else {
    //         $(this).addClass('bgc');
    //     }
    // });

    // $('.backdelete').on('click', function() {
    //     $('.delete').fadeToggle(300);
    // });

    // $('.backdelete').on('mouseup', function() {
    //     function t3() {
    //         $('.delete').hide(300);
    //     }
    //     setTimeout(t3,2500);
    // });

    // $('.delete').on('click', function() {
    //     $(this).parent().parent().remove();
    // });

    // $('.item').on('mousedown', function() {
    //     $(this).addClass('flip');
    // });

    // $('.item').on('mouseup', function() {
    //     function t2() {
    //         $('.item').removeClass('flip');
    //     }
    //     setTimeout(t2,1500);
    // }); 
    
//deviceadd==================================================================================
//点击添加
    $('.device-button').on('click', function() {
        // var result = $(".device-input").val();
        // var tipcon = 
        //     '<div class="tip-device">'+
        //     result+
        //     '<span class="del"></span>' +
        //     '</div>';
        // $('.tip').append(tipcon);
        $('.del').css('display','none')
        $('.tip-menu').hide();

// 删除表单  
        $('.del').on('click', function() {
            $(this).parent().remove();
        });
    });

// 删除表单
    $('.tip-device .del').on('click', function() {
        $(this).parent().remove();
    });

// 点击编辑  del显示
    $('.editor').on('click', function() {
        $('.tip-menu').css('display','flex');
        $('.tip-device .del').css('display','block')
        $('.del').css('display','block')  
    })
    $('.ok').parent().on('click', function() {
        $('.tip-device .del').css('display','none')
        $('.del').css('display','none')
        $('.tip-menu').hide(300)
    })

})