import { 
    RETRIEVE_STUDENTS, 
    SHOW_STUDENT,
    CREATE_STUDENT, 
    UPDATE_STUDENT, 
    // DELETE_ALL_STUDENT, 
    // DELETE_STUDENT 
} from "./studentTypes";

export const retrieveStudents = () =>  (dispatch) => {
    return fetch('http://localhost:8080/students', {
          method: 'GET',
          headers: {
              'Authorization': 'Bearer '+localStorage.getItem('token') 
          },
        }).then(response => response.json())
        .then((json) => {
          dispatch({ 
                type: RETRIEVE_STUDENTS,
                payload: json.data
            })
        }).catch((error) => {
          console.error(error);
        });
}

export const showStudent = (id) =>  (dispatch) => {
  return fetch('http://localhost:8080/student/' + id, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+localStorage.getItem('token') 
        },
      }).then(response => response.json())
      .then((json) => {
        // console.log(json.data);
        dispatch({ 
              type: SHOW_STUDENT,
              payload: json.data
          })
      }).catch((error) => {
        console.error(error);
      });
}

export const createStudent = (data) => (dispatch) => {
  console.log(data);
  return fetch('http://localhost:8080/createstudents', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json' 
        },
          body: JSON.stringify({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password.toString(),
            designation: data.designation,
            city: data.city,
            country: data.country,
          })
      }).then(response => {
        if (response.headers.get('content-type').match(/application\/json/)){
          response.json()
        } 
        return response;
      })
      .then((json) => {
        console.log(json);
        dispatch({ 
              type: CREATE_STUDENT,
              payload: json.data
          })
      }).catch((error) => {
        console.error(error);
      });
}

export const updateStudent = (data, id) =>  (dispatch) => {
  console.log(data.firstname);
  console.log(data.lastname);
  console.log(data.email);
  console.log(data.password.toString());
  console.log(data.designation);
  console.log(data.city);
  console.log(data.country);
  return fetch('http://localhost:8080/student/' + id, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+localStorage.getItem('token'),
        },
          body: JSON.stringify({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password.toString(),
            designation: data.designation,
            city: data.city,
            country: data.country,
          })
      }).then(response => {
        if (response.headers.get('content-type').match(/application\/json/)){
          response.json()
        } 
        return response;
      })
      .then((json) => {
        console.log(json);
        // dispatch({ 
        //       type: UPDATE_STUDENT,
        //       payload: json.data
        //   })   
      }).catch((error) => {
        console.error(error);
      });
}