function sleep(time,recursive){
    setTimeout(recursive,time);
  }
jQuery(window).on('load',sleep(1700,function() {
    jQuery('#loader').hide();
  }));

sleep(7300, function() {
    var twitter = document.getElementById("twitter");
});