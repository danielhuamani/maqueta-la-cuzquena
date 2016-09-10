jQuery(document).ready(function($) {
	$(".vehiculos").click(function(event) {
		/* Act on the event */
		var valor_data = $(this).attr('data-vehiculo');
		var class_active = "."+valor_data
		/*$(".pop-active").removeClass('pop-active');*/
		$(class_active).addClass('pop-active');
		$(".overlay").addClass('overlay-block')
	});
	$(".icon-cross").click(function(event) {
		/* Act on the event */
		$(".pop-active").removeClass('pop-active');
		$(".overlay").removeClass('overlay-block')

	});
	$(".overlay").click(function(event) {
		/* Act on the event */
		$(".pop-active").removeClass('pop-active');
		$(".overlay").removeClass('overlay-block')
	});
});
