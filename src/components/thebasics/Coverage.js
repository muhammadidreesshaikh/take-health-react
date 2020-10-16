import React from 'react';
import '../../assets/css/coverage.css';

import { Link } from 'react-router-dom';

class Coverage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Coverage");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section className="w-100"> 
                <div className="coverage">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-12 col-lg-12 p-0">
                                <div className="card-body p-0">
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h6>Let's ensure your visit is covered!</h6>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div class="form-group">
                                            <label className="change">Who has you covered?</label> <i type="button" class="btn " data-toggle="tooltip" data-placement="right" title="Your birthdate is required to determine if you're eligible for telemedicine">?</i>
                                            <input type="password" class="form-control" placeholder="Search for your employer"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="checks">
                    <div className="container">
                        <div className="row">
                            <div class="raw">
                                <h4>Entering your employer name didn't work?</h4>
                                <ul>
                                    <li><span className="icon text-success pl-0">&#10003;</span> Lorem Ipsum is not simply random.</li>
                                    <li><span className="icon text-success">&#10003;</span> Lorem Ipsum is not simply random.</li>
                                    <li><span className="icon text-success">&#10003;</span> Lorem Ipsum is not simply random.</li>
                                    <li><span className="icon text-success">&#10003;</span> Lorem Ipsum is not simply random.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Coverage;