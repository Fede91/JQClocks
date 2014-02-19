/*
* jQClocks.js
* Author: Fede91
* Github: https://github.com/Fede91
*
* Made available under a MIT License:
* http://www.opensource.org/licenses/mit-license.php
*
* jQClocks.js Copyright Fede91 2014.
*/
(function ( $ ) {
	
	var CLCK_TYPE_01 = 'TYPE_01';
	
	var __drawClock = function(container, cntx, settings){
		var x = container.width() / 2;
		var y = container.height() / 2;
		var r = (container.width()-10) / 2;
		var startAngle = -Math.PI/2;
		var now = new Date();
		endAngle = (now.getSeconds() /60) * (2*Math.PI)+startAngle;
		
		cntx.save();
		cntx.clearRect(0, 0, container.width(), container.height());
		
		cntx.beginPath();
		cntx.arc(x, y, r, startAngle, endAngle, false);
		cntx.lineWidth = settings.circle_lineWidth;
		cntx.strokeStyle = settings.circle_color;
		cntx.stroke();
		
		var h = now.getHours();
		var m = now.getMinutes();
		
		if (now.getHours() < 10)
			h = "0" + now.getHours();
		
		if (now.getMinutes() < 10)
		    m = "0" + now.getMinutes();
		
		$('#val_H').text(h);
		$('#val_M').text(m);
		
		cntx.restore();
		
		var t = setTimeout(function(){
				__drawClock(container, cntx, settings);
				},100);
	}// __drawClock
	
	/**
     * Plugin - jQuery extension
	 */
	$.fn.jQClocks = function(options) {
	    
	    var defaults = {
						type	         : '',
						dimension        : 150,
						font_family      : 'Tahoma',
						font_color       : '#000000',
						font_em          : 2,
						circle_color     : '#00FF00',
						circle_lineWidth : 5
	    			  };
	    
	    var settings = $.extend(defaults, options);
	    
		var container = $(this);
		
		switch (settings.type) {
		    	case CLCK_TYPE_01:
					container.css('width', settings.dimension)
							 .css('height', settings.dimension)
							 .append("<canvas id='jQC-canvas' width='"+settings.dimension+"' height='"+settings.dimension+"'></canvas>")
							 .append("<div id='digt_container' style='text-align: center; position:absolute; top:0px; left:0px; width:"+settings.dimension+"px; height:"+settings.dimension+"px; display: table-row;'>" +
										 "<div style='display: table-cell; vertical-align: middle; width:"+settings.dimension+"px; height:"+settings.dimension+"px;'>" +		
											 "<span id='val_H'   style='font-size: " + settings.font_em + "em; color:" + settings.font_color + "; font-family:" + settings.font_family + ";'>HH</span>" +
											 "<span id='val_sep' style='font-size: " + settings.font_em + "em; color:" + settings.font_color + "; font-family:" + settings.font_family + ";'>:</span>" +
											 "<span id='val_M'   style='font-size: " + settings.font_em + "em; color:" + settings.font_color + "; font-family:" + settings.font_family + ";'>MM</span>" +
										 "</div>"+
									 "</div>");
					var cnvs = document.getElementById('jQC-canvas');
					var cntxt = cnvs.getContext('2d');
					
					__drawClock(container,cntxt,settings);
					break;
		}
		
		return this;
	}; // EndOf: "jQClocks()"
	
}( jQuery ));