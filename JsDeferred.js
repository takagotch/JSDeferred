Deferred.next(function(){
  alert('Hello');
  return deferred.wait(1);
}).next(function(){
  alert('World');
});


var array = ['bar', 'baz', 'biz'];
Deferred.loop(array.length, function(1){
  alert(array[1]);
});

Deferred.parallel([
  Deferred.wait(1).next(function() { alert('bar') }),
  Deferred.wait(2).next(function() { alert('baz') }),
  Deferred.wait(3).next(function() { alert('biz') })
]).next(function(){
  alert('complete');
});


