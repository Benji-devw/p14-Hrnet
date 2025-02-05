import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import employeesMocks from "../assets/employees-mocks.json";

// get employees from localStorage
export const fetchEmployees = createAsyncThunk(
    "employees/fetchEmployees",
    async () => {
        if (localStorage.getItem("employees")) {
            return JSON.parse(localStorage.getItem("employees"));
        } else {
            localStorage.setItem("employees", JSON.stringify(employeesMocks));
            return employeesMocks;
        }
    }
);

const employeesSlice = createSlice({
    name: "employees",
    initialState: {
        employees: [],
        status: "idle",
        error: null,
    },
    reducers: {
        setEmployees: (state, action) => {
            state.employees = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployees.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchEmployees.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.employees = action.payload;
            })
            .addCase(fetchEmployees.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { setEmployees } = employeesSlice.actions;
export default employeesSlice.reducer;
