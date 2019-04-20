---
path: /codecabulary/ruby-review-for-alpha
---
# Alpha Ruby Review

## Important Classes and Methods

### class: String

Use strings to represent text or other non-numeric data within your program.

* Creating a string using a string _literal_ (note you can use either single quotes or double quotes to create a string):

```ruby
# Create a string using double quotes
name = "Gizmo"
# => "Gizmo"

# Create a string using single quotes
type = 'Mogwai'
# => "Mogwai"
```

* Joining two strings together with the _+_ operator:

```ruby
location = "China" + "Town"
# => "ChinaTown"
```

* Inserting variables into a string with _string interpolation_ (note that string interpolation only works with double quotes):

```ruby
name = "Gizmo"

# Interpolation works when using double quotes
greeting = "Hello, #{name}!"
# => "Hello, Gizmo!"

# But it doesn't do anything for strings in single quotes
farewell = 'Goodbye, #{name}!'
# => "Goodbye, #{name}!"
```

Also note that escape characters (e.g. `\n`) only work in double quotes as well:

```ruby
sentence_with_newline = "This will have a newline at the end\n"
# => "This will have a newline at the end\n"

sentence_without_newline = 'But escape characters wont work in single quotes\n'
# => "But escape characters wont work in single quotes\\n"
```

* Get the length of a string with the `length` method:

```ruby
name = "Gizmo"
name.length
# => 5
```

#### Useful String methods

* **[to_i][3]**: attempts to convert the string to an integer. Use this when reading user input from the command line or reading numbers from a file. Note that this will only work well if the string contains nothing but digits (e.g. `"123"`). If the string is non-numeric (e.g. `"foo"`) then the `to_i` method will return `0` instead:

```ruby
age_string = "28"
age = age_string.to_i
# => 28

# This will not work because the string doesn't contain digits...
max_number_string = "foooooooooooooooooooooo"
max_number = max_number_string.to_i
# => 0
```

* **[to_f][4]**: attempts to convert a string to a float (a number with decimals). Use case is similar to `to_i`. This will also convert non-numeric strings to `0.0`:

```ruby
"10.0".to_f
# => 10.0

"totally not a float".to_f
# => 0.0
```

* **[downcase][2]**: use this method to change the case of all uppercase letters in a string to downcase. This is useful when receiving user input and you want to match a string without worrying about case sensitivity:

```ruby
location = "Boston"
location.downcase
# => "boston"

if location.downcase == "boston"
  # This will work for "Boston", "BOSTON, "boston", etc...
end
```

* **[chomp][1]**: removes a trailing newline character if there is one. This is useful when reading in user input since the user has to hit Enter to submit which also adds the newline character:

```ruby
user_input = gets
# => "user types in something here\n"

# Using .chomp will ensure that the newline character is removed
user_input = gets.chomp
# => "user types in something here"
```

* **[gsub][5]**: (global substitution) replaces all occurrences of one string or pattern with another string. You typically use this if you want to clean up a string by removing all characters of a certain type or substituting them with another value (e.g. replacing all non-alphanumeric characters with an empty string will remove them). This method accepts either strings or regular expressions (regexs) as input:

```ruby
input = "A string with letters, whitespace, and punctuation!"

# Let's remove the punctuation and keep the letters and whitespace
cleaned_input = input.gsub(/[^a-zA-Z\s]/, '')
# => "A string with letters whitespace and punctuation"
```

[1]: http://ruby-doc.org/core-2.0.0/String.html#method-i-chomp
[2]: http://ruby-doc.org/core-2.0.0/String.html#method-i-downcase
[3]: http://ruby-doc.org/core-2.0.0/String.html#method-i-to_i
[4]: http://ruby-doc.org/core-2.0.0/String.html#method-i-to_f
[5]: http://ruby-doc.org/core-2.0.0/String.html#method-i-gsub