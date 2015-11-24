$(function(){
  $('button').on('click', function(){
    $.ajax({
      type:"GET",
      url:'/balance'}).done(function(data){

        $('.accountbalance').html(data);

    });

  });

  console.log("Yo, I'm working!");
});
