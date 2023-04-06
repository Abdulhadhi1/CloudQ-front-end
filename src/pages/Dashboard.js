
import React, { useEffect, useState } from 'react'

import axios from 'axios';



  // const navigate = useNavigate();

  // const userValid = () => {
  //   let token = localStorage.getItem("userdbtoken");
  //   if (token) {
  //     console.log("user valid")
  //     //console.log(`${token}`)
  //   } else {
  //     navigate("*")
  //   }
  // }

  // useEffect(() => {
  //   userValid();
  // }, [])
  const Dashboard = () => {
    const [userData, setuserData] = useState([]);

    useEffect(() => {
        getAllEmployees();
    }, []);

    const getAllEmployees = async () => {
        try{
            const response = await axios.get(`https://cloudq-backend.onrender.com/user/register`);
            setuserData(response.data);
        }catch(err){
            console.log('Error: ', err);
        }
    }

   




  
  return (
    <>
      <div className="employeeList">
            <h3>USER LIST</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>AGE</th>
                        <th>GENDER</th>
                        <th>EMAIL</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {userData.length > 0 && userData.map((users, index) => (
                        <tr key={index}>
                            <td>{users.fname}</td>
                            <td>{users.age}</td>
                            <td>{users.gender}</td>
                            <td>{users.email}</td>
                           
                            <td>
                         
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Dashboard


