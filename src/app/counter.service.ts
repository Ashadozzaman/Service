export class CounterService{
    activeToInactiveUsers = 0;
    inactiveToActiveUsers = 0;

    incrementActiveToInactive(){
        this.activeToInactiveUsers++;
        console.log('Active to inactive:'+this.activeToInactiveUsers);
    }

    incrementInactiveToActive(){
        this.inactiveToActiveUsers++;
        console.log('Inactive to active:'+this.inactiveToActiveUsers);
    }

}