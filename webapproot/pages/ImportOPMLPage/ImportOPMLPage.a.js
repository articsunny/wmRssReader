dojo.declare("ImportOPMLPage", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

ImportOPMLPage.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"middle"}, {}, {
label1: ["wm.Label", {"caption":"Select OPML file","padding":"4","styles":{"fontWeight":"bold"},"width":"300px"}, {}],
dojoFileUpload1: ["wm.DojoFileUpload", {"styles":{}}, {}, {
input: ["wm.ServiceInput", {"type":"uploadFileInputs"}, {}]
}]
}]
};

ImportOPMLPage.prototype._cssText = '';
ImportOPMLPage.prototype._htmlText = '';