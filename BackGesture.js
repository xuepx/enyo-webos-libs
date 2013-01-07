enyo.kind({
	name:"Gesture",
	events:{
		onBack:""
	},
	create:function(){
		this.inherited(arguments);
		var self=this;
		document.addEventListener('keyup', function(ev) {
			if (ev.keyIdentifier == "U+1200001" || ev.keyIdentifier == "U+001B" || ev.keyIdentifier == "Back") {
				self.doBack(ev);
			}
		}, false);
	}
});
