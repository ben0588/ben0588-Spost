import $ from 'jquery';
$(function(){
    $('a.col-6.shadow.btn').on('mouseenter', function(e){
        $(this).toggleClass('bg-danger');
    })
    $('a.col-6.shadow.btn').on('mouseleave', function(e){
        $(this).removeClass('bg-danger');
    })
    
    $('input[name="week"]+label.form-control.text-center.mt-1').on('click', function(e){
        $(this).toggleClass('bg-success');
    })

    // $('label[name="people"]').on('click', function(){
    //     $('label[name="people"]').removeClass('bg-success');
    //     $(this).addClass('bg-success');
    // })


});
