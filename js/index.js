(function() {
	var sections = []
	$("section").each(function() {
		sections.push($(this).waypoint({
			handler: function() {
				moveNavTo(this.element.id)
			}
		}))
	})

	function moveNavTo(id) {
		
	}

	function scrollToById(id) {
		
	}
})()