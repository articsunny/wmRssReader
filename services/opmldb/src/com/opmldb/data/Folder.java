
package com.opmldb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  opmldb.Folder
 *  06/16/2013 12:54:41
 * 
 */
public class Folder {

    private Integer FOLDERID;
    private String FOLDERNAME;
    private Set<com.opmldb.data.Subscription> subscriptions = new HashSet<com.opmldb.data.Subscription>();

    public Integer getFOLDERID() {
        return FOLDERID;
    }

    public void setFOLDERID(Integer FOLDERID) {
        this.FOLDERID = FOLDERID;
    }

    public String getFOLDERNAME() {
        return FOLDERNAME;
    }

    public void setFOLDERNAME(String FOLDERNAME) {
        this.FOLDERNAME = FOLDERNAME;
    }

    public Set<com.opmldb.data.Subscription> getSubscriptions() {
        return subscriptions;
    }

    public void setSubscriptions(Set<com.opmldb.data.Subscription> subscriptions) {
        this.subscriptions = subscriptions;
    }

}
