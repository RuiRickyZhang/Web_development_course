function printReserve(arr){
	n = arr.length;
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}



function isUniform(arr){
	first = arr[0]
	for (var i = 0; i <= arr.length; i++) {
		if(arr[i] !== first){
			return false;
		}
	}

	return true;
}

function sumArray(arr){
	sum = 0;
	arr.forEach(function(ele){
		sum += ele;
	})

	return sum;
}