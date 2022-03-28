import { v4 as uuidv4 } from 'uuid';
import {ADD_EMPLOYEE,UPDATE_EMPLOYEE,DELETE_EMPLOYEE,ADD_CLICK,UPDATE_CLICK,HIDE_FORM} from '../actions/EmployeeActions'



const initialState = {

     employeeTempData : [
        {
          uid:uuidv4(),
          firstName:"Muhammad Waqas",
          lastName :"Aleem",
          email:"waqas.aleem1990@gmail.com"
        },
        {
          uid:uuidv4(),
          firstName:"Hassan ",
          lastName :"Ali Khan",
          email:"hassanalikhan502@gmail.com"
        },
        {
          uid:uuidv4(),
          firstName:"Muhammad Abair",
          lastName :"Mutarraf",
          email:"abair.mutarraf@gmail.com"
        },
      
      ],
      isAdd:false,
      isUpdate:false,
      isView:false,
      formHeader:'Add Employee',
      updateUid: 0,
      firstName:"",
      lastName:"",
      email:""
  };
  
  export default function EmployeeReducer(state = initialState, action) 
  {
      switch (action.type) 
        {
          case ADD_EMPLOYEE:{
            // console.log("ADD_EMPLOYEE reducer",  action.payload);
            let newEmployees = [ ...state.employeeTempData,  action.payload ]
            // console.log("newEmployee reducer",  newEmployees);
            return {
              ...state, 
              employeeTempData: newEmployees,
            
              
            };
          
        }

        case DELETE_EMPLOYEE:{

               
             let newEmployee = state.employeeTempData.filter((e) => e.uid !== action.payload.uid)
           
            return {
              ...state, 
              employeeTempData: newEmployee,
              isAdd:false,
              isUpdate:false,
              isView:false,

            };
          
        }
        
        case UPDATE_EMPLOYEE:{

            
            let newEmployee = state.employeeTempData.filter((e) => e.uid !== action.payload.uid)

          
           return {
             ...state, 
             employeeTempData: newEmployee,
              
           };
         
       }

       case ADD_CLICK:
           {
            
            return   {
                ...state,
                isAdd:true,
                isUpdate:false,
                formHeader:'Add Employee Data'
            }
               
     
            }

            case UPDATE_CLICK:
           {
               
                 
            return   {
                ...state,
                isAdd:true,
                isUpdate:true,
                formHeader:'Update Employee Data'                 
            }
           
     
            }

            case HIDE_FORM:
           {
                
            return   {
                ...state,
                isAdd:false,
                isUpdate:false,
                formHeader:'',
                updateUid: 0,
                firstName:"",
                lastName:"",
                email:""

            }
               
     
            }


        default :
        return state;
    }
      
  }