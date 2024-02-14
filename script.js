$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var btn_leer = $("#btnLeer");
    var letter = $("#letter");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });
    btn_leer.click( function() {
        leer();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
    function leer() {
        console.log('asdasd');
        letter.addClass("leer").removeClass("ocultar");
        $('#cartaFormat').addClass("ocultar");
    }
});