//date object with a pretty print in dd/mm/yyyy
var dt = new Date();
var currentTime = dt.toLocaleDateString('en-GB') + " "
    + dt.getHours() + ":";
if(dt.getMinutes()<10)
    //add 0 to a string to avoid "12:3" instead of "12:03"
    //I'm sure there is a better way to do this using date formatting but w/e I'll save it for ver.2
    currentTime += "0" + dt.getMinutes();
else
    currentTime += dt.getMinutes();

console.log(currentTime);
//error logging on creation
function onCreated(n) {
    if (browser.runtime.lastError) {
	console.log(`Error: ${browser.runtime.lastError}`);
    }
    else
    {
	console.log(n + " was created.");
    }
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
//click listener

/*
* Not sure if working. A lot of this is from the mozilla context menu demo
* link: https://github.com/mdn/webextensions-examples/tree/master/context-menu-demo
* Not super happy using switch case; may switch out (haha, :'| )
*/

//selected object var
var curElement = document.activeElement;

browser.contextMenus.onClicked.addListener(function(info, tab) {
    console.log("info.menuItem = " + info.menuItem);
    switch (info.menuItemId) {
    case "timeStamp":
/*	if(curElement.tagName == "INPUT" ||curElement.tagName == "TEXTAREA")
	{
	    curElement.value += " " + currentTime;
	}
*/
	console.log("timestamp clicked");
	break;
    case "fieldConvert":
	console.log("field convert clicked");
	break;
    }
});


