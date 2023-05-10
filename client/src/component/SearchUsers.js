import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer';


const SearchUsers = () => {

    const location = useLocation()
    const user = location.state.filtered;

    return (
        <>
            <Navbar />
            <div className='container' >
                <h2 className='my-4' >Our Search </h2>
                <div className='vehicleInfo'>
                    {user?.map((item, index) => {
                        return (
                            <>
                                <div key={index} className="card my-2 ">
                                    <div className="card-body">
                                        <img src={item.avatar} alt='img' />

                                        <div className='my-4' >

                                            <div className='loadCapacity d-flex justify-content-between '>
                                                <div>
                                                    <small className="card-link">Name </small>
                                                </div>
                                                <div>
                                                    <small className=" mx-3 ">{item.first_name} </small>
                                                </div>
                                            </div>

                                            <div className='loadCapacity d-flex justify-content-between'>
                                                <div>
                                                    <small className="card-link">Domain</small>
                                                </div>
                                                <div>
                                                    <small className=" mx-3 ">{item.domain}</small>
                                                </div>
                                            </div>

                                            <div className='loadCapacity d-flex justify-content-between'>
                                                <div>
                                                    <small className="card-link">Gender</small>
                                                </div>
                                                <div>
                                                    <small className=" mx-3 ">{item.gender}</small>
                                                </div>
                                            </div>


                                            <div className='loadCapacity d-flex justify-content-between'>
                                                <div>
                                                    <small className="card-link">Email</small>
                                                </div>
                                                <div>
                                                    <small className=" mx-2 ">{item.email}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='buttons text-center d-flex justify-content-between my-2 ' >
                                            {/* {/* <Link to={'/editdetails'} state={item} className=' btn-card' exact >Edit</Link> */}
                                                <Link to={'/viewdetails'} state={item} className=' btn-card' exact>Create Team</Link> 
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                    }
                </div>
            </div>

            <Footer/>

        </>
    )
}

export default SearchUsers;
