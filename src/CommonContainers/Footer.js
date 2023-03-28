import React from 'react'
const Footer = () => {
    return (
        <>

            <section className="secPad40Top footerSec">
                <div className="container2">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="footerList">
                                <h3 className="ftWgt700 ftSze18">Discover</h3>
                                <ul className="noMarginPad">
                                    <li>Home</li>
                                    <li>Pre-Foreclosures</li>
                                    <li>Bank Owned</li>
                                    <li>Resources</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="footerList">
                                <h3 className="ftWgt700 ftSze18">Company</h3>
                                <ul className="noMarginPad">
                                    <li>Terms of Use</li>
                                    <li>Privacy Policy</li>
                                    <li>Site Map</li>
                                    <li>Housing FAQ</li>
                                    <li>Contact</li>
                                    <li>Disclaimer</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="footerList">
                                <h3 className="ftWgt700 ftSze18">Join Us On</h3>
                                <ul className="noMarginPad iconSocial">
                                    <li>
                                        <a href="#">
                                            <img src={require('../Assets/Images/fb.svg').default} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={require('../Assets/Images/twtr.svg').default} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={require('../Assets/Images/youtbe.svg').default} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row footerBottom">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pl-0">
                            <div className="leftSide">
                                <p className="mb-0">&#169; 2023 Home Auction Deals, Inc. All rights reserved</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-0">
                            <div className="rightSide text-right">
                                <ul className="noMarginPad">
                                    <li>
                                        <a href="#">
                                            <img src={require('../Assets/Images/home.svg').default} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={require('../Assets/Images/cil_disabled.svg').default} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}

export default Footer