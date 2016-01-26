$(document).ready(function() {
  console.log("Script included!");

	$('input:checkbox').on('change', function() {
		var input = $(this).next('span');
		if (this.checked) {
			$(input).css('text-decoration', 'line-through');
		}
		else {
			$(input).css('text-decoration', 'none');
		}
	})

	$('.instructions').addClass('hidden').hide();
	$('#button').click(function() {
		if ($('.instructions').hasClass('hidden')) {
			$('.instructions').removeClass('hidden').fadeIn(750);
		}
		else {
			$('.instructions').addClass('hidden').fadeOut(750);
		}
	});
});
