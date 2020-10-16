import React from 'react';
import '../../assets/css/visit.css';

import { Link } from 'react-router-dom';

class Visit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Visit");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section className="w-100"> 
                <div className="visit">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-12 col-lg-12 p-0">
                                <div className="card-body">
                                    <h6>Let's connect you with a provider.</h6>

                                    <div className="list">
                                        <p className="pt-3">Here is what to expect...</p>
                                        <ul>
                                            <li><span className="icon text-success">&#10003;</span>Answer questions about your health.</li>
                                            <li><span className="icon text-success">&#10003;</span>Receive risk assessment and hypertension resoures.</li>
                                            <li><span className="icon text-success">&#10003;</span> Find the treatment right for you.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Visit;