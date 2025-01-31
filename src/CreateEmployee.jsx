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
import { useDispatch, useSelector } from "react-redux";
import { createEmployee, setIsLoading } from "./redux/createEmployeeSlice";
import { Modal } from '@benji-devw/dev-docs';
import statesList from "../public/statesList.json";


const CreateEmployee = () => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.createEmployee);
    const [openModal, setOpenModal] = useState(false);
    const closeModal = () => {
        setOpenModal(false);
    };
    const [state, setState] = useState({
        id: Math.floor(Math.random() * 1000000),
        firstName: "",
        lastName: "",
        startDate: "",
        dateOfBirth: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setIsLoading());

        setTimeout(() => {
            setOpenModal(true);
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

    return (
        <section className='create-employee__wrapper'>
            {openModal && (
                <Modal onClose={closeModal} className='modal-content' position="center">
                    <h2>Employé Créé</h2>
                    <p><b>{state.firstName}</b> a bien été ajouté à la base.</p>
                </Modal>
            )}
            
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
                            required
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
                            required
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
                            required
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
                            required
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
                            required
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
                            required
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
                                required
                            >
                                <MenuItem value=''>Select a state</MenuItem>
                                {statesList.map((state) => (
                                    <MenuItem key={state.abbreviation} value={state.value}>
                                        {state.value}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 5, lg: 4 }}>
                        <TextField
                            fullWidth
                            type='text'
                            id='zipCode'
                            name='zipCode'
                            label='ZipCode'
                            variant='outlined'
                            value={state.zipCode}
                            onChange={handleChange}
                            required
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
                                required
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
                            {isLoading ? "Creation..." : "Ajouter un Employé"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </section>
    );
};

export default CreateEmployee;
