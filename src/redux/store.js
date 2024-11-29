import { configureStore } from '@reduxjs/toolkit';
// import getEmployeesReducer from './getEmployeesSlice';
import createEmployeeReducer from './createEmployeeSlice';

export default configureStore({
    reducer: {
        createEmployee: createEmployeeReducer,
        // getEmployees: getEmployeesReducer,
    },
});