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

                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox"></input>
                                            <label class="form-check-label" for="defaultCheck1">
                                                Diabetes (Type 1)
                                            </label>
                                        </div>

                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox"></input>
                                            <label class="form-check-label" for="defaultCheck1">
                                                Default checkbox
                                            </label>
                                        </div>

                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox"></input>
                                            <label class="form-check-label" for="defaultCheck1">
                                                Default checkbox
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