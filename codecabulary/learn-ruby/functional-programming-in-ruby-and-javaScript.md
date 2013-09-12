[[Codecabulary Home|codecabulary]] / [[Learn Ruby|codecabulary/learn-ruby]] / Functional Programming in Ruby and JavaScript


<!-- ---title: Functional Programming in Ruby and JavaScript -->

Developers new to JavaScript often deride it as being quite unlike what they're used to, and in terms of object-orientation at least, this is a well-made point. But one of the cool benefits of working with Ruby and JavaScript is that they're both strongly support functional programming techniques, which in Ruby are often considered "advanced" techniques, but in JavaScript are a staple of the language. 

Ruby uses procs, blocks, and lambdas to support flexible, dynamic functional programming:

	%w("the rain in spain").map { |word| word.capitalize } 
	
By adding a few quick functions to JavaScript's library, we can perform the same quick one-liner in JavaScript:

	function map(array, funk) {
	  returnArray = [];
	  for (i = 0; i < array.length; i++) {
	    returnArray.push(funk(array[i]);
	  };
	  return returnArray;
	};
	
	function capitalize(str) {
	  return str[0].toUpperCase() + str.slice(1);
	};
	
	map("the rain in spain".split(" "), function(word) { return capitalize(word) });
	
In this way, anonymous functions in JavaScript work exactly the same way as blocks or lambdas in JavaScript, and can be manipulated on the fly to create highly flexible scripts.
