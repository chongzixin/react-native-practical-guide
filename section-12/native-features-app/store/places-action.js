import * as FileSystem from 'expo-file-system';

export const ADD_PLACE = 'ADD_PLACE';
export const SET_PLACES = 'SET_PLACES';

import { insertPlace, fetchPlaces } from '../helpers/db';

export const addPlace = (title, image) => {
    return async dispatch => {
        const fileName = image.split('/').pop(); // takes the image url, split it by slashes into an array. pop() returns the last item of the array which is the filename.
        const newPath = FileSystem.documentDirectory + fileName;

        try {
            await FileSystem.moveAsync({
                from: image,
                to: newPath,
            });
            const dbResult = await insertPlace(title, newPath, 'Dummy Address', 3.2, 107.1245);
            console.log(dbResult);

            dispatch({ 
                type: ADD_PLACE, 
                placeData: {
                    id: dbResult.insertId,
                    title: title,
                    image: newPath,
                }
            });
        } catch(err) {
            console.log(err);
            throw err;
        }
    };
};

export const loadPlaces = () => {
    return async dispatch => {
        try {
            const dbResult = await fetchPlaces();
            console.log(dbResult);
            dispatch({ type: SET_PLACES, places: dbResult.rows._array });
        } catch (err) {
            throw err;
        }
    };
};