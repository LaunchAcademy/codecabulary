[[Codecabulary Home|codecabulary]] / [[Learn Test Driven Development|codecabulary/learn-test-driven-development]] / [[RSpec|Learn Test Driven Development|codecabulary/learn-test-driven-development/rspec]] / Setting Up RSpec

<!-- ---title: Setting Up RSpec -->

This article describes the RSpec setup process in both Ruby and Rails. After setting up in whichever environment you'll be developing in, we recommend you check out Writing Specs in RSpec, and then move on to RSpec Methods.

#### In Plain Ruby:

* Conventionally, you'll establish the following file structure:

```
└── application_root
    ├── Gemfile
    ├── Rakefile
    ├── lib
    │   └── app.rb
    └── spec
        └── app_spec.rb
```

* The .rspec folder can contain this setting to colorize the output in the traditional red/green style:

```
--color
```

* The Gemfile also only need include a single line:

```
gem 'rspec'
```

* Set `rspec spec` as your default rake task. That way, you can simply type `rake` to run your test suite. Save this code to your Rakefile:

```
begin
  require 'rspec/core/rake_task'
  RSpec::Core::RakeTask.new(:spec)
  task default: :spec
rescue LoadError
  # rspec not available
end
```

* In the app_spec.rb file, at the top of the document, make sure to include:

```
require "rspec"
require_relative "../lib/app"
```

Where app is the name of the app.rb file. Now your spec file is linked to your app file, and ready to rock and roll. Make sure, if you haven't already got the gem in the current gemset that you run:

```
bundle
```

To download RSpec and get moving.

#### In Rails

* When generating a new Rails project, add the flag `--skip-test-unit` to supress creation of the test directory associated with the default Test::Unit framework.
* In the Gemfile, add:

```
group :development, :test do
  gem 'rspec-rails'
end
```

* The development mode RSpec files add RSpec-specific generators
* Test mode includes files to run the tests
* RSpec is a dependency of RSpec-Rails, so we don't need to include it.
* Run this snippet to configure Rails to use RSpec in place of Test::Unit

```
rails generate rspec:install
```

* If the system complains about a lack of Javascript runtime (mine didn't), visit the execs page at GitHub for a list of possibilities (Hartl recommends Node).
* Run bundle:

```
bundle
```

#### Retroactively Adding RSpec to a Rails App

* Use `-s` to skip editing existing files
* Use `--migration=false` to skip creation of migration files ( note that '-s' should take care of this )

```
rails g model ModelName -s --migration=false
```

#### Updating the test database

* Check for pending migrations and load the test schema

```
rake db:test:prepare
```

* Type `rake` to run your test suite.
