$(document).ready(function(){
	function tooltipTriggerMouseIn() {
		var info = $('.fa-info');
		var infoCircle = $('.fa-info-circle');
		var toolTip = $('.product-tooltip');
		
		info.hide();
		infoCircle.show();
		toolTip.show();
	}
	function tooltipTriggerMouseOut() {
		var info = $('.fa-info');
		var infoCircle = $('.fa-info-circle');
		var toolTip = $('.product-tooltip');
		
		info.show();
		infoCircle.hide();
		toolTip.hide();
	}
	$('.fa-info-circle').hide();
	$('.product-tooltip').hide();
	$('.product-description').hover(tooltipTriggerMouseIn, tooltipTriggerMouseOut);
})