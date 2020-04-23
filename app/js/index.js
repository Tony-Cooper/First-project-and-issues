window.onload = function() {

var headerH = $('.headerLine').height() + $('.text').height() + 200;

var blackPointIn = headerH + 100 + $('.info1').height() + $('.info2').height() + $('.info3').height() / 2;

var blackPointOut = headerH - 200 + $('.info1').height() + $('.info2').height() + $('.info3').height() + $('.black').height() / 2;

var paramsPoint = headerH - 200 + $('.info1').height() + $('.info2').height();

var BlackPoint = blackPointOut - 50;

var CertPoint = blackPointOut + ($('.black').height() / 2) + 150;

var footerPoint1 = headerH + $('.info1').height() + $('.info2').height() + $('.info3').height() + $('.black').height() + $('.cert-images').height() + ($('.album').height() * 3) - 500;

var footerPoint2 = footerPoint1 + 700;

var completePar = false;
var completeBPI = false;
var completeBPO = false;
var completeF1 = false;
var completeF2 = false;

function scrollOff() {
    $('body').css("overflow","hidden");
}

$(document).scroll(function() {
    if($(document).scrollTop() > blackPointIn && $(document).scrollTop() < blackPointIn +100 && !completeBPI) {
        scrollOff();
    completeBPI = true;
        $('.black h1').css({
        "animation-name": "black",
        "animation-duration": "4s",
        "animation-timing-function": "ease"
    });
    $('html, body').animate ({
        scrollTop: BlackPoint
    }, 1500);
        setTimeout(function() {
            $('body').css("overflow","auto");
        }, 2000);
    
}
    if($(document).scrollTop() > blackPointOut && $(document).scrollTop() < blackPointOut +100 && !completeBPO) {
        scrollOff();
    completeBPO = true;
        setTimeout(function() {
        $('.card:nth-of-type(1)').css({
        "animation": "card 3s ease"
    });
    }, 0);
        setTimeout(function() {
        $('.card:nth-of-type(2)').css({
        "animation": "card 3s ease"
    });
    }, 250);
        setTimeout(function() {
        $('.card:nth-of-type(3)').css({
        "animation": "card 3s ease"
    });
    }, 500);
    $('html, body').animate ({
        scrollTop: CertPoint
    }, 3000);
    setTimeout(function() {
            $('body').css("overflow","auto");
        }, 3000);
    
}
    if($(document).scrollTop() > paramsPoint && $(document).scrollTop() < paramsPoint +100 && !completePar) {
    completePar = true;
    $('.line').css({
        "animation": "line 2s ease",
        "display": "block"
    });
        
    setTimeout(function() {
        $('.list li:nth-of-type(1)').css({
        "animation": "list 2s ease",
        "display": "block"
    });
    }, 100);
        
        setTimeout(function() {
        $('.list li:nth-of-type(2)').css({
        "animation": "list 2s ease",
        "display": "block"
    });
    }, 200);
        
        setTimeout(function() {
        $('.list li:nth-of-type(3)').css({
        "animation": "list 2s ease",
        "display": "block"
    });
    }, 300);
        
        setTimeout(function() {
        $('.list li:nth-of-type(4)').css({
        "animation": "list 2s ease",
        "display": "block"
    });
    }, 400);
        
        setTimeout(function() {
        $('.list li:nth-of-type(5)').css({
        "animation": "list 2s ease",
        "display": "block"
    });
    }, 500);
}
    
    if($(document).scrollTop() > footerPoint1 && !completeF1) {
    completeF1 = true;
    $('.contacts').css({
        "display": "block"
    });
        
        setTimeout(function() {
            $('.contacts .line').css({
                "animation": "line1 2s ease",
                "display": "block"
            });
        }, 0);
         setTimeout(function() {
            $('.contacts h3').css({
                "animation": "links 2s ease",
                "display": "block"
            });
        }, 0);
        
         setTimeout(function() {
             $('.contacts li:nth-of-type(1)').css({
                "animation": "links 2s ease",
                "display": "flex"
            });
        }, 200);
        
         setTimeout(function() {
             $('.contacts li:nth-of-type(2)').css({
                "animation": "links 2s ease",
                "display": "flex"
            });
        }, 400);
        
         setTimeout(function() {
             $('.contacts li:nth-of-type(3)').css({
                "animation": "links 2s ease",
                "display": "flex"
            });
        }, 600);
        
   
}
    
    if($(document).scrollTop() > footerPoint2 && !completeF2) {
    completeF2 = true;
    $('.credits').css({
        "display": "block"
    });
        
        setTimeout(function() {
             $('.credits .line').css({
                "animation": "line2 2s ease",
                "display": "block"
            });
        }, 0);
        
         setTimeout(function() {
             $('.credits h3:nth-of-type(1)').css({
                "animation": "links 2s ease",
                "display": "block"
            });
        }, 0);
        
         setTimeout(function() {
             $('.credits ul:nth-of-type(1) li:nth-of-type(1)').css({
                "animation": "links 2s ease",
                "display": "flex"
            });
        }, 200);
        
         setTimeout(function() {
             $('.credits ul:nth-of-type(1) li:nth-of-type(2)').css({
                "animation": "links 2s ease",
                "display": "flex"
            });
        }, 300);
        
         setTimeout(function() {
             $('.credits h3:nth-of-type(2)').css({
                "animation": "links 2s ease",
                "display": "block"
            });
        }, 400);
        
         setTimeout(function() {
             $('.credits ul:nth-of-type(2) li:nth-of-type(1)').css({
                "animation": "links 2s ease",
                "display": "flex"
            });
        }, 600);
        
         setTimeout(function() {
             $('footer').css({
                "padding-bottom": "0"
            });
             $('footer p').css({
                "display": "block"
            });
        }, 600);
        
    
}   
});
    
//    всё что выше работает

//    Создаю массив с фотографиями
    
var photo = document.querySelectorAll('.album img');
    
//    Чисто ради сокращения дальнейшего кода помещаю нужный блок в переменную
    
var box = $('.lightbox');
    
//    При нажатии на любую из фотографий, включается отображение блока .lightbox(эта часть даже работает). Так же по задумке выбранная фотография должна вставляться в этот блок, тем самым показываясь на весь экран, но этого не происходит, хотя выбирается всё правильно. Даже с выводом обычного текста ничего не получается.

photo.forEach(function(item, index, array) {
    item.onclick = function() {
        box.css({"display": "block"});
        console.log(item);
        box.innerHTML = "why my image is not there?";
        console.log('done');
        };
});
     
//              Закрытие по нажатию на блок - не работает. Причём в этм случае почему-то даже не выводит "клик" в лог
              
    box.onclick = function() {
        console.log('click');
        box.style.display = 'none';
    };
    
//    Всё что ниже работает
    
//    var isActive = false;
//photo.forEach(function(item, index, array) {
//    item.onclick = function() {
//        isActive = !isActive; // Обратное значение
//
//        if(!isActive) {
//          $(this).css({
//            'position': 'fixed',
//            'top': '10%',
//            'left': '35%',
//            'width': '30%',
//            'max-height': 'none',
//            'z-index': '10001',
//          });
//        } else {
//          $(this).removeAttr("style");
//        }
//      }
//});
    
var like = document.querySelectorAll('.likes i');
    
    like.forEach(function(item, index, array) {
        item.onclick = function() {
            item.style.color = 'red';
            item.style.animation = 'like 0.5s ease';
            
        }
    })

}