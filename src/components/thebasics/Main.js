import React from 'react';
import '../../assets/css/main.css';
import { Link } from 'react-router-dom';
import StepOne from '../../components/thebasics/StepOne';
import Elligibility from '../../components/thebasics/Elligibility';
import StepTwo from '../../components/thebasics/StepTwo';
import StepThree from '../../components/thebasics/StepThree';


class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Main");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section> 
                <div className="main">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="row inner">

                                    <div className="col-6 col-md-6 col-lg-6">
                                       <a className="help" href="#">HELP?</a>
                                    </div>

                                    <div className="col-6 col-md-6 col-lg-6">
                                       <span>X</span>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h1 className="text-center pt-4">The Basics</h1>
                                    </div>

                                    <div className="col-4 col-md-4 col-lg-4">
                                        <div className="active seprator"></div>
                                    </div>

                                    <div className="col-4 col-md-4 col-lg-4">
                                        <div className="seprator"></div>
                                    </div>

                                    <div className="col-4 col-md-4 col-lg-4">
                                        <div className="seprator"></div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h4 className="pt-3">STEP 1 OF 3</h4>
                                    </div>
 
                                    
                                    {/* <StepOne /> */}
                                    {/* <Elligibility /> */}
                                    {/* <StepTwo /> */}
                                    <StepThree />
                                    
                                    
                                    <div className="col-12">
                                        <Link to="/signup" submit className="bg-green w-100 d-block text-center mt-2 font-weight-bold">CONTINUE</Link>
                                        <p className="text-center pt-4">By continuing, you agree to accept our Privacy Policy & Terms of Service.</p>

                                        <h6 className="text-center pt-3">Already have an account?</h6>
                                        <div className="signin pt-1 text-center">
                                            <a href="#">Sign-in</a>
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
export default Main;