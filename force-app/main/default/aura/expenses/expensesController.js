({
    clickCreate: function(component, event, helper) {
        let valideteExpense = component.find('expenseform').reduce(function(validSoFar,inputCmp){
            inputCmp.showHelpMessageIfInvalid('nadi');
            return validSoFar && inputCmp.get('v.validity').valid; 
        },true);
        if(valideteExpense){
            let newExpense = component.get("v.newExpense");
            console.log('new Expense:'+JSON.stringify(newExpense));
            helper.createExpense(component, newExpense);
        }
    },
    doInit:function(component,event,helper){
        // creer une action
        let action = component.get("c.getExpenses");
        // ajouter un callback
        action.setCallback(this,function(response){
            let state = response.getState();
            if(state === "SUCCESS"){
                component.set("v.expenses",response.getReturnValue());
            }else{
                console.log('failed with the state: '+state);
            }
        });
        // envoyer l'action pour l'execution
        $A.enqueueAction(action);
    },
})