import { useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
// import employeesMocks from "../public/employees-mocks.json";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "./redux/getEmployeesSlice";

const columns = [
    // { field: "id", headerName: "ID", width: 130 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
        field: "startDate",
        headerName: "Start date",
        type: "date",
        width: 130,
        valueGetter: (val) => {
            return new Date(val);
        },
    },
    {
        field: "dateOfBirth",
        headerName: "Date of birth",
        type: "date",
        width: 130,
        valueGetter: (val) => {
            return new Date(val);
        },
    },
    { field: "street", headerName: "Street", width: 130 },
    { field: "city", headerName: "City", width: 130 },
    { field: "state", headerName: "State", width: 130 },
    { field: "zipCode", headerName: "Zip", width: 130 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function Employees() {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees.employees);
    // const status = useSelector((state) => state.employees.status);
    // const error = useSelector((state) => state.employees.error);

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    return (
        <section className='employees__wrapper'>
            <h1>Current Employees</h1>

            <Paper sx={{ height: 400, width: "100%" }}>
                <DataGrid
                    rows={employees}
                    columns={columns}
                    getRowId={(row) => row.id}
                    initialState={{ pagination: { paginationModel } }}
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>

            <div style={{ margin: "2rem" }}>
                <Link to='/'>Home</Link>
            </div>
        </section>
    );
}
