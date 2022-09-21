@isTest
public class CampingListControllerTest {
    @TestSetup
    static void makeData(){
        Camping_Item__c camping = new Camping_Item__c();
        camping.Name = '455';
        camping.Packed__c = true;
        camping.Price__c = 147.12;
        camping.Quantity__c = 10;
        insert camping;
    }
    @isTest
    public static void getItems(){
        Test.startTest();
        List<Camping_Item__c> campings =  CampingListController.getItems();
        System.assertEquals(1, campings.size(),'Test Error');
        Test.stopTest();
    }
}