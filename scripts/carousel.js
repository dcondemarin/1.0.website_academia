console.log('carousel...');

$('#carousel > img:gt(0)').hide();

setInterval(function(){
  $('#carousel > img:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#carousel');
}, 3000);