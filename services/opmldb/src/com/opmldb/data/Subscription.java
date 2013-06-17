
package com.opmldb.data;



/**
 *  opmldb.Subscription
 *  06/16/2013 12:54:41
 * 
 */
public class Subscription {

    private Integer SUBSCRIPTIONID;
    private String title;
    private String xmlurl;
    private String htmlurl;
    private String type;
    private com.opmldb.data.Folder Folder;

    public Integer getSUBSCRIPTIONID() {
        return SUBSCRIPTIONID;
    }

    public void setSUBSCRIPTIONID(Integer SUBSCRIPTIONID) {
        this.SUBSCRIPTIONID = SUBSCRIPTIONID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getXmlurl() {
        return xmlurl;
    }

    public void setXmlurl(String xmlurl) {
        this.xmlurl = xmlurl;
    }

    public String getHtmlurl() {
        return htmlurl;
    }

    public void setHtmlurl(String htmlurl) {
        this.htmlurl = htmlurl;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public com.opmldb.data.Folder getFolder() {
        return Folder;
    }

    public void setFolder(com.opmldb.data.Folder Folder) {
        this.Folder = Folder;
    }

}
