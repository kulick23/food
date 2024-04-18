import { renderEntireTree } from "../render";

let state = {
    totalItems: 0,
    MenuPage: {
        burgers: []
    }
};

const fetchData = async () => {
    try {
        const response = await fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals");
        const data = await response.json();

        state.MenuPage.burgers = data.map(item => ({
            id: item.id,
            name: item.meal,
            desc: item.instructions,
            price: item.price,
            img: item.img,
            area: item.area,
            category: item.category
        }));

        renderEntireTree();
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export let updateTotalItems = (newItems) => {
    state.totalItems += newItems;
    renderEntireTree();
};

export let getTotalItems = () => {
    return state.totalItems;
};

fetchData();

export default state;

