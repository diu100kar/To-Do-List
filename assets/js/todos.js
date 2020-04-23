// Check off specific todos by clicking.
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
})

//click on x to delete todo
$("ul").on("click", ".trash", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove()
	});
	event.stopPropagation();
})	

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span class='material-icons trash'>delete_sweep</span> "+ todoText + "</li>");
	}
})

$('#plus').click(function(){
	$("input[type='text']").fadeToggle();
});