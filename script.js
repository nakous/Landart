jQuery(window).load(function(){
jQuery(".logo-intro").css("opacity",0);
delay();
});
function delay() {
var secs = 4000;
setTimeout('initFadeIn()', secs);
}
function initFadeIn() {
 // jQuery("#city").css("visibility","visible");
// jQuery("#city").css("display","none");
// jQuery("#city").fadeIn(1000);
$.scrollTo( '#page', 1000 );
// jQuery(".page-bg").addClass("#page-anm");
setTimeout('jQuery("#menu-site").addClass("ul-anm")', 2000);
setTimeout('jQuery("#page").addClass("page-anm")', 4000);
}
// $('#citynavigation').localScroll({
// axis:'xy',
// queue:false,
// hash:true,
// duration:1500,
// stop: true,
// easing: 'easeInOutQuad'
// })
// $(function(){
// $('#citynavigation a').click(function(){
// $('#citynavigation a').removeClass('active');
// $(this).addClass('active');
// });
// });