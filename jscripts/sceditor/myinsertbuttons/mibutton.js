function mibimage(but_name) {
	button = '<style type="text/css">'+
		'.sceditor-button-'+but_name+' div  {'+
			'background-image: url('+rootpath+'/jscripts/sceditor/myinsertbuttons/'+but_name+'.png) !important;'+
		'}'+
	'</style>';	
	return button;
}	
function mibutton(but_name) {
	$.sceditor.command.set(''+but_name+'', {
		exec: function () {
			this.insert('['+but_name+']', '[/'+but_name+']');
		},
		txtExec: ['['+but_name+']', '[/'+but_name+']'],
		tooltip: 'Insert a '+but_name+''
	});
}