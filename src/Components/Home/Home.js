import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Cases from '../CaseStudies/Cases';
import TopNews from '../TopNews/TopNews';

import HomeService from './HomeService';
const Home = () => {

    const [services, setServices] = useState([]);

    // Fetch data //
    useEffect(() => {
        fetch('./Services.json').then(res => res.json()).then(data => setServices(data.slice(0, 5)));

    })

    return (
        < >


            <section className=" text-danger fs-6 p-4">
                <img className="img-fluid" src="./00_3_8-Major-Problems-with-the-US-Healthcare-System-Today_hero.png" alt="" />
                <div style={{ textAlign: "right" }} className="h-25 ">
                    <h1>welcome to healthcare Organization</h1>
                    <p>Health care is the maintenance or improvement of health via the <br /> prevention, diagnosis, treatment, recovery, or cure of disease, <br /> billness, injury, and other physical and mental impairments in <br /> people. Health care is delivered by health professionals and allied  health fields.</p>
                </div>
            </section>

            <TopNews></TopNews>

            <section className="mt-4 container">
                <h1 className="text-success">Our services</h1>
                <div className='container my-4'>
                    <Row xs={1} md={3} className="g-4 my-3">
                        {
                            services.map(service => <HomeService
                                key={service._id}
                                service={service}
                            ></HomeService>)
                        }


                    </Row>
                    <center> <a className="navbar-brand border p-2 m-2 text-dark" href="/services">See More</a></center>
                </div>

                <Cases></Cases>

            </section>
        </>
    );
};

export default Home;