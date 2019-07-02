jQuery(function() {
	//the radio buttons have the values of 1, 2 and 3. Three is always the highest input like Van L and 1 the smallest like Van S, same for helpers and hours
    var vanSize = 0,
        helperCount = 0,
        hourCount = 0,
        costs,
        newCosts;
      //the function changes the html value of the price, to show the correct price in the price div
      function recount() {
        costs = newCosts;
        costsString = "" + costs;
        finalCosts = costsString.replace('.', ',');
        document.getElementById('pricePlaceholder').innerHTML=finalCosts;
    }
    recount();
	//jquery function that runs, when the Van Radio Buttons get changed/clicked
    jQuery("input[name='Van']").change(function() {
		//when changed get the new value of Van
        vanSize = jQuery("input[name='Van']:checked").val();
		//when changed get the new value of helper
        helperCount = jQuery("input[name='helper']:checked").val();
		//when changed get the new value of hours
        hourCount = jQuery("input[name='hour']:checked").val();
		//if condition that checks if the values of the van is 1 and if helper is 1 and hours are 1
        if (vanSize == 1 && helperCount == 1 && hourCount == 1) {
			//if condition is true, the variable newCosts has the value of 34.90
            newCosts= 34.90;
			//if condition is true, show the price div
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 2 && hourCount == 1) {
            newCosts= 49.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 3 && hourCount == 1) {
            newCosts= 64.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 1 && hourCount == 2) {
            newCosts= 64.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 2 && hourCount == 2) {
            newCosts= 94.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 3 && hourCount == 2) {
            newCosts= 122.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 1 && hourCount == 3) {
            newCosts= 129.98;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 2 && hourCount == 3) {
            newCosts= 184.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 3 && hourCount == 3) {
            newCosts= 239.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 1 && hourCount == 1) {
            newCosts= 39.98;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 2 && hourCount == 1) {
            newCosts= 54.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 3 && hourCount == 1) {
            newCosts= 69.98;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 1 && hourCount == 2) {
            newCosts= 69.98;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 2 && hourCount == 2) {
            newCosts= 104.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 3 && hourCount == 2) {
            newCosts= 124.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 1 && hourCount == 3) {
            newCosts= 134.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 2 && hourCount == 3) {
            newCosts= 189.98;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 3 && hourCount == 3) {
            newCosts= 244.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 1 && hourCount == 1) {
            newCosts= 44.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 2 && hourCount == 1) {
            newCosts= 59.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 3 && hourCount == 1) {
            newCosts= 74.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 1 && hourCount == 2) {
            newCosts= 74.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 2 && hourCount == 2) {
            newCosts= 109.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 3 && hourCount == 2) {
            newCosts= 134.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 1 && hourCount == 3) {
            newCosts= 144.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 2 && hourCount == 3) {
            newCosts= 204.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 3 && hourCount == 3) {
            newCosts= 259.99;
            $(".hidden-price").show();
        }
        recount();
    });
	//jquery function that runs, when the helper Radio Buttons get changed/clicked
    jQuery("input[name='helper']").change(function() {
        vanSize = jQuery("input[name='Van']:checked").val();
        helperCount = jQuery("input[name='helper']:checked").val();
        hourCount = jQuery("input[name='hour']:checked").val();
    if (vanSize == 1 && helperCount == 1 && hourCount == 1) {
            newCosts= 34.90;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 2 && hourCount == 1) {
            newCosts= 49.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 3 && hourCount == 1) {
            newCosts= 64.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 1 && hourCount == 2) {
            newCosts= 64.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 2 && hourCount == 2) {
            newCosts= 94.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 3 && hourCount == 2) {
            newCosts= 122.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 1 && hourCount == 3) {
            newCosts= 129.98;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 2 && hourCount == 3) {
            newCosts= 184.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 3 && hourCount == 3) {
            newCosts= 239.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 1 && hourCount == 1) {
            newCosts= 39.98;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 2 && hourCount == 1) {
            newCosts= 54.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 3 && hourCount == 1) {
            newCosts= 69.98;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 1 && hourCount == 2) {
            newCosts= 69.98;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 2 && hourCount == 2) {
            newCosts= 104.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 3 && hourCount == 2) {
            newCosts= 124.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 1 && hourCount == 3) {
            newCosts= 134.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 2 && hourCount == 3) {
            newCosts= 189.98;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 3 && hourCount == 3) {
            newCosts= 244.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 1 && hourCount == 1) {
            newCosts= 44.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 2 && hourCount == 1) {
            newCosts= 59.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 3 && hourCount == 1) {
            newCosts= 74.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 1 && hourCount == 2) {
            newCosts= 74.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 2 && hourCount == 2) {
            newCosts= 109.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 3 && hourCount == 2) {
            newCosts= 134.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 1 && hourCount == 3) {
            newCosts= 144.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 2 && hourCount == 3) {
            newCosts= 204.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 3 && hourCount == 3) {
            newCosts= 259.99;
            $(".hidden-price").show();
        }
        recount();
    });
	//jquery function that runs, when the hour Radio Buttons get changed/clicked
    jQuery("input[name='hour']").change(function() {
        vanSize = jQuery("input[name='Van']:checked").val();
        helperCount = jQuery("input[name='helper']:checked").val();
        hourCount = jQuery("input[name='hour']:checked").val();
        if (vanSize == 1 && helperCount == 1 && hourCount == 1) {
            newCosts= 34.90;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 2 && hourCount == 1) {
            newCosts= 49.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 3 && hourCount == 1) {
            newCosts= 64.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 1 && hourCount == 2) {
            newCosts= 64.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 2 && hourCount == 2) {
            newCosts= 94.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 3 && hourCount == 2) {
            newCosts= 122.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 1 && hourCount == 3) {
            newCosts= 129.98;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 2 && hourCount == 3) {
            newCosts= 184.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 1 && helperCount == 3 && hourCount == 3) {
            newCosts= 239.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 1 && hourCount == 1) {
            newCosts= 39.98;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 2 && hourCount == 1) {
            newCosts= 54.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 3 && hourCount == 1) {
            newCosts= 69.98;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 1 && hourCount == 2) {
            newCosts= 69.98;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 2 && hourCount == 2) {
            newCosts= 104.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 3 && hourCount == 2) {
            newCosts= 124.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 1 && hourCount == 3) {
            newCosts= 134.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 2 && hourCount == 3) {
            newCosts= 189.98;
            $(".hidden-price").show();
        }
        else if (vanSize == 2 && helperCount == 3 && hourCount == 3) {
            newCosts= 244.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 1 && hourCount == 1) {
            newCosts= 44.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 2 && hourCount == 1) {
            newCosts= 59.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 3 && hourCount == 1) {
            newCosts= 74.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 1 && hourCount == 2) {
            newCosts= 74.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 2 && hourCount == 2) {
            newCosts= 109.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 3 && hourCount == 2) {
            newCosts= 134.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 1 && hourCount == 3) {
            newCosts= 144.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 2 && hourCount == 3) {
            newCosts= 204.99;
            $(".hidden-price").show();
        }
        else if (vanSize == 3 && helperCount == 3 && hourCount == 3) {
            newCosts= 259.99;
            $(".hidden-price").show();
        }
        recount();
    });
});
