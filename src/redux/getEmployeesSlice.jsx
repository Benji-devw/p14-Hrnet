import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// get employees from localStorage
export const fetchEmployees = createAsyncThunk(
    "employees/fetchEmployees",
    async () => {
        const storedEmployees = localStorage.getItem("employees");
        return storedEmployees ? JSON.parse(storedEmployees) : [];
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
