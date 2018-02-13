Deferred.define();

//
next(function(){
  alert("hello");
  return wait(5);
}).
next(function(){
  alert('world');
});

//
Deferred.next(function(){
  alert("hello");
  return Deferred.wait(5);
}).
next(function(){
  alert("world");
});


//





