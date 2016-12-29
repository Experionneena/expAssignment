var response; 
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
  response = JSON.parse(this.responseText);
  for(index=0;index<15;index++){
    var url=response.data[index].imageUrl;
    var div=document.createElement('div');
    var image=document.createElement('IMG');
    image.setAttribute("src",url);
    var text=document.createElement('p');
    var node=document.createTextNode(response.data[index].caption);
    text.appendChild(node);
    document.getElementById('imagediv').appendChild(div);
    div.appendChild(image);
    div.appendChild(text);
    }
  }
};
xhttp.open("GET","https://exptest.herokuapp.com/api/imageGallery",true);
xhttp.send();
function logout(){
  window.location="index.html";
  }
