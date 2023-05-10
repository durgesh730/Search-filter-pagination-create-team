import React, { useContext, useState } from 'react'
import data from '../heliverse_mock_data.json'
import { Link, useNavigate } from 'react-router-dom'
import Pagination from './Pagination';
import Search from './Search';
import Navbar from './Navbar'
import Footer from './Footer';
import Cards from './Cards';


const Home = () => {

    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(20);
    const [userName, setUserName] = useState();
    const [Change, setChange] = useState(false);
    const [Id, setId] = useState(0);

    const [selected, setSelected] = useState({ domain: "", gender: "", available: "" });
    console.log(selected, "selected")

    const a = selected.available !== "True" ? false : true

    const handleSearch = () => {
        const filtered = data.filter(employee => {
            return employee.first_name === userName.name;
        });
        navigate('/usersearch', { state: { filtered } });
    }


    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPost = data.slice(firstPostIndex, lastPostIndex);

    const handleadd = (item) => {
        setChange(true)
        setId(item)
    }

    const filtered = data.filter(employee => {
        return (
            employee.domain === selected.domain &&
            employee.gender === selected.gender &&
            employee.available === a
        )
    });

    console.log(filtered, "kldl")

    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    currentPost?.map((item) => {
        if (arr1.indexOf(item.domain) === -1) {
            arr1.push(item.domain);
        }

        if (arr2.indexOf(item.gender) === -1) {
            arr2.push(item.gender);
        }

        if (arr3.indexOf(item.available) === -1) {
            arr3.push(item.available);
        }
    })

    return (
        <>

            <Navbar />
            <Search placeholder={"Search by first name"} handleSearch={handleSearch} setUserName={setUserName} />

            <div className='container' >
                <div className='heading' >
                    <div className='usersheading' >
                        <h2>Our Users </h2>
                    </div>

                    <div className='threefilters' >
                        <div className='filterfirst' >
                            <select name='domain' value={selected.domain} onChange={((e) => { setSelected((prev) => ({ ...prev, domain: e.target.value })) })} >
                                <option selected >Select</option>
                                {arr1?.map((item, index) => {
                                    return (
                                        <>
                                            <option key={index} >{item}</option>
                                        </>
                                    )
                                })
                                }
                            </select>
                        </div>

                        <div className='filterfirst' >
                            <select name='gender' value={selected.gender} onChange={((e) => { setSelected((prev) => ({ ...prev, gender: e.target.value })) })} >
                                <option selected >Select</option>
                                {arr2?.map((item, index) => {
                                    return (
                                        <>
                                            <option key={index} >{item}</option>
                                        </>
                                    )
                                })
                                }
                            </select>

                        </div>

                        <div className='filterfirst' >
                            <select name='available' value={selected.available} onChange={((e) => { setSelected((prev) => ({ ...prev, available: e.target.value })) })} >
                                <option selected >Select</option>
                                {arr3?.map((item, index) => {
                                    return (
                                        <>
                                            <option key={index} >{item ? "True" : "False"}</option>
                                        </>
                                    )
                                })
                                }
                            </select>
                        </div>
                    </div>

                </div>

                {
                    filtered.length === 0 ?
                        <>
                            <Cards Id={Id} currentPost={currentPost} handleadd={handleadd} Change={Change} />
                            <Pagination totalPosts={data.length} setCurrentPage={setCurrentPage} postPerPage={postPerPage} currentPage={currentPage} />

                        </>
                        :
                        <Cards Id={Id} currentPost={filtered} handleadd={handleadd} Change={Change} />
                }

            </div>
            <Footer />
        </>
    )
}

export default Home
