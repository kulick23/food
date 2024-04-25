import { makeAutoObservable, autorun } from "mobx";

class Counter {
    count = 0;

    constructor() {
        makeAutoObservable(this);

        autorun(() => {
            console.log("Count changed:", this.count);
        });
    }

    UpdateCounter(NewCount) {
        this.count += NewCount;
    }
}

export default new Counter();

