import { observable, action, makeObservable, computed } from "mobx";

class DataStore {
    data = [];

    constructor() {
        makeObservable(this, {
            data: observable,
            fetchData: action,
            filteredData: computed
        });

        this.fetchData()
            .then(() => {
                console.log("Data fetched successfully");
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    async fetchData() {
        try {
            const response = await fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals");
            const jsonData = await response.json();
            const formattedData = jsonData.map(item => ({
                id: item.id,
                name: item.meal,
                desc: item.instructions,
                price: item.price,
                img: item.img,
                area: item.area,
                category: item.category
            }));

            this.data = formattedData;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    get filteredData() {
        return this.data.slice();
    }
}

export default new DataStore();
