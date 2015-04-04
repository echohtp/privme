var qModel = Backbone.Model.extend({
	defaults:{
		text: 'default',
		checked: false,
		section: 'default'
	}
});

var qCollection = Backbone.Collection.extend({
	model: qModel
});

var qView = Backbone.View.extend({
	initialize: function(){

	},

	render: function(){

	}
});


$(function(){
	questions.keys().foreach()
});