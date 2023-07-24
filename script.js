var index=0;

function changeColors()
{
    var colors=["red ","blue","green","yellow"];

    document.getElementsByTagName("body")[0].style.backgroundColor=colors[index++];
  
    if(index==colors.length)
    {
        index=0;
    }
  
}