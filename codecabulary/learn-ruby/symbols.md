[[Codecabulary Home|codecabulary]] / [[Learn Ruby|codecabulary/learn-ruby]] / Symbols

<!-- ---title: Symbols -->

> Every reference to a symbol takes up the same space, so using symbols for hash keys, links, and routes is always much more efficient than using strings as keys. 

Like integers, which always have the same object ID in a given program, symbols maintain the same object ID throughout a program. 
		
		# Strings as hash keys use multiple object IDs, and therefore more memory.
		patient1 = { 'ruby' => 'red' }
		patient2 = { 'ruby' => 'programming' }
		
		# Notice the two object IDs for the strings 'ruby' are different; they take up separate space in the 
		# program.
		patient1.each_key { |key| puts key.object_id.to_s }
		>> 211006 # The object ID for the 'ruby' string key object in patient1
		
		patient2.each_key { |key| puts key.object_id.to_s }
		>> 203536 # The object ID for the 'ruby' string key object in patient2
		
#### Instead, consider the following example using symbols as hashes instead of strings.

		# Symbols used as hash keys use the same object ID every time they're referenced in the program.
		patient1 = { ruby: 'red' }
		patient2 = { ruby: 'programming' }
		
		# Notice the object IDs are the same.
		patient1.each_key { |key| puts key.object_id.to_s }
		>> 3918094
		patient2.each_key { |key| puts key.object_id.to_s }
		>> 3918094

#### Ruby assigns unique values to symbols for you (the object IDs), which are maintained throughout each reference in the program. They are immutable (incapable of being changed), and are therefore true constants. Hash keys should be immutable, which is another good reason not to use strings as hash keys.


### 1.9 Key: Value Syntax
		
		# 1.8 and below:
		old_section = { 'oboe' => 'woodwind', 'cello' = > 'string', 'drum' => 'percussion' }
		
		# 1.9 and above:
		section = {
			oboe: 'woodwind',
			cello: 'string',
			drum: 'percussion'
		}
	
