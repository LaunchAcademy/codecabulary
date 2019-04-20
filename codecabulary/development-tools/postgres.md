---
path: /codecabulary/development-tools/postgres
title: Postgres
---
[[Codecabulary Home|codecabulary]] / [[Development Tools|codecabulary/development-tools]] / Postgres

<!-- ---title: Postgres -->

#### Installation:
* Follow the instructions on the [Heroku help page](https://devcenter.heroku.com/articles/heroku-postgresql#local-setup)
* For Mac: [Download Postgres.app](http://postgresapp.com). 
* [Documentation](http://postgresapp.com/documentation) is obviously helpful, but here are the important steps:
1) Add the Postgres bin to your path (e.g. via the .profile, .bashrc, .zshrc, or whatever you use to make sure it gets set for every Terminal session). Ensures you get to use the binaries that ship with Postgres like ``pg_dump`` and ``pg_restore``
		
		### For Postgres
		export PATH="/Applications/Postgres.app/Contents/MacOS/bin:$PATH"
2) Start a new Terminal session to ensure the path is setup correctly:
		
		which psql
		
Which should return the path you just set up; any other bin is incorrect.

3) Run the Postgres app
4) Now you can run Postgres; if you haven't added the Postgres bin to your path, you have to specify a host with the -h or --host flags. 

		psql
		psql -h localhost # You haven't added the bin
