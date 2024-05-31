import { makeAutoObservable, autorun } from "mobx";

class Counter {
    count: number;

    constructor() {
        this.count = 0;
        makeAutoObservable(this);

        autorun(() => {
            console.log("Count changed:", this.count);
        });
    }

    UpdateCounter(NewCount: number) {
        this.count += NewCount;
    }
}

export default new Counter();
