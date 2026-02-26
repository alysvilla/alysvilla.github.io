

function upDate(previewPic){
   document.getElementById("image").style.backgroundImage="url('"+previewPic.src +"')"
   document.getElementById("image").innerHTML=previewPic.alt

   var images = document.querySelectorAll(".preview");

   for(let i=0; i<images.length; i++){
      images[i].tabIndex=0;
    }
	}

	function unDo(){
		 document.getElementById("image").style.backgroundImage="url('')"; document.getElementById("image").innerHTML="Hover over an image below to display here.";
    
	}
