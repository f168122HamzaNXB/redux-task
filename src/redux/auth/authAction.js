import { 
    SAVE_TOKEN, 
} from "./authTypes";

export const login = (email, password) =>  (dispatch) => {
    return fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            hashPassword: password,
          })
        }).then(response => response.json())
        .then((json) => {
            dispatch({ 
                type: SAVE_TOKEN,
                payload: json
            })
        }).catch((error) => {
          console.error(error);
        });
}