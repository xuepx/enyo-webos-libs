enyo.kind({
	name:"enyo.AppMenu",kind: "onyx.MenuDecorator", components: [
	    // {content: "Show menu"},
	    {name:"client",kind: "onyx.Menu"}
	],
	events:{
		onClickMenu:"",
	},
	handlers: {
        onSelect: "itemSelected"
    },
	// style:"height:200px;position:absolute;top:0px;Left:0px;",
	publiced:{
		menus:[]
	},
	create:function(){
		this.inherited(arguments);
		this.$.client.createComponents(this.menus,{onwer:this.parent});
		this.createComponent({kind: "enyo.Signals", onopenAppMenu: "openAppMenu", oncloseAppMenu: "closeAppMenu"});
		this.$.client.render();
	},
	openAppMenu:function(){
		enyo.appMenu.isOpened=true;
		if(enyo.appMenu.isOpened){
			this.requestShowMenu();
		}else{
			this.requestHideMenu();
		}
	},
	closeAppMenu:function(){
		enyo.appMenu.isOpened=false;
		this.requestHideMenu();
	},
	itemSelected: function(inSender, inEvent) {
        this.doClickMenu(inEvent.originator);
    }
});

enyo.appMenu = {
	isOpened: false,
	toggle: function() {
		// NOTE: shower of the app menu responsible for this flag.
		if (enyo.appMenu.isOpened) {
			enyo.appMenu.close();
		} else {
			enyo.appMenu.open();
		}
	},
	open: function() {
		enyo.Signals.send("onopenAppMenu");
	},
	close: function() {
		enyo.Signals.send("oncloseAppMenu");
	}
};