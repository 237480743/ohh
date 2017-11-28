$(function() {

	var txt = $('.txt');
	var Ohh_mac = $('.Ohh_mac');
	var Ohh_tel = $('.Ohh_tel');
	var top_big_video = $('.top-big-video');
	var Ohh_wlamp = $('.Ohh_wlamp');
	var Ohh_cl = $('.Ohh_cl');
	var _em = $('.Ohh_lisen em')
	var Ohh_lamp = $('.Ohh_lamp')
	var Ohh_lamps = $('.Ohh_lamp:nth-of-type(2)')
	var Ohh_zhao = $('#Ohh_smart_one_content .Ohh_zhaos')
	var Ohh_zhaos = $('#Ohh_smart_two_content .Ohh_zhao')
	var Ohh_hot = $(".Ohh_hot")
	var Ohh_air_tree = $('.Ohh_air_tree')
	var Ohh_air_con = $('.Ohh_air_con');
	var Ohh_nums = $('.Ohh_tem_nums span')
	var Ohh_con_nums = $('.Ohh_air_con_nums span')
		//根据页面位置控制输入框
	var wq = $(window).height();

	$(window).scroll(function() {
			var height = wq - $(window).scrollTop();
			if(wq >= 860) {

				if(height <= 197) {
					$('#inputs').css('position', 'absolute');
					$('#chat').css('position', 'absolute');
					$('#Ohh_info').css('position', 'absolute');
				} else {
					$('#inputs').css('position', 'fixed');
					$('#chat').css('position', 'fixed');
					$('#Ohh_info').css('position', 'fixed');
				}
			} else {
				if(height <= -331) {
					$('#inputs').css('position', 'absolute');
					$('#chat').css('position', 'absolute');
					$('#Ohh_info').css('position', 'absolute');
				} else {
					$('#inputs').css('position', 'fixed');
					$('#chat').css('position', 'fixed');
					$('#Ohh_info').css('position', 'fixed');
				}
			}
			return false;
		})
		//
	$('#Ohh_info .closeTks').on('click', function() {
		$('#Ohh_info').hide();
		return false;
	})
	$('.plus').on('click', function() {
		$('.alertTk').toggle();
		return false;
	})
	$('.closeTk').on('click', function() {
			$('.alertTk').hide();
		})
		//控制说明显示消失
	$('.Ohh_lamp').on('click', function() {
		$('#Ohh_smart_two .Ohh_smart_sm_info').hide();
		$('#Ohh_smart_two #Ohh_smart_two_content .Ohh_mac .Ohh_smart_sm_infos').hide();
		$('#Ohh_smart_two  .Ohh_smart_sm_info:nth-of-type(1)').toggle();
	})
	$('.Ohh_tem').on('click', function() {
		$('#Ohh_smart_two  .Ohh_smart_sm_info').hide();
		$('#Ohh_smart_two #Ohh_smart_two_content .Ohh_mac .Ohh_smart_sm_infos').hide();
		$('#Ohh_smart_two  .Ohh_smart_sm_info:nth-of-type(2)').toggle();
		console.log($('#Ohh_smart_two  .Ohh_smart_sm_info:nth-of-type(2)').length)
	})
	$('.Ohh_tel').on('click', function() {
		$('#Ohh_smart_two  .Ohh_smart_sm_info').hide();
		$('#Ohh_smart_two #Ohh_smart_two_content .Ohh_mac .Ohh_smart_sm_infos').hide();
		$('#Ohh_smart_two  .Ohh_smart_sm_info:nth-of-type(3)').toggle();
	})
	$('.Ohh_water').on('click', function() {
		$('#Ohh_smart_two  .Ohh_smart_sm_info').hide();
		$('#Ohh_smart_two #Ohh_smart_two_content .Ohh_mac .Ohh_smart_sm_infos').hide();
		$('#Ohh_smart_two  .Ohh_smart_sm_info:nth-of-type(4)').toggle();
	})
	$('.Ohh_air').on('click', function() {
		$('#Ohh_smart_two #Ohh_smart_two_content .Ohh_mac .Ohh_smart_sm_infos').hide();
		$('#Ohh_smart_two  .Ohh_smart_sm_info').hide();
		$('#Ohh_smart_two  .Ohh_smart_sm_info:nth-of-type(5)').toggle();
	})
	$('.Ohh_mac').on('click', function() {
			$('#Ohh_smart_two  .Ohh_smart_sm_info').hide();
			$('#Ohh_smart_two  .Ohh_smart_sm_infos').toggle();
		})
		//第一层楼的
	$('.Ohh_wlamp').on('click', function() {
		$('#Ohh_smart_one  .Ohh_smart_sm_info').hide();
		$('#Ohh_smart_one  .Ohh_smart_sm_info:nth-of-type(1)').toggle();
	})
	$('.Ohh_air_con').on('click', function() {
		$('#Ohh_smart_one  .Ohh_smart_sm_info').hide();
		$('#Ohh_smart_one  .Ohh_smart_sm_info:nth-of-type(2)').toggle();
	})
	$('.Ohh_td').on('click', function() {
		$('#Ohh_smart_one  .Ohh_smart_sm_info').hide();
		$('#Ohh_smart_one  .Ohh_smart_sm_info:nth-of-type(3)').toggle();
	})
	$('.Ohh_hot').on('click', function() {
		$('#Ohh_smart_one  .Ohh_smart_sm_info').hide();
		$('#Ohh_smart_one  .Ohh_smart_sm_info:nth-of-type(4)').toggle();
	})
	$('.Ohh_lisen').on('click', function() {
		$('#Ohh_smart_one  .Ohh_smart_sm_info').hide();
		$('#Ohh_smart_one  .Ohh_smart_sm_info:nth-of-type(5)').toggle();
	})
	$('.Ohh_cl').on('click', function() {
		$('#Ohh_smart_one  .Ohh_smart_sm_info').hide();
		$('#Ohh_smart_one  .Ohh_smart_sm_info:nth-of-type(6)').toggle();
	})
	$('.Ohh_zj').on('click', function() {
		$('#Ohh_smart_one  .Ohh_smart_sm_info').hide();
		$('#Ohh_smart_one  .Ohh_smart_sm_info:nth-of-type(7)').toggle();
	})
	$('.closeTks').on('click', function(e) {
			$(e.target).closest('.Ohh_smart_sm_info').hide();
		})
		//表插件
	$('#myclock').thooClock({
		size: 100,
		showNumerals: false,
		dialColor: '#5a485e',
		dialBackgroundColor: '#fff',
		secondHandColor: '#5bbbb2',
		hourHandColor: '#5a485e',
		minuteHandColor: '#ed7c6b'
	});
	//通过时间控制热水器
	function hotTime() {
		var d = new Date();
		var t = d.getHours();
		if(t == 18 || t == 19) {
			Ohh_hot.addClass('active');
		} else if(t == 20) {
			Ohh_hot.removeClass('active');
		}
	}
	hotTime();
	setInterval(hotTime, 30000)

	//通过时间控制音响和卧室灯
	function listenTime() {
		var d = new Date();
		var t = d.getHours();
		if(t == 7) {
			Ohh_wlamp.addClass('active');
			Ohh_zhao.hide();
			audio.play();
			_em.addClass('active');
		}
	}
	listenTime();
	setInterval(listenTime, 30000)
	$(".send").on('click', function() {
		copy();
		$('#Ohh_info').hide();
		txt.val('')
	})
	txt.keydown(function(e) {

		if(e.keyCode == 13) {
			e.preventDefault();
			copy();
			$('#Ohh_info').hide();
			txt.val(null)
		}

	});

	function copy() {
		$.ajax({
			async: true,
			url: "http://house.5etv.com/web_api.asp?tokenid=19038rhgrefejw9uf4208ygb04ghgxcm&text=" + txt.val(),
			type: "GET",
			data: txt.val(),
			dataType: "jsonp",
			jsonpCallback: 'Ohh_callback',
			contentType: "application/jsonp; charset=utf-8",
			success: function(res) {
				console.log(res);
				var aData = [];
				aData.push(res[1].Content);
				var str = aData.join();
				Ohh_zhaos.clearQueue();
				Ohh_zhao.clearQueue();
				$('#Ohh_smart_one_content .Ohh_zhaoss').clearQueue();
				_em.clearQueue();
				Ohh_cl.clearQueue();
				Ohh_mac.clearQueue();
				$('.Ohh_waters').clearQueue();
				Ohh_hot.clearQueue();
				Ohh_air_con.clearQueue();
				$('.Ohh_td').clearQueue();
				var color_flag = true;

				function color_() {
					if(color_flag) {
						$('#Ohh_smart_two_content .Ohh_common').removeClass('active');
						$('#Ohh_smart_one_content .Ohh_common').removeClass('active');
					} else {
						$('#Ohh_smart_two_content .Ohh_common').addClass('active');
						$('#Ohh_smart_one_content .Ohh_common').addClass('active');
					}
				}

				function colors_() {
					if(Ohh_lamp.hasClass('active')) {
						$('#Ohh_smart_two_content .Ohh_common').removeClass('active');
						$('#Ohh_smart_one_content .Ohh_common').removeClass('active');
					} else {
						$('#Ohh_smart_two_content .Ohh_common').addClass('active');
						$('#Ohh_smart_one_content .Ohh_common').addClass('active');
					}
				}

				function colorss_() {
					if(Ohh_wlamp.hasClass('active')) {
						$('#Ohh_smart_one_content .Ohh_common').removeClass('active');
					} else {
						$('#Ohh_smart_one_content .Ohh_common').addClass('active');
					}
				}
				var floor_flag = true;

				function floor_() {
					if(floor_flag) {
						$('body,html').animate({
							scrollTop: 79
						}, 1000);
					} else {
						$('body,html').animate({
							scrollTop: 835
						}, 1000);
					}
				}
				var floor_flags = true;

				function floor_s() {
					if(floor_flag) {
						$('body,html').animate({
							scrollTop: 179
						}, 1000);
					} else {
						$('body,html').animate({
							scrollTop: 835
						}, 1000);
					}
				}
				var goHome_flag = true;

				function goHome() {
					if(goHome_flag) {
						$('body,html').animate({
							scrollTop: 79
						}, 1000)
					} else {
						$('body,html').animate({
							scrollTop: 835
						}, 1000).delay(2000).queue(function() {
							$('body,html').animate({
								scrollTop: 1085
							}, 1000)
							$(this).dequeue();
						});
					}
				}
				//台灯
				
				if(str.indexOf('台灯') >= 0 && str.indexOf('打开') >= 0) {
					floor_s();
					$('.Ohh_td').addClass('active');
					colorss_();
					$('#Ohh_smart_one_content .Ohh_common_si').text('主人，您的台灯已经设定为打开，还有什么需要随时吩咐。');
					$('#Ohh_smart_one_content .Ohh_common_si').fadeIn().delay(3000).fadeOut(300)
				} else if(str.indexOf('台灯') >= 0 && str.indexOf('关闭') >= 0) {
					floor_s();
					$('.Ohh_td').removeClass('active')

				}
				//卫生间
				if(str.indexOf('卫生间') >= 0 && str.indexOf('打开') >= 0) {
					floor_();
					$('#Ohh_smart_one_content .Ohh_zhaoss').hide();
				} else if(str.indexOf('卫生间') >= 0 && str.indexOf('关闭') >= 0) {
					floor_();
					$('#Ohh_smart_one_content .Ohh_zhaoss').show();
				}
				//卧室灯
				if(str.indexOf('卧室灯') >= 0 && str.indexOf('打开') >= 0) {
					floor_();
					Ohh_wlamp.addClass('active');
					color_flag = true;
					color_();
					Ohh_zhao.hide();
					$('#Ohh_smart_one_content .Ohh_common_th').text('主人，您的卧室灯已经设定为打开，还有什么需要随时吩咐。');
					$('#Ohh_smart_one_content .Ohh_common_th').fadeIn().delay(3000).fadeOut(300)
				} else if(str.indexOf('卧室灯') >= 0 && str.indexOf('关闭') >= 0) {
					floor_();
					Ohh_zhao.show();
					Ohh_wlamp.removeClass('active');
				}
				//饮水机
				if(str.indexOf('饮水机') >= 0 && str.indexOf('打开') >= 0) {
					floor_flag = false;
					floor_();
					colors_();
					$('.Ohh_waters').show();
					$('#Ohh_smart_two_content .Ohh_commons_one').text('主人，您的饮水机已经设定为打开，还有什么需要随时吩咐。');
					$('#Ohh_smart_two_content .Ohh_commons_one').fadeIn().delay(3000).fadeOut(300)
				} else if(str.indexOf('饮水机') >= 0 && str.indexOf('关闭') >= 0) {
					$('.Ohh_waters').hide();
				}
				//客厅空调
				if(str.indexOf('客厅空调') >= 0 && str.indexOf('冷') >= 0 || str.indexOf('客厅空调') >= 0 && str.indexOf('打开') >= 0) {
					$('.Ohh_tem_nums').show();
					floor_flag = false;
					floor_();
					colors_();
					$('#Ohh_smart_two_content .Ohh_commons_fo').text('主人，你的客厅空调已设定为打开，还有什么需要随时吩咐。');
					if(str.indexOf('二二') >= 0) {
						Ohh_nums.text(22);
						$('#Ohh_smart_two_content .Ohh_commons_fo').text('主人，你的客厅空调已设定为22度，还有什么需要随时吩咐。');
					}
					if(str.indexOf('二三') >= 0) {
						Ohh_nums.text(23);
						$('#Ohh_smart_two_content .Ohh_commons_fo').text('主人，你的客厅空调已设定为23度，还有什么需要随时吩咐。');
					}
					if(str.indexOf('二四') >= 0) {
						Ohh_nums.text(24);
						$('#Ohh_smart_two_content .Ohh_commons_fo').text('主人，你的客厅空调已设定为24度，还有什么需要随时吩咐。');
					}
					if(str.indexOf('二五') >= 0) {
						Ohh_nums.text(25);
						$('#Ohh_smart_two_content .Ohh_commons_fo').text('主人，你的客厅空调已设定为25度，还有什么需要随时吩咐。');
					}
					if(str.indexOf('二六') >= 0) {
						Ohh_nums.text(26);
						$('#Ohh_smart_two_content .Ohh_commons_fo').text('主人，你的客厅空调已设定为26度，还有什么需要随时吩咐。');
					}
					if(str.indexOf('二七') >= 0) {
						Ohh_nums.text(27);
						$('#Ohh_smart_two_content .Ohh_commons_fo').text('主人，你的客厅空调已设定为27度，还有什么需要随时吩咐。');
					}
					if(str.indexOf('二八') >= 0) {
						Ohh_nums.text(28);
						$('#Ohh_smart_two_content .Ohh_commons_fo').text('主人，你的客厅空调已设定为28度，还有什么需要随时吩咐。');
					}
					if(str.indexOf('二九') >= 0) {
						Ohh_nums.text(29);
						$('#Ohh_smart_two_content .Ohh_commons_fo').text('主人，你的客厅空调已设定为29度，还有什么需要随时吩咐。');
					}
					if(str.indexOf('二一') >= 0) {
						Ohh_nums.text(21);
						$('#Ohh_smart_two_content .Ohh_commons_fo').text('主人，你的客厅空调已设定为21度，还有什么需要随时吩咐。');
					}

					$('#Ohh_smart_two_content .Ohh_commons_fo').fadeIn().delay(3000).fadeOut(300)
				} else if(str.indexOf('客厅空调') >= 0 && str.indexOf('关闭') >= 0) {
					floor_flag = false;
					floor_();

					$('.Ohh_tem_nums').hide();
					$('#Ohh_smart_two_content .Ohh_commons_fo').text('主人，你的客厅空调已设定为关闭，还有什么需要随时吩咐。');
					$('#Ohh_smart_two_content .Ohh_commons_fo').fadeIn().delay(3000).fadeOut(300);
				}
				//卧室空调
				if(str.indexOf('卧室空调') >= 0 && str.indexOf('冷') >= 0 || str.indexOf('卧室空调') >= 0 && str.indexOf('打开') >= 0) {
					$('.Ohh_air_con_nums').show();
					floor_();
					colorss_();
					$('#Ohh_smart_one_content .Ohh_common_se').text('主人，你的卧室空调已设定为打开，还有什么需要随时吩咐。');
					if(str.indexOf('二二') >= 0) {
						Ohh_con_nums.text(22);
						$('#Ohh_smart_one_content .Ohh_common_se').text('主人，你的卧室空调已设定为22度，还有什么需要随时吩咐。');
					}
					if(str.indexOf('二三') >= 0) {
						Ohh_con_nums.text(23);
						$('#Ohh_smart_one_content .Ohh_common_se').text('主人，你的卧室空调已设定为23度，还有什么需要随时吩咐。');
					}
					if(str.indexOf('二四') >= 0) {
						Ohh_con_nums.text(24);
						$('#Ohh_smart_one_content .Ohh_common_se').text('主人，你的卧室空调已设定为24度，还有什么需要随时吩咐。');
					}
					if(str.indexOf('二五') >= 0) {
						Ohh_con_nums.text(25);
						$('#Ohh_smart_one_content .Ohh_common_se').text('主人，你的卧室空调已设定为25度，还有什么需要随时吩咐。');
					}
					if(str.indexOf('二六') >= 0) {
						Ohh_con_nums.text(26);
						$('#Ohh_smart_one_content .Ohh_common_se').text('主人，你的卧室空调已设定为26度，还有什么需要随时吩咐。');
					}
					if(str.indexOf('二七') >= 0) {
						Ohh_con_nums.text(27);
						$('#Ohh_smart_one_content .Ohh_common_se').text('主人，你的卧室空调已设定为27度，还有什么需要随时吩咐。');
					}
					if(str.indexOf('二八') >= 0) {
						Ohh_con_nums.text(28);
						$('#Ohh_smart_one_content .Ohh_common_se').text('主人，你的卧室空调已设定为28度，还有什么需要随时吩咐。');
					}
					if(str.indexOf('二九') >= 0) {
						Ohh_con_nums.text(29);
						$('#Ohh_smart_one_content .Ohh_common_se').text('主人，你的卧室空调已设定为29度，还有什么需要随时吩咐。');
					}
					if(str.indexOf('二一') >= 0) {
						Ohh_con_nums.text(21);
						$('#Ohh_smart_one_content .Ohh_common_se').text('主人，你的卧室空调已设定为21度，还有什么需要随时吩咐。');
					}
					$('#Ohh_smart_one_content .Ohh_common_se').fadeIn().delay(3000).fadeOut(300);
				} else if(str.indexOf('卧室空调') >= 0 && str.indexOf('关闭') >= 0) {
					floor_();
					colorss_();
					$('.Ohh_air_con_nums').hide();
					$('#Ohh_smart_one_content .Ohh_common_se').text('主人，你的卧室空调已设定为关闭，还有什么需要随时吩咐。');
					$('#Ohh_smart_one_content .Ohh_common_se').fadeIn().delay(3000).fadeOut(300);
				}
				//电视
				if(str.indexOf('打开') >= 0 && str.indexOf('电视') >= 0 || str.indexOf('看') >= 0 && str.indexOf('电视') >= 0) {
					floor_flag = false;
					floor_();
					colors_();
					Ohh_tel.addClass('active').delay(1000).queue(function() {
						top_big_video.attr("src", "img/Ohh_smart_animate.mp4");
						top_big_video.show()
						$(this).dequeue();
					})
					$('#Ohh_smart_two_content .Ohh_commons_th').text('主人，电视已设定为打开，还有什么需要随时吩咐。')
					$('#Ohh_smart_two_content .Ohh_commons_th').fadeIn().delay(3000).fadeOut(300)
				} else if(str.indexOf('关闭') >= 0 && str.indexOf('电视') >= 0) {
					floor_flag = false;
					floor_();
					top_big_video.removeAttr("src", "img/Ohh_smart_animate.mp4");
					Ohh_tel.removeClass('active');
				}
				// 窗帘
				if(str.indexOf('窗帘') >= 0 && str.indexOf('关闭') >= 0 || str.indexOf('拉上') >= 0) {
					floor_();
					Ohh_cl.removeClass('actives');
					Ohh_cl.addClass('active');
				} else if(str.indexOf('窗帘') >= 0 && str.indexOf('打开') >= 0) {
					floor_();
					Ohh_cl.removeClass('active');
					Ohh_cl.addClass('actives');
				}
				//音乐
				if(str.indexOf('音响') >= 0 && str.indexOf('播放') >= 0 || str.indexOf('音响') >= 0 && str.indexOf('打开') >= 0) {
					floor_();
					colorss_();
					audio.play();
					_em.addClass('active');
					$('#Ohh_smart_one_content .Ohh_common_fo').text('主人，音响已设定为打开，还有什么需要随时吩咐。');
					$('#Ohh_smart_one_content .Ohh_common_fo').fadeIn().delay(3000).fadeOut(300)
				} else if(str.indexOf('音响') >= 0 && str.indexOf('关闭') >= 0 || str.indexOf('音响') >= 0 && str.indexOf('停止') >= 0) {
					floor_();
					_em.removeClass('active');
					audio.pause();
				}
				//				 扫地机器人
				if(str.indexOf('机器人') >= 0 && str.indexOf('打开') >= 0) {
					Ohh_mac.removeClass('active');
					$('.Ohh_common_mac').text('主人，机器人开始扫地了，还有什么需要随时吩咐。');
					$('.Ohh_common_mac').fadeIn().delay(3000).fadeOut(300)
				} else if(str.indexOf('机器人') >= 0 && str.indexOf('关闭') >= 0 || str.indexOf('机器人') >= 0 && str.indexOf('停止') >= 0) {
					Ohh_mac.addClass('active');
				}
				//卫生间热水器
				if(str.indexOf('热水器') >= 0 && str.indexOf('打开') >= 0) {
					floor_();
					Ohh_hot.addClass('active');
					$('#Ohh_smart_one_content .Ohh_common_fi').text('主人,热水器已打开,还有什么需要请随时吩咐');
					$('#Ohh_smart_one_content .Ohh_common_fi').fadeIn().delay(3000).fadeOut(300)
				} else if(str.indexOf('热水器') >= 0 && str.indexOf('关闭') >= 0) {
					floor_();
					Ohh_hot.removeClass('active');

				}
				//空气净化器	
				console.log(str);
				if(str.indexOf('净化器') >= 0 && str.indexOf('打开') >= 0) {
					console.log(1)
					floor_flag = false;
					floor_();
					Ohh_air_tree.show();
					$('#Ohh_smart_two_content .Ohh_commons_fi').text('主人,空气净化器已打开,还有什么需要请随时吩咐');
					$('#Ohh_smart_two_content .Ohh_commons_fi').fadeIn().delay(3000).fadeOut(300)
				} else if(str.indexOf('净化器') >= 0 && str.indexOf('关闭') >= 0) {
					floor_flag = false;
					floor_();
					Ohh_air_tree.hide();
				}
				//客厅灯	
				if(str.indexOf('客厅灯') >= 0 && str.indexOf('开') >= 0) {
					floor_flag = false;
					floor_();
					Ohh_lamp.addClass('active');
					Ohh_zhaos.hide();
					Ohh_lamps.addClass('active');
					$('#Ohh_smart_two_content .Ohh_commons_se').text('主人,客厅灯已设定为打开,还有什么需要请随时吩咐');
					$('#Ohh_smart_two_content .Ohh_commons_se').fadeIn().delay(3000).fadeOut(300)
				} else if(str.indexOf('客厅灯') >= 0 && str.indexOf('关') >= 0) {
					floor_flag = false;
					floor_();
					Ohh_lamp.removeClass('active')
					Ohh_zhaos.show();
					Ohh_lamps.removeClass('active')
				}
				//场景一    下班
				if(str.indexOf('回家') >= 0 || str.indexOf('回来') >= 0) {
					goHome_flag = false;
					goHome();
					$('#Ohh_smart_two_content .Ohh_common').removeClass('active');
					$('#Ohh_smart_one_content .Ohh_common').removeClass('active');
					Ohh_lamp.addClass('active');

					$('#Ohh_smart_two_content .Ohh_commons_se').text('主人,现在是回家模式,客厅灯自动打开')
					$('#Ohh_smart_two_content .Ohh_commons_se').fadeIn().delay(3000).fadeOut(300)
					Ohh_zhaos.hide().delay(3000).queue(function() {
						$('.Ohh_common_mac').text('主人,现在是回家模式,扫地机器人停止工作')
						$('.Ohh_common_mac').fadeIn().delay(3000).fadeOut(300)
						Ohh_mac.addClass('active').delay(3000).queue(function() {
							$('#Ohh_smart_two_content .Ohh_commons_one').text('主人,现在是回家模式,饮水机自动打开');
							$('#Ohh_smart_two_content .Ohh_commons_one').fadeIn().delay(3000).fadeOut(300)
							$('.Ohh_waters').show().delay(2000).queue(function() {
								$('#Ohh_smart_two_content .Ohh_commons_fi').text('主人,现在是回家模式,空气净化器自动打开');
								$('#Ohh_smart_two_content .Ohh_commons_fi').fadeIn().delay(3000).fadeOut(300)
								Ohh_air_tree.show().delay(2000).queue(function(e) {
									goHome_flag = true;
									goHome();
									Ohh_wlamp.addClass('active');

									$('#Ohh_smart_one_content .Ohh_zhaos').hide().delay(2000).queue(function() {
										$('#Ohh_smart_one_content .Ohh_zhaoss').hide();
										$(this).dequeue();
									});

									$(this).dequeue();
								})
								$(this).dequeue();
							})

							$(this).dequeue();
						});

						$(this).dequeue();
					});
				}
				if(str.indexOf('出门') >= 0 || str.indexOf('离家') >= 0) { //场景二    上班
					floor_flag = true;
					floor_();
					$('#Ohh_smart_two_content .Ohh_common').addClass('active');
					$('#Ohh_smart_one_content .Ohh_common').addClass('active');
					_em.removeClass('active');
					audio.pause();
					Ohh_hot.removeClass('active');
					$('#Ohh_smart_one_content .Ohh_zhaoss').show().delay(2000).queue(function() {
						$('#Ohh_smart_one_content .Ohh_common_th').text('主人,现在是出门模式,卧室灯自动关闭');
						$('#Ohh_smart_one_content .Ohh_common_th').fadeIn().delay(3000).fadeOut(300)
						Ohh_wlamp.removeClass('active');
						$('#Ohh_smart_one_content .Ohh_zhaos').show().delay(1000).queue(function() {
							$('#Ohh_smart_one_content .Ohh_common_si').text('主人,现在是出门模式,台灯自动关闭');
							$('#Ohh_smart_one_content .Ohh_common_si').fadeIn().delay(3000).fadeOut(300)
							$('.Ohh_td').removeClass('active').delay(2000).queue(function() {
								$('#Ohh_smart_one_content .Ohh_common_se').text('主人,现在是出门模式,卧室空调自动关闭')
								$('#Ohh_smart_one_content .Ohh_common_se').fadeIn().delay(3000).fadeOut(300)
								$('.Ohh_air_con_nums').hide().delay(2000).queue(function() {
									floor_flag = false;
									floor_();
									color_flag = true;
									color_();
									$('#Ohh_smart_two_content .Ohh_commons_one').text('主人,现在是出门模式,饮水机自动关闭');
									$('#Ohh_smart_two_content .Ohh_commons_one').fadeIn().delay(3000).fadeOut(300);
									$("#Ohh_smart_two_content .Ohh_commons_one").stop();
									$('.Ohh_waters').hide().delay(3000).queue(function() {
										Ohh_air_tree.hide().delay(3000).queue(function() {
											Ohh_mac.removeClass('active').delay(3000).queue(function() {
												$('.Ohh_common_mac').stop(true);
												Ohh_lamp.removeClass('active');
												$('#Ohh_smart_two_content .Ohh_commons_se').text('主人,现在是出门模式,客厅灯自动关闭');
												Ohh_zhaos.show()
												$(this).dequeue();
											})
											$(this).dequeue();
										});
										$(this).dequeue();
									})

									$(this).dequeue();
								});
								$(this).dequeue();
							});
							$(this).dequeue();
						})

						$(this).dequeue();
					})

				}
				//场景三   睡觉
				if(str.indexOf('睡觉') >= 0) {
					floor_flag = false;
					floor_();
					$('#Ohh_smart_two_content .Ohh_common').addClass('active');
					$('#Ohh_smart_one_content .Ohh_common').addClass('active');
					top_big_video.removeAttr("src", "img/Ohh_smart_animate.mp4");
					Ohh_tel.removeClass('active');
					$('#Ohh_smart_two_content .Ohh_commons_se').text('主人,现在是睡觉模式,客厅灯自动关闭');
					$('#Ohh_smart_two_content .Ohh_commons_se').fadeIn().delay(3000).fadeOut(300);
					Ohh_lamp.removeClass('active');
					Ohh_lamps.removeClass('active');
					$('#Ohh_smart_two_content .Ohh_zhao').show()
						.delay(3000).queue(function() {
							floor_flag = true;
							floor_();
							$('#Ohh_smart_one_content .Ohh_zhaoss').show().delay(2000).queue(function() {
								audio.pause();
								_em.removeClass('active').delay(1000).queue(function() {
									Ohh_cl.removeClass('actives');
									Ohh_cl.addClass('active').delay(3000).queue(function() {

										Ohh_wlamp.removeClass('active');
										$('#Ohh_smart_one_content .Ohh_zhaos').show();
										$('#Ohh_smart_one_content .Ohh_common_th').text('主人,现在是睡觉模式,卧室灯自动关闭。');
										$(this).dequeue();
									});
									$(this).dequeue();
								});
								$(this).dequeue();
							})
							$(this).dequeue();
						})

				}

				//场景四    起床了

				if(str.indexOf('起床') >= 0) {
					floor_flag = true;
					floor_();
					$('#Ohh_smart_two_content .Ohh_common').removeClass('active');
					$('#Ohh_smart_one_content .Ohh_common').removeClass('active');
					$('#Ohh_smart_one_content .Ohh_zhaos').stop();
					$('#Ohh_smart_one_content .Ohh_common_th').text('主人,现在是起床模式,卧室灯自动打开');
					$('#Ohh_smart_one_content .Ohh_common_th').fadeIn().delay(3000).fadeOut(300);
					Ohh_wlamp.addClass('active')
					$('#Ohh_smart_one_content .Ohh_zhaos').hide().delay(3000).queue(function() {
						Ohh_cl.removeClass('active');
						Ohh_cl.addClass('actives').delay(3000).queue(function() {
							$('#Ohh_smart_one_content .Ohh_zhaoss').hide().delay(3000).queue(function() {
								$('#Ohh_smart_one_content .Ohh_common_fo').text('主人,现在是起床模式,音乐自动播放');
								$('#Ohh_smart_one_content .Ohh_common_fo').fadeIn().delay(3000).fadeOut(300);

								audio.play();
								_em.addClass('active').delay(3000).queue(function() {
									floor_flag = false;
									floor_();
									$('#Ohh_smart_two_content .Ohh_commons_se').text('主人,现在是起床模式,客厅灯自动打开');
									Ohh_lamps.addClass('active');

									Ohh_lamp.addClass('active')
									$('#Ohh_smart_two_content .Ohh_zhao').hide();
									$('#Ohh_smart_two_content .Ohh_commons_se').fadeIn().delay(1000).queue(function() {
										$('#Ohh_smart_two_content .Ohh_commons_se').fadeOut();
										$(this).dequeue();
									});

									$(this).dequeue();
								});
								$(this).dequeue();
							});

							$(this).dequeue();
						});
						$(this).dequeue();
					})

				}

				//				观影模式
				if(str.indexOf('观影') >= 0) {
					floor_flag = false;
					floor_();
					$('#Ohh_smart_two_content .Ohh_common').addClass('active');
					$('#Ohh_smart_one_content .Ohh_common').addClass('active');
					$('#Ohh_smart_two_content .Ohh_commons_se').text('主人,现在是观影模式,客厅灯自动关闭');
					$('#Ohh_smart_two_content .Ohh_commons_se').fadeIn().delay(3000).fadeOut(300)
					Ohh_lamp.removeClass('active');
					Ohh_lamps.removeClass('active');
					$('#Ohh_smart_two_content .Ohh_zhao').show().delay(800).queue(function() {
						Ohh_tel.addClass('active').delay(800).queue(function() {
							top_big_video.show()
							top_big_video.attr("src", "img/Ohh_smart_animate.mp4");
							$(this).dequeue();
						})
						$('#Ohh_smart_two_content .Ohh_commons_th').text('主人,现在是观影模式,电视自动打开');
						$('#Ohh_smart_two_content .Ohh_commons_th').fadeIn().delay(3000).fadeOut(300)
						$(this).dequeue();
					});
				}

				$.each(aData, function(i, val) {
					$('#chat').text((val));
					var zhText = val;
					zhText = encodeURI(zhText);
					$("#chat").append("<audio autoplay=\"autoplay\"><source src=\"http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=5&text=" + zhText + "\" type=\"audio/mpeg\"><embed height=\"0\" width=\"0\" src=\"http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=2&text=" + zhText + "\"></audio>");
					$('#chat').show().delay(3000).queue(function() {
						$('#chat').hide();
						$(this).dequeue();
					});
				})

				$.each(res, function(i, val) {
					$('.chat').text((val.Content));
				});
			},
			error: function(res) {
				console.log(1);
			}
		});

	}

})