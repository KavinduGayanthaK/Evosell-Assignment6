$('#home-section').css({display:'block'});
$('#customer-section').css({display:'none'});
$('#item-section').css({display:'none'});
$('#order-section').css({display:'none'});

$('#home').on('click',()=>{
    $('#home-section').css({display:'block'});
    $('#customer-section').css({display:'none'});
    $('#item-section').css({display:'none'});
    $('#order-section').css({display:'none'});
})

$('#customer').on('click',()=>{
    $('#home-section').css({display:'none'});
    $('#customer-section').css({display:'block'});
    $('#item-section').css({display:'none'});
    $('#order-section').css({display:'none'});
})

$('#item').on('click',()=>{
    $('#home-section').css({display:'none'});
    $('#customer-section').css({display:'none'});
    $('#item-section').css({display:'block'});
    $('#order-section').css({display:'none'});
})

$('#orders').on('click',()=>{
    $('#home-section').css({display:'none'});
    $('#customer-section').css({display:'none'});
    $('#item-section').css({display:'none'});
    $('#order-section').css({display:'block'});
})

