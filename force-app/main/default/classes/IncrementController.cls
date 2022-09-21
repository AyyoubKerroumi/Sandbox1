public with sharing class IncrementController {
    public Integer num{
        get{
            if(num == null){
                System.debug('set num');
                num = 10;
            }else{
                System.debug('increment num');
                num++;
            }
            return num;
        }
        set;
    }
    
    public IncrementController() {
        if(num == null){
            num = 20;
        }else{
            num++;
        }
    }
}