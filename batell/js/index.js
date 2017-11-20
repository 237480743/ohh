  var url=["",""];
  var num = GetRandomNum(0,url.length-1);   
  document.getElementById("audios").src=""+url[num];
  function GetRandomNum(Min,Max)
  {
  var Range = Max - Min;   
  var Rand = Math.random();   
  return(Min + Math.round(Rand * Range));   
  }   

  function play(){
  var div = document.getElementById('playbtn'); 
  var obj=document.getElementById("audios");
  if(obj.paused){
    obj.play();
    div.setAttribute("class", "btn_sound"); 
  }else{
    obj.pause();
  div.setAttribute("class", "btn_sound btn_no_sound"); 
  }
}

