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
        beforeShow: function() {        
        	$(this).addClass('datepicker-btn-active');
        	$('#ui-datepicker-div').css('margin-left', -(130 - $(this).width() / 2) );
        },
        onClose: function () {
        	$(this).removeClass('datepicker-btn-active');
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



	// --------------- Смещение подсказки при наведении ---------------
	$('.big-table').on('mouseenter', '.proj-controls-one', hintDisplace);

	function hintDisplace(event) {
		var self = this,
			$hint =  $(this).find('.hint-block'),
			hintWidth = $hint.outerWidth(),
			$hintPointer = $hint.find('.hint-block-pointer'),
			$parent = $(this).closest('.big-table'),
			parentWidth = $parent.outerWidth();


		// выход из функции т.к. элемент уже посещался
		if ( $hint[0].hasAttribute('data-visited') )  return;

		$hint.css('margin-left', -(hintWidth / 2) );

		// определение смещения подсказки
		var offsetLeft = Math.abs( $hint.offset().left - $parent.offset().left ),
			distance = Math.abs( (offsetLeft + hintWidth + 2) - parentWidth );


		// проверка смещения подсказки за пределы таблицы
		if ( (offsetLeft + hintWidth) < parentWidth ) return;

		$hint.attr('data-visited', 'visited').css('margin-left', '-=' + distance);
		$hintPointer.css('margin-left', '+=' + distance);
	}





	


});