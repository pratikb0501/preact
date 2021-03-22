import { Component, h } from "preact";
import style from './style.css';
import axios from 'axios';



class Api extends Component {
    render() {
        async function getData() {
            try {
                console.log("I have been clicked")
                const response = await axios.get('http://localhost:3000/api/employees');
                console.log(response);
            } catch (error) {
                console.log("Error occured: ", error)
            }
        }
        return (
            <div class={style.table}>
                <h1>Employee table  </h1>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Gender</th>
                            <th>Designation</th>
                            <th>Date of Joining</th>
                            <th>Reporting Manager</th>
                            <th>Salary</th>
                            <th>Employee Code</th>
                            <th>Location</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Department</th>
                            <th>Deleted On?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Kunal</td>
                            <td>Kuhad</td>
                            <td>Kunal@gmail.com</td>
                            <td>8888888888</td>
                            <td>Male</td>
                            <td>Software Developer</td>
                            <td>8/03/2021</td>
                            <td>Ankita</td>
                            <td>45000</td>
                            <td>1001</td>
                            <td>Pune</td>
                            <td>Maharashtra</td>
                            <td>India</td>
                            <td>Development</td>
                            <td>null</td>
                        </tr>
                    </tbody>

                </table>
                <button onClick={getData}>GET Data</button>

            </div>
        )
    }
}
export default Api;

