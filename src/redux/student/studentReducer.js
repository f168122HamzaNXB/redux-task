import { RETRIEVE_STUDENTS, SHOW_STUDENT, CREATE_STUDENT, UPDATE_STUDENT } from "./studentTypes";

export const initialState = {
  students: [],
  loading: true,
  student: {}
};
  
const studentReducer = (state = initialState, action) => {  
  switch (action.type){
      case RETRIEVE_STUDENTS:
        return {
              ...state,
              loading: false,
              students: action.payload,
            }
      case SHOW_STUDENT:
        return {
              ...state,
              loading: false,
              student: action.payload,
            }
      case CREATE_STUDENT:
        return {
              ...state,
              student: action.payload,
            }
      case UPDATE_STUDENT:
        return state.students.map((student) => {
          console.log(student._id);
          if (student._id === action.payload.id){
            return {
              ...state,
              ...action.payload,
            };
          } else{
            return state;
          }
        })
      default: 
        return state;
    }
  }

export default studentReducer;
