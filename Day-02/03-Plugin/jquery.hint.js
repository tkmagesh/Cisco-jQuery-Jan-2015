$.fn.hint = function(){
		$(this).each(function(index,elem){
			var hintText = $(elem).attr("hintText");
			$(elem)
				.addClass("hint")
				.val(hintText)
				.focus(function(){
					var $this = $(this);
					if ($this.val() === hintText){
						$this.removeClass("hint");
						$this.val("")
					}
				})
				.blur(function(){
					var $this = $(this);
					if ($this.val() === ""){
						$this.addClass("hint");
						$this.val(hintText);
					}
				});	
		})
		
	}