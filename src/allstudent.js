import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { retrieveStudents } from './redux/student/studentActions';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";

class RetrieveStudent extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.props.retrieveStudents();
    }

    render(){ 
        let studentData = this.props.students;
        const styles = {
            appBarColor: {
                color: 'black',
                backgroundColor: '#9999ff'
            },

            iconColor: {
                color: '#9999ff'
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

            table: {
                minWidth: 600,
                borderRadius: 100,
                backgroundColor: 'white'
            },

            tableHead: {
                backgroundColor: '#000066',
                color: 'white',
            },

            headCell: {
                color: 'white',
                fontSize: 20,
                fontFamily: 'Times New Roman, Times, serif',
                fontWeight: 'bold',
            },

            tableMargin: {
                overflowX: 'auto',
                marginTop: 20,
                borderRadius: 10.0
            },

            tableText: {
                fontSize: 16,
                fontFamily: 'Times New Roman, Times, serif',
            },
            
            tableRowHover: {
                '&:hover': {
                  backgroundColor: '#d9d9d9',
                },
            },
        }

        return(
            <div className="App">
                <AppBar style={styles.appBarColor} position="static">
                    <Toolbar>
                        <IconButton edge="start" style={styles.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" style={styles.title}>
                            STUDENTS
                        </Typography>
                        <Link to="/" className={styles.newStudentButton} onClick={() => {
                            localStorage.removeItem('token');
                        }}>LOGOUT</Link>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="xl">
                    <TableContainer style = {styles.tableMargin} component={Paper}>
                        <Table style = {styles.table} aria-label="Student">
                            <TableHead style = {styles.tableHead}>
                                <TableRow>
                                    <TableCell style = {styles.headCell}>Firstname</TableCell>
                                    <TableCell style = {styles.headCell}>Lastname</TableCell>
                                    <TableCell style = {styles.headCell}>Designation</TableCell>
                                    <TableCell style = {styles.headCell}>City</TableCell>
                                    <TableCell style = {styles.headCell}>Country</TableCell>
                                    <TableCell style = {styles.headCell}>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {studentData.map((student) => {
                                    return(
                                    <TableRow style = {styles.tableRowHover} key={student._id}>
                                        <TableCell style = {styles.tableText}>{student.firstname}</TableCell>
                                        <TableCell style = {styles.tableText}>{student.lastname}</TableCell>
                                        <TableCell style = {styles.tableText}>{student.designation}</TableCell>
                                        <TableCell style = {styles.tableText}>{student.city}</TableCell>
                                        <TableCell style = {styles.tableText}>{student.country}</TableCell>
                                        <TableCell style = {styles.tableText}>
                                        <Link to={`/editstudent/${student._id}`}><EditIcon style={styles.iconColor}/></Link>
                                        <Link to={`/showstudent/${student._id}`}><VisibilityIcon style={styles.iconColor}/></Link>
                                        <DeleteIcon 
                                        // onClick = {() => {
                                        //     deleteStudent(student._id);
                                        // }} 
                                        style={styles.iconColor}
                                        />
                                         </TableCell>
                                    </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state.studentReducer.students.data);
    return { 
        students: state.studentReducer.students,
        loading: state.studentReducer.loading
    }
}

const mapDispatchToProps = {
    retrieveStudents, 
}

export default connect(mapStateToProps, mapDispatchToProps)(RetrieveStudent);