var count=99;
var printlyrics=document.getElementById("lyrics");
while (count>1) {
    printlyrics.innerHTML += ("<strong>"+count+ "</strong> bottles of beer on the wall, <strong>" +count+ "</strong> bottles of beer.<br>Take one down and pass it around, <strong>"+(count-1)+ "</strong> bottles of beer on the wall. <br> <br>");
    count--;
    if(count===1){
        printlyrics.innerHTML += ("<b>1</b> bottle of beer on the wall,<b>1</b> bottle of beer.<br>Take one down and pass it around, no more bottles of beer on the wall. <br>"); 
        count--;
    }
}
if(count===0){
    printlyrics.innerHTML += ("<br>No more bottles of beer on the wall, no more bottles of beer.<br>Go to the store and buy some more, <b>99</b> bottles of beer on the wall.");
}
