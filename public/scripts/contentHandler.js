$(document).ready(function() {

	var option, 
		project,
		url = window.location.href,
		$mainContainer = $('#centered-content'); 

	option = url.match(/option=(.*)/);

	if (option === null) {
		showDiv("main-page", $mainContainer);
	} 
	else {
		if(option[1].indexOf('projects') > -1){
			project = option[1].split("-");
			showDiv(project[0], $mainContainer);
			if(project.length > 1){
				
				scrollToAnchor(project[1]+"-project");
			}
		} else {
			showDiv(option[1], $mainContainer);
		}
	}
});

function showDiv(option, container) {
	container.find('#' + option + "-content").show();
}

function scrollToAnchor(anchor_id){
    var tag = $("#"+anchor_id);
    $('html,body').animate({scrollTop: tag.offset().top},'slow');
}

