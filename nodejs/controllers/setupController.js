var Todos  = require('../models/todoModel');

module.exports = function(app){
    app.get('/api/setupTodos', function(req,res){
        
        //Seed Data
        var starterTodos = [
            {
                username : 'test',
                todo : 'Buy Snacks',
                isDone : false,
                hasAttachment : false
            },
            {
                username : 'test',
                todo : 'Buy Drink',
                isDone : false,
                hasAttachment : false
            },
            {
                username : 'test',
                todo : 'Buy Food',
                isDone : false,
                hasAttachment : false
            }

        ];

        Todos.create(starterTodos, function(err,results){
            res.send(results);
        });
    });
}
