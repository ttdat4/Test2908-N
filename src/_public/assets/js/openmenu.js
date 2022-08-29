jQuery(function ($) {
    $(".c-header__itemnavbar").click(function(){
      $(".c-header__side").addClass("c-active");
    });

    $(".c-header__btnclose").click(function(){
      $(".c-header__side").removeClass("c-active");
    });

    $(".c-header__terserwrapclose").click(function(){
      $(".c-header__side").removeClass("c-active");
    });
});