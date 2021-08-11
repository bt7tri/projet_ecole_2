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
	// document.getElementById("contents_html").innerHTML="Hi";
	window.open();
}

function show_robot(section_id, past_present)
{
	document.getElementById(section_id).innerHtml=`<article>
			
					<p>
						&nbsp; lalala
					</p>
			
					<div class="div_for_video_img"> 
						<video autoplay loop class="bg-video"> 
							<source src="assets/video/Murphy, it's you - YouTube (360p).mp4" type="video/mp4">
							Do you remember "Robocop"?				
						</video>
					</div>

					<p>
						&nbsp; hehehe
					</p>
			
					<div class="div_for_video_img"> 
						<img src="assets/images/robocop_past.jpg" alt="robocop_past">
					</div>

					<p>
						&nbsp; Hahaha
					</p>
			
				</article>`;
}