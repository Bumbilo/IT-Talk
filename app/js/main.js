$(document).ready(function () {

// ---------- Semantic methods ----------

	$('.ui.dropdown').dropdown();
	$('.ui.dropdown.empl').dropdown();
	$('.inline.dropdown').dropdown();
	$('select.dropdown').dropdown();

 // ---------- Show sidebar ----------

$('.user_list_content .ui.row.segment .column')
	.not('.column:first-child')
	.not('.column:last-child')
	.on('click', function(){$('.demo.sidebar.sidebar_profile')
		.sidebar('setting', 'transition', 'overlay')
		.sidebar('toggle');
		if(!$(this).parent().find('input[type=checkbox]').is(':checked')){
			$(this).parent().css('backgroundColor', '#fafafa');
		}
   
	});

 // ---------- Change color ----------

	$('body').on('click', function() {
		var elem = $('.user_list_content .ui.row.segment');
		if($('.demo.sidebar.sidebar_profile').hasClass('visible')){
			for( var i = 0; i < elem.length; i++) {
				if( $(elem[i]).css('backgroundColor') !== 'rgb(255, 253, 240)') {
					$(elem[i]).css('backgroundColor', '')
				} 
			}
		}
	});

 // ---------- Mouseenter graphic profile ----------

		$('.diagram_content_profile ').on('mouseenter', function(event){
			var elem = $(this).find('.profile_info, .option_days');
			var elem_hover = $(this).find('.profile_info_hover, .option_days_hover');
			var enter =  setTimeout(function () {
				if(elem.is(':visible')){
					elem.fadeOut(50);
					elem_hover.delay(70).fadeIn(50);
				} else {
					return false
				}

			}, 175);

		});

 // ---------- Mouseleave graphic profile ----------

		$('.diagram_content_profile ').on('mouseleave', function(event){
			var elem = $(this).find('.profile_info, .option_days');
			var elem_hover = $(this).find('.profile_info_hover, .option_days_hover');
			var leave = setTimeout(function () {
				if(elem.is(':visible') == false){
					elem_hover.fadeOut(100);
					elem.delay(150).fadeIn(100);
				} else {
					return false
				}

			}, 175)
		});

 // ---------- Chanege checkbox and count ----------

$('.user_list .user_list_content .ui.checkbox').on('click', function(e){
	var template = 
	`
<div class="ui container grid celected_count">
	<div class="ui row">
		<div class="twelve wide column">
			<span class="count"></span><span>item selected</span>
		</div>
		<div class="four wide column">
			<div class="header_top_deleteDown">
				<div class="ui dropdown empl">
					<input type="hidden" name="gender">
					<div class="text">Action</div>
					<i class="dropdown icon"></i>
					<div class="menu">
						<div class="item" data-value="male">Action1</div>
						<div class="item" data-value="female">Action</div>
					</div>
				</div>
				<i class="trash icon"></i>
			</div>
		</div>
	</div>
</div>
	`;
var template2 = 
` 
<div class="ui container grid">
	<div class="ui row">
		<div class="twelve wide column">
			<div class="ui transparent left icon input">
				<input type="text" placeholder="Search...">
				<i class="search icon"></i>
			</div>
		</div>
		<div class="four wide column">
			<div class="header_top_searchDown">
				<div class="ui dropdown empl">
					<input type="hidden" name="gender">
					<div class="text">All employees</div>
					<i class="dropdown icon"></i>
					<div class="menu">
						<div class="item" data-value="male">All employees</div>
						<div class="item" data-value="female">All employees</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
`;
	// Chanege color if checkbox is checked
	if($(this).parent().parent().css('backgroundColor') !== 'rgb(255, 253, 240)'){
		if($(this).find('input[type=checkbox]').is(':checked')){
			$(this).parent().parent().css('backgroundColor', 'rgb(255, 253, 240)');
		} 
	} else {
			if(!$(this).find('input[type=checkbox]').is(':checked')){
			$(this).parent().parent().css('backgroundColor', '');
		} 
	}
	// Count checked
	var leng = $('.user_list .user_list_content').find('input[type=checkbox]:checked').length;
	// Chenge color if checked more than one
	if(leng > 0) {
		$('.header_top_search .ui.container.grid').remove();
		$('.header_top_search').append(template).css('background', '#fffdf0');
		document.querySelector('.header_top_search .count').innerHTML =  leng + ' ';
	} else {
		$('.header_top_search .ui.container.grid').remove();
		$('.header_top_search').append(template2).css('background', '');
	}
	// Active semantic method for new div
	$('.ui.dropdown').dropdown();
	$('.ui.dropdown.empl').dropdown();
	$('.inline.dropdown').dropdown();
	$('select.dropdown').dropdown();
});

});
