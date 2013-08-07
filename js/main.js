$(document).ready(function() {

	// --------------- Подключение custom scroll ---------------
	$(".scroll-box").mCustomScrollbar({
		scrollInertia: 150, 
		autoDraggerLength: false,
		scrollButtons: {
			enable: true
		},
		advanced: {
        	updateOnContentResize: true
    	}
	});



	// --------------- Анимация сворачивания / разворачивания .filter-box ---------------
	$('.filter-btn').on('click', animateFilterBox);

	function animateFilterBox(event) {
		event.preventDefault();		
		var filterBox = $('.filter-box'),
			height = filterBox.find('.filter-wrap').outerHeight(),
			minHeight = 5;

		if (filterBox.hasClass('filter-box-minimized')) {
			$(this).toggleClass('filter-btn-close');
			filterBox.height(minHeight).removeClass('filter-box-minimized').animate({'height': height}, 500);			
		} else {
			$(this).toggleClass('filter-btn-close');
			filterBox.height(height).addClass('filter-box-minimized').animate({'height': minHeight}, 500);
		}
	}

	

	// --------------- Подключение кадендаря jQuery-UI ---------------
	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: '&#x3c;Пред',
		nextText: 'След&#x3e;',
		currentText: 'Сегодня',
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
		'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
		'Июл','Авг','Сен','Окт','Ноя','Дек'],
		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false
	};

    $.datepicker.setDefaults($.datepicker.regional['ru']);

	$('.datepicker-btn').datepicker({
		dateFormat: "yy-mm-dd",
		showOtherMonths: true,
        selectOtherMonths: true,
        onSelect: function (string, object) {
         	$(this).next().text(string);
        }
	});



	// --------------- Выпадающий список ---------------
	$('.drop-list-btn').on('click', showList);
	$('.mCSB_scrollTools').on('click', function(event) { event.stopPropagation() });
	$('.drop-list-wrap').on('click', 'a', hideList);
	$(document).on('click', function(event) { $('.drop-list-wrap:visible').fadeOut(150) });

	function showList(event) {
		event.preventDefault();
		event.stopPropagation();
				
		var listBox = $(this).siblings('.drop-list-wrap'),
			list = $('.drop-list li', listBox),
			scrollBox = $('.scroll-box', listBox),
			scrollNum = 10; // колличетсво элементов списка, при котором появляется скролл

		if (listBox.is(':visible')) {
			listBox.fadeOut(150);
		} else {
			$('.drop-list-wrap').hide();

			if ( list.length > scrollNum){
				listBox.fadeIn(300).css('margin-left', -(listBox.width() / 2 + 8));
			}else{
				listBox.fadeIn(300).css('margin-left', -(listBox.width() / 2));
			}
		}		
	}



	function hideList(event) {
		event.preventDefault();

		if ($(this).closest('.company-select-box').length !== 0) {
			$('.company-select-box-heading').find('a').text($(this).text());
			$('.drop-list-wrap:visible').fadeOut(150);
			return;			
		}

		$('.drop-list-wrap:visible').fadeOut(150);
		$(this).closest('.drop-list-box-text').find('b').text($(this).text()); 
	}	



	// --------------- Подключение jQuery Selectbox ---------------
	$('.custom-select').selectbox({
		onChange: function(val) {
			var id = $(this).attr('sb');
			$('#sbSelector_' + id)[0].className = 'sbSelector ' + val;
		}
	});

	// //--------------- табы на стр 08_Документация ---------------
	// $('.tabsBox').each(function(){
	// 	var $this = $(this),
	// 		control = $('> .tabs.documentation li, > * > .tabs.documentation li', $this),
	// 		pos = 0;
	// 	$('> .tabs-content > li, > * > .tabs-content > li', $this).first().siblings().hide();

	// 	control.click(function(){
	// 		$(this).addClass('tabs-active').siblings().removeClass('tabs-active');
	// 		pos = $(this).index();
	// 		$('> .tabs-content > li, > * > .tabs-content > li', $this).eq(pos).show().siblings().hide();
	// 		return false;
	// 	})
	// });

	// таблица 
	// позиция подсказки
	$('.big-table .hint-block').each(function(){
		$(this).css({
			'margin-left': - $(this).outerWidth(true) / 2 - 6
		});

	});












	


});