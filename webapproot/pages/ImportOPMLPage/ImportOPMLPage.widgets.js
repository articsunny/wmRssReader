ImportOPMLPage.widgets = {
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"middle"}, {}, {
		label1: ["wm.Label", {"caption":"Select OPML file","padding":"4","styles":{"fontWeight":"bold"},"width":"300px"}, {}],
		dojoFileUpload1: ["wm.DojoFileUpload", {"styles":{}}, {}, {
			input: ["wm.ServiceInput", {"type":"uploadFileInputs"}, {}]
		}]
	}]
}