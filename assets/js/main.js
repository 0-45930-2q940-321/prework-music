function openPage(pageName, elmnt, color) {
    // hide all tabcontent
    var i, tabcontent, tabbutton;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // remove all backgrounds of buttons and tab contents
    tabbutton = document.getElementsByClassName("tabbutton");
    for (i = 0; i < tabbutton.length; i++) {
      tabbutton[i].style.backgroundColor = "";
    }
  
    // show the active tab content
    document.getElementById(pageName).style.display = "block";
  
    // add specific color to the button
    elmnt.style.backgroundColor = color;
  }
  document.getElementById("defaultOpen").click();

  //Video onHover

  var playersrcone;
  var playersrctwo;
  var playersrcthree;
  var playersrcfour;
  var playersrcfive;

  playersrcone = document.getElementById('one').src;
  playersrtwo = document.getElementsById('two').src;
  playersrcthree = document.getElementById('three').src;
  playersrcfour =  document.getElementById('four').src;
  playersrcfive = document.getElementById('five').src;