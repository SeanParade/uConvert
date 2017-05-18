var dt = new Date();
var currentTime = dt.toLocaleDateString('en-GB') + " "
    + dt.getHours() + ":" + dt.getMinutes();

browser.contextMenus.create({
    id:"timeStamp",
    title:"Timestamp here",
    contexts:["all"]
});

browser.contextMenus.create({
    id:"fieldConvert",
    title:"USD -> CAD",
    contexts:["all"]
});
