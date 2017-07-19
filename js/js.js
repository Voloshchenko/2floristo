//scroll spy navbar
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})
//Portfolio gallery info
var portfolioImg = ["1", 
					"img/portfolio/2.jpg", 
					"img/portfolio/3.jpg", 
					"img/portfolio/4.jpg", 
					"img/portfolio/5.jpg", 
					"img/portfolio/6.jpg",
					"img/master-class.jpg",
					"img/our-team/monitor.jpg"
					];

var portfolioBunch = ['<div class="item"><img class="img-responsive" src="img/portfolio/1.jpg"></div>',
						'<div class="item"><img  src="img/portfolio/bunch/1.jpg"></div>',
						'<div class="item"><img class="img-responsive" src="img/portfolio/bunch/2.jpg"></div>',
						'<div class="item"><img class="img-responsive" src="img/portfolio/bunch/3.jpg"></div>',
						'<div class="item"><img class="img-responsive" src="img/portfolio/bunch/4.jpg"></div>',
						'<div class="item"><img class="img-responsive" src="img/portfolio/bunch/5.jpg"></div>',
						'<div class="item"><img class="img-responsive" src="img/portfolio/bunch/6.jpg"></div>',
						'<div class="item"><img class="img-responsive" src="img/portfolio/bunch/7.jpg"></div>',
						'<div class="item"><img class="img-responsive" src="img/portfolio/bunch/8.jpg"></div>',
						'<div class="item"><img class="img-responsive" src="img/portfolio/bunch/9.jpg"></div>'];

var portfolioWedDecore = ['<div class="item"><img src="img/portfolio/2.jpg"></div>',
						'<div class="item"><img src="img/portfolio/weddecore/1.jpg"></div>',
						'<div class="item"><img src="img/portfolio/weddecore/2.jpg"></div>',
						'<div class="item"><img src="img/portfolio/weddecore/3.jpg"></div>',
						'<div class="item"><img src="img/portfolio/weddecore/4.jpg"></div>',
						'<div class="item"><img src="img/portfolio/weddecore/5.jpg"></div>',
						'<div class="item"><img src="img/portfolio/weddecore/6.jpg"></div>',
						'<div class="item"><img src="img/portfolio/weddecore/7.jpg"></div>'];

var portfolioBouqet = ['<div class="item"><img class="img-responsive" src="img/portfolio/3.jpg"></div>',
					   '<div class="item"><img class="img-responsive" src="img/portfolio/bouqet/1.jpg"></div>',
					   '<div class="item"><img class="img-responsive" src="img/portfolio/bouqet/2.jpg"></div>',
					   '<div class="item"><img class="img-responsive" src="img/portfolio/bouqet/3.jpg"></div>',
					   '<div class="item"><img class="img-responsive" src="img/portfolio/bouqet/4.jpg"></div>',
					   '<div class="item"><img class="img-responsive" src="img/portfolio/bouqet/5.jpg"></div>',
					   '<div class="item"><img class="img-responsive" src="img/portfolio/bouqet/6.jpg"></div>',
					   '<div class="item"><img class="img-responsive" src="img/portfolio/bouqet/7.jpg"></div>',
					   '<div class="item"><img class="img-responsive" src="img/portfolio/bouqet/8.jpg"></div>',
					   '<div class="item"><img class="img-responsive" src="img/portfolio/bouqet/9.jpg"></div>',
					   '<div class="item"><img class="img-responsive" src="img/portfolio/bouqet/10.jpg"></div>',
					   '<div class="item"><img class="img-responsive" src="img/portfolio/bouqet/11.jpg"></div>',
					   '<div class="item"><img class="img-responsive" src="img/portfolio/bouqet/12.jpg"></div>',
					   '<div class="item"><img class="img-responsive" src="img/portfolio/bouqet/13.jpg"></div>',
					   '<div class="item"><img class="img-responsive" src="img/portfolio/bouqet/14.jpg"></div>',
					   '<div class="item"><img class="img-responsive" src="img/portfolio/bouqet/15.jpg"></div>',
					   '<div class="item"><img class="img-responsive" src="img/portfolio/bouqet/16.jpg"></div>',
					   '<div class="item"><img class="img-responsive" src="img/portfolio/bouqet/17.jpg"></div>'];

var portfolioWedSetting = ['<div class="item"><img src="img/portfolio/4.jpg"></div>',
						'<div class="item"><img src="img/portfolio/registration/1.jpg"></div>',
						'<div class="item"><img src="img/portfolio/registration/2.jpg"></div>',
						'<div class="item"><img src="img/portfolio/registration/3.jpg"></div>',
						'<div class="item"><img src="img/portfolio/registration/4.jpg"></div>',
						'<div class="item"><img src="img/portfolio/registration/5.jpg"></div>',
						'<div class="item"><img src="img/portfolio/registration/6.jpg"></div>',
						'<div class="item"><img src="img/portfolio/registration/7.jpg"></div>',
						'<div class="item"><img src="img/portfolio/registration/8.jpeg"></div>',
						'<div class="item"><img src="img/portfolio/registration/9.jpeg"></div>',
						'<div class="item"><img src="img/portfolio/registration/10.jpg"></div>',
						'<div class="item"><img src="img/portfolio/registration/11.jpg"></div>',
						'<div class="item"><img src="img/portfolio/registration/12.jpg"></div>',
						'<div class="item"><img src="img/portfolio/registration/13.jpg"></div>'];

var portfolioPresent = ['<div class="item"><img src="img/portfolio/5.jpg"></div>',
						'<div class="item"><img src="img/portfolio/nypresents/1.jpg"></div>',
						'<div class="item"><img src="img/portfolio/nypresents/2.jpg"></div>',
						'<div class="item"><img src="img/portfolio/nypresents/3.jpg"></div>',
						'<div class="item"><img src="img/portfolio/nypresents/4.jpg"></div>',
						'<div class="item"><img src="img/portfolio/nypresents/5.jpg"></div>',
						'<div class="item"><img src="img/portfolio/nypresents/6.jpg"></div>',
						'<div class="item"><img src="img/portfolio/nypresents/7.jpg"></div>',
						'<div class="item"><img src="img/portfolio/nypresents/8.jpg"></div>',
						'<div class="item"><img src="img/portfolio/nypresents/9.jpg"></div>',
						'<div class="item"><img src="img/portfolio/nypresents/10.jpg"></div>'];

var portfolioNewYear = ['<div class="item"><img src="img/portfolio/6.jpg"></div>',
						'<div class="item"><img src="img/portfolio/newyear/1.jpg"></div>',
						'<div class="item"><img src="img/portfolio/newyear/2.jpg"></div>',
						'<div class="item"><img src="img/portfolio/newyear/3.jpg"></div>',
						'<div class="item"><img src="img/portfolio/newyear/4.jpg"></div>',
						'<div class="item"><img src="img/portfolio/newyear/5.jpg"></div>',
						'<div class="item"><img src="img/portfolio/newyear/6.jpg"></div>',
						'<div class="item"><img src="img/portfolio/newyear/7.jpg"></div>',
						'<div class="item"><img src="img/portfolio/newyear/8.jpg"></div>',
						'<div class="item"><img src="img/portfolio/newyear/9.jpg"></div>'];

var indicators = ['<li data-target="#carousel-example-generic" data-slide-to="0"></li>',
    			'<li data-target="#carousel-example-generic" data-slide-to="1"></li>',
    			'<li data-target="#carousel-example-generic" data-slide-to="2"></li>',
    			'<li data-target="#carousel-example-generic" data-slide-to="3"></li>',
    			'<li data-target="#carousel-example-generic" data-slide-to="4"></li>',
    			'<li data-target="#carousel-example-generic" data-slide-to="5"></li>',
    			'<li data-target="#carousel-example-generic" data-slide-to="6"></li>',
    			'<li data-target="#carousel-example-generic" data-slide-to="7"></li>',
    			'<li data-target="#carousel-example-generic" data-slide-to="8"></li>',
    			'<li data-target="#carousel-example-generic" data-slide-to="9"></li>',
    			'<li data-target="#carousel-example-generic" data-slide-to="10"></li>',
    			'<li data-target="#carousel-example-generic" data-slide-to="11"></li>',
    			'<li data-target="#carousel-example-generic" data-slide-to="12"></li>',
    			'<li data-target="#carousel-example-generic" data-slide-to="13"></li>',
    			'<li data-target="#carousel-example-generic" data-slide-to="14"></li>',
    			'<li data-target="#carousel-example-generic" data-slide-to="15"></li>',
    			'<li data-target="#carousel-example-generic" data-slide-to="16"></li>',
    			'<li data-target="#carousel-example-generic" data-slide-to="17"></li>'];

var HTMLcarousel = '<div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="0">' +
						'<ol class="carousel-indicators">'+
  						'</ol>'+
  						'<div class="carousel-inner" role="listbox">'+
  						'</div>'+
					'</div>'+
					'<div><a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">'+
	    					'<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>'+
	    					'<span class="sr-only">Previous</span>'+
  						'</a></div>'+
  						'<div><a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">'+
	    					'<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>'+
	    					'<span class="sr-only">Next</span>'+
	   					'</a></div>';

//add gallery
$("div.overlay").click(function(){
	var img = $(this).siblings('img');
	var over = $('<div class="over">').css({
		'height': '100%',
		'width': '100%',
		'background': 'rgba(0,0,0,.82)',
		'display': 'flex',
		'justify-content':'center',
		'align-items': 'center',
		'position': 'fixed',
		'top': 0,
		'left': 0,
		'opacity': 0.0,
		'cursor': 'pointer',
		'z-index': 9999,
		'text-align': 'center',
		'margin': 'auto',
	});
	over.prepend("<div class='col-md-12 close text-right'><img src='img/close.png' class='pull-right'></div>");	

	over.insertAfter(this).animate({
		'opacity': 1
	}, 300);
	over.children('.close').bind('click', function () {
		over.fadeOut(300, function () {
			over.remove();
		});
	});

	switch (img.attr('id')){
		case "1":
			over.append(HTMLcarousel);
			for (var i = 0 ; i<portfolioBunch.length; i++){
				$('.carousel-inner').append(portfolioBunch[i]);
				$('.item').first().addClass('active');
				$('.carousel-indicators').append(indicators[i]);
				$('li').first().addClass('active');
				console.log('Active' + portfolioBunch[i]);
			}
		break
		case "2":
			over.append(HTMLcarousel);
			for (var i = 0 ; i<portfolioWedDecore.length; i++){
				$('.carousel-inner').append(portfolioWedDecore[i]);
				$('.item').first().addClass('active');
				$('.carousel-indicators').append(indicators[i]);
				$('li').first().addClass('active');
				console.log('Active' + portfolioWedDecore[i]);
			} 
		break
		case "3":
			over.append(HTMLcarousel);
			for (var i = 0 ; i<portfolioBouqet.length; i++){
				$('.carousel-inner').append(portfolioBouqet[i]);
				$('.item').first().addClass('active');
				$('.carousel-indicators').append(indicators[i]);
				$('li').first().addClass('active');
				console.log('Active' + portfolioBouqet[i]);
			}
		break
		case "4":
			over.append(HTMLcarousel);
			for (var i = 0 ; i<portfolioWedSetting.length; i++){
				$('.carousel-inner').append(portfolioWedSetting[i]);
				$('.item').first().addClass('active');
				$('.carousel-indicators').append(indicators[i]);
				$('li').first().addClass('active');
				console.log('Active' + portfolioWedSetting[i]);
			} 
		break
		case "5":
			over.append(HTMLcarousel);
			for (var i = 0 ; i<portfolioPresent.length; i++){
				$('.carousel-inner').append(portfolioPresent[i]);
				$('.item').first().addClass('active');
				$('.carousel-indicators').append(indicators[i]);
				$('li').first().addClass('active');
				console.log('Active' + portfolioPresent[i]);
			}
		break
		case "6":
			over.append(HTMLcarousel);
			for (var i = 0 ; i<portfolioNewYear.length; i++){
				$('.carousel-inner').append(portfolioNewYear[i]);
				$('.item').first().addClass('active');
				$('.carousel-indicators').append(indicators[i]);
				$('li').first().addClass('active');
				console.log('Active' + portfolioNewYear[i]);
			}
		break
		case "7":
		var videoBig = $('<div class="videoYoutube">'+
			'<iframe width="400" height="600" ' +
			'src="https://www.youtube.com/embed/wQertIqpqNg?controls=0"></iframe>'+
			'</div>');
		over.append(videoBig);
		break
		case "8":
		var videoBig = $('<div class="videoYoutube">'+
			'<iframe width="400" height="600" ' +
			'src="https://www.youtube.com/embed/5LOPLYtFWH4?controls=0"></iframe>'+
			'</div>');
		over.append(videoBig);
		console.log("press");
		break
	}

	console.log(img);
});




