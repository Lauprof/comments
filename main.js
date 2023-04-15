function go()
{
  if(history.back())
  {
  history.back();

  }
  else{
    history.forward();
  }
}
function data(){
  let bkg = document.body;
  if(confirm("Do you want to use data?")) {
         
         bkg.style.backgroundColor = 'orange';
      } 
      
      else {
         bkg.backgroundColor = 'rgba(0,0,0,0.9)';
      }
  
}
