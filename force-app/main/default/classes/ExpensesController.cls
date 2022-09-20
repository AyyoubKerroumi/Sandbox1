public with sharing class ExpensesController{
    @AuraEnabled
    public static List<Expense__c> getExpenses(){
        try {
            return [select Id, Name, Amount__c, Client__c, Date__c,
            Reimbursed__c, CreatedDate from Expense__c];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static Expense__c saveExpense(Expense__c expense){
        try {
            upsert expense;
            return expense;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}