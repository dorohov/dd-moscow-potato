(function($) {
    "use strict"
    $(function() {

        $('.__chips--c').mousemove(function(e) {
            var offsetX = e.offsetX
            var offsetY = e.offsetY
            $(this).find('.__chips--i').each(function() {
                var num = $(this).data('trnum')
                $(this).css('transform', 
                'translate3d(-' + offsetX / 80 * (num * 2) + 'px, -' + offsetY / 80 * (num * 2) + 'px, 0)')
            })
        })

    })
})(jQuery);