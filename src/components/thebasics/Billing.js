import React from 'react';
import '../../assets/css/billing.css';

import Bag from '../../assets/img/bag.png'
import Visa from '../../assets/img/visa.png'

import { Link } from 'react-router-dom';

class Billing extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Shipping");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section className="w-100"> 
                <div className="billing">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-12 col-lg-12 p-0">
                                <div className="card-body">
                                    <h6>Let's get you your supplies!</h6>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div className="row list">
                                            <div className="col-4 col-md-4 col-lg-4">
                                                <img src={Bag} />
                                            </div>

                                            <div className="col-8 col-md-8 col-lg-8">
                                                <ul>
                                                    <li><span className="icon text-success pl-0">&#10003;</span>Free Shipping</li>
                                                    <li><span className="icon text-success">&#10003;</span>Guaranted Pricing</li>
                                                    <li><span className="icon text-success">&#10003;</span>Single-dose packing</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-check pt-5">
                                        <input class="form-check-input" type="checkbox"></input>
                                        <label class="form-check-label" for="defaultCheck1">
                                            Bill to a different address?
                                        </label>
                                    </div>

                                    <form>
                                        <div class="form-group pt-2">
                                            <label className="change">Name on Card</label>
                                            <input type="name" class="form-control" placeholder="Full Name" />
                                        </div>
                                        <div class="form-group">
                                            <label className="change">Card Number</label>
                                            <input type="number" class="form-control pl-5" placeholder="XXX-XXX-XXX" />
                                            <img src={Visa} />
                                        </div>
                                    </form>

                                    <div className="row">
                                        <div className="col-6 col-md-6 col-lg-6">
                                            <label className="change">Expiration Date</label>
                                            <input type="name" class="form-control" placeholder="MM/YYYY" />
                                        </div>
                                        <div className="col-6 col-md-6 col-lg-6">
                                            <label className="change">Security</label> <i type="button" class="btn " data-toggle="tooltip" data-placement="right" title="Your birthdate is required to determine if you're eligible for telemedicine">?</i>
                                            <input type="name" class="form-control" placeholder="CVV" />
                                        </div>
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
export default Billing;