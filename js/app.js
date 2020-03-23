$(document).ready(function() {

    /////////////////////////////////////
    //        CAROUSEL SWIPE           //
    /////////////////////////////////////   
    $("#dragonic-carousel").swiperight(function() {
    $(this).carousel('prev');
    });
    $("#dragonic-carousel").swipeleft(function() {
    $(this).carousel('next');
    });

    //////////////////////////////////////
    //          SNIPPETS                //
    //////////////////////////////////////
    $(function() {
    $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

        var target = this.hash;
        var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing');
    });
    });

    /////////////////////////////////////
    //      MODAL WINDOW GALLERY       //
    /////////////////////////////////////
    $('.gallery-item').on('click', function() {
        var label = $('#myModalLabel');
        var img = $('#showcase-img');
        var price = $('#modal-price-tag');
        var body = $('#modalBody');
        var dataModel = $(this).find('img');
        var modelfeats = $('#model-feats').find('li');

        label.text('Dragonic: ' + $(this).find('.item-name-caption').text());
        price.text($(this).find('.item-price-caption').text());
        img.attr('src', dataModel.attr('src'));
    });

    $('div.thumbnail-50').on('click', function(){
        $('img.img-thumbnail').addClass('thumb-50');
        $('ul#model-feats').addClass('hide');
    });

    $('article.thumbnail-100').on('click', function(){
        $('img.img-thumbnail').removeClass('thumb-50');
        $('ul#model-feats').removeClass('hide');
    });

    /////////////////////////////////////
    //      MODAL WINDOW FEATURES      //
    /////////////////////////////////////
    $('.features-item').on('click', function() {
        var label = $('#myModalLabel');
        var img = $('#showcase-img');
        var price = $('#modal-price-tag');
        var body = $('#modalBody');
        var dataModel = $(this).find('img');
        var modelfeats = $('#model-feats').find('li');

        label.text('Hero Name: ' + $(this).find('.item-name-caption').text());
        price.text($(this).find('.item-price-caption').text());
        img.attr('src', dataModel.attr('src'));


        $(modelfeats[0]).text('Strength: ' + dataModel.data('strength')); //Strength
        $(modelfeats[1]).text('Dexterity: ' + dataModel.data('dexterity')); //Dexterity
        $(modelfeats[2]).text('Agility: ' + dataModel.data('agility')); //Agility
        $(modelfeats[3]).text('Willpower: ' + dataModel.data('willpower')); //Willpower
        $(modelfeats[4]).text('Intelligence: ' + dataModel.data('intelligence')); //Intelligence
    });

    $('.shop-modal-hide').on('click', function(){
        $('#shop-modal').modal('hide');
    }); 

});

    /* Light YouTube Embeds by @labnol */
    /* Web: http://labnol.org/?p=27941 */
    document.addEventListener("DOMContentLoaded",
        function() {
            var div, n,
                v = document.getElementsByClassName("youtube-player");
            for (n = 0; n < v.length; n++) {
                div = document.createElement("div");
                div.setAttribute("data-id", v[n].dataset.id);
                div.innerHTML = labnolThumb(v[n].dataset.id);
                div.onclick = labnolIframe;
                v[n].appendChild(div);
            }
        });

    function labnolThumb(id) {
        var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
            play = '<div class="play"></div>';
        return thumb.replace("ID", id) + play;
    }

    function labnolIframe() {
        var iframe = document.createElement("iframe");
        var embed = "https://www.youtube.com/embed/ID?autoplay=1";
        iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "1");
        this.parentNode.replaceChild(iframe, this);
    }

    /////////////////////////////////////
    //   CHANGE CLASSES RESPONSIVE     //
    /////////////////////////////////////  
$(window).resize(function(){
var width = $(window).width();
if(width >= 300 && width <= 1024){
    $('.item-1, .item-2, .item-3').removeClass('col-sm-3 col-xs-5').addClass('col-sm-5 col-xs-12');
    $('.features-item').removeClass('col-md-3').addClass('col-md-6');
    $('.item-3').removeClass('col-sm-offset-1').addClass('col-sm-offset-3');
    $('.item-2').removeClass('col-xs-offset-2').addClass('col-xs-offset-0');       
}
else{
    $('.item-1, .item-2, .item-3').removeClass('col-sm-5 col-xs-12').addClass('col-sm-3 col-xs-5');
    $('.features-item').removeClass('col-md-6').addClass('col-md-3');
    $('.item-3').removeClass('col-sm-offset-3').addClass('col-sm-offset-1');
    $('.item-2').removeClass('col-xs-offset-0').addClass('col-xs-offset-2');        
}
})
.resize();//trigger the resize event on page load.

    /////////////////////////////////////
    //        STOP PINCH ZOOM          //
    /////////////////////////////////////  
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});