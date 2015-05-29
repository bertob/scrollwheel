javascript:(function(){
	console.log("works");
	var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	var scroll_position = window.pageYOffset;
	var total_length = 0;
	var info = document.createElement('p');
	info.id = "scroll-info";
	info.style.position = "fixed";
	info.style.top = "10px";
	info.style.right = "10px";
	info.style.display = "block";
	info.style.margin = "0";
	info.style.padding = "4px 10px";
	info.style.backgroundColor = "#000";
	info.style.color = "white";
	info.style.border = "2px solid #888";
	info.style.borderRadius = "5px";
	info.style.fontSize = "15px";
	info.style.zIndex = "9999999999999999";
	info.innerHTML = "0 screens";
	document.body.appendChild(info);
	window.setInterval(function() {
		var dpi =  window.devicePixelRatio;
		var new_offset = window.pageYOffset;
		var old_offset = scroll_position;
		var difference = old_offset - new_offset;
		if (difference < 0) difference = difference * (-1);
		var info = document.getElementById("scroll-info");
		if (difference != 0) {
			total_length = (total_length + difference) / dpi;
			console.log("l",total_length);
			scroll_position = new_offset;
			info.innerHTML = (Math.round(total_length/height * 100) / 100) + " screens";
		}
	}, 50);
})(document)
