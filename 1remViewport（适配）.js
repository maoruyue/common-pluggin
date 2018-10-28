var RemViewport={
    one:function () {
        var dpr = window.devicePixelRatio;
        var scale = 1/dpr;
        //375
        var metaNode = document.querySelector('meta[name="viewport"]');
        metaNode.setAttribute('content','width=device-width,initial-scale='+ scale +',user-scalable=no');
        //750
        var width = document.documentElement.clientWidth;
        var styleNode = document.createElement('style');
        styleNode.innerHTML = 'html{font-size: '+ width/16 +'px !important;}';
        document.head.appendChild(styleNode);
    },
    rem:function () {
            //屏幕宽度
            var width = document.documentElement.clientWidth;
            //创建style标签
            var styleNode = document.createElement('style');
            styleNode.innerHTML = 'html{font-size: '+ width/16 +'px !important;}';
            document.head.appendChild(styleNode);
    },
    viewport:function () {
        //屏幕宽度  375
        var width = document.documentElement.clientWidth;
        var tartgetW = 320;
        //比例
        var scale　=　width/tartgetW;
        //创建meta
        var metaNode = document.querySelector('meta[name="viewport"]');
        metaNode.setAttribute('content','initial-scale='+ scale +',user-scalable=no');
    }
};