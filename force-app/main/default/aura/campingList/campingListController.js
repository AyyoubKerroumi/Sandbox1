({
    doInit: function(component, event,helper){
        let action = component.get("c.getItems");
        action.setCallback(this,function(response){
            if(response.getState() === "SUCCESS"){
                component.set("v.items",response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
    clickCreateItem:function(component, event, helper){
        let validateCamping = component.find('newCamping').reduce(function(acc,actualInput){
            actualInput.showHelpMessageIfInvalid();
            return acc && actualInput.get('v.validity').valid;
        },true);
        if(validateCamping){
            helper.createItem(component);
        }
    }
})