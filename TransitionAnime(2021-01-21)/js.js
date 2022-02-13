document.onmousedown = function(e) { 
    var x = e.clientX; 
    var y = e.clientY; 
    document.getElementById('foo').style.marginLeft  = x+"px";
    document.getElementById('foo').style.marginTop  = y+"px";
}