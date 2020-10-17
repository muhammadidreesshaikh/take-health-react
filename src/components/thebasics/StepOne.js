import React from 'react';
import '../../assets/css/stepone.css';

import { Link } from 'react-router-dom';

class StepOne extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("StepOne");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section className="w-100"> 
                <div className="stepone">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-12 col-lg-12 p-0">
                                <div className="card-body p-0">
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h3>Take control of your health, right form home.</h3>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h6>These questios will help us ensure you are eligible for treatment.</h6>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                    <div class="form-group ">
                                            <input type="number" class="form-control mt-4" placeholder="Zip Code" />
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div class="form-group">
                                            <label className="change">Password Number</label> <i type="button" class="btn" data-toggle="tooltip" data-placement="right" title="Should be 8 or more than 8 charachters">?</i>
                                            <input type="password" class="form-control" placeholder="XXX-XXX-XXX"/>
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
export default StepOne;