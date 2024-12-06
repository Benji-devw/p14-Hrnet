import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './getEmployeesSlice';
import createEmployeeReducer from './createEmployeeSlice';

export default configureStore({
    reducer: {
        createEmployee: createEmployeeReducer,
        employees: employeesReducer,
    },
});