import React from 'react';
import '../../assets/css/steptwo.css';

import { Link } from 'react-router-dom';

class StepTwo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("StepTwo");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section> 
                <div className="steptwo">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-12 col-lg-12 p-0">
                                <div className="card-body p-0">
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h6>These questios will help us ensure you are eligible for treatment.</h6>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div class="form-group">
                                            <label className="change">Next up, we need your birthdate.</label> <i type="button" class="btn " data-toggle="tooltip" data-placement="right" title="Your birthdate is required to determine if you're eligible for telemedicine">?</i>
                                            <input type="date" class="form-control" placeholder="MM-DD-YYY"/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div class="form-group">
                                            <label className="change">Add your biological sex.</label> <i type="button" class="btn " data-toggle="tooltip" data-placement="right" title="Your birthdate is required to determine if you're eligible for telemedicine">?</i>
                                            <select class="form-control">
                                                <option>Select</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
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
export default StepTwo;