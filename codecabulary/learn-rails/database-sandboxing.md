---
path: /codecabulary/learn-rails/database-sandboxing
title: Database Sandboxing
---
[[Codecabulary Home|codecabulary]] / [[Learn Rails|codecabulary/learn-rails]] / Database Sandboxing

<!-- ---title: Database Sandboxing -->

When learning Active Record, it can be useful to play around in the [Rails console](google.com) without actually affecting your database. Since the Rails console automatically loads the [Rails environment](google.com), which includes the models and database you're using, you'll be able to affect your database using [Active Record methods](google.com) unless you create a sandbox. 

To do this, you can run:

	rails console --sandbox
	
As you tinker with your models, you'll see your SQL INSERTS and DELETES and UPDATES prefaced by SAVEPOINT lines, indicating that the database will be rolled back on quit.

	1.9.3-p392 :001 > Event.create(location: "Back Bay")
   	(0.2ms)  SAVEPOINT active_record_1
   	
Which Rails will remind you of on exit.
	
	1.9.3-p392 :002 > exit
   	(0.6ms)  ROLLBACK
	
