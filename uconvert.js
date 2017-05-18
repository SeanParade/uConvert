//date object with a pretty print in dd/mm/yyyy
var dt = new Date();
var currentTime = dt.toLocaleDateString('en-GB') + " "
    + dt.getHours() + ":" + dt.getMinutes();

//error logging on creation
function onCreated(n) {
    if (browser.runtime.lastError) {
	console.log(`Error: ${browser.runtime.lastError}`);
    }
}
 
browser.contextMenus.create({
    id:"timeStamp",
    title:"Timestamp here",
    contexts:["all"]
    }, onCreated);

browser.contextMenus.create({
    id:"fieldConvert",
    title:"USD -> CAD",
    contexts:["all"]
    }, onCreated);

browser.contextMenus.onClicked.addListener(function(info, tab) {
    switch (info.menuItemId) {
    case "timeStamp":
	if(document.activeElement.tagName == "INPUT" ||document.activeElement.tagName == "TEXTAREA"){
	    document.activeElement.value += " " + currentTime;
	}

	break;
    case "fieldConvert":

	break;
    }
});

