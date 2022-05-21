function dynamicHexmap(){
    var x = document.getElementById("width").value;
    var y = document.getElementById("height").value;
    var cells = x*y;
    var dict = {
        "layout":"odd-r",
        "hexes":{}
    };
    var times = cells;
    for (var row = 0; row<y; row++){
        for (var col = x; col>0; col--){
            var hex = {"n":times, "q":col, "r":row};
            dict["hexes"][times] = hex;
            times--;
        }
    }
    var element = document.getElementById("hexmap-1");
    var tag = document.createElement("code");
    var text = document.createTextNode(JSON.stringify(dict));
    element.innerHTML = '';
    element.appendChild(tag);
    tag.appendChild(text);
    S(document).ready(function(){
            // Create an object attached to a DOM element with the ID "hexmap-1"
            
        var hexmap = S.hexmap('hexmap-1')
        // var hexmap = S.hexmap('hexmap-1',{
        //     'formatLabel': function(id,hex){
        //         // "id" = unique ID of the hex
        //         // "hex" = object containing the properties of the specific hex
        //         str = hex.n
        //         str += '<div class="default">Default</div>'
        //         str += '<div class="when-selected">Hover</div>';
        //         return str;
        //     }
        // });

        // Position the hexes and scale them to the container
        hexmap.positionHexes().resize();
        hexmap.on('click',function(e){
            S('#message').html('You have clicked hex '+e.i+' ('+e.hex.id+')')
    
        }).on('mouseover',function(e){
    
            S('#message').html('You have hovered over hex '+e.i+' ('+e.hex.id+')')
    
        }).on('mouseout',function(e){
    
            S('#message').html('You have left hex '+e.i+' ('+e.hex.id+')')
    
        }).on('focus',function(e){
    
            S('#message').html('You have focussed on hex '+e.i+' ('+e.hex.id+')')
    
        });
    }); 
};