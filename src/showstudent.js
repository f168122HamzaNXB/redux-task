import React from 'react'; 
import { connect } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import { showStudent } from './redux/student/studentActions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import {
    Link
  } from "react-router-dom";

class ShowStudent extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        this.props.showStudent(params.id);
    }



    render(){
        let studentData = this.props.students;
        // const avatar = this.props.students.firstname[0];
        console.log(studentData);

        const styles = {
            root: {
                flexGrow: 1,
            },
            
            // menuButton: {
            // marginRight: theme.spacing(2),
            // },
            
            textDirection: {
                flex: 1,
                flexDirection: "row",
                justifyContent: "center"
            },

            newStudentButton: {
                margin: 10,
                color: 'black',
                fontWeight: 'bold',
                fontSize: 18,
                fontFamily: 'Times New Roman, Times, serif',
                textDecoration: 'none'
            }, 
            
            title: {
            flexGrow: 1,
            fontSize: 20,
            fontFamily: 'Times New Roman, Times, serif',
            fontWeight: 'bold',
            },
            
            fontStyle:{
                fontSize: 20,
                fontFamily: 'Times New Roman, Times, serif',
                fontWeight: 'bold',
            },
            
            table: {
            minWidth: 600,
            },
            
            tableHead: {
            backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
            },
            
            inputMargin: {
                marginTop: 30,
                marginLeft: 20,
                width: '90%'
            },
            
            paperSize:{
                width: '50%',
            },
            
            backButtonColor: {
            margin: 10,
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18,
            fontFamily: 'Times New Roman, Times, serif',
            textDecoration: 'none'
            },
            
            buttonStyle: {
            margin: 20,
            color: 'white',
            fontSize: 18,
            fontFamily: 'Times New Roman, Times, serif',
            backgroundColor: '#000066',
            width: '50%',
            borderRadius: 5.0
            },
            
            appBarColor: {
            color: 'black',
            backgroundColor: '#9999ff'
            }, 
            
            paperStyle:{
                marginTop: 25,
                marginLeft: 100,
                marginRight: 100,
                borderRadius: 10.0,
                textAlign: 'center'
            },
            
            avatarStyle: {
                backgroundColor: "#000066",
                // width: theme.spacing(8),
                // height: theme.spacing(8),
            },
            
            avatarDirection: {
                display: 'flex',
                justifyContent: 'center'
            }
        }
        return(
            <div>
            <AppBar style={styles.appBarColor} position="static">
                <Toolbar>
                    <IconButton edge="start" style={styles.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={styles.title}>
                        STUDENT
                    </Typography>
                    <Button color="inherit"><Link to="/all" style={styles.backButtonColor}>Back</Link></Button>
                </Toolbar>
            </AppBar>
            <div style={styles.avatarDirection}>
                <Avatar style={styles.avatarStyle}>A</Avatar>
            </div>
            <Paper elevation={2} style={styles.paperStyle}>
                <Typography variant="h6" style={styles.fontStyle}>
                    Firstname: {studentData.firstname}
                </Typography>
            </Paper>
            <Paper elevation={2} style={styles.paperStyle}>
                <Typography variant="h6" style={styles.fontStyle}>
                    Lastname: {studentData.lastname}
                </Typography>
            </Paper>
            <Paper elevation={2} style={styles.paperStyle}>
                <Typography variant="h6" style={styles.fontStyle}>
                    Designation: {studentData.designation}
                </Typography>
            </Paper>
            <Paper elevation={2} style={styles.paperStyle}>
                <Typography variant="h6" style={styles.fontStyle}>
                    City: {studentData.city}
                </Typography>
            </Paper>
            <Paper elevation={2} style={styles.paperStyle}>
                <Typography variant="h6" style={styles.fontStyle}>
                    Country: {studentData.country}
                </Typography>
            </Paper>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { 
        students: state.studentReducer.student,
    }
}

const mapDispatchToProps = {
    showStudent, 
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowStudent);