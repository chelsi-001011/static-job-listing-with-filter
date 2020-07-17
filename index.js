$(".card-title").hover(function(){
	$(this).toggleClass("card-title-hover");
});

$(".filter-item").hover(function(){
	$(this).toggleClass("filter-item-hover");
});

var button = document.querySelectorAll("button");
var n = button.length;

//if button is already clicked don't append more
for (var i = 0; i <n; i++) {
	button[i].addEventListener("click",function(){
		var spansText = document.querySelectorAll("span.filter-item-tab");
		var m = spansText.length;
		$("div.container.filter-tab.hide").removeClass("hide");
		var flag=1;
		for (var j = 0; j <m; j++) {
			if(spansText[j].textContent === $(this).text())
			{
				flag=0;
				break;
			}
		}
		if(flag){
			$("div.row.filter-tab-content").append("<li><span class='filter-item-tab'>"+$(this).text()+"</span><span class='cross'>&times;</span></li>");
		}
		for (var j = 0; j <n; j++) {
			button[j].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("hide");
		}
		for(var j=0;j<n; j++){
			if($(this).text() === button[j].textContent)
			{
				button[j].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove("hide");
			}
		}
	});
}


// for(var i=0;i<n; i++)
// {
// 	button[i].addEventListener("click",function(){
// 		$("div.container.filter-tab.hide").removeClass("hide");
// 		$("div.row.filter-tab-content").append("<li><span class='filter-item-tab'>"+$(this).text()+"</span><span class='cross'>&times;</span></li>");
// 		for (var j = 0; j < button.length; j++) {
// 			button[j].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("hide");
// 		}
// 		for(var j=0;j<n; j++){
// 			if($(this).text() === button[j].textContent)
// 			{
// 				button[j].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove("hide");
// 			}
// 		}

// 	});
// }

$("div.clear").on("click",function(){
	$("div.container.filter-tab").addClass("hide");
	$("div.row.filter-tab-content").empty();
	for (var j = 0; j <n; j++) {
			button[j].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove("hide");
		}
});

$("div.row.filter-tab-content").on("click","span.cross",function (event) {
	if($(this).parent().siblings().length === 0)
	{
		$("div.container.filter-tab").addClass("hide");
		$("div.row.filter-tab-content").empty();
	for (var j = 0; j <n; j++) {
			button[j].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove("hide");
		}

	}
	else{
	// first hide all items
	for (var j = 0; j < button.length; j++) {
			button[j].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("hide");
		}
		$(this).parent().remove();
		var spansText = document.querySelectorAll("span.filter-item-tab");
		var m = spansText.length;
	for(var i=0;i<spansText.length; i++){
		for(var j=0;j<n;j++){
			if(spansText[i].textContent === button[j].textContent)
			{
				button[j].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove("hide");
			}
		}
		}
	}
	// event.stopPropagation();
});