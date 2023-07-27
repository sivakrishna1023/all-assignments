import React from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
/// You need to add input boxes to take input for users to create a course.
/// I've added one input so you understand the api to do it.

function CreateCourse() {
    const [title, setTitle] = React.useState("");

    
    const handleSubmit = (event) => {
      event.preventDefault();
      
      const title = document.getElementById('title').value;
      setTitle(title);
      const description = document.getElementById('description').value;
      const price = document.getElementById('price').value;
      const course={
        title: title,
        description: description,
        price: price
      };
      console.log(course);
      const token = localStorage.getItem('token');
      fetch('http://localhost:3000/admin/courses',{
        method:'POST',
        body: JSON.stringify(course),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }).then(resp=>resp.json()).then(data=>{
        console.log(data.message);
        console.log(data.courseId);
      }).catch((error)=>{
        console.log("we found an error",error);
      })
    };
    return <div>
        {/* <h1>Create Course Page</h1>
        <input type={"text"} onChange={e => setTitle(e.target.value)} />
        <button onClick={() => console.log(title)}>Create Course</button> */}
        <SignIn  done={handleSubmit}  ></SignIn>
    </div>
}

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
      Course Seller
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

function SignIn(props) {
 

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
          Create Course Page
          </Typography>
          <Box component="form" onSubmit={props.done} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              name="title"
              label="Title of course"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="description"
              name="description"
              label="Enter the Description"
              multiline
              rows={5}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="price"
              name="price"
              label="Enter the price"
              autoFocus
            />
          
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Course
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
export default CreateCourse;