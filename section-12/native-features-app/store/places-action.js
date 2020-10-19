import * as FileSystem from 'expo-file-system';

export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = (title, image) => {
    return async dispatch => {
        const fileName = image.split('/').pop(); // takes the image url, split it by slashes into an array. pop() returns the last item of the array which is the filename.
        const newPath = FileSystem.documentDirectory + fileName;

        try {
            await FileSystem.moveAsync({
                from: image,
                to: newPath,
            });
        } catch(err) {
            console.log(err);
            throw err;
        }

        dispatch({ 
            type: ADD_PLACE, 
            placeData: {
                title: title,
                image: newPath,
            }
        });
    };
};