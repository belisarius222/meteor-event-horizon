Package.describe({
	summary: "reactive event system for Meteor"
});

Package.on_use(function (api) {
	api.use(['deps', 'coffeescript', 'underscore'], 'client');
	api.add_files([
		'eventHorizon.coffee'
	],'client');
});
