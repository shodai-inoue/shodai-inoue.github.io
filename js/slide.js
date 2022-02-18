const setImage1 = ["../image/viewing02.jpg", "../image/viewing06.jpg", "../image/viewing05.jpg", "../image/green03.jpg", "../image/flower08.jpg"];

let counter = -1;
function slideimage1(){
  if(counter === 4){
    counter = 0;
  }
  else {
    counter++;
  }
  document.getElementById("mypic1").src = setImage1[counter];
}
setInterval("slideimage1()", 3000);
