[[Codecabulary Home|codecabulary]] / [[Development Tools|codecabulary/development-tools]] / Rails Aliases

<!-- ---title: Rails Aliases -->
================================

##_Don't Repeat Yourself_##

-- It's the programmer's mantra. Don't forget that this applies to the command line as well. When you find yourself typing in the same commands, editing the same files, it's time to create an alias...

    function rails_new() { rails new $1 && cd $1 && git init && git add . && git commit -m 'Initial commit'; }

These are some basic commands that we should always execute when making a new rails project. Encapsulating them as a bash command line function and adding it to our .bash_profile or .zshrc, we can easily start a new project and invoke git to keep track of our changes. This function can be called from the terminal as follows:

    rails_new project_name


## Migrate, Rollback, Migrate ##

When making schema changes, you _should_ test that you can undo them without error. This will make your collegues happy and the world a better place. You can also save some keystrokes at the same time:

    alias migrate='rake db:migrate && rake db:rollback && rake db:migrate && rake db:test:prepare'

Call this from the command line by simply typing:

    migrate


## Seriously, Don't Repeat Yourself ##

Ok, so now you swapped out sqlite for postgres, rspec for unit-test. You're using capybara, factory girl, and all the best test suites. Life is good. Only problem is, every time you setup a new project, you have to add all your dependencies, configure your database, type command after command, remember which files to edit. Quit wasting valuable time. Encapsulate all that command-line complexity with an alias:

    function rails_pg() {
      rails new $1 -T -B --database=postgresql

      echo $1 > "$1"/.ruby-gemset
      echo ruby-2.0.0 > "$1"/.ruby-version

      cd $1

      echo /config/database.yml >> .gitignore
      cp config/database.yml config/database.example.yml
      sed "s/username: "$1"/username: /g" config/database.example.yml > config/database.yml

      add_rails_gems
      bundle
      rails generate rspec:install

      git init
      git add .
      git commit -m 'Initial commit'

      subl .;
    }


    function add_rails_gems() {

    echo "

    group :test, :development do
      gem 'rspec-rails'
      gem 'capybara'
      gem 'factory_girl_rails'
      gem 'shoulda'
      gem 'valid_attribute'
      gem 'launchy'
      gem 'quiet_assets'
    end

    " >> Gemfile;

    }

I will explain what is going on here, line-by-line, since this is a rather complex script.

First, we need to title our alias. This is how we will reference the set of commands that will follow.

    function rails_pg() {

Create a new rails project with a name passed in through as an argument ($1). Disable the default test suite, since we will be replacing it (-T). Delay the bundle command (-B), and specifiy that we will be using postgresql as our database (--database=postgresql).

    rails new $1 -T -B --database=postgresql

Define a gemset for this project. The redirection operator creates a new file with the contents that are output by the 'echo' command, which, in this case, is the project name.

Note that defining a gemset will install all nessesary gems to that gemset.  Creation time will increase dramatically.

    echo $1 > "$1"/.ruby-gemset

Tell rvm which version of ruby to use.

    echo ruby-2.0.0 > "$1"/.ruby-version

Change into the directory of our new project

    cd $1

Tell git to ignore our 'database.yml' file. We can append to the .git-ignore file using the '>>' redirection operator.

    echo /config/database.yml >> .gitignore

Make a copy of the database.yml file as an example, since it will not be included in the git repo.

    cp config/database.yml config/database.example.yml

Rails gives us a default username to access our databases. I don't want or need these usernames in my config, so I use sed to replace those lines.

    sed "s/username: "$1"/username: /g" config/database.example.yml > config/database.yml

Here, I call the 'add_rails_gems' function, which adds the necessary dependencies to our Gemfile.

    add_rails_gems

Now that we have defined all of our dependencies, we can bundle.

    bundle

Set up rspec as our default test suite.

    rails generate rspec:install

Initialize our repository

    git init
    git add .
    git commit -m 'Initial commit'

And, finally, invoke our favorite editor and terminate the alias with a semicolon and closing bracket.

    subl .;}

Feel free to download and edit this configuration to suit your needs. The latest iteration of this script can be found [here](https://gist.github.com/radavis/6539343).
