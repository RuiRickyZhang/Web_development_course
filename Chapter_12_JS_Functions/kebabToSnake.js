function kebabToSnake(str){
	//replace all '-' with "_" s
	var newStr = str.replace(/-/g, "_");
	return newStr;
}