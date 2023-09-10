import axios from "axios";

const getDirections = async (origin, destination, apiKey) => {
    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`
        );

        if (response.data.status === "OK") {
            return response.data.routes[0]; // Возвращаем данные о маршруте
        } else {
            throw new Error("Ошибка получения маршрута");
        }
    } catch (error) {
        throw new Error("Ошибка запроса маршрута: " + error.message);
    }
};

export default getDirections;
