$(document).ready(function() {

	// Подключение custom scroll
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

	

	// Подключение кадендаря jQuery-UI
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
        selectOtherMonths: true
	});



	// Выпадающий список
	$('.drop-list-btn').on('click', showList);

	function showList(event) {
		event.preventDefault();
		event.stopPropagation();
				
		var list = $(this).siblings('.drop-list-wrap');

		if (list.is(':visible')) {
			list.fadeOut(200);
		} else {
			$('.drop-list-wrap').hide();
			list.fadeIn(300).css('margin-left', -(list.width() / 2));
		}

		list.on('click', 'a', function(event) {	list.fadeOut(150) });
		$(document).on('click', function(event) { list.fadeOut(150) });
	}





});