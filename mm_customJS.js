x$(".section-member-blogEntries .entry-content a, .blogSection-entry .entry-content a").each(
	function(i, elem){
		x$(this).click(function(e){
			e.preventDefault();
			var articleLocation = x$(this).parents(".entry-content").siblings(".entry-readMore").attr("href");
			window.location = articleLocation;
		});
	}
);
