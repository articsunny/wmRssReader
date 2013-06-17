dojo.declare("HelpPage", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

HelpPage.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
spacer2: ["wm.Spacer", {"height":"100%","width":"100%"}, {}],
panel1: ["wm.Panel", {"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","styles":{"fontSize":"30px","fontWeight":"bold","textAlign":"center"},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"align":"center","caption":"Help","height":"100%","padding":"4","styles":{"fontSize":"30px"}}, {}]
}],
spacer1: ["wm.Spacer", {"height":"100%","styles":{},"width":"100%"}, {}]
}]
};

HelpPage.prototype._cssText = '';
HelpPage.prototype._htmlText = '';