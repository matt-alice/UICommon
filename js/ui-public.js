// Packing-slips.com Notification widget
// Copyright packing-slips.com 2009

/*
<doc>
    Dependencies
        jQuery
        /public_html/lib/ui/css/ui.css
        /public_html/lib/ui/images/*
   
    Initialization:
        $('#uniqueSelectorOnPage').displayMsg({
            msgType   : 'success',
            msgTitle  : 'Heads up!!' ,
            msgContent: 'Lorem ipsum...'
        });

    Params: you can provide the following options
        @msgType {string} (default success)
            Select one the 3 following options: success, warning or error
            If none is provided, or if the one provided upon initialization is not n this array, the msgType will default to "success"
        @msgTitle {string} (default success)
            String of text or html to put in title of the displayMsg widget
        @msgContent {string} (default Lorem ipsum...)
            String of text or html to put in contents of the displayMsg widget
         ?? @msgContentUrl -- coming soon ??   
            Location of remote AJAX displayMsg widget content
</doc>        
*/

(function($) {
    $.fn.displayMsg = function(options) {
    
        var custom = $.extend({
                msgType    : 'success',
                msgTitle   : 'Success',
                msgContent : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus dignissim euismod magna. Maecenas eu pede. Mauris posuere. Vivamus mi'
            }, options);
        
        if (!$.inArray(custom.msgType, ['success','error','warning'])) {
            custom.msgType = 'success';
        }

        return this.each(function() {
            $(this).html('<div class="message-box message-box-wrapper-' + custom.msgType + '"> \
                    <div class="message-box-logo-' + custom.msgType + '"></div> \
                    <div class="message-box-inner-' + custom.msgType + '"> \
                        <b>'  + custom.msgTitle   + '</b> \
                        <br>' + custom.msgContent + '  \
                    </div> \
                </div>')
        });
    }   
})(jQuery);
