dojo.declare("Main", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
// Called by the onSelect event for the propertyTree1 widget
propertyTree1Select: function(inSender, inNode, inSelectedDataList, inSelectedPropertyName, inSelectedPropertyValue) {
try {
//alert("Selected node = " + inNode.content);
this.label2.setCaption("Selected node = " + inNode.content);
} catch (e) {
console.error('ERROR IN propertyTree1Select: ' + e);
}
},
_end: 0
});

Main.widgets = {
variable1: ["wm.Variable", {"dataSet":""}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"propertyTree1.selectedItem.subscriptions.Folder.subscriptions.xmlurl","targetProperty":"dataSet.dataValue"}, {}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle"}, {}, {
mobileIconButton1: ["wm.MobileIconButton", {"border":"0","deviceType":["tablet","phone"],"direction":"left","width":"30px"}, {"onclick":"app._onBack"}],
panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
tabLayers1: ["wm.Layers", {}, {}, {
readerLayer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Reader","horizontalAlign":"left","layoutKind":"left-to-right","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"471px"}, {}, {
btnSubscribe1: ["wm.Button", {"caption":"Subscribe","margin":"4","width":"86px"}, {}],
propertyTree1: ["wm.PropertyTree", {"configJson":"{ displayField: \"FOLDERNAME\",\nchildNodes: {\nsubscriptions:{ displayField: \"title\"}\n }\n}","height":"100%"}, {"onclick":"serviceVariable1","onselect":"propertyTree1Select"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.lvFolder1","targetProperty":"dataSet"}, {}]
}]
}],
label1: ["wm.Label", {"padding":"4","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"propertyTree1.selectedItem.subscriptions.title","targetProperty":"caption"}, {}]
}]
}],
label2: ["wm.Label", {"caption":"","padding":"4","width":"100%"}, {}],
label3: ["wm.Label", {"padding":"4","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${propertyTree1.selectedItem.subscriptions.xmlurl}","targetProperty":"caption"}, {}]
}]
}]
}],
splitter1: ["wm.Splitter", {"height":"100%","minimum":90,"width":"4px"}, {}],
feedList1: ["wm.FeedList", {"_classes":{"domNode":["GridListStyle"]},"columns":[
{"width":"100%","field":"title","show":true,"title":"Title"}
],"expand":true,"height":"100%","minDesktopHeight":60,"url":"http://www.nu.nl/feeds/rss/algemeen.rss"}, {}, {
getFeedServiceVariable: ["wm.ServiceVariable", {"operation":"getFeed","service":"FeedService"}, {}, {
input: ["wm.ServiceInput", {"type":"getFeedInputs"}, {}]
}]
}]
}],
settingsLayer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Settings","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
settingsPageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"SettingsPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
helpLayer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Help","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
helpPageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"HelpPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
aboutLayer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"About","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
aboutPageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"AboutPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}]
}],
buttonPanel1: ["wm.Panel", {"deviceType":["desktop"],"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
btnReader: ["wm.Button", {"caption":"Reader","margin":"4"}, {"onclick":"readerLayer1"}],
btnSettings: ["wm.Button", {"caption":"Settings","margin":"4"}, {"onclick":"settingsLayer1"}],
btnHelp: ["wm.Button", {"caption":"Help","margin":"4"}, {"onclick":"helpLayer1"}],
btnAbout1: ["wm.Button", {"caption":"About","margin":"4"}, {"onclick":"aboutLayer1"}]
}]
}],
mobileIconButton2: ["wm.MobileIconButton", {"border":"0","deviceType":["tablet","phone"],"direction":"right","width":"30px"}, {"onclick":"app._onBack"}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';