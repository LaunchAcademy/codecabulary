---
path: /learn-rails/naming-migrations
title: Migration Naming Convention
---
[Codecabulary Home](/) / [Learn Rails](/learn-rails) / Migration Naming Convention

<!-- ---title: Migration Naming Convention -->

* Migrations should be named following this convention::
		
		YYYYMMDDHHMMSS_migration_name.rb		# UTC timestamp
		
* The latter part of the name (migration_name) should match the name of the Model class.

		class MigrationName < ActiveRecord::Base
		
* If you generate these files using the built-in Rails migration generator, it will follow these conventions for you.  
