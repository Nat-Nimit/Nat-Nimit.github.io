var i=0;
function read(){
    if(!i){
        document.getElementById('more').style.display='inline';
        document.getElementById('dots').style.display='none';
        document.getElementById('read').innerHTML="Read Less";
        i=1;
          } else {            
        document.getElementById('more').style.display='none';
        document.getElementById('dots').style.display='inline';
        document.getElementById('read').innerHTML='Read More';
        i=0;
          }
        }

function openSlideMenu(){
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
          }
      
function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
          }