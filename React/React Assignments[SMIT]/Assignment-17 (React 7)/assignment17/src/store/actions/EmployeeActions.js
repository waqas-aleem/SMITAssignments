export const ADD_EMPLOYEE = "ADD_EMPLOYEE"
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE"
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE"
export const ADD_CLICK = "ADD_CLICK"
export const UPDATE_CLICK = "UPDATE_CLICK"
export const HIDE_FORM  = "HIDE_FORM"
 



export function doAddEmployee(data) 
{
    //   console.log("From Action :", data);
     return {
         type:ADD_EMPLOYEE,
         payload:data
     }
}

export function doDeleteEmployee(data) 
{
      
    return {
        type:DELETE_EMPLOYEE,
        payload:data
    }
    
}

export function doUpdateEmployee(data) 
{
     
      
    return {
        type:UPDATE_EMPLOYEE,
        payload:data
    }
    
}

export function doAddClick() 
{
      
    return {
        type:ADD_CLICK 
    }
    
}
export function doHideClick() 
{
      
    return {
        type:HIDE_FORM
    }
    
}
export function doUpdateClick(data) 
{
     
       
    return {
        type:UPDATE_CLICK,
        payload:data
    }
    
}