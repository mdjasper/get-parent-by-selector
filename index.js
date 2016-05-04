'use strict';

let matches = (element, selector) => {
	var api = ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector'];
	for(var a in api){
		if(typeof element[api[a]] === 'function'){
			return element[api[a]](selector);
		}
	}
};

let parentBySelector = (element, selector) => {
	let parent = element.parentNode;
	if(!matches(parent, selector)){
		parent = parentBySelector(parent, selector);
	}
	return parent;
};

export default parentBySelector;