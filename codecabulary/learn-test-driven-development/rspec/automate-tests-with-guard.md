---
path: /codecabulary/learn-test-driven-development/rspec/automate-tests-with-guard
title: Automate Tests with Guard
---
[Codecabulary Home](/codecabulary) / [Learn Test Driven Development](/codecabulary/learn-test-driven-development) / [RSpec|Learn Test Driven Development](/codecabulary/learn-test-driven-development/rspec) / Automate Tests with Guard

<!-- ---title: Automate Tests with Guard -->

Guard is a command line tool that watches a file structure and automates events when changes are made in those files. While Guard has many uses, this article explores how we can use RSpec and Guard together to automate tests.

#### Installing Guard

Once you have RSpec setup in your Rails project, you're ready to add Guard.

1) Add guard-rspec to the Gemfile

		group :development, :test do
			gem 'rspec-rails'		# These are set up from installing RSpec and Capybara
			gem 'capybara'
			gem 'guard-rspec'
		end

2) Add other :test group gems

		group :test do
			gem 'rb-fsevent'
			gem 'growl'
		end

3) `bundle`

4) `guard init spec`

5) To run:

		`bundle exec guard`

6) To exit:

		`exit`

