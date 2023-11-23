
$('#right').click(function (e) { 
    e.preventDefault();
    swapinright('.start','.main');
    swapoutright('.end');
    var x=$('.start');
    var y= $('.main');
    var z=$('.end');
    x.removeClass('start').addClass('main')
    y.removeClass('main').addClass('end');
    z.removeClass('end').addClass('start');
});

$('#left').click(function (e) { 
    e.preventDefault();
    swapinleft('.main', '.end');
    swapoutleft('.start');
    var x = $('.start');
    var y = $('.main');
    var z = $('.end');
    x.removeClass('start').addClass('end');
    y.removeClass('main').addClass('start');
    z.removeClass('end').addClass('main');
    
});

function swapoutright( x) { 
    $(x).hide();
    $(x).animate({
        left:'-100%'
    });
    $(x).show(1);
}
function swapoutleft( x) { 
    $(x).hide();
    $(x).animate({
        left:'100%'
    });
    $(x).show(1);
}
function swapinright(x,y) { 
    $(x).animate({
        left:'0%'
    },500);
    $(y).animate({
        left:'100%'
    },200);
}
function swapinleft(x,y) { 
    $(x).animate({
        left:'-100%'
    },200);
    $(y).animate({
        left:'0%'
    },500);
}