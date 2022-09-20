({
	createItem : function(component) {
		let newCamping = component.get("v.newItem");
            let campings = component.get("v.items");
            let action = component.get("c.saveItem");
            action.setParams({
                "item":newCamping
            });
            action.setCallback(this,function(response){
                if(response.getState() === "SUCCESS"){
                    campings.push(response.getReturnValue());
                    component.set("v.items", campings);
                    component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c',
                    'Name': '',
                    'Quantity__c': 0,
                    'Price__c': 0,
                    'Packed__c': false });
                }
            });
            $A.enqueueAction(action);
	}
})