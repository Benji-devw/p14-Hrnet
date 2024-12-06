import { useState } from "react";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { createEmployee, setIsLoading } from "./redux/createEmployeeSlice";

export const Home = () => {
    const dispatch = useDispatch();
    const {isLoading} = useSelector((state) => state.createEmployee);

    const [state, setState] = useState({
        id: Math.floor(Math.random() * 1000000),
        firstName: "",
        lastName: "",
        starDate: "",
        department: "",
        dateOfBirth: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setIsLoading());

        setTimeout(() => {
            dispatch(createEmployee(state));
            dispatch(setIsLoading());
        }, 2000);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    console.log(isLoading);
    
    return (
        <section className='home__wrapper'>
            <h1>HRnet</h1>

            <Link to={"/employees"}>View Current Employees</Link>

            <form onSubmit={handleSubmit}>
                <Grid
                    container
                    spacing={2}
                    justifyContent={"center"}
                    sx={{ mt: 4 }}
                >
                    <Grid size={{ xs: 12 }}>
                        <h2>Create Employee</h2>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 5, lg: 4 }}>
                        <TextField
                            fullWidth
                            type='text'
                            id='firstName'
                            name='firstName'
                            label='First Name'
                            variant='outlined'
                            value={state.firstName}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 5, lg: 4 }}>
                        <TextField
                            fullWidth
                            type='text'
                            id='lastName'
                            name='lastName'
                            label='Last Name'
                            variant='outlined'
                            value={state.lastName}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 5, lg: 4 }}>
                        <TextField
                            fullWidth
                            type='date'
                            id='startDate'
                            name='startDate'
                            label='Start Date'
                            InputLabelProps={{ shrink: true }}
                            variant='outlined'
                            value={state.startDate}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 5, lg: 4 }}>
                        <TextField
                            fullWidth
                            type='date'
                            id='dateOfBirth'
                            name='dateOfBirth'
                            label='Date of Birth'
                            InputLabelProps={{ shrink: true }}
                            variant='outlined'
                            value={state.dateOfBirth}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>

                <Grid
                    container
                    spacing={2}
                    justifyContent={"center"}
                    sx={{ mt: { xs: 4, sm: 2 } }}
                >
                    <Grid size={{ xs: 12 }}>
                        <h3>Address</h3>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 5, lg: 4 }}>
                        <TextField
                            fullWidth
                            type='text'
                            id='street'
                            name='street'
                            label='Street'
                            variant='outlined'
                            value={state.street}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 5, lg: 4 }}>
                        <TextField
                            fullWidth
                            type='text'
                            id='city'
                            name='city'
                            label='City'
                            variant='outlined'
                            value={state.city}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 5, lg: 4 }}>
                        <FormControl fullWidth variant='outlined'>
                            <InputLabel id='state-label'>State</InputLabel>
                            <Select
                                labelId='state-label'
                                id='state'
                                name='state'
                                label='State'
                                value={state.state}
                                onChange={handleChange}
                            >
                                <MenuItem value=''>Select a state</MenuItem>
                                <MenuItem value='AL'>Alabama</MenuItem>
                                <MenuItem value='AK'>Alaska</MenuItem>
                                <MenuItem value='AZ'>Arizona</MenuItem>
                                <MenuItem value='AR'>Arkansas</MenuItem>
                                <MenuItem value='CA'>California</MenuItem>
                                <MenuItem value='CO'>Colorado</MenuItem>
                                <MenuItem value='CT'>Connecticut</MenuItem>
                                <MenuItem value='DE'>Delaware</MenuItem>
                                <MenuItem value='DC'>
                                    District Of Columbia
                                </MenuItem>
                                <MenuItem value='FL'>Florida</MenuItem>
                                <MenuItem value='GA'>Georgia</MenuItem>
                                <MenuItem value='HI'>Hawaii</MenuItem>
                                <MenuItem value='ID'>Idaho</MenuItem>
                                <MenuItem value='IL'>Illinois</MenuItem>
                                <MenuItem value='IN'>Indiana</MenuItem>
                                <MenuItem value='IA'>Iowa</MenuItem>
                                <MenuItem value='KS'>Kansas</MenuItem>
                                <MenuItem value='KY'>Kentucky</MenuItem>
                                <MenuItem value='LA'>Louisiana</MenuItem>
                                <MenuItem value='ME'>Maine</MenuItem>
                                <MenuItem value='MD'>Maryland</MenuItem>
                                <MenuItem value='MA'>Massachusetts</MenuItem>
                                <MenuItem value='MI'>Michigan</MenuItem>
                                <MenuItem value='MN'>Minnesota</MenuItem>
                                <MenuItem value='MS'>Mississippi</MenuItem>
                                <MenuItem value='MO'>Missouri</MenuItem>
                                <MenuItem value='MT'>Montana</MenuItem>
                                <MenuItem value='NE'>Nebraska</MenuItem>
                                <MenuItem value='NV'>Nevada</MenuItem>
                                <MenuItem value='NH'>New Hampshire</MenuItem>
                                <MenuItem value='NJ'>New Jersey</MenuItem>
                                <MenuItem value='NM'>New Mexico</MenuItem>
                                <MenuItem value='NY'>New York</MenuItem>
                                <MenuItem value='NC'>North Carolina</MenuItem>
                                <MenuItem value='ND'>North Dakota</MenuItem>
                                <MenuItem value='OH'>Ohio</MenuItem>
                                <MenuItem value='OK'>Oklahoma</MenuItem>
                                <MenuItem value='OR'>Oregon</MenuItem>
                                <MenuItem value='PA'>Pennsylvania</MenuItem>
                                <MenuItem value='RI'>Rhode Island</MenuItem>
                                <MenuItem value='SC'>South Carolina</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 5, lg: 4 }}>
                        <TextField
                            fullWidth
                            type='text'
                            id='zipCode'
                            name='zipCode'
                            label='zipCode Code'
                            variant='outlined'
                            value={state.zipCode}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>

                <Grid
                    container
                    spacing={2}
                    justifyContent={"center"}
                    sx={{ mt: { xs: 4, sm: 2 } }}
                >
                    <Grid size={{ xs: 12 }}>
                        <h3>Department</h3>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 5, lg: 4 }}>
                        <FormControl fullWidth variant='outlined'>
                            <InputLabel id='department-label'>
                                Department
                            </InputLabel>
                            <Select
                                labelId='department-label'
                                id='department'
                                name='department'
                                label='Department'
                                value={state.department}
                                onChange={handleChange}
                            >
                                <MenuItem value=''>
                                    Select a department
                                </MenuItem>
                                <MenuItem value='sales'>Sales</MenuItem>
                                <MenuItem value='marketing'>Marketing</MenuItem>
                                <MenuItem value='engineering'>
                                    Engineering
                                </MenuItem>
                                <MenuItem value='humanResources'>
                                    Human Resources
                                </MenuItem>
                                <MenuItem value='legal'>Legal</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                        >
                            {/* Create */}
                            {isLoading ? "Creating..." : "Create Employee"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </section>
    );
};
