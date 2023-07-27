import React from "react";

function ShowCourses() {
    const [courses, setCourses] = React.useState([]);
    const token = localStorage.getItem('token');
    fetch('http://localhost:3000/admin/courses',{
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
    }).then(resp=>resp.json()).then((data)=>{
            setCourses(data);
            console.log(data)
    }).catch((error)=>{console.log(error)});
    return <div>
        <h1>Create Course Page</h1>
        {courses.map(c => <Course title={c.title} />)}
    </div>
}
function Course(props) {
    return <div>
        <h1>{props.title}</h1>
    </div>
}

export default ShowCourses;