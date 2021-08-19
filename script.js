var keys = document.querySelectorAll('div.button');


for(var i = 0; i < keys.length; i++) {
	keys[i].addEventListener("click", function(e) {
		
		var input = document.querySelector('.top_of_calculator');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		if(btnVal == 'C') {
			input.innerHTML = '';
		}
		
        //да да, я понимаю, что использовать eval опасно, но это легчайший путь:)
		else if(btnVal == '=') {
			var equation = inputVal;
		    input.innerHTML = eval(equation); 
		}

		else {
			input.innerHTML += btnVal;
		}
	} )
}