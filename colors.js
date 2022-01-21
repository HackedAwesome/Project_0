
  var setcolor = {
    bodybackgorund : function(color){
      document.querySelector('body').style.backgroundColor = color;
    },
    bodytext : function(color){
      document.querySelector('body').style.color = color;
    },
    link : function(color){
      var links = document.querySelectorAll('.list_text');
      var i =0;
      while(i<links.length)
      {
        links[i].style.backgroundColor= color;
        i = i+1;
      }
    }
  }
  function NightHandler(self){
    // var target = document.querySelector('body');
    if(self.value === 'night')
    {
      setcolor.bodybackgorund('black');
      // target.style.backgroundColor = 'black';
      setcolor.bodytext('white');
      // target.style.color = 'white';
      self.value = 'day';
      setcolor.link('white');
    }
    else
    {
      setcolor.bodybackgorund('white');
      // target.style.backgroundColor = 'white';
      setcolor.bodytext('black');
      // target.style.color = 'black';
      self.value = 'night';
      setcolor.link('black');
    }
  }
