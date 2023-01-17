import {useState, useEffect} from 'react';
import LoansList from './LoansList'
import FormLoan from './FormLoan'
import jwt from "jwt-decode";
import APIService from "./APIService";
import {useNavigate} from "react-router-dom";

function Loans() {
  const navigate = useNavigate()
  const [loans, setLoans] = useState([])
  const [editedLoan, setEditedLoan] = useState(null)


    const timestamp = new Date(JSON.parse(JSON.stringify(jwt(sessionStorage.token))).creation_date*1000)
    const creation_date = timestamp.getFullYear() + "-" + timestamp.getMonth()+1 + "-" + timestamp.getDate()

  useEffect(() => {
    fetch(`api/v1/loans/${JSON.parse(JSON.stringify(jwt(sessionStorage.token))).user_id}`,{
        'method':'GET',
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then(resp => resp.json())
    .then(resp => setLoans(resp))
    .catch(error => console.log(error))
  },[])

  const editLoan = (loan) => {
    setEditedLoan(loan)
  }

  const updatedData = (loan) => {
    const new_loan = loans.map(my_loan => {
        if(my_loan.id === loan.id){

            return loan
        }else{
            return my_loan
        }
    })
    setLoans(new_loan)
  }

  const insertedLoan = (loan) =>{
      const new_loans = [...loans, loan]
      setLoans(new_loans)
  }

  const deleteLoan = (loan) => {
      const new_loans = loans.filter(my_loan =>{
          return my_loan.id !== loan.id;
      })
      setLoans(new_loans)
  }

  const deleteAccount = () =>{
      alert("Are you sure to delete Your account?")
      APIService.DeleteUser(JSON.parse(JSON.stringify(jwt(sessionStorage.token))).user_id)
            .catch(error => console.log(error))
      sessionStorage.removeItem("token")
      navigate("/")
  }

    return(
        <div className="flex flex-col w-full bg-[#0a192f] min-h-screen items-center">
            <div>o</div>
            <h1 className="text-white text-xl mt-20 mb-1">User info</h1>
            <div className="mt-1 mb-1 text-white"><h3>Username: {JSON.parse(JSON.stringify(jwt(sessionStorage.token))).username}</h3></div>
            <div className="mt-1 mb-1 text-white"><h3>E-mail: {JSON.parse(JSON.stringify(jwt(sessionStorage.token))).email}</h3></div>
            <div className="mt-1 mb-1 text-white"><h3>Account creation date: {creation_date}</h3></div>
            <div className="mt-5 mb-10">
                <LoansList loans = {loans} editLoan = {editLoan} deleteLoan = {deleteLoan}/>
            </div>
            <div className="flex flex-col items-center mb-10">
                {sessionStorage.token && sessionStorage.token!=="" && sessionStorage.token!==undefined ?
                    <button className="mt-20 mb-10 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full duration-300 " onClick={() => deleteAccount()}>Delete Account</button>
                    :
                    <button disabled className="bg-red-200  text-white py-2 px-4 rounded-full duration-300 " onClick={deleteAccount}>Delete Account</button>
                }
            </div>
        </div>
    );
}

export default Loans;
