import * as Location from 'expo-location';


export const transportList = async (mlat: number, mlng: number) => {
    const lat = mlat || null;
    const lng = mlng || null;

    if (lat && lng) {
        try {
            const response = await fetch(`https://itinhoraire.onrender.com/nearby-schedules?lng=${lng}&lat=${lat}&count=50&distance=300`);


            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            let data = await response.json();

            // console.log("Data fetched and text color of first object is:", data[data.length - 2])

            return data; // You can return the data if needed
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}