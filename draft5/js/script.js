
document.getElementById("enter").onclick = function() {
	$(this).animate({'opacity':'0'
	},500);
	
	$(".text").animate({
    opacity: 0,
  	}, 500);
};



