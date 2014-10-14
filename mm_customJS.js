/* Helper Function */
x$.fn.extend({
	show: function(){
		this.css("display", "block");
	},
	hide: function(){
		this.css("display", "none");
	}
});

/* Image Click --> Link to Blog Post */
x$(".section-member-blogEntries .entry-content a, .blogSection-entry .entry-content a").each(
	function(i, elem){
		x$(this).click(function(e){
			e.preventDefault();
			var articleLocation = x$(this).parents(".entry-content").siblings(".entry-readMore").attr("href");
			window.location = articleLocation;
		});
	}
);

/* Modal Light Box */
var modalWindow = x$("#modalWindow");
x$(".entry-content img").each(function(){
	var imgSrc = x$(this).attr("src");
	x$(this).parent().click(function(e){
		e.preventDefault();
		x$(".reponsiveImg").attr("src", imgSrc);
		modalWindow.show();		
	});
});