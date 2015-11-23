$(function(){
  $('button').on('click', function(){
    $.ajax({
      type:"GET",
      url:'/balance'}).done(function(data){
        $('.test').append(data);
    });

  });

  console.log("Yo, I'm working!");
});
