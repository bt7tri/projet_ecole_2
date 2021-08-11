$(function () {	//this is the same with "onload"

	// setInterval(diff_image, 3000);	// it calls javascript function every 3seconds.

	// for image slide
	 var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      loop: true,

      autoplay: {
    	delay: 2000,	/*object: use {}. boolean: add things like "isDisable: true" in the bracket.*/
  	  },

      // pagination
    pagination: {
      el: '.swiper-pagination',
    },


    })

	/*initial contents*/
	$("#contents_html").load("accueil.html" + " #loading-area > *");
	

	
	$("nav a").click(function (event) {
		event.preventDefault(); /* prevent the anchor from moving to the top when a tag is clicked. */

		var target,
			href = $(this).attr('href');


		// var past=$(this).attr('#video_past');
		// var present=$(this).attr('#video_present');

		/*switch (contents_id){
			case 'home':
				target = "home.html";
				break;
			case 'robot':
				target = "robot.html";
				break;
			case 'ameat':
				target = "ameat.html";
				break;
			case 'printhouse':
				target = "printhouse.html";
				break;
			case 'contact':
				target = "contact.html";
				break;
		}*/

		$("#contents_html").load(href + " #loading-area > *");		
  		
  		/*$(href + "#video_past").play();
  		$(href + "#video_present").pause();*/

	});

	$('body').on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
		e.target // newly activated tab
		e.relatedTarget // previous active tab

		console.log(e.target);

		if($(e.target).is("#tab_past")){
			/*document.getElementID('video_present').pause(): same result*/
			$("#video_present")[0].pause();
			$("#video_past")[0].play();
		}else{
			$("#video_past")[0].pause();
			$("#video_present")[0].play();
		}
	})

	// function change_image()
	// {
	// 	var image_box=document.getElementById("picture_main");
	// 	var image_1="assets/images/Advanced Technology.png";
	// 	var image_2="assets/images/robocop_main.jpg";
	// 	var image_3="assets/images/artificial_meat_main.jpg";
	// 	var image_4="assets/images/3dprinting_house_main.jpg";
	// 	var i=0;

	// 	var image_array=new Array(image_1, image_2, image_3, image_4);
	// 	var max=image_array.length;

	// 	for (i=0; i<max; i++)
	// 	{
	// 		image_box.src=image_array[i];
	// 		sleep(2);	// pause 2 seconds.
	// 	}
	
	// }

});

function diff_image(){

	var index = Math.floor(Math.random() * Math.floor(4))

	// var image=document.getElementById("picture_main");
	// var image_src=document.getElementById("picture_main").src;
	// var image_1="assets/images/Advanced Technology.png";
	// var image_2="assets/images/robocop_main.jpg";
	// var image_3="assets/images/artificial_meat_main.jpg";
	// var image_4="assets/images/3dprinting_house_main.jpg";
	
	// var image_array=new Array(image_1, image_2, image_3, image_4);
	// var max=image_array.length;

	switch (index)
	{
		case 0:
			// image.src=image_2;
			document.getElementById("picture_main").src="assets/images/robocop_main.jpg";
			break;
		case 1:
			// image.src=image_3;
			document.getElementById("picture_main").src="assets/images/artificial_meat_main.jpg";
			break;
		case 2:
			// image.src=image_4;
			document.getElementById("picture_main").src="assets/images/3dprinting_house_main.jpg";					
			break;
		case 3:
			// image.src=image_1;
			document.getElementById("picture_main").src="assets/images/Advanced_Technology.png";
			break;
	}


	// image_box.src=image_array[i];
	
}


/*$(function (event) {

	$("#tab_past").click(function(){

		$("#video_present").pause();

	});

	$("#tab_present").click(function(){

		$("#video_past").pause();

	});

});
*/



function show_html_in_Page(iframe_id, contents_id)
{	
	document.getElementById(iframe_id).src="robot.html"
	if (iframe_id=='contents_html')
	{
		switch (contents_id)
		{
			case 'home':
				document.getElementById(iframe_id).src="accueil.html";
				break;
			case 'robot':
				// document.getElementById(iframe_id).src="robot.html";
				document.getElementById(iframe_id).innerHTML="hahaha";
				break;
			case 'ameat':
				document.getElementById(iframe_id).src="artificial_meat.html";
				break;
			case 'printhouse':
				document.getElementById(iframe_id).src="3dprinting_house.html";
				break;
			case 'contact':
				document.getElementById(iframe_id).src="contact.html";				
				break;
		}

	}
	else
	{

	}
}

function test()
{
	document.getElementById('contents_html').src="robot.html";
}

function play_stop_video_load()
{
	var past=document.getElementById('video_past');
	var present=document.getElementById('video_present');

	past.load();
	present.pause();
}

// function change_image()
// {
// 	var image_box=document.getElementById("picture_main");
// 	var image_1="assets/images/Advanced Technology.png";
// 	var image_2="assets/images/Advanced Technology.png";
// 	var image_3="assets/images/Advanced Technology.png";
// 	var image_4="assets/images/Advanced Technology.png";
// 	var i=0;

// 	var image_array=new Array(image_1, image_2, image_3, image_4);
// 	var max=image_array.length;

// 	for (i=0; i<max; i++)
// 	{
// 		image_box.src=image_array[i];
// 		pause(2);	// pause 2 seconds.
// 	}
	
// }