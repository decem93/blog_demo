;
$(function(){
	'use strict';
	var sidebar = $('#sidebar'),//选择侧边栏,创建对象
		mask = $('.mask'),//选择遮蔽层,创建对象
		backButton= $('.back-to-top'),
	sidebar_trigger = $('#sidebar_trigger');//选择首页菜单,创建对象
	function  showSideBar()
	{
	mask.fadeIn();//遮蔽层淡入
	sidebar.css('right',0);//同时显示侧边栏
	}
	function hideSideBar()
		{//当点击其他地方后
			mask.fadeOut();//遮蔽层淡出
			sidebar.css('right',-sidebar.width());//侧边栏缩回-的宽度，隐藏
		}

	sidebar_trigger.on('click',showSideBar)//显示侧边栏方法函数
	mask.on('click',hideSideBar)//隐藏侧边栏方法函数
	backButton.on('click',function(){//点击返回页面滚动
 		$('html,body').animate({
		 			scrollTop:0
 
		 		},800)
	})

		$(window).on('scroll',function(){
			if($(window).scrollTop() > $(window).height())
		 			
		 				backButton.fadeIn();
		 				else
		 					backButton.fadeOut();
})

	$(window).trigger('scroll');
})
	



	

		 

		 	


