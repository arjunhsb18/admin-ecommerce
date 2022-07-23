$(function() {
    $(document).ready(function(){
        $('.menu-item').on('click',function(){
            if($(this).hasClass('active-dropdown')){
                $(this).find('.submenu').css('display','none');
                $(this).find('i').addClass('fa-caret-down');
                $(this).find('i').removeClass('fa-caret-up');
                $(this).removeClass('active-dropdown');
            }else{
                $(this).find('.submenu').css('display','block');
                $(this).addClass('active-dropdown');
                $(this).find('i').addClass('fa-caret-up');
                $(this).find('i').removeClass('fa-caret-down');
                
            }
        });        
    })
});
