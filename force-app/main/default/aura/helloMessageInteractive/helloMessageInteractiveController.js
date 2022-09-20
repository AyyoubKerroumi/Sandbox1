({
    myAction : function(component, event, helper) {

    },
    onClickButton: function(component,event,helper) {
        let btn = event.getSource();
        let btnMessage = btn.get("v.label");
        component.set("v.message", btnMessage);
    }
})