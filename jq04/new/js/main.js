//导航
$(function() {

	var $obj = $('.menu ul');
	$obj.find('li').on('mouseenter', function() {
		$(this).addClass("intro");
	});
	$obj.find('li').on('mouseleave', function() {
		$(this).removeClass("intro");
	})

	//导航展开
	$('#men_pro').on('mouseenter', function() {
		$('#menu_hover_bg').stop().animate({
			height: '610px'
		}, 500);
		$('#men_pro .sub_menu').stop().animate({
			height: '610px'
		}, 600);
	})
	$('#men_pro').on('mouseleave', function() {
		$('#menu_hover_bg').stop().animate({
			height: '0'
		}, 600);
		$('#men_pro .sub_menu').stop().animate({
			height: '0'
		}, 500);
	})
	$('#men_sol').on('mouseenter', function() {
		$('#menu_hover_bg').stop().animate({
			height: '340px'
		}, 500);
		$('#men_sol .sub_menu').stop().animate({
			height: '340px'
		}, 600);
	})
	$('#men_sol').on('mouseleave', function() {
		$('#menu_hover_bg').stop().animate({
			height: '0'
		}, 600);
		$('#men_sol .sub_menu').stop().animate({
			height: '0'
		}, 500);
	})
	$('#men_fuwu').on('mouseenter', function() {
		$('#menu_hover_bg').stop().animate({
			height: '340px'
		}, 500);
		$('#men_fuwu .sub_menu').stop().animate({
			height: '340px'
		}, 600);
	})
	$('#men_fuwu').on('mouseleave', function() {
		$('#menu_hover_bg').stop().animate({
			height: '0'
		}, 600);
		$('#men_fuwu .sub_menu').stop().animate({
			height: '0'
		}, 500);
	})
	//服务分类选项卡
    $('#men_fuwu .category li').mouseover(function() {
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('#men_fuwu .content .cont_list').eq(i).show().siblings().hide();
    });				
});

