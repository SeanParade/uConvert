// debug mode turns on console logging for each item
var debug=true;
if (debug)
    console.log("uConvert Loaded - Debugging enabled");
//date object with a pretty print in dd/mm/yyyy
var dt = new Date();
var currentTime = dt.toLocaleDateString('en-GB') + " "
    + dt.getHours() + ":";
if (dt.getMinutes() < 10)
    //add 0 to a string to avoid "12:3" instead of "12:03"
    //I'm sure there is a better way to do this using date formatting but w/e I'll save it for ver.2
    currentTime += "0" + dt.getMinutes();
else
    currentTime += dt.getMinutes();

if (debug)
    console.log(currentTime);

//error logging on creation
function onCreated(n)
{
    if (debug)
	console.log("onCreated triggered");

    if (browser.runtime.lastError) 
	console.log('Error: ${browser.runtime.lastError}');
    else
    	console.log(n + " was created.");
}

//timestamp menu option 
browser.contextMenus.create({
    id:"timeStamp",
    title:"Timestamp: "+ currentTime,
    contexts:["all"]
    }, onCreated);

//currency conversion menu option
browser.contextMenus.create({
    id:"fieldConvert",
    title:"USD -> CAD",
    contexts:["all"]
    }, onCreated);

// link: https://github.com/mdn/webextensions-examples/tree/master/context-menu-demo
//click listener
var selectedInput = document.activeElement;
//context menu item click listener
browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (document.activeElement.tagName != "BODY" && info.editable)
	selectedInput = this;
		
    console.log("info.menuItem = " + info.menuItemId);
// info is event object;
// menuItemId is menu itme clicked
    switch (info.menuItemId) {
// "Timestamp" clicked
	    case "timeStamp":
		if (info.editable)
			selectedInput.value = " " + currentTime;
		if (debug)
			console.log("timestamp clicked \n Active Element: " +
			document.activeElement.tagName + 
			"\n selectedInput:" + selectedInput.tagName + 
			"\n editable: " + info.editable);
		break;
// "USD -> CAD" clicked    
	   case "fieldConvert":
		if(debug)
		    console.log("field convert clicked");
		break;
    }
});



