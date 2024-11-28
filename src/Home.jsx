import {
    FormControl,
    InputLabel,
    Link,
    MenuItem,
    Select,
    TextField,
    Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

export const Home = () => {
    const DepHandleChange = (event) => {
        console.log(event.target.value);
    };

    return (
        <section className='home__wrapper'>
            <h1>HRnet</h1>

            <Link href='https://vite.dev' target='_blank'>
                View Current Employees
            </Link>

            <form>
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
                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 5, lg: 4 }}>
                        <TextField
                            fullWidth
                            type='date'
                            id='dob'
                            name='dob'
                            label='Date of Birth'
                            InputLabelProps={{ shrink: true }}
                            variant='outlined'
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
                        <h2>Adress</h2>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 5, lg: 4 }}>
                        <TextField
                            fullWidth
                            type='text'
                            id='street'
                            name='street'
                            label='Street'
                            variant='outlined'
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
                            >
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
                            id='zip'
                            name='zip'
                            label='Zip Code'
                            variant='outlined'
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
                        <h2>Department</h2>
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
                                onChange={DepHandleChange}
                            >
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
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </section>
    );
};
