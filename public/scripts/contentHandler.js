$(document).ready(function() {

	var option, 
		url = window.location.href,
		$mainContainer = $('#centered-content'); 

	option = url.match(/option=(.*)/);

	if (option === null) {
		showDiv("main-page", $mainContainer);
	} else {
		showDiv(option[1], $mainContainer);
	}
});

function showDiv(option, container) {
	container.find('#' + option + "-content").show();
}

