import React from 'react';
import '../../assets/css/main.css';
import { Link } from 'react-router-dom';

import BackArrow from '../../assets/img/back-arrow.png'
import Close from '../../assets/img/close.png'

import StepOne from '../../components/thebasics/StepOne';
import Elligibility from '../../components/thebasics/Elligibility';
import StepTwo from '../../components/thebasics/StepTwo';
import StepThree from '../../components/thebasics/StepThree';
import Coverage from '../../components/thebasics/Coverage';
import Health from '../../components/thebasics/Health';


class Main extends React.Component {

    

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false,
            step: 1
        };
    } 

    componentDidMount() {
        console.log("Main");

        this.setState({
            loading: true
        });
    }

    nextStep = () => {
        console.log('stepssss', this.state.step);

        this.state.step += 1;

        this.setState({
            state: this.state.step
        });
    }

    backStep = () => {
        if (this.state.step > 1) {

            this.state.step -= 1;

            this.setState({
                state: this.state.step
            });
        }
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
                                       <span className="close">
                                           <img src={Close} />
                                       </span>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h1 className="text-center pt-4">
                                            { this.state.step >= 1 && this.state.step <=3 ? 
                                                'The Basics'
                                                : 
                                                'Your Coverage' 
                                            }
                                            
                                        </h1>
                                    </div>

                                    <div className="back-btn" onClick={ ()=> {this.backStep()} }>
                                        <img src={BackArrow} />
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
                                        <h4 className="pt-3">
                                            { this.state.step >= 1 && this.state.step <=3 ? 
                                                    'STEP 1 OF 3'
                                                    : 
                                                    'ALMOST THERE' 
                                            }
                                        </h4>
                                    </div>
 
                                    
                                    { this.state.step == 1 ? <StepOne /> : null }
                                    { this.state.step == 2 ? <StepTwo /> : null }
                                    { this.state.step == 3 ? <StepThree /> : null }
                                    { this.state.step == 4 ? <Coverage /> : null }
                                    { this.state.step == 5 ? <Health /> : null }

                                    {/* <Elligibility /> */}

                                    <div className="col-12">
                                        {
                                            this.state.step == 1 ?
                                            <a 
                                                onClick={ ()=> {this.nextStep()} }
                                                className="bg-green w-100 d-block text-center mt-2 font-weight-bold">
                                                CONTINUE
                                            </a>
                                            : null
                                        }

                                        {
                                            this.state.step == 2 || this.state.step >= 4 ?
                                            <a 
                                                onClick={ ()=> {this.nextStep()} }
                                                className="bg-green w-100 d-block text-center mt-2 font-weight-bold">
                                                Next
                                            </a>
                                            : null
                                        }

                                        {
                                            this.state.step == 3 ?
                                            <a 
                                                onClick={ ()=> {this.nextStep()} }
                                                className="bg-green w-100 d-block text-center mt-2 font-weight-bold">
                                                GET STARTED
                                            </a>
                                            : null
                                        }

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