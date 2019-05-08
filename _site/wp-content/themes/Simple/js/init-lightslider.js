jQuery(document).ready(function() {

    function lightSlider(){

        jQuery(".post-slider").lightSlider({
            gallery:false,
            item:1,
            loop:true,
            slideMargin:0,
            enableDrag: true,
            currentPagerPosition:'middle',
        });

    }
    lightSlider();

  });