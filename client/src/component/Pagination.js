import React from 'react'

const Pagination = ({ totalPosts, postPerPage, setCurrentPage }) => {

    let page = [];
    for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
        page.push(i);
    }
    return (
        <>
            <span>Pages</span> <br />
            <div className='pagination' >
                {
                    page.map((page, index) => {
                        return (
                            <button  onClick={() => { setCurrentPage(page) }} key={index} >{page}</button>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Pagination
