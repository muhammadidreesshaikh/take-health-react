import React from 'react';
import '../../assets/css/health.css';

import { Link } from 'react-router-dom';

class Health extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Health");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section> 
                <div className="health">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-12 col-lg-12 p-0">
                                <div className="card-body p-0">
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h6>Now, let's match you to the right program...</h6>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <p className="pt-3">Have you ever been diagnosed with or taken medication for any of the following?</p>

                                        <div className="form-check pt-4">
                                            <input class="form-check-input" type="checkbox"></input>
                                            <label class="form-check-label" for="defaultCheck1">
                                                Diabetes (Type 1) <i type="button" class="btn " data-toggle="tooltip" data-placement="right" title="Tooltip on right">?</i>
                                            </label>
                                        </div>

                                        <div className="form-check pt-4">
                                            <input class="form-check-input" type="checkbox"></input>
                                            <label class="form-check-label" for="defaultCheck1">
                                                Hypertension <i type="button" class="btn " data-toggle="tooltip" data-placement="right" title="Tooltip on right">?</i>
                                            </label>
                                        </div>

                                        <div className="form-check pt-4">
                                            <input class="form-check-input" type="checkbox"></input>
                                            <label class="form-check-label" for="defaultCheck1">
                                                I've never been diagonesd with or taken medication for any of these conditions.
                                            </label>
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
export default Health;