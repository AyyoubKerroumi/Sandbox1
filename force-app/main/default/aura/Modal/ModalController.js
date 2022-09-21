({
    openModal : function(component, event, helper) {
        let opened = component.get('v.opened');
        console.log(opened);
        component.set("v.opened", true);
    },
    closeModal : function(component, event, helper) {
        component.set("v.opened", false);
    },
    submitDetails : function(component, event, helper){
        component.set("v.opened", false);
    }
})
