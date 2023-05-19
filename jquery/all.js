var rellax = new Rellax('.rellax');

ScrollReveal().reveal('.headline');

var bodyClass = $('.topNav-lg');
var bodyClass2 = $('.topNav-md-da');  
var lastScrollY = 0;

window.addEventListener('scroll', function(){
    var st = this.scrollY;
  // 判斷是向上捲動，而且捲軸超過 200px
    if( !st > 0 ){
    bodyClass.removeClass('show');
    }
    else if( st < lastScrollY) {
    bodyClass.addClass('show');
    }else{
    bodyClass.removeClass('show');
    }
    if( !st > 0 ){
    bodyClass2.removeClass('hide');
    }
    else if( st < lastScrollY) {
      bodyClass2.removeClass('hide');
      // $('.group_r').addClass('group_r_rwd')
    }else{
      bodyClass2.addClass('hide');
    }
    lastScrollY = st;

});


//btn動畫  
//arrowbtn
var btnClass = $(".arrowAni");
btnClass.mouseenter(function () {
 this.className += " mouseenter";
 setTimeout(function () {
  btnClass.removeClass("mouseenter");
 }, 500);
});
//arrowbackward
btnClass.mouseleave(function () {
 this.className += " mouseleave";
 setTimeout(function () {
  btnClass.removeClass("mouseleave");
 }, 500);
});



//RWD
window.addEventListener('resize',function(){
  var w = document.documentElement.clientWidth;

  if(w < 981){
    $('.textWrapIntro').removeClass('text__vertical');
    $('.textWrapIntro').removeClass('text-lg');
    $('.textWrapIntro').addClass('text-md');


  }
  if(w > 980){
    $('.textWrapIntro').removeClass('text-md');
    $('.textWrapIntro').addClass('text__vertical');
    $('.textWrapIntro').addClass('text-lg');

    $('.topNav-md').removeClass('active');
    $('.menuBtn').removeClass('hide');
    $('.brand-md','.cart').addClass('topNav-md-da');
  }
  }
)


$(document).ready(function () {
  
  $('.menuBtn').on('click',function(){
    $('.menuBtn').addClass('hide');
    $('.topNav-md').addClass('active');
    $('.brand-md').removeClass('topNav-md-da'); 
    $('.cart').removeClass('topNav-md-da');   
  })
  $('.menuClose').on('click',function(){
    $('.topNav-md').removeClass('active');
    $('.menuBtn').removeClass('hide');
    $('.brand-md','.cart').addClass('topNav-md-da');
  })


});
