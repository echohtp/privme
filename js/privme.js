var id = 0;
var qModel = Backbone.Model.extend({
	defaults:{
		text: 'default',
		checked: false,
		section: 'default',
		id: -1
	}
});

var qCollection = Backbone.Collection.extend({
	model: qModel
});

var qView = Backbone.View.extend({ 
	el: '#questions_container',

	render: function(){
		console.log('render all the things');
		var template = _.template( $('#question_template').html() );
		_.each(this.collection.models, function(model){
			//console.log('rendering: ' + model.get('text'));
			var html = template ( {model:  model} );
			$('#questions_container').append(html);
		});
	}
});

var questionCollection = new qCollection();
var questionsView = new qView ( {collection: questionCollection} );


$(function(){
	//console.log('Sections: ' + Object.keys(questions).length);
	_.each(Object.keys(questions), function(t){
		//console.log(t);
		_.each(questions[t], function(q){
			var tModel = new qModel({ text: q.text, section: t, id: id++});
			questionCollection.add(tModel);
		});
	});

	console.log('We have a total of: ' , questionCollection.length, ' models');
	questionsView.render();

	$('#btnSubmit').click(function(e){
		var resultCount = $('.privCheckBox:checkbox:checked').length
		console.log('You checked ', resultCount, ' out of ', questionCollection.length);
	});

});