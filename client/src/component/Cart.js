import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer';
import driverContext from './useContext/driverContext';

const Cart = () => {

    const context = useContext(driverContext);
    const { arr } = context;
    console.log(arr.length, "at cart page")

    return (
        <>
            <Navbar />
            <div className='container' >
                <h2 className='my-4' >Selected User for team </h2>
                <h6>Team Details</h6>
                <div className='userinfo'>

                    {arr.length === undefined || arr.length === 0 ?

                        <div class="loader"></div>
                        :
                        arr?.map((item, index) => {
                            return (
                                <>
                                    <div key={index} className="userdata my-2 ">
                                        <div className="alluser">
                                            <img src={item.avatar} alt='img' />
                                        </div>
                                        <div className='my-4' >
                                            <div className='subdetails d-flex justify-content-between '>
                                                <div>
                                                    <small className="card-link">Name </small>
                                                </div>
                                                <div>
                                                    <small className=" mx-3 ">{item.first_name} {item.last_name}</small>
                                                </div>
                                            </div>

                                            <div className='subdetails d-flex justify-content-between'>
                                                <div>
                                                    <small className="card-link">Domain</small>
                                                </div>
                                                <div>
                                                    <small className=" mx-3 ">{item.domain}</small>
                                                </div>
                                            </div>

                                            <div className='subdetails d-flex justify-content-between'>
                                                <div>
                                                    <small className="card-link">Gender</small>
                                                </div>
                                                <div>
                                                    <small className=" mx-4">{item.gender}</small>
                                                </div>
                                            </div>

                                            {/* available */}
                                            <div className='subdetails d-flex justify-content-between'>
                                                <div>
                                                    <small className="card-link">Email</small>
                                                </div>
                                                <div>
                                                    <small className=" mx-2 ">{item.email}</small>
                                                </div>
                                            </div>

                                            <div className='subdetails d-flex justify-content-between'>
                                                <div>
                                                    <small className="card-link">available</small>
                                                </div>
                                                <div>
                                                    <small className=" mx-2 ">{item.available?"True":"False" }</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
            </div >

            <Footer />

        </>
    )
}

export default Cart;
