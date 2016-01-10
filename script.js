'use strict';

var friends = [];
var phrases = [
	'superior message', 'appreciated ability', 'recorded parent', 'trial behalf',
	'mean component', 'refer visible', 'asking repair', 'democratic think', 'hundred continuation',
	'expanding chaos', 'acceptable biology', 'accessible electric', 'frequent function', 'cutting absolute',
	'accepting code', 'nicest cardboard', 'touching escape', 'regular theory', 'promised sequence',
	'catching magic', 'entitled sentence', 'national read', 'bit autumn', 'partial return'
];

document.onload = fucntion() {
	VK.init(function() {
		initialize();
	});	
}

function initialize() {
	VK.api('friends.get', { fields: 'photo_100' }, function(obj) {
		console.log(obj);
		if (obj.response) {
			friends = obj.response;
		}
	});

}