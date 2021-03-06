import React from 'react';

const TopNews = () => {
    return (

         <>

         <center><h3 className="my-4 text-dark ">Top News Today</h3></center>
        <div className='container'>
            <div className="d-md-flex align-items-center border border-3 border-info p-3 mt-4 container-fluid">
                <img className=" news img-fluid" src="./coronavirus-1.jpg" alt="" width="49%" />
                <div className="m-3"><h3 >COVID-19 Updates: Colin Powell, Who Was Undergoing Cancer Treatment, Dies Due to COVID-19</h3>
                <p>Globally, there have been more than 241 million confirmed COVID-19 cases and more than 4.9 million associated deaths, according to Johns Hopkins University.</p>
                </div>
            </div>
            <div className="d-md-flex align-items-center border border-3 border-info p-3 mt-4 container-fluid">
                <img className=" news img-fluid" src="covid-2.jpg" alt="" width="50%" />
                <div className="m-3"><h3 >COVID-19 Updates: Colin Powell, Who Was Undergoing Cancer Treatment, Dies Due to COVID-19</h3>
                <p>Globally, there have been more than 241 million confirmed COVID-19 cases and more than 4.9 million associated deaths, according to Johns Hopkins University.</p>
                </div>
            </div>
            <div className="d-md-flex align-items-center border border-3 border-info p-3 mt-4 container-fluid">
                <img className=" news img-fluid" src="./civid-3.jpg" width="49%" alt="" />
                <div className="m-3"><h3 >COVID-19 Updates: Colin Powell, Who Was Undergoing Cancer Treatment, Dies Due to COVID-19</h3>
                <p>Globally, there have been more than 241 million confirmed COVID-19 cases and more than 4.9 million associated deaths, according to Johns Hopkins University.</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default TopNews;