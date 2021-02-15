var adds = document.querySelectorAll(".add");
adds.forEach(function(add){
	add.addEventListener("click", function(e){
		var cartItem = e.target.parentElement.children[0].textContent;
		var cartPrice = e.target.parentElement.children[1].childNodes[1].textContent;

		var table = document.querySelector("#cart table");
		var tableLen = (table.rows.length) - 1;
		var row = table.insertRow(tableLen).outerHTML ="<tr id='row"+tableLen+"'><td id='item"+tableLen+"'>"+cartItem+"</td><td id='price"+tableLen+"' class='price'>"+cartPrice+"&nbsp; <input type='button' value='Remove' class='delete' onclick='del("+tableLen+")'></td></tr>";

		var prices = document.querySelectorAll(".price");
		var result = 0.0;

		for(var i = 0; i < prices.length; i++){
			result = result + parseFloat(prices[i].textContent);
		}

		var total = document.getElementById("total");
		total.value = result.toFixed(2);

		var totalPurchase = document.getElementById("totalPurchase");
		totalPurchase.outerHTML = "<span id='totalPurchase'>"+result.toFixed(2)+"</span>";
	})
})

function del(num)
{
	document.getElementById("row"+num+"").outerHTML = "";
	
	var result = 0.0;

	var prices = document.querySelectorAll(".price");
	for(var i = 0; i < prices.length; i++){
		result = result + parseFloat(prices[i].textContent);
	}

	var total = document.getElementById("total");
	total.value = result.toFixed(2);

	var totalPurchase = document.getElementById("totalPurchase");
	totalPurchase.outerHTML = "<span id='totalPurchase'>"+result.toFixed(2)+"</span>";
}
