/*! Avoid `console` errors in browsers that lack a console. */
(function () { for (var g, h = function () { }, f = "assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd table time timeEnd timeStamp trace warn".split(" "), j = f.length, i = window.console = window.console || {}; j--; ) { g = f[j], i[g] || (i[g] = h) } })();
//-----------------------------------------------
// Logs the start of the file.
console.log( 'START: main.js' );
//-----------------------------------------------

// Configure RequireJS
requirejs.config({
	baseUrl: '/scripts',
	paths: {
		/**-----------------------------------
		 Frameworks/Libraries
		-----------------------------------**/

		'angular': [ // angular does not support AMD out of the box, put it in a shim
			'//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min',
			// If CDN fails, load from this location
			'libs/angular.min'
		],
		'bootstrap': [
			'//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min',
			// If CDN fails, load from this location
			'libs/bootstrap.min'
		],
		'jquery': [
			'//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
			// If CDN fails, load from this location
			'jquery-1.10.2.min'
		],
		'jquery-ui': [
			'//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min',
			// If CDN fails, load from this location
			'jquery-ui-1.10.3.min'
		],
		'modernizr': [
			'//ajax.aspnetcdn.com/ajax/modernizr/modernizr-2.6.2',
			// If CDN fails, load from this location
			'modernizr-2.6.2'
		],
		'domReady': 'domReady',

		/**-----------------------------------
		 jQuery Plugins
		-----------------------------------**/

		'debounced': 'libs/jquery.debouncedresize',
		'echo': 'libs/echo.min',
		'lazyloader': 'libs/jquery.bttrlazyloading.min',
		'lockfix': 'libs/jquery.lockfixed.min',
		'pageslide': 'libs/jquery.pageslide',
		'stroll': 'libs/stroll.min',
		'transitions': 'js/pagetransitions',

		// offcanvas group
		'offcanvas': 'libs/jquery.offcanvas',
		'overthrow': 'libs/overthrow',
		'hammer': 'libs/hammer',
		'jhammer': 'libs/jquery.hammer',

		// pagescroll group
		'mousewheel': 'libs/jquery.mousewheel',
		'mwintent': 'libs/mwheelIntent',
		'jscroll': 'libs/jquery.jscrollpane.min',

		// sly group
		'easing': 'libs/jquery.easing.min',
	    'sly': 'libs/sly.min'
		// -------------------------------------
	},
	shim:
	{
		'angular':
		{
			exports: 'angular'
		},
		'bootstrap':
		{
			deps: ['jquery'],
			exports: 'bootstrap'
		},
		'jquery':
		{
			exports: '$'
		},
		'jquery-ui':
		{
			deps: ['jquery'],
			exports: 'jqueryui'
		},
		'modernizr':
		{
			exports: 'modernizr'
		},

		// -------------------------------------------

		'debounced':
		{
			deps: ['jquery']
		},
		'easing':
		{
			deps: ['jquery']
		},
		'jscroll':
		{
			deps: ['jquery', 'mousewheel', 'mwintent']
		},
		'lazyloader':
		{
			deps: ['jquery']
		},
		'lockfix':
		{
			deps: ['jquery']
		},
		'mousewheel':
		{
			deps: ['jquery']
		},
		'mwintent':
		{
			deps: ['mousewheel']
		},
		'pageslide':
		{
			deps: ['jquery']
		},
		'sly':
		{
			deps: ['easing'],
			exports: 'sly'
		},
		'transitions':
		{
			deps: ['jquery']
		}

		// -------------------------------------------
	}
});

// Enter global require code here...
require(['modernizr'], function ()
{
	require(['jquery', 'domReady'], function ($, domReady)
	{
		// Log that jquery was loaded into the global name-space
		console.log('jQuery', $.fn.jquery, 'loaded!');

		// Google Analytics Tracking
		//$('.dl-trigger').click(function () {
		//	_gaq.push(['_trackEvent', 'Menu Button', 'Navigation', $(this).text()]);
		//});
		//Track navigation for this site.
		//$('.dl-menu a').click(function () {
		//	_gaq.push(['_trackEvent', 'Menu Path', 'Navigation', $(this).text()]);
		//});


		domReady(function ()
		{
			require(['angular', 'bootstrap', 'easing', 'echo', 'offcanvas', 'overthrow', 'hammer', 'jhammer', 'transitions', 'jquery-ui'], function (ng)
			{
				// code //
				// load scripts for desktop, tablet and mobile

				//-- off-canvas -----------------------------
				$("html").offcanvas({
					hasSidebarRight: true
				}); //-------------------------------------------

				//-- lazy-load images ---------------------------
				Echo.init({
					offset: 0,
					throttle: 250
				}); //-------------------------------------------
				// Echo.render(); is also available for non-scroll callbacks

				//-- easing : menu navigation -------------------
				$("ul.menu a").bind("click", function (event) {
					var $anchor = $(this);
					$("html, body").stop().animate({
						scrollTop: $($anchor.attr("href")).offset().top
					}, 1500, "easeInOutExpo");
					event.preventDefault();
				}); //-------------------------------------------
				
				//-- easing : next page -------------------------
				$(".btnNext").bind("click", function (event) {
					var $anchor = $(this);
					$("html, body").stop().animate({
						scrollTop: $($anchor.attr("href")).offset().top
					}, 1500, "easeInOutExpo");
					event.preventDefault();
				}); //-------------------------------------------
				
				//-- off-canvas : tabs -------------------------
				$("#tabs").tabs({ active: 0 });
				$("#menutabs a").click(function () {
					$("#menutabs a").removeClass("active");
					$(this).addClass("active");
				}); //-------------------------------------------
				
				
				//-- Search Code --------------------------------
				$("#dl-search-field").keyup(function () {
					//alert("Handler for key up called.");
				}); //-------------------------------------------
				
				//-- Sidebar BodyLock ---------------------------
				//$("#rightBurger").click(function (e) {
				//    e.preventDefault;
				//    $("body").css("overflow", "hidden");
				//});
				//$("#shutRight").click(function (e) {
				//    e.preventDefault;
				//    $("body").css("overflow", "auto");
				//}); //-------------------------------------------

				var screenwidth = parseInt($(this).width());
				var screenheight = parseInt($(this).height());
				
				if (screenwidth < 1025)
				{
					require([], function () {
						// code //
						// load scripts only for tablet
					
						if (screenwidth < 700)
						{
							require([], function () {
								// code //
								// load scripts only for mobile
							});
						}
					});
				}
				
				if (screenwidth >= 1025)
				{
					require([], function () {
						// code //
						// load scripts only for desktop

						//-- Right-click disabled -----------------------
						//$(document).bind('contextmenu', function (e) {
						//    return false;
						//}); //-----------------------------------------

						//-- easing : back to top -----------------------
						var offset = 220;
						var duration = 500;
						var topButton = $(".back-to-top");
						$(window).scroll(function () {
							if ($(this).scrollTop() > offset) {
								$(topButton).fadeIn(duration);
							} else {
								$(topButton).fadeOut(duration);
							}
						});
						$(topButton).click(function (event) {
							event.preventDefault();
							$("html, body").animate({ scrollTop: 0 }, duration);
							return false;
						}); //------------------------------------------
					});
				}
				
				// Logs the end of the file.
				console.log('END: main.js');
			});
		});
	});
}, function (err) {
	//The errback, error callback
	//The error has a list of modules that failed
	var failedId = err.requireModules && err.requireModules[0];
	if (failedId === 'modernizr') {
		//undef is function only on the global requirejs object.
		//Use it to clear internal knowledge of jQuery. Any modules
		//that were dependent on jQuery and in the middle of loading
		//will not be loaded yet, they will wait until a valid jQuery
		//does load.
		requirejs.undef(failedId);

		console.log('Modernizr did not load');

	}
});