Module.register("MMM-HealthMetrics",{
    // Default module config.
    defaults: {
		
    },
	getScripts: function() {
		return [
			'https://code.jquery.com/jquery-2.2.3.min.js',  // this file will be loaded from the jquery servers.
		]
	},
	start: function() {
		Log.info("Starting module: " + this.name);
		this.timedUpdate();
	},
	timedUpdate: function(){

		var self = this;
		//calculate Timeout
		var now = new Date();
		
		var healthNotice = document.createElement("div");
		var fullText = document.createElement("span");
		var myText = "Testing";
		fullText.innerHTML = myText;
		
		healthNotice.appendChild(fullText);
		wrapper.appendChild(healthNotice);
		
		setTimeout(function(){self.timedUpdate},millisTillDownload);
	},
	playVideo: function(){
		this.sendSocketNotification('VIDEO_CHANGED', this.config);
	},
	loadVideo: function(){
		 					 
		});
	},
	notificationReceived: function(notification, payload, sender) {
		 if(notification == "BUTTON_PRESSED") {
			Log.log(this.name + " received a system notification: " + notification);
			this.playVideo();
		}
	},	
	// test for your commands
	checkCommands: function(data){
    		
    	}
});
