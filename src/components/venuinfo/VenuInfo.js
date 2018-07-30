import React from 'react';
import Zoom from 'react-reveal/Zoom'
import icon_calendar from '../../resources/images/icons/calendar.png'
import locationIcon from '../../resources/images/icons/location.png'


const VenuInfo = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">

                    <Zoom duration={1000}>
                    <div className="vn_item">
                    <div className="vn_outer">
                        <div className="vn_inner">
                            <div className="vn_icon_square bck_red">
                               
                            </div>
                            <div className="vn_icon" 
                            style={{
                                background:`url(${icon_calendar})`
                            }}></div>
                            <div className="vn_title">
                                Event Date & Time
                            </div>
                            <div className="vn_desc">
                            20 Nov 2018 @10.00 pm
                            </div>
                        </div>
                    </div>
                </div>
                    </Zoom>
               
                   
                            <Zoom duration={1000} delay={500}>
                            <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow">
                                       
                                    </div>
                                    <div className="vn_icon" 
                                    style={{
                                        background:`url(${locationIcon})`
                                    }}></div>
                                    <div className="vn_title">
                                   Event Loction
                                    </div>
                                    <div className="vn_desc">
                                    6 O'Meara Street, SE1 0AB,  GB 
                                    </div>
                                </div>
                            </div>
                        </div>
                            </Zoom>
                
                   



                </div>
            </div>
        </div>
    );
};

export default VenuInfo;