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