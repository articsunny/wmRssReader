dojo.declare("wmRssReader", wm.Application, {
	"disableDirtyEditorTracking": false, 
	"eventDelay": 0, 
	"hintDelay": 1500, 
	"i18n": false, 
	"isSecurityEnabled": false, 
	"main": "Main", 
	"manageHistory": true, 
	"manageURL": false, 
	"name": "", 
	"phoneGapLoginPage": "Login", 
	"phoneMain": "", 
	"projectSubVersion": "Alpha", 
	"projectVersion": 1, 
	"sessionExpirationHandler": "navigateToLogin", 
	"studioVersion": "6.6.0.M2", 
	"tabletMain": "", 
	"theme": "wm.base.widget.themes.wm_default", 
	"toastPosition": "br", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		lvFolder1: ["wm.LiveVariable", {"type":"com.opmldb.data.Folder"}, {}, {
			liveView: ["wm.LiveView", {"dataType":"com.opmldb.data.Folder","view":[
{"caption":"FOLDERID","sortable":true,"dataIndex":"FOLDERID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"FOLDERNAME","sortable":true,"dataIndex":"FOLDERNAME","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
		}], 
		lvSubscription1: ["wm.LiveVariable", {"orderBy":undefined,"type":"com.opmldb.data.Subscription"}, {}, {
			liveView: ["wm.LiveView", {"dataType":"com.opmldb.data.Subscription","related":["Folder"],"view":[
{"caption":"SUBSCRIPTIONID","sortable":true,"dataIndex":"SUBSCRIPTIONID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Title","sortable":true,"dataIndex":"title","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Xmlurl","sortable":true,"dataIndex":"xmlurl","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Htmlurl","sortable":true,"dataIndex":"htmlurl","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Type","sortable":true,"dataIndex":"type","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"FOLDERID","sortable":true,"dataIndex":"Folder.FOLDERID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"FOLDERNAME","sortable":true,"dataIndex":"Folder.FOLDERNAME","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
		}]
	},
	_end: 0
});

wmRssReader.extend({

	_end: 0
});