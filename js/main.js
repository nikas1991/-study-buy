
window.onload=function () {
	
	 var tit = document.getElementById("select-all");
	 var categorylist = document.getElementById("categorylist");
	 var inputs = categorylist.getElementsByTagName("input");
	 tit.onclick=function getAll(){
		 for(var i = 0; i < inputs.length; i++){
		 	 if(inputs[i].type == "checkbox"){
			   if(tit.checked == true)
			   {
			    inputs[i].checked = true;
			   }else{
			    inputs[i].checked = false;
			   }
			}
		}
	}

	var oReport = document.getElementById("report");
	oReport.onclick = function (){
		var oDown = document.getElementById("downfloor");
		if(oDown.style.display=="none"){
			oDown.style.display="block";
		}else{
			oDown.style.display = "none";
		}
	};

	var oClose = document.getElementById("msgclose");
	oClose.onclick = function (){
			var oDown = document.getElementById("downfloor");
			if(oDown.style.display=="none"){
				oDown.style.display="block";
			}else{
				oDown.style.display = "none";
			}
		};

	
	function hide() {
		var oShowText = document.getElementById("showText");
	    	oShowText.style.display = 'none';
	    }  

	var oSure = document.getElementById("sure");
	oSure.onclick = function(){
		var oDown = document.getElementById("downfloor");
		var oInput = oDown.getElementsByTagName("input");
	    var oShowText = document.getElementById("showText");
	    oDown.style.display = "none";
	    oShowText.style.display = "block";
	    setTimeout( hide,1500);	
	      
	}
	

	var oCancel = document.getElementById("cancel");
	oCancel.onclick = function(){
		var oDown = document.getElementById("downfloor");
		oDown.style.display="none";
	}












}