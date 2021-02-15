//page2.html function: Show Description when searching
var search = document.querySelector("#search input");
var desc2 = document.getElementsByClassName("desc2");
var desc2Len = desc2.length;

search.addEventListener("keyup", function(e){
	var temp = e.target.value.toLowerCase();
	var items = document.querySelectorAll(".gallery p");

	Array.from(items).forEach((item)=> {
		var iName = item.textContent;
		console.log(iName);
		if(iName.toLowerCase().indexOf(temp) != -1){
			item.parentElement.style.display = "inline";
		} else{
			item.parentElement.style.display = "none";
		}
	});
})
//Console error
for(i=0; i<desc2Len+1; i++)
{
  desc2[i].style.display = "none";
}
