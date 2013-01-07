#enyo-webos-libs

*A selection of additional enyo2 kinds to aid development for webOS*

##AppMenu

AN Mune of Application; Dependencies: ENYO2.1.1, onyx

**Example:**

    {name:"appmenu",kind: "AppMenu", menus: [
         {content: "login"},
	        {classes: "onyx-menu-divider"},
	        {content: "logoff"}
		 ],onClickMenu:"ClickMenu"}

    ClickMenu:function(inSender,inMenu){
        if(inMenu.content=="login"){
            //do login
    		}
		    if(inMenu.content=="logoff"){	
            //do logoff
		    }
    },


##BackGesture

BackGesture for ENYO2

**Example:**

	{kind: "Gesture", onBack: "cancelLogin"}
     
    cancelLogin:function(inSender,inEvent){
        if(inEvent)inEvent.preventDefault();//Avoid Card mode
        return -1;
    }

##windows

some function for webos Window manager.

**Example:**

     enyo.windows.openWindow("template/login.html","FetionLogin");
     enyo.windows.addBannerMessage("SetWakeAgain","{}");

##ApplicationEvent

**Exaple**
    
    {kind: "enyo.Signals", onwindowParamsChange: "WindowParamsChange"}