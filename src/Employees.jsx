import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import employeesMocks from "../public/employees-mocks.json";
import { Link } from "react-router";

const columns = [
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
        field: "dateOfBirth",
        headerName: "Date of birth",
        type: "number",
        width: 90,
    },
    { field: "street", headerName: "Street", width: 130 },
    { field: "city", headerName: "City", width: 130 },
    { field: "state", headerName: "State", width: 130 },
    { field: "zip", headerName: "Zip", width: 130 },
];



const paginationModel = { page: 0, pageSize: 5 };

export default function Employees() {
    // console.log(employeesMocks);
    
    return (
        <section className='employees__wrapper'>
            <h1>Current Employees</h1>

            <Paper sx={{ height: 400, width: "100%" }}>
                <DataGrid
                    rows={employeesMocks}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>

            <Link to="/" style={{margin: "2rem"}}>Home</Link>
        </section>
    );
}
