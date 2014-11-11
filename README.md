UICommon
========

UI CSS and JS effects.

== JS ==
The idea is to display one of three types of message box: Success, Warning and Error.
For a given selector, call the .displayMsg() function and pass any of the following params:

* msgType
* msgTitle
* msgContent


E.g.

    $('#msg-success').displayMsg({
        msgType   : 'success',
        msgTitle  : 'Congratulations!!',
        msgContent: 'Whatever message is relevant'
    });


[View a Demo]. (https://rawgit.com/matt-alice/UICommon/master/public-component.html)
