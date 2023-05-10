import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import driverContext from './useContext/driverContext';

const Cards = ({ currentPost, Id, handleadd, Change }) => {


    const context = useContext(driverContext);
    const { arr, setArr } = context;

    return (
        <>

            <div className='vehicleInfo'>
                {currentPost?.map((item, index) => {
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
                                                <small className=" mx-3 ">{item.first_name}</small>
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

                                    <div className='buttons text-center d-flex justify-content-center my-2 ' >
                                        <Link
                                            onClick={() => { setArr((prevState) => [...prevState, item]); handleadd(item.id) }}
                                            className=' btn-card'
                                            exact>

                                            {
                                                Change && item.id === Id ? "Selected" : " Create Team"
                                            }
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
                }
            </div>
        </>
    )
}

export default Cards
