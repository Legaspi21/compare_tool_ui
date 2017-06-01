$(document).ready(function(){
	// Hide circle icon and tooltip
	$('.fa-info-circle').hide();
	$('.product-tooltip').hide();
	
	// Show tooltip, Hide plain info icon, Show circle icon
	$('.product-description').on('mouseenter', function() {
		var description = $(this);
		var info = description.find('.fa-info');
		var infoCircle = description.find('.fa-info-circle');
		var toolTip = description.next();
		
		infoCircle.show();
		info.hide();
		toolTip.show();
	});
	
	// Hide tooltip, Show plain info icon, Hide circle icon
	$('.product-description').on('mouseleave', function() {
		var description = $(this);
		var info = description.find('.fa-info');
		var infoCircle = description.find('.fa-info-circle');
		var toolTip = description.next();
		
		infoCircle.hide();
		info.show();
		toolTip.hide();
	});
})