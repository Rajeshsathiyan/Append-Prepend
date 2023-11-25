function f(){
    let text1="<p>TEXT 1</P>";
    let text2=$("<p></p>").text("TEXT 2");
    let text3=document.createElement("p");
    text3.innerHTML="TEXT 3";
    $("body").prepend(text1,text2,text3);

}
  