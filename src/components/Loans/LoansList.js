
import React from 'react'
import APIService from "./APIService";

function LoansList(props){

    const editLoan = (loan) => {
        props.editLoan(loan)
    }

    const deleteLoan = (loan) => {
        APIService.DeleteLoan(loan.id)
            .then(() => props.deleteLoan(loan))
    }

    return (
        <div>
                <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <h1 className="text-white text-xl mb-10">Loans</h1>
                    <table className=" w-full table-fixed text-sm text-left text-gray-500 dark:text-gray-400">
                        <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                        {props.loans && props.loans.map(loan =>{
                            return (
                                <tr key = {loan.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">
                                    {console.log(loan)}
                                    {loan.book.title}
                                </td>
                                <td>{loan.start_date}</td>
                                <td>{loan.end_date}</td>
                            </tr>)
                        })}

                        </tbody>
                    </table>
                </div>
        </div>
    )
}
export default LoansList
