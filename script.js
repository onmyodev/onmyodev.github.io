$(document).ready(function(){
    $("img").click(function(){
        $("#lightbox-image").attr('src', $(this).attr('src'))
        $("#lightbox").fadeIn()
    })
    $("#lightbox-close-button").click(function(){
        $("#lightbox").fadeOut()
    })
})