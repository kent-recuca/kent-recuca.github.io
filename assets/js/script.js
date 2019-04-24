function sleep(time,recursive){
  setTimeout(recursive,time);
}
jQuery(window).on('load',sleep(1700,function() {
  jQuery('#loader').hide();
}));

sleep(5300, function() {
    var twitter = document.getElementById("twitter");
});
//タブの切替
var tabs = document.getElementById('tabcontrol').getElementsByTagName('a');
var pages = document.getElementById('tabbody').getElementsByTagName('div');
function changeTab() {
  var targetid = this.href.substring(this.href.indexOf('#')+1,this.href.length);
  for(var i=0; i<pages.length; i++) {
    if( pages[i].id != targetid ) {
      pages[i].style.display = "none";
    }
    else {
      pages[i].style.display = "block";
    }
  }
  for(var i=0; i<tabs.length; i++) {
    tabs[i].style.zIndex = "0";
  }
  this.style.zIndex = "10";
  return false;
}
for(var i=0; i<tabs.length; i++) {
  tabs[i].onclick = changeTab;
}
tabs[0].onclick();
