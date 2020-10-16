import React from 'react';
import '../../assets/css/healthpay.css';

import { Link } from 'react-router-dom';

class HealthPay extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("HealthPay");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section className="w-100"> 
                <div className="health-pay">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-12 col-lg-12 p-0">
                                <div className="card-body">
                                    <h6>How would you like to pay?</h6>
                                    <h3>$69.99*</h3>

                                    <div className="list">
                                        <p className="pt-3">Avalible Today</p>
                                        <ul>
                                            <li><span className="icon text-success pl-0">&#10003;</span> Personalized Health Coaching</li>
                                            <li><span className="icon text-success">&#10003;</span> 24/7 On-Call Physician</li>
                                            <li><span className="icon text-success">&#10003;</span> Automatic Prescription re-fills</li>
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
export default HealthPay;