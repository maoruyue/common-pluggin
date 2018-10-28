(function(win){
	function remaDafult(){
		/*禁止浏览器默认事件*/
    		document.addEventListener("touchstart",function(e){
    			e.preventDefault();
    		});
    		/*点透处理*/
    		!(function(){
    			var aNode=document.querySelectorAll("a");
    			for(var i=0;i<aNode.length;i++){
    			aNode[i].addEventListener("touchstart",function(e){
    				window.location.href=this.href;
    			});
    		}
    		})();
    		/*rem适配设置*/
    		!(function(){
    			var styleNode=document.createElement("style");
    			var width=document.documentElement.clientWidth;
    			styleNode.innerHTML="html{font-size: "+width/16+"px !important;}"
    			document.head.appendChild(styleNode);
    		})();
	}
	win.remaDafult=remaDafult;
})(window);
