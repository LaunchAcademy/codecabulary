[[Codecabulary Home|codecabulary]] / [[Learn Ruby|codecabulary/learn-ruby]] / Ruby Regexes

<!-- ---title: Ruby Regexes -->

Regular Expressions are patterns often used to ensure user input matches specific criteria (e.g. to ensure a user has entered a valid email address). 

#### Patterns in Ruby are specified using _/pattern/_

		/Perl|Python/ # Perl or Python
		
		/\d\d:\d\d:\d\d/ # A time, such as 12:35:56

#### Ruby uses the =~ match operator to match strings against regexes

		email = "stupidAOLacct590@aol.com"
		
		email =~ /\d{3}/ 	# If matches, returns the start position of the match
		> 13
		
		email =~ /\d{4}/ 	# If no match, returns nil
		> nil
		
#### Since nil is returned for no match, regexes can be used in conditional piping:

		email = "brett.shollenberger@gmail.com"
		
		if email =~ /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,4}\b/ 
			puts "Logged in."
		end
		
Check out the Regex Cheat Sheet for more info on regular expressions. 
