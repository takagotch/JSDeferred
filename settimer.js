setTimer(function){
  alert('Asynchronous!');
}, 1000);


setTimeout(function(){
  alert('hop');
  setTimeout(function(){
    alert('step');
    setTimeout(function(){
      alert('jump');
    }, 1000);
  }, 1000);
});

var values = ['bar', 'baz', 'biz'];

