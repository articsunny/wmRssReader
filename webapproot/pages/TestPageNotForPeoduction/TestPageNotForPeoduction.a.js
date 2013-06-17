dojo.declare("TestPageNotForPeoduction", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

TestPageNotForPeoduction.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}]
};

TestPageNotForPeoduction.prototype._cssText = '';
TestPageNotForPeoduction.prototype._htmlText = '';