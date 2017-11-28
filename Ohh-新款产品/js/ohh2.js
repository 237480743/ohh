$(document).ready(function() {
	$(".img").lazyload({
    effect:"fadeIn",
    skip_invisible:false
   });
    var ww=$('#ohh-end h3 a');
    var www=$('.ohh_blounce_close');
    ww.on('click',function(){
    	$('.ohh_blounce').show();
    	$('.ohh_blounce').addClass('zoomIn');
    })
    www.on('click',function(){
    	$('.ohh_blounce').hide();
    })
	var wq = $(window).height();
	$(window).scroll(function() {
		var height = wq - $(window).scrollTop();
		console.log(height);
		if(height < -480) {
			
            $("#ohh-backTop").css("display", 'block')

		}else{
            $("#ohh-backTop").css("display", 'none')
		}
		if(height < -2480) {
			$("#ohh-watch nav").addClass('animated fadeIn');
			$("#ohh-watch nav").css("opacity", '1')
            $("#ohh-watch span").addClass('animated fadeIn');
            $("#ohh-watch span").css("opacity", '1')
			$("#ohh-watch .ohh-watch-dashed").addClass("active-watch-dashed").queue(function() {
			$("#ohh-watch .ohh-watch-big").addClass("active-watch")

			});
			$(this).dequeue();
		}
		if(height < -2201) {
			$("#ohh-temperature nav").addClass('active-nav');
            $("#ohh-temperature span").addClass('active-nav');
			$("#ohh-temperature .ohh-weixin").addClass('active-weixin');

		}
		if(height < -3362) {

			$("#ohh-synthe .ohh-synthe-dashed").addClass("active-synthe-dashed").queue(function() {
				$("#ohh-synthe .ohh-synthe-big").addClass("active-synthe")

			});
			$(this).dequeue();
		}
		if(height < -3929) {
			$("#main .circle").css('opacity','0');
			$("#main .circles").css('opacity','1');
			$("#main .dashed").animate({
				height: "125px",
			}, 1000);
			$(".iphone").addClass("actives").queue(function() {
				$(".hasd").addClass("active_h").queue(function() {
					$(".message").addClass("active_m")
				});
				$(this).dequeue();
			});
			$(this).dequeue();
		}
		if(height < -4681) {
			$("#uzi .circle").css('opacity','0');
			$("#uzi .circles").css('opacity','1');
			$("#uzi .dashed").animate({
				height: "418px",
			}, 1000);
		}
		if(height < -5160) {
			$("#portion .circle").css('opacity','0');
			$("#portion .circles").css('opacity','1');
			$("#portion .dashed").animate({
				height: "418px",
			}, 1000);
		}
		if(height < -5733) {
			$("#theme .circle").css('opacity','0');
			$("#theme .circles").css('opacity','1');
			$("#theme .dashed").animate({
				height: "80px",
			}, 1000);
		}
		if(height < -6165) {
			$("#const .circle").css('opacity','0');
			$("#const .circles").css('opacity','1');
			$("#const .dashed").animate({
				height: "205px",
			}, 1000);
			$('#const .solid').animate({
				width: '245px',
				
			}, 800, function() {
				$('#const .drem-f').css("opacity", "0");
				$('#const .dram-f').css("opacity", "1");
				$('#const span:nth-of-type(1)').css("opacity", "1");
			}).queue(function() {
				$('#const .solid-s').animate({
					width: '260px',
				}, 600, function() {
					$(this).queue(function() {
						$('#const .drem-s').css("opacity", "0");
						$('#const .dram-s').css("opacity", "1");
						$('#const span:nth-of-type(2)').css("opacity", "1");
						$('#const span:nth-of-type(5)').css("opacity", "1");
					})
					$(this).dequeue();
				}).queue(function() {
					$('#const .solid-t').animate({
						height: '204px',
					}, 400, function() {
						$(this).queue(function() {
							$('#const .drem-t').css("opacity", "0");
							$('#const .dram-t').css("opacity", "1");
							$('#const span:nth-of-type(3)').css("opacity", "1");
							$('#const span:nth-of-type(6)').css("opacity", "1");
						})
						$(this).dequeue();
					}).queue(function() {
						$('#const .solid-fo').animate({
							width: '205px',
						}, 200, function() {
							$(this).queue(function() {
								$('#const .drem-fo').css("opacity", "0");
								$('#const .dram-fo').css("opacity", "1");
								$('#const span:nth-of-type(4)').css("opacity", "1");
								$('#const span:nth-of-type(7)').css("opacity", "1");
							})
							$(this).dequeue();
						}).queue(function () {
                            $('#const .solid-fi').animate({
                                height: '204px',
                            }, 200)
                        })
                        $(this).dequeue();
						$(this).dequeue();
					})
					$(this).dequeue();
				})
				
				$(this).dequeue();
			})
		}
		if(height < -6565) {
			$("#form .circle").css('opacity','0');
			$("#form .circles").css('opacity','1');
			$("#form .dashed").animate({
				height: "418px",
			}, 1000);
		}
		if(height < -7237) {
			$("#form-two .circle").css('opacity','0');
			$("#form-two .circles").css('opacity','1');
			$("#form-two .dashed").animate({
				height: "191px",
			}, 1000);
            $("#form-two .mach-b").addClass('mach-b-active');
              $("#form-two .mach-s").addClass('mach-s-active');
                $("#form-two .mach-sm").addClass('mach-sm-active');
			
		}
		if(height < -7845) {
			$("#ohh-contain .ohh-top").addClass("active-ohh-top")
			$("#ohh-contain .light-l").addClass("active-light-l")
			$("#ohh-contain .light-o").addClass("active-light-O")
			$("#ohh-contain .light-z").addClass("active-light-Z")
			$("#ohh-contain .ohh-middle").addClass("active-ohh-middle")
		}
	});
    $('#ohh-backTop').on('click',function(){
    	 var speed=200;
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    })
});