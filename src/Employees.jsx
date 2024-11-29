import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import employeesMocks from "../public/employees-mocks.json";
import { Link } from "react-router";

const columns = [
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
    { field: "zip", headerName: "Zip", width: 130 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function Employees() {
    return (
        <section className='employees__wrapper'>
            <h1>Current Employees</h1>

            <Paper sx={{ height: 400, width: "100%" }}>
                <DataGrid
                    rows={employeesMocks}
                    columns={columns}
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
