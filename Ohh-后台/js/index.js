$(function(){
	var arr=['table.html','ohh-serve.html'];
	var wrapper=new Vue({
		el:'#wrapper',
		data:{
			show:'',
			tabsarr:['我的工作台'],
			tabsJson:{0:'table.html',}
		},
		methods:{
			drop:function(e){
				if ($(e.target).closest('li').hasClass('active')){
                    $(e.target).closest('li').removeClass('active');
				}else {
                    $('.nav-box .nav li').removeClass('active');
                    $(e.target).closest('li').addClass('active');
				}
                // var c= $(e.target).text();
                // console.log(c);
				// var nub=$('.page-tabs li')
				// console.log(nub.length);
                //
                // $('<li>'+c+'</li>').appendTo($('.page-tabs'));
				// if(nub.length>=2){
                 //    $('.page-tabs li:last-child').replaceWith($('.page-tabs li:nth-of-type(2)'));
				// }
                var breadnav=$('.breadnav');
                var cc= $(e.target).text();
                breadnav.eq(0).show();

                if(cc!=breadnav.eq(0).text(cc)){
                    breadnav.eq(1).hide();
                    breadnav.eq(0).text(cc);
				}

			},
            load:function (e) {
                var c= $(e.target).text();
				var d= $(e.target).closest('ul').prev().text();
                var breadnav=$('.breadnav')
				if(!d){
                    breadnav.eq(0).text(c);
                    breadnav.eq(1).hide();
				}else{

                    breadnav.show();
                    breadnav.eq(0).text(d);
                    breadnav.eq(1).text(c);
				}


                // $('<li>'+d+'</li>').appendTo($('.page-tabs'));

				// console.log(d);
				var src=$(e.target).attr('data-id');
				for(var i=0;i<arr.length;i++){
					if(arr[i]==src){
						$('#content-main iframe').removeClass('active');
						$('.page-tabs .nav li a').removeClass('active');
						var niframe=$('#content-main iframe[data-id="'+src+'"]');
							niframe.addClass('active');
                        $('.page-tabs .nav li').eq(niframe.index()).children('a').addClass('active');
						return ;
					}
				}
				this.tabsarr.push($(e.target).text());
                $('.page-tabs .nav li a').removeClass('active');
                console.log($('.page-tabs .nav li'));
                $('#content-main iframe').removeClass('active');
                $('#content-main').append($('<iframe class="active" src="'+src+ '"></iframe>'));
				arr.push(src);
            },
            tab:function (e) {
                var iframe=$('#content-main iframe');
                var tabs=$('.page-tabs .nav li a');
                var index=$(e.target).closest('li').index();
                var tabsli=$('.page-tabs .nav li');
                tabs.removeClass('active');
				iframe.removeClass('active');
				console.log();
                tabsli.eq(index).children('a').addClass('active');
				iframe.eq(index).addClass('active');
            },
            addask:function(e){
				var ask_show=$('#ohh-know-active');
				ask_show.show();
			},
            deletask:function(e){
				var ask_show=$('#ohh-know-active');
				ask_show.hide();
			},
			serchShow:function(e){
				var serch_show=$('.ohh-serch-ways');
				var serch_select=$('.ohh-serch-select');
				serch_show.toggle();
				if($(e.target).hasClass('ohh-serch-active')){
					 $(e.target).removeClass('ohh-serch-active');
				}else{
					$(e.target).addClass('ohh-serch-active');
				}
				
			},
			serchHtml:function(e){
				var serch_shows=$('.ohh-serch-ways');
				var serch_show=$('.ohh-serch-way');
				var serch_select=$('.ohh-serch-select');
				var q=serch_shows.text();
				var w=serch_show.text();
				serch_shows.text(w);
					serch_show.text(q);
					
                serch_shows.hide();
                if(serch_select.hasClass('ohh-serch-active')){
					 serch_select.removeClass('ohh-serch-active');
				}else{
					serch_select.addClass('ohh-serch-active');
				}
		}

		}
	})

})
