(function($) {
    if ($.jQTouch)
    {
        $.jQTouch.addExtension(function MobileOS(){
            function detect(ua){
                var ua = ua, os = {},
                    android = ua.match(/(Android)\s+([0-9\.]+)/),
                    iphone = ua.match(/(iPhone\sOS)\s([0-9_]+)/),
                    ipod = ua.match(/(iPhone\sOS)\s([0-9_]+)/),
                    ipad = ua.match(/(iPad).*OS\s([0-9_]+)/),
                    webos = ua.match(/(webOS)\/([0-9\.]+)/);
                if(android) os.mobile = true, os.android = true, os.version = android[2];
                if(iphone) os.mobile = true, os.ios = true, os.version = iphone[2].replace(/_/g,'.'), os.iphone = true;
                if(ipod) os.mobile = true, os.ios = true, os.version = ipod[2].replace(/_/g,'.'), os.ipod = true;
                if(ipad) os.mobile = true, os.ios = true, os.version = ipad[2].replace(/_/g,'.'), os.ipad = true;
                if(webos) os.mobile = true, os.webos = true, os.version = webos[2];
                return os;
            }

            (function () {
                $os = detect(navigator.userAgent);
            })();

            return;
        });
    }
})(jQuery);
