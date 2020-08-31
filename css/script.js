$('document').ready(function () {
    $('#design1').click(function () {
        $('#design2').toggle();
        $('#design1').hide();
    })
    $('#dev1').click(function () {
        $('#dev2').toggle();
        $('#dev1').hide();
    })
    $('#product1').click(function () {
        $('#product2').toggle();
        $('#product1').hide();
    })

    $('#design3').click(function () {
        $('#design2').hide();
        $('#design1').show();
    })
    $('#dev3').click(function () {
        $('#dev2').hide();
        $('#dev1').show();
    })
    $('#product3').click(function () {
        $('#product2').hide();
        $('#product1').show();
    })

    //porfolio//
    $('.work4').hover(function () {
        $('#black').toggle();
    })
    $('.work3').hover(function () {
        $('#ontario').toggle();
    })
    $('.work2').hover(function () {
        $('#pyramids').toggle();
    })
    $('.work1').hover(function () {
        $('#jim').toggle();
    })
});