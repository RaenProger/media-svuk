

 /* СHRONOMETER */


(function($){$.fn.extend({donetyping:function(callback,timeout){timeout=timeout||200;var timeoutReference,doneTyping=function(el){if(!timeoutReference) return;timeoutReference=null;callback.call(el);};return this.each(function(i,el){var $el = $(el);$el.is(':input')&&$el.on('keyup keypress paste',function(e){if (timeoutReference) clearTimeout(timeoutReference);timeoutReference=setTimeout(function(){doneTyping(el);}, timeout);}).on('blur',function(){doneTyping(el);});});}});})(jQuery);
          
          
function countWordsString(string)
{
  var counter=0;
  string=string.replace(/[\s]+/gim,' ');
  string.replace(/(\s+)/g,function(a){counter++;});
  return counter;
}

function sprop(r)
{
  var a=["","сто","двести","триста","четыреста","пятьсот","шестьсот","семьсот","восемьсот","девятьсот"],w=["","десять","двадцать","тридцать","сорок","пятьдесят","шестьдесят","семьдесят","восемьдесят","девяносто"],i=["","один","два","три","четыре","пять","шесть","семь","восемь","девять","десять","одиннадцать","двенадцать","тринадцать","четырнадцать","пятнадцать","шестнадцать","семнадцать","восемнадцать","девятнадцать"];
  
  raw=r.split("");
  for(var n=0,o=0,p=0,t=0;t<100;t++)n=3*t,+raw[n+2],o=+raw[n],raw[n]=a[o],(o=+raw[n+1])>1&&(raw[n+1]=w[o],o=0),p=10*o+ +raw[n+2],isNaN(raw[n+1])||(raw[n+1]=""),raw[n+2]=i[p];
  
  return r=(r=raw.join(" ")).replace(/ +/g," ").trim();
}






$(document).ready(function() {


  $(window).load(function()
  {
    $("textarea[name=text]","form").donetyping(function(){$("#form").submit()});
    $("input[name=temp]").on("change",function(){$("#form").submit()});
    $("input[name=temp]").trigger("change");
  });

  
  $("#reset").click(function()
  {
    $("#cnt").text('0');
    $("#wrd").text('0');
    $("#time").text("0 секунд");
  });
  
  $("#form").submit(function()
  {
    var t,e,n = $("#text").val();
    var r = $(this).find("input[name=temp]:checked").val();
    if(e=/\D+/gi,t=n.replace(e,""),n&&r)
    {
      var a=sprop(t),s=a.replace(/\s/gi,"").length;
      var p=countWordsString(a),i=n.replace(/\s/gi,"").length;
      var c=countWordsString(n),I="";
      
      if(r == 1)
      {
        if(parseInt(((i+s)/14+(c+p)/2)/2*1.05) == parseInt(((i+s)/13+(c+p)/2)/2*1.05))
        {
          I = parseInt(1.05*Math.ceil((i+s)/14))+" секунд";
        }
        else
        {
          I = parseInt(((i+s)/14+(c+p)/2)/2*1.05)+"-"+parseInt(((i+s)/13+(c+p)/2)/2*1.05)+" секунд";
        }
      }
      else if(r == 3)
      {
        if(parseInt(((i+s)/14+(c+p)/2)/2*.95) == parseInt(((i+s)/13+(c+p)/2)/2*.95))
        {
          I = parseInt((i+s)/14*.95)+" секунд";
        }
        else
        {
          I = parseInt(((i+s)/14+(c+p)/2)/2*.95)+"-"+parseInt(((i+s)/13+(c+p)/2)/2*.95)+" секунд";
        }
      }
      else if (r == 2)
      {
        if(parseInt(((i+s)/14+(c+p)/2)/2) == parseInt(((i+s)/13+(c+p)/2)/2))
        {
          I = Math.ceil((i+s)/14)+" секунд";
        }
        else
        {
          I = parseInt(((i+s)/14+(c+p)/2)/2)+"-"+parseInt(((i+s)/13+(c+p)/2)/2)+" секунд";
        }
      }
      
      $("#cnt").text(i+s);
      $("#wrd").text(c+p);
      $("#time").text(I);
    }
    
    return false;
  });



  /*SLICK-SlIDER*/

  $('.slick_slider').slick({
    arrows: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
 


  /* scroll link */
  $('a[href^="#"]').click(function() {
    let target = $(this).attr('href');
    $('html, body').animate({
      scrollTop:$(target).offset().top
    }, 500);
  });
  

  /* scrollTop */
  let btn = $('#button');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});




});