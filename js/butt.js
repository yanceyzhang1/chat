/**
 * @author Yancey
 */
var butt = (function(module){

	module.DoIt = function(resultObject){
		resultObject.prepend(Date() + '<br/>');
	};
	return module;
	
}(butt || {}));
