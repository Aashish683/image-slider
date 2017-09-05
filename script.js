var next=document.getElementsByClassName('next');
var prev=document.getElementsByClassName('prev');
var slider=document.getElementById('slider-inner');
var arr=slider.getElementsByTagName('img');
var inFront=3;
console.log(arr);
next[0].onclick= function(){
  
  if(inFront==0)
      {
          
          for(var i=1;i<=3;i++)
              {
                  arr[i].style.zIndex=0;
                  arr[i].className="hide";
              }
          arr[0].className="active"; 
          setTimeout(function(){
            for(var i=1;i<=3;i++)
              {
                  arr[i].style.zIndex=10;
              }
              arr[0].className="hide";
          },1500);
          inFront=3;
      }
     else
         {
          arr[inFront].className="active";
          inFront--;
         }
    console.log(inFront);
};
prev[0].onclick=function(){
    if(inFront==3)
        {
          for(var i=1;i<=3;i++)
              arr[i].className="active";
            inFront=0;
        }
    else
        {
            arr[++inFront].className="";
        }
    console.log(inFront);
};
