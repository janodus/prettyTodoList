// Toggles li to "completed" on click
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on x to delete todo
$("ul").on("click", "span", function(event){
	//fadeOut callback function is necessary for REMOVE to work after async event
	$(this).parent().fadeOut(500,function(){
		$(this).remove(); //This is not the span, but the LI being selected from the first $(this)
	});
	event.stopPropagation(); //prevents li click from triggering
});

// Add items to the todo list
$("input[type='text']").keypress(function(event){
	//event is passed, '13' is the enter key to check for
	if(event.which === 13) {
		//variable takes the todo value to add to list
		var todoText = $(this).val();
		//clears the value within the input box after saving the value into todoText.
		$(this).val("");
		//creates new li and add to the list
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	};
});

// Fade input in and out on icon (+) click
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

//A few notes:
//The parents of the elements need to be selected on document load in order for the li selectors to work within a dynamic setting
//The 2nd arg "li" is needed in this case, because of dynamic changes
//Using on() vs click() is necessary in this case.
