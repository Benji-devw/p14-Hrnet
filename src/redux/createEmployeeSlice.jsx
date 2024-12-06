import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    employees: localStorage.getItem("employees") || [],
    isLoading: false,
    errorMessage: null,
};

// ajouter un employé au tableau employees du localStorage
export const createEmployee = createAsyncThunk("employees/createEmployee", async (employee) => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
    return employee;
});

const employeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        setIsLoading: (state) => {
            state.isLoading = !state.isLoading;
        },
        setEmployees: (state, { payload }) => {
            state.employees = payload;
        },
        setErrorMessage: (state, { payload }) => {
            state.errorMessage = payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(createEmployee.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createEmployee.fulfilled, (state) => {
                // state.employees.push(payload);
                state.isLoading = false;
            })
            .addCase(createEmployee.rejected, (state, { payload }) => {
                state.errorMessage = payload.message;
                state.isLoading = false;
            });
    }
});

export const { setEmployees, setIsLoading, setErrorMessage } = employeesSlice.actions;

export default employeesSlice.reducer;