
jQuery(function($){'use strict';
    (function () {
        var $frame = $('#row1');
        var $section = $frame.parent();

        // Call Sly on frame
        $frame.sly({
            horizontal: 1,
            itemNav: 'centered',
            smart: 1,
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 0,
            scrollBar: $section.find('.scrollbar'),
            scrollSource: null,
            scrollBy: 0,
            pagesBar: $section.find('.pages'),
            activatePageOn: 'click',
            speed: 300,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,

            // Buttons
            prev: $section.find('.prev'),
            next: $section.find('.next'),
            prevPage: $section.find('.prevPage'),
            nextPage: $section.find('.nextPage'),
            forward: $section.find('.forward'),
            backward: $section.find('.backward')
        });
    }());
//(function(){var $frame=$('#row2');var $section=$frame.parent();$frame.sly({horizontal:1,itemNav:'centered',smart:1,activateOn:'click',mouseDragging:1,touchDragging:1,releaseSwing:1,startAt:0,scrollBar:$section.find('.scrollbar'),scrollBy:1,pagesBar:$section.find('.pages'),activatePageOn:'click',speed:300,elasticBounds:1,easing:'easeOutExpo',dragHandle:1,dynamicHandle:1,clickBar:1,prev:$section.find('.prev'),next:$section.find('.next'),prevPage:$section.find('.prevPage'),nextPage:$section.find('.nextPage'),forward:$section.find('.forward'),backward:$section.find('.backward')});}());
//(function(){var $frame=$('#row3');var $section=$frame.parent();$frame.sly({horizontal:1,itemNav:'centered',smart:1,activateOn:'click',mouseDragging:1,touchDragging:1,releaseSwing:1,startAt:0,scrollBar:$section.find('.scrollbar'),scrollBy:1,pagesBar:$section.find('.pages'),activatePageOn:'click',speed:300,elasticBounds:1,easing:'easeOutExpo',dragHandle:1,dynamicHandle:1,clickBar:1,prev:$section.find('.prev'),next:$section.find('.next'),prevPage:$section.find('.prevPage'),nextPage:$section.find('.nextPage'),forward:$section.find('.forward'),backward:$section.find('.backward')});}());
//(function(){var $frame=$('#row4');var $section=$frame.parent();$frame.sly({horizontal:1,itemNav:'centered',smart:1,activateOn:'click',mouseDragging:1,touchDragging:1,releaseSwing:1,startAt:0,scrollBar:$section.find('.scrollbar'),scrollBy:1,pagesBar:$section.find('.pages'),activatePageOn:'click',speed:300,elasticBounds:1,easing:'easeOutExpo',dragHandle:1,dynamicHandle:1,clickBar:1,prev:$section.find('.prev'),next:$section.find('.next'),prevPage:$section.find('.prevPage'),nextPage:$section.find('.nextPage'),forward:$section.find('.forward'),backward:$section.find('.backward')});}());

    // -------------------------------------------------------------
    //   One Item Per Frame
    // -------------------------------------------------------------
    (function () {
        var $frame = $('#oneframe');
        var $wrap = $frame.parent();

        // Call Sly on frame
        $frame.sly({
            horizontal: 1,
            itemNav: 'forceCentered',
            smart: 1,
            activateMiddle: 1,
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 0,
            scrollBar: $wrap.find('.scrollbar'),
            scrollSource: null,
            scrollBy: 0,
            pagesBar: $wrap.find('.pages'),
            activatePageOn: 'click',
            speed: 300,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,

            // Buttons
            prev: $wrap.find('.prev'),
            next: $wrap.find('.next')
        });
    }());


//(function(){var $frame=$('#none');var $wrap=$frame.parent();$frame.sly({horizontal:1,itemNav:'forceCentered',smart:1,activateMiddle:1,activateOn:'click',mouseDragging:1,touchDragging:1,releaseSwing:1,startAt:0,scrollBar:$wrap.find('.scrollbar'),scrollBy:1,pagesBar:$section.find('.pages'),activatePageOn:'click',speed:300,elasticBounds:1,easing:'easeOutExpo',dragHandle:1,dynamicHandle:1,clickBar:1,prev:$wrap.find('.prev'),next:$wrap.find('.next')});}())
;});