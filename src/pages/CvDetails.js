import React from 'react';

import {Link} from 'react-router-dom';

import './styles/CvDetails.css';
import Logo from '../images/bat-logo.svg';
import CvResume from '../components/CvResume';
import DeleteCvModal from '../components/DeleteCvModal';
import CvDescription from '../components/CvDescription';

function CvDetails (props) {
    const cv = props.cv;
    return (
        <div>
            <div className="CvDetails__batman">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img className="CvDetails__logo" src={Logo} alt="Logo"/>
                        </div>
                        <div className="col-6">
                            <h1>{cv.firstName} {cv.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <CvResume firstName={cv.firstName} lastName={cv.lastName}
                            email={cv.email} twitter={cv.twitter} jobTitle={cv.jobTitle} 
                            linkedIn={cv.linkedIn} phone={cv.phone} /> 
                    </div>

                    <div className="col-6">
                        <CvDescription description={cv.description} /> 
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-6">
                        <div>
                            <div><Link className="btn btn-outline-success pull-right" to={`/cvs/${cv.id}/edit`}>
                                Edit
                            </Link></div>
                        </div>
                    </div>
                    <div className="col-6">
                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-outline-danger pull-left">Delete</button>
                                <DeleteCvModal 
                                    isOpen={props.modalIsOpen} 
                                    onClose={props.onCloseModal}
                                    onDeleteCv={props.onDeleteCv}
                                 />
                            </div><br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CvDetails;