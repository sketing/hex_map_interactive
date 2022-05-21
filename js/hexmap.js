S(document).ready(function(){

	// Create an object attached to a DOM element with the ID "hexmap-1"
	var hexmap = S.hexmap('hexmap-1',{
		'formatLabel': function(id,hex){
			// "id" = unique ID of the hex
			// "hex" = object containing the properties of the specific hex
			return hex.n;
		}
	});

	// Position the hexes and scale them to the container
	hexmap.positionHexes().resize();

});

S(document).ready(function(){
	var hexmap = S.hexmap('hexmap-2',{
		'formatLabel': function(id,hex){
			// "id" = unique ID of the hex
			// "hex" = object containing the properties of the specific hex
			str = hex.n
			str += '<div class="default">Default</div>'
			str += '<div class="when-selected">Hover</div>';
			return str;
		}
	});

	hexmap.positionHexes().resize();
});