import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import {
  useHistory,
  Link,
  useParams
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { updateStudent } from './redux/student/studentActions';
import { showStudent } from './redux/student/studentActions';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    appBarColor: {
      color: 'black',
      backgroundColor: '#9999ff'
    },
    
    title: {
      flexGrow: 1,
      fontSize: 20,
      fontFamily: 'Times New Roman, Times, serif',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    
    inputMargin: {
        marginTop: 10,
        marginLeft: 20,
        width: '90%',
        height: 30,
        borderRadius: 4.0,
        border: 'none',
        BorderBottom: '2px solid red'
    },

    errorStyle: {
        marginTop: 5,
        marginLeft: 20,
        width: '90%',
        color: 'red'
    },

    paperSize:{
        width: '50%',
    },

    buttonStyle: {
      margin: 20,
      color: 'white',
      fontSize: 18,
      height: 30,
      border: 'none',
      fontFamily: 'Times New Roman, Times, serif',
      backgroundColor: '#000066',
      width: '25%',
      borderRadius: 5.0
    },

    paperStyle:{
      width: '100%',
      margin: 50,
      borderRadius: 20.0,
      backgroundColor: '#b3c6ff'
    },

    labelStyle: {
      marginTop: 20,
      paddingBottom: 0,
      marginLeft: 20,
      fontSize: 18,
      fontFamily: 'Times New Roman, Times, serif',
    },

    newStudentButton: {
      margin: 10,
      color: 'black',
      fontWeight: 'bold',
      fontSize: 18,
      fontFamily: 'Times New Roman, Times, serif',
      textDecoration: 'none'
    }, 

  }),
);

function Update() {
    const classes = useStyles();
    const [mount, setMount] = useState(true);
    const dispatch = useDispatch();
    let { id } = useParams();
    const studentData = useSelector((state) => state.studentReducer.student);
    const [editUser, setEditUser] = useState(studentData);

    let history = useHistory();
    const { register, handleSubmit, reset, formState: {errors} } = useForm();
    
    // console.log(studentData);
    
    useEffect( () => {
        dispatch(showStudent(id));
        if (mount) {
          console.log(studentData);
          reset({
            firstname: studentData.firstname,
            lastname: studentData.lastname,
            email: studentData.email,
            designation: studentData.designation,
            city: studentData.city,
            country: studentData.country,
            })
      }
      return () => setMount(false);
    }, [studentData]) 

    const onSubmit = (data, e) => {
        console.log(data, e);
        dispatch(updateStudent(data, id));
        history.push("/all");
    };

    return (
      <div>
        <AppBar className={classes.appBarColor} position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    STUDENTS
                </Typography>
                <Link to="/all" className={classes.newStudentButton}>BACK</Link>
                {/* <Button color="inherit" className={classes.newStudentButton} >LOGOUT</Button> */}
            </Toolbar>
        </AppBar>
        <Grid container direction="column" alignItems="center" justifyContent="center">
            <Grid item xs={12}>
            <Paper className={classes.paperStyle} elevation={2} square>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h6" className={classes.title}>
                    UPDATE STUDENT
                </Typography>
                <label className={classes.labelStyle} htmlFor="firstname">Firstname:</label><br/>
                <input className={classes.inputMargin} {...register("firstname", {required: "This is required", maxLength: 20 })} />
                {errors.firstname && <p className={classes.errorStyle}>{errors.firstname.message}</p>}
                
                <label className={classes.labelStyle} htmlFor="lastname">Lastname:</label><br/>
                <input className={classes.inputMargin} {...register("lastname", {required: "This is required", maxLength: 20 })} />
                {errors.lastname && <p className={classes.errorStyle}>{errors.lastname.message}</p>}

                <label className={classes.labelStyle} htmlFor="email">Email:</label><br/>
                <input className={classes.inputMargin} {...register("email", {required: "This is require",
                pattern: { 
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,  
                message: "Invalid email" } 
                })}/>
                {errors.email && <p className={classes.errorStyle}>{errors.email.message}</p>}
                
                <label className={classes.labelStyle} htmlFor="password">Password:</label>
                <input className={classes.inputMargin} type="password" {...register("password", { required: "This is required", maxLength: 20 })} />
                {errors.password && <p className={classes.errorStyle}>{errors.password.message}</p>}

                <label className={classes.labelStyle} htmlFor="designation">Designation:</label><br/>
                <input className={classes.inputMargin} {...register("designation", {required: "This is required", maxLength: 20 })} />
                {errors.designation && <p className={classes.errorStyle}>{errors.designation.message}</p>}
                
                <label className={classes.labelStyle} htmlFor="city">City:</label><br/>
                <input className={classes.inputMargin} {...register("city", {required: "This is required", maxLength: 20 })} />
                {errors.city && <p className={classes.errorStyle}>{errors.city.message}</p>}
                
                <label className={classes.labelStyle} htmlFor="country">Country:</label><br/>
                <input className={classes.inputMargin} {...register("country", {required: "This is required", maxLength: 20 })} />
                {errors.country && <p className={classes.errorStyle}>{errors.country.message}</p>}<br/><br/>
                
                <input className={classes.buttonStyle} type="submit" name="Update"/>
            </form>
            </Paper>
            </Grid>
        </Grid>
      </div>
    );
}

export default Update;