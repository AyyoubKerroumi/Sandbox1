({
    doInit : function(component, event, helper) {
        let mydate = component.get("v.expense.Date__c");
        if(mydate){
            component.set("v.formatdate", new Date(mydate));
        }
    },
    clickReimbursed : function(component, event, helper) {
        var expense = component.get("v.expense");
        
    }
})