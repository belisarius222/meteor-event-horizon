Package.describe({
	summary: "reactive event system for Meteor"
});

Package.on_use(function (api) {
	api.use('coffeescript','client');
	api.add_files([
		'session-extras.js'
	],'client');
});