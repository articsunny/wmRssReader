SettingsPage.widgets = {
	navGotoImportOPMLPage: ["wm.NavigationCall", {"operation":"gotoDialogPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoDialogPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"ImportOPMLPage\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	subscriptionDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"236px","height":"236px","title":"subscription","width":"500px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			subscriptionLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"166px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"subscriptionLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"subscriptionDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				SUBSCRIPTIONIDEditor1: ["wm.Number", {"caption":"SUBSCRIPTIONID","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"SUBSCRIPTIONID","height":"26px","required":true,"width":"100%"}, {}],
				titleEditor1: ["wm.Text", {"caption":"Title","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"title","height":"26px","required":true,"width":"100%"}, {}],
				xmlurlEditor1: ["wm.Text", {"caption":"Xmlurl","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"xmlurl","height":"26px","required":true,"width":"100%"}, {}],
				htmlurlEditor1: ["wm.Text", {"caption":"Htmlurl","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"htmlurl","height":"26px","required":true,"width":"100%"}, {}],
				typeEditor1: ["wm.Text", {"caption":"Type","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"type","height":"26px","required":true,"width":"100%"}, {}],
				FOLDERIDEditor1: ["wm.Number", {"caption":"FOLDERID","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"FOLDERID","height":"26px","required":true,"width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333","desktopHeight":"33px","height":"33px"}, {}, {
			subscriptionSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"subscriptionLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"subscriptionLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			subscriptionCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"subscriptionDialog.hide","onclick1":"subscriptionLiveForm1.cancelEdit"}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		tabLayers1: ["wm.Layers", {"styles":{}}, {}, {
			feedsLayer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Feeds","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
				subscriptionLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
					subscriptionGridPanel: ["wm.FancyPanel", {"minDesktopHeight":220,"minHeight":220,"title":"Subscription"}, {}, {
						subscriptionDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[
{"show":true,"field":"SUBSCRIPTIONID","title":"SUBSCRIPTIONID","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"title","title":"Title","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"xmlurl","title":"Xmlurl","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"htmlurl","title":"Htmlurl","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"type","title":"Type","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"Folder.FOLDERID","title":"FOLDERID","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"Folder.FOLDERNAME","title":"FOLDERNAME","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"SUBSCRIPTIONID: \" + ${SUBSCRIPTIONID} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Title: \" + ${title}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Xmlurl: \" + ${xmlurl}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Htmlurl: \" + ${htmlurl}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Type: \" + ${type}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"FOLDERID: \" + ${Folder.FOLDERID}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"FOLDERNAME: \" + ${Folder.FOLDERNAME}\n + \"</div>\"\n\n","mobileColumn":true}
],"height":"100%","margin":"4","minDesktopHeight":60}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"app.lvSubscription1","targetProperty":"dataSet"}, {}]
							}]
						}]
					}],
					subscriptionDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"220px","title":"Details"}, {}, {
						subscriptionLiveForm2: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"188px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"app.subscriptionLiveVariable1"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"subscriptionDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
							}],
							SUBSCRIPTIONIDEditor2: ["wm.Number", {"caption":"SUBSCRIPTIONID","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"SUBSCRIPTIONID","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
							titleEditor2: ["wm.Text", {"caption":"Title","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"title","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
							xmlurlEditor2: ["wm.Text", {"caption":"Xmlurl","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"xmlurl","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
							htmlurlEditor2: ["wm.Text", {"caption":"Htmlurl","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"htmlurl","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
							typeEditor2: ["wm.Text", {"caption":"Type","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"type","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
							FolderLookup1: ["wm.Lookup", {"caption":"Folder","captionSize":"140px","dataType":"com.opmldb.data.Folder","displayField":"FOLDERNAME","formField":"Folder","readonly":true,"required":true,"width":"90%"}, {}],
							subscriptionLiveForm2EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"subscriptionLiveForm2","operationPanel":"operationPanel2","savePanel":"savePanel2"}, {}, {
								savePanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
									saveButton2: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"caption":"Save","height":"100%","margin":"4"}, {"onclick":"subscriptionLiveForm2EditPanel.saveData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"subscriptionLiveForm2EditPanel.formInvalid","targetProperty":"disabled"}, {}]
										}]
									}],
									cancelButton2: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"subscriptionLiveForm2EditPanel.cancelEdit"}]
								}],
								operationPanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
									newButton2: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"subscriptionLiveForm2EditPanel.beginDataInsert"}],
									updateButton2: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"subscriptionLiveForm2EditPanel.beginDataUpdate"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"subscriptionLiveForm2EditPanel.formUneditable","targetProperty":"disabled"}, {}]
										}]
									}],
									deleteButton2: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"subscriptionLiveForm2EditPanel.deleteData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"subscriptionLiveForm2EditPanel.formUneditable","targetProperty":"disabled"}, {}]
										}]
									}]
								}]
							}]
						}]
					}]
				}]
			}],
			foldersLayer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Folders","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
				folderLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
					folderGridPanel: ["wm.FancyPanel", {"minDesktopHeight":220,"minHeight":220,"title":"Folder"}, {}, {
						folderDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[
{"show":true,"field":"FOLDERID","title":"FOLDERID","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"FOLDERNAME","title":"FOLDERNAME","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"FOLDERID: \" + ${FOLDERID} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"FOLDERNAME: \" + ${FOLDERNAME}\n + \"</div>\"\n\n","mobileColumn":true}
],"height":"100%","margin":"4","minDesktopHeight":60}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"app.lvFolder1","targetProperty":"dataSet"}, {}]
							}]
						}]
					}],
					folderDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"118px","title":"Details"}, {}, {
						folderLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"86px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"app.folderLiveVariable1"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"folderDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
							}],
							FOLDERIDEditor2: ["wm.Number", {"caption":"FOLDERID","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"FOLDERID","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
							FOLDERNAMEEditor1: ["wm.Text", {"caption":"FOLDERNAME","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"FOLDERNAME","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
							folderLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"folderLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
								savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
									saveButton1: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"caption":"Save","height":"100%","margin":"4"}, {"onclick":"folderLiveForm1EditPanel.saveData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"folderLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
										}]
									}],
									cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"folderLiveForm1EditPanel.cancelEdit"}]
								}],
								operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
									newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"folderLiveForm1EditPanel.beginDataInsert"}],
									updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"folderLiveForm1EditPanel.beginDataUpdate"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"folderLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
										}]
									}],
									deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"folderLiveForm1EditPanel.deleteData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"folderLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
										}]
									}]
								}]
							}]
						}]
					}]
				}]
			}]
		}],
		panel1: ["wm.Panel", {"height":"72px","horizontalAlign":"center","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
			btnFeeds: ["wm.Button", {"caption":"Feeds ","desktopHeight":"68px","height":"68px","margin":"4","styles":{"backgroundColor":"#162d92"},"width":"92px"}, {"onclick":"feedsLayer1"}],
			btnFolders: ["wm.Button", {"caption":"Folders","desktopHeight":"68px","height":"68px","margin":"4","styles":{"backgroundColor":"#162d92"},"width":"92px"}, {"onclick":"foldersLayer1"}],
			btnImportOPML1: ["wm.Button", {"caption":"Import OPML","desktopHeight":"68px","height":"68px","margin":"4","styles":{"backgroundColor":"#162d92"},"width":"92px"}, {"onclick":"navGotoImportOPMLPage"}],
			btnImportOPML2: ["wm.Button", {"caption":"Export OPML","desktopHeight":"68px","height":"68px","margin":"4","styles":{"backgroundColor":"#162d92"},"width":"92px"}, {"onclick":"navGotoImportOPMLPage"}]
		}]
	}]
}