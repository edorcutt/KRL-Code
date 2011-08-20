    // Author: Aaron Frost
    // Origin: http://www.40win.com/2011/05/08/jskeyboardevents/
    // Tags: #emit

ctrlpressed = false;
altpressed = false;
tpressed = false;
tempapp = KOBJ.get_application("MY_APP");
            
function KeyCheck_Global(e, isPressed){
    var gotkey = null;
    switch(e.keyCode){
    case 17: //CTRL
        ctrlpressed=isPressed;
        break;
    case 18: //ALT
        altpressed=isPressed;
        break;
    case 84: //T
        tpressed=isPressed;
        break;
    default:
        break;
    }  
    if (ctrlpressed && altpressed && tpressed){
        //U can haz teh magic hir
        tempapp.raise_event("new_web_event",{"paramone":"dataone","param2":"datatwo"});//This is almost exactly what I do. 
    }  
    return e;
}
        
$K(document).ready(function(){
    $K(document).bind('keydown',function(e){
        return KeyCheck_Global(e,true);
    }).bind('keyup',function(e){
        return KeyCheck_Global(e,false);
    });
});