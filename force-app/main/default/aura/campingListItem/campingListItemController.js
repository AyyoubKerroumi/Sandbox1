({
    myAction : function(component, event, helper) {

    },
    packItem:function(componenet,event,helper) {
        let btn = event.getSource();
        componenet.set("v.item.Packed__c",true);
        btn.set("v.disabled",true);
    },
    clickCreateItem:function(componenet, event, helper){
        let validateCamping = component.find('newCamping').reduce(function(acc,actualInput){
            actualInput.showHelpMessageIfInvalid();
            return acc && actualInput.get('v.validity').valid;
        },true);
        if(validateCamping){
            let newCamping = componenet.get('v.newItem');
            let campings = componenet.get('v.items');
            let camping = JSON.parse(JSON.stringify());
            campings.add(camping);
            componenet.set('v.items', campings);
        }
    }
})