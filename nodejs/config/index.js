var congfiValues = require('./config');

module.exports = {

    getDbconnectionString : function(){
        return 'mongodb://'+ congfiValues.uname +':'+ congfiValues.pwd 
        +'@ds153652.mlab.com:53652/node';
    }

}