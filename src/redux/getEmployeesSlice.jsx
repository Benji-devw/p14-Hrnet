import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    employees: localStorage.getItem("employees") || [],
    isLoading: false,
    errorMessage: null,
};

// getEmployees formulaire
export const getEmployees = createAsyncThunk("employees/getEmployees", async () => {
    // const response = await fetch("https://reqres.in/api/users");
    // return response.json();
    const res = localStorage.getItem("employees");
    return res;
});



const employeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        setEmployees: (state, { payload }) => {
            state.employees = payload;
        },
        setIsLoading: (state) => {
            state.isLoading = !state.isLoading;
        },
        setErrorMessage: (state, { payload }) => {
            state.errorMessage = payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getEmployees.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getEmployees.fulfilled, (state, { payload }) => {
                state.employees = payload.data;
                state.isLoading = false;
            })
            .addCase(getEmployees.rejected, (state, { payload }) => {
                state.errorMessage = payload.message;
                state.isLoading = false;
            });
    }
});

export const { setEmployees, setIsLoading, setErrorMessage } = employeesSlice.actions;

export default employeesSlice.reducer;