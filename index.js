var count=99;
var printlyrics=document.getElementById("lyrics");
while (count>1) {
    printlyrics.innerHTML += (count+ "</stong> bottles of beer on the wall, " +count+ " bottles of beer.<br>Take one down and pass it around, "+(count-1)+ " bottles of beer on the wall. <br> <br>");
    count--;
    if(count===1){
        printlyrics.innerHTML += ("1 bottle of beer on the wall, 1 bottle of beer.<br>Take one down and pass it around, no more bottles of beer on the wall. <br>"); 
        count--;
    }
}
if(count===0){
    printlyrics.innerHTML += ("<br>No more bottles of beer on the wall, no more bottles of beer.<br>Go to the store and buy some more, 99 bottles of beer on the wall.");
}
