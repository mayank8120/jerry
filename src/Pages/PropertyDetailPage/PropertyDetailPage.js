import React from 'react'
// import '../../Assets/Images/'
const PropertyDetailPage = () => {
    return (

        <>

            <section className="propertDetailBlock">
                <div className="container2">
                    <div className="row">



                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <nav className="navbar resNavbarBread auctionBread" aria-label="breadcrumb">
                                <ol className="breadcrumb font-weight500 mb-0">
                                    <li className="breadcrumb-item ftSze16 ftWgt500"><a href="#" className="blackClr">New Jersey</a>
                                    </li>
                                    <li className="breadcrumb-item ftSze16 ftWgt500"><a href="#" className="blackClr">Jersey City</a>
                                    </li>
                                    <li className="breadcrumb-item ftSze16 ftWgt500"><a href="#" className="blackClr">13329</a></li>
                                    <li className="breadcrumb-item ftSze16 ftWgt500 active" aria-current="page"><a href="#"
                                        className="secondaryColor">S Kimbark Ave</a></li>
                                </ol>
                            </nav>
                        </div>



                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="d-flex align-items-end">
                                <h3 className="ftWgt600 ftSze24 blackClr mb-24">Pre-foreclosure S Kimbark Ave 442 E 84th Pl, Los
                                    Angeles, CA 90003 $157,800</h3>
                            </div>
                        </div>















                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 responsive0">
                            <div className="detailLeftSec">
                                <div className="posRel sliderArea">
                                    <div className="imageSec sliderImageBlock owl-carousel owl-theme propertyDetailSlider">
                                        <div className="item posRel">
                                            <img src={require('../../Assets/Images/proslider1.png').default} />
                                        </div>
                                        <div className="item posRel">
                                            <img src={require('../../Assets/Images/proslider1.png').default} />
                                        </div>
                                    </div>
                                    <div className="imageAboveTags">
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex align-items-center whiteBox ftSze16 ftWgt500 blackClr mr-8">
                                                <img className="mr-8" src={require('../../Assets/Images/photos.svg').default} /> See All 32 Photos
                                            </div>
                                            <div className="d-flex align-items-center whiteBox ftSze16 ftWgt500 blackClr">
                                                <img className="mr-8" src={require('../../Assets/Images/map.svg').default} /> Map
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="propertyDesc mt-24">
                                    <div className="topTitle">
                                        <div className="d-flex align-items-top">
                                            <div className="toLeftTitle">
                                                <div className="d-flex align-items-center">
                                                    <div className="dot purple"></div>
                                                    <p className="mb-0 ftSze14 ftWgt500">PRE-FORECLOSURE</p>
                                                </div>
                                                <div className="titleLefthead">
                                                    <h2 className="blackClr ftSze24 ftWgt600">LOS ARROYOS DEL ESTE RESUB LOT 152
                                                    </h2>
                                                    <p className="ftSze18 ftWgt400 mb-16">442 E 84th Pl, Los Angeles, CA 90003</p>
                                                </div>
                                                <div className="d-flex align-items-center listingBlockLine">
                                                    <ul className="noMarginPad listStyleNone">
                                                        <li className="d-flex align-items-center ftSze18 ftWgt400 secondaryColor">
                                                            <img src={require('../../Assets/Images/ico1.svg').default} /><span
                                                                className="ftSze18 ftWgt400 blackClr">1-3</span> Beds
                                                        </li>
                                                        <li
                                                            className="d-flex align-items-center ml-12 ftSze18 ftWgt400 secondaryColor">
                                                            <img src={require('../../Assets/Images/ico2.svg').default} /><span
                                                                className="ftSze18 ftWgt400 blackClr">2</span> Baths
                                                        </li>
                                                        <li
                                                            className="d-flex align-items-center ml-12 ftSze18 ftWgt400 secondaryColor">
                                                            <img src={require('../../Assets/Images/ico3.svg').default} /><span
                                                                className="ftSze18 ftWgt400 blackClr">1,210 Sqft</span>
                                                        </li>
                                                        <li
                                                            className="d-flex align-items-center ml-12 ftSze18 ftWgt400 secondaryColor">
                                                            <img src={require('../../Assets/Images/ico4.svg').default} /><span
                                                                className="ftSze18 ftWgt400 blackClr">6,766 Lot Size</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="ml-auto text-right">
                                                <div className="d-flex align-items-bottom no-wrap">
                                                    <h3 className="ftSze32 ftWgt700 mb-0 mr-8">$112,000</h3>
                                                    <div className="d-flex align-items-center posRel detailText min-width70">
                                                        <p className="ftSze14 ftWgt500 secondaryColor mb-0">Est. Value</p>
                                                    </div>
                                                </div>
                                                <div className="dealTag ftSze20 ftWgt700 mt-12">
                                                    <img src={require('../../Assets/Images/check.svg').default} />Good Deal
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="secPad40 officeHoursBlock">
                                        <h4 className="ftSze20 ftWgt600 blackClr mb-10">Foreclosure & Debt Information</h4>
                                        <ul className="noMarginPad listStyleNone">
                                            <li>
                                                <p className="d-flex align-items-center">
                                                    <span className="fontSize16 ftWgt600 minWidth256">Foreclosure Balance</span>
                                                    <span className="fontSize16 ftWgt400 blackClr">$139,114</span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="d-flex align-items-center">
                                                    <span className="fontSize16 ftWgt600 minWidth256">Loan Amount</span>
                                                    <span className="fontSize16 ftWgt400 blackClr">$155,892</span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="d-flex align-items-center">
                                                    <span className="fontSize16 ftWgt600 minWidth256">Loan Date</span>
                                                    <span className="fontSize16 ftWgt400 blackClr">24 March 2009</span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="d-flex align-items-center">
                                                    <span className="fontSize16 ftWgt600 minWidth256">Auction Date</span>
                                                    <span className="fontSize16 ftWgt400 blackClr">1 March 2022, 10.15 AM</span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="d-flex align-items-center">
                                                    <span className="fontSize16 ftWgt600 minWidth256">Auction Address</span>
                                                    <span className="fontSize16 ftWgt400 blackClr">110 WEST CONGRESS ST
                                                        TUCSON</span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="d-flex align-items-center">
                                                    <span className="fontSize16 ftWgt600 minWidth256">Forclosure Doc. Number</span>
                                                    <span className="fontSize16 ftWgt400 blackClr">3626744</span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="d-flex align-items-center borderBtmNone">
                                                    <span className="fontSize16 ftWgt600 minWidth256">Forclosure Book Number</span>
                                                    <span className="fontSize16 ftWgt400 blackClr"> - </span>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mb-40 twoBlocks">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="boxbtn">
                                                    <h4 className="blueClr ftSze16 ftWgt600 mb-8">TRUSTEE</h4>
                                                    <h4 className="ftSze18 ftWgt600 blackClr mb-8">JANEWAY LAW FIRM PC</h4>
                                                    <div className="detailBlock">
                                                        <div className="d-flex align-items-center mb-8">
                                                            <img className="mr-8" src={require('../../Assets/Images/pin.svg').default} />
                                                            <p className="mb-0 ftWgt400 ftSze14 blackClr">9800 S MERIDIAN BLVD SUITE
                                                                400, <br />
                                                                ENGLEWOOD, CO, 80112</p>
                                                        </div>
                                                        <div className="d-flex align-items-center mb-8">
                                                            <img className="mr-8" src={require('../../Assets/Images/call.svg').default} />
                                                            <p className="mb-0 ftWgt400 ftSze14 blackClr">303-706-9990</p>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <h4 className="ftSze14 ftWgt500 blackClr mb-0 mr-8">Trustee File Number:
                                                            </h4>
                                                            <p className="ftSze14 ftWgt400 blackClr mb-0">19-023417</p>
                                                        </div>
                                                    </div>
                                                    <div className="Resnoauto w-100">
                                                        <a href="#" className="longBtn blueBtnLongBtn btnAbsolute">See Trustee
                                                            Info</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="boxbtn">
                                                    <h4 className="blueClr ftSze16 ftWgt600 mb-8">LENDER</h4>
                                                    <h4 className="ftSze18 ftWgt600 blackClr mb-8">WELLS FARGO BANK NA</h4>
                                                    <div className="detailBlock">
                                                        <div className="d-flex align-items-center mb-8">
                                                            <img className="mr-8" src={require('../../Assets/Images/pin.svg').default} />
                                                            <p className="mb-0 ftWgt400 ftSze14 blackClr">9800 S MERIDIAN BLVD SUITE
                                                                400, <br />
                                                                ENGLEWOOD, CO, 80112</p>
                                                        </div>
                                                        <div className="d-flex align-items-center mb-8">
                                                            <img className="mr-8" src={require('../../Assets/Images/call.svg').default} />
                                                            <p className="mb-0 ftWgt400 ftSze14 blackClr">303-706-9990</p>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <h4 className="ftSze14 ftWgt500 blackClr mb-0 mr-8">Trustee File Number:
                                                            </h4>
                                                            <p className="ftSze14 ftWgt400 blackClr mb-0">19-023417</p>
                                                        </div>
                                                    </div>
                                                    <div className="Resnoauto w-100">
                                                        <a href="#" className="longBtn blueBtnLongBtn btnAbsolute">See Trustee
                                                            Info</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="questions mb-40">
                                        <div className="d-flex align-items-center">
                                            <img src={require('../../Assets/Images/que.svg').default} />
                                            <div className="queTitle">
                                                <h3 className="ftSze18 ftWgt600 blackClr mb-0">Questions about this property?</h3>
                                                <p className="ftSze16 ftwgt400 blackClr mb-0">Get connected with a Local Agent
                                                    immediately</p>
                                            </div>
                                            <div className="ml-auto">
                                                <a className="smallBtn greenBtnLongBtn ftSze16 ftWgt700">Get Connected</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="descriptn mb-0">
                                        <h3 className="ftSze20 ftWgt600 blackClr mb-16">Description</h3>
                                        <p className="ftSze16 ftWgt400 blackClr mb-16">Colonial home built in 1900s, offers 2128 sq
                                            ft, 3 bedrooms, 2 Full baths, situated on 18.67 acres in Saint Johnsville. Private
                                            well, private sewer. Barn is attached to main house. 2nd floor is situated as an In
                                            Law Apartment that has a kitchen, living room and 1 bedroom. Owner Occupants and
                                            nonprofit buyers only for the first 21 days. Investor offers will be reviewed
                                            starting day 21. Buyers will be required to sign an occupancy certification. Sellers
                                            will review offers after the property has been on the market 7 days.</p>
                                        <table className="table nonBorder">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="ftSze14 ftWgt400 secondaryColor">Listed</th>
                                                    <th scope="col" className="ftSze14 ftWgt400 secondaryColor">Built</th>
                                                    <th scope="col" className="ftSze14 ftWgt400 secondaryColor">Last Sold</th>
                                                    <th scope="col" className="ftSze14 ftWgt400 secondaryColor">Sale Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row" className="ftSze16 ftWgt600 blackColor">24 January 2022</th>
                                                    <td className="ftSze16 ftWgt600 blackClr">1994</td>
                                                    <td className="ftSze16 ftWgt600 blackClr">24 January 2021</td>
                                                    <td className="ftSze16 ftWgt600 blackClr">$187,475</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="secPad40 officeHoursBlock">
                                        <h4 className="ftSze20 ftWgt600 blackClr mb-10">Property Features</h4>
                                        <ul className="noMarginPad listStyleNone">
                                            <li>
                                                <p className="d-flex align-items-center">
                                                    <span className="fontSize16 ftWgt600 minWidth256">Cooling</span>
                                                    <span className="fontSize16 ftWgt400 blackClr">Refrigerator</span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="d-flex align-items-center">
                                                    <span className="fontSize16 ftWgt600 minWidth256">Water</span>
                                                    <span className="fontSize16 ftWgt400 blackClr">-</span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="d-flex align-items-center">
                                                    <span className="fontSize16 ftWgt600 minWidth256">Sewage</span>
                                                    <span className="fontSize16 ftWgt400 blackClr">-</span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="d-flex align-items-center">
                                                    <span className="fontSize16 ftWgt600 minWidth256">Heating</span>
                                                    <span className="fontSize16 ftWgt400 blackClr">Forced Air</span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="d-flex align-items-center">
                                                    <span className="fontSize16 ftWgt600 minWidth256">Garage</span>
                                                    <span className="fontSize16 ftWgt400 blackClr">-</span>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mb-40 mapBlock">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.447349903817!2d-86.15667398486013!3d39.95374989159064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814acf4a979472b%3A0xebc25beabb01b0bf!2sPennwood%20office%20park!5e0!3m2!1sen!2sin!4v1678885227161!5m2!1sen!2sin"
                                            width="100%" height="280" className="border-0" allowfullscreen="" loading="lazy"
                                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                    <div className="mb-40 neighborhoods">
                                        <h3 className="ftSze20 ftWgt600 blackClr mb-10">Neighborhoods Nearby of 405 Great Rd #16,
                                            Acton, MA, 07120</h3>
                                        <ul className="noMarginPad listStyleNone">
                                            <li>
                                                <div className="media d-flex align-items-center">
                                                    <div>
                                                        <div className="progress" data-percentage="74">
                                                            <span className="progress-left">
                                                                <span className="progress-bar"></span>
                                                            </span>
                                                            <span className="progress-right">
                                                                <span className="progress-bar"></span>
                                                            </span>
                                                            <div className="progress-value">
                                                                <div className="line-height-17px ">
                                                                    <span
                                                                        className="purpleText font-weight700 fontSize16">75</span><br />
                                                                    <span className="text-transform-lcase-400 font-weight400">of 100</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="mt-0 d-flex align-items-center mb-0">
                                                            <span>
                                                                <img src={require('../../Assets/Images/walkScore.svg').default} />
                                                            </span>
                                                            <h6 className="ftSze16 ftWgt600 blackClr mb-0">Walk Score</h6>
                                                            <div className="posRel infoBox">
                                                                <i className="fas fa-info-circle"></i>
                                                            </div>
                                                        </div>
                                                        <p className="ftSze14 ftwgt400 secondaryColor mb-0">Blessed Rock Apartment
                                                            is very walkable and have good walk score. Most errands can be
                                                            accomplished on foot.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="media d-flex align-items-center">
                                                    <div>
                                                        <div className="progress" data-percentage="74">
                                                            <span className="progress-left">
                                                                <span className="progress-bar"></span>
                                                            </span>
                                                            <span className="progress-right">
                                                                <span className="progress-bar"></span>
                                                            </span>
                                                            <div className="progress-value">
                                                                <div className="line-height-17px">
                                                                    <span
                                                                        className="purpleText font-weight700 fontSize16">87</span><br />
                                                                    <span className="text-transform-lcase-400">of
                                                                        100</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="mt-0 d-flex align-items-center mb-0">
                                                            <span>
                                                                <img src={require('../../Assets/Images/transit.svg').default} />
                                                            </span>
                                                            <h6 className="ftSze16 ftWgt600 blackClr mb-0">Transit Score</h6>
                                                            <div className="posRel infoBox">
                                                                <i className="fas fa-info-circle"></i>
                                                            </div>
                                                        </div>
                                                        <p className="ftSze14 ftwgt400 secondaryColor mb-0">Blessed Rock Apartment
                                                            has good transit score meaning many nearby public transportation
                                                            options are available.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mb-0">
                                        <h3 className="ftSze20 ftWgt600 blackClr">Schools Nearby of 405 Great Rd #16, Acton, MA,
                                            07120</h3>
                                        <div className="itemWebsite">
                                            <table className="table agencyDetailtable">
                                                <thead>
                                                    <tr className="">
                                                        <th scope="col" className="ftSze14 ftWgt500 secondaryColor borderTopNone">
                                                            Name</th>
                                                        <th scope="col" className="ftSze14 ftWgt500 secondaryColor borderTopNone">
                                                            Grades</th>
                                                        <th scope="col" className="ftSze14 ftWgt500 secondaryColor borderTopNone">
                                                            Urban Center</th>
                                                        <th scope="col" className="ftSze14 ftWgt500 secondaryColor borderTopNone">
                                                            City, State</th>
                                                        <th scope="col" className="ftSze14 ftWgt500 secondaryColor borderTopNone">
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="borderTopNone">
                                                        <td className="borderTopNone">
                                                            <div className="media">
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-0 ftSze16 ftWgt500 blueClr2">Bella Vista
                                                                        Elementary</h5>
                                                                    <p className="mb-0 ftSze14 ftWgt400 darkGrey">(323) 721-4335</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="ftSze16 ftWgt500 blueClr2 borderTopNone">KG-5</td>
                                                        <td className="ftSze16 ftWgt500 blueClr2 borderTopNone">N/A</td>
                                                        <td className="borderTopNone">
                                                            <div className="media">
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-0 ftSze16 ftWgt500 blueClr2">Monterey
                                                                        Park, CA</h5>
                                                                    <p className="mb-0 ftSze14 font-weight500 secondaryColor">15
                                                                        Miles</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="blockRight borderTopNone">
                                                            <div
                                                                className="ml-3 accordionMoreInfo accordionMoreInfo2 brdrRadius4 itemWebsite">
                                                                <a className="ftSze16 ftWgt700 blueClr">More Info</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="media">
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-0 ftSze16 ftWgt500 blueClr2">Bella Vista
                                                                        Elementary</h5>
                                                                    <p className="mb-0 ftSze14 ftWgt400 darkGrey">(323) 721-4335</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="ftSze16 ftWgt500 blueClr2">KG-5</td>
                                                        <td className="ftSze16 ftWgt500 blueClr2">N/A</td>
                                                        <td>
                                                            <div className="media">
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-0 ftSze16 ftWgt500 blueClr2">Monterey
                                                                        Park, CA</h5>
                                                                    <p className="mb-0 ftSze14 font-weight500 secondaryColor">15
                                                                        Miles</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="blockRight">
                                                            <div
                                                                className="ml-3 accordionMoreInfo accordionMoreInfo2 brdrRadius4 itemWebsite">
                                                                <a className="ftSze16 ftWgt700 blueClr">More Info</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="media">
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-0 ftSze16 ftWgt500 blueClr2">Bella Vista
                                                                        Elementary</h5>
                                                                    <p className="mb-0 ftSze14 ftWgt400 darkGrey">(323) 721-4335</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="ftSze16 ftWgt500 blueClr2">KG-5</td>
                                                        <td className="ftSze16 ftWgt500 blueClr2">N/A</td>
                                                        <td>
                                                            <div className="media">
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-0 ftSze16 ftWgt500 blueClr2">Monterey
                                                                        Park, CA</h5>
                                                                    <p className="mb-0 ftSze14 font-weight500 secondaryColor">15
                                                                        Miles</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="blockRight">
                                                            <div
                                                                className="ml-3 accordionMoreInfo accordionMoreInfo2 brdrRadius4 itemWebsite">
                                                                <a className="ftSze16 ftWgt700 blueClr">More Info</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="media">
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-0 ftSze16 ftWgt500 blueClr2">Bella Vista
                                                                        Elementary</h5>
                                                                    <p className="mb-0 ftSze14 ftWgt400 darkGrey">(323) 721-4335</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="ftSze16 ftWgt500 blueClr2">KG-5</td>
                                                        <td className="ftSze16 ftWgt500 blueClr2">N/A</td>
                                                        <td>
                                                            <div className="media">
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-0 ftSze16 ftWgt500 blueClr2">Monterey
                                                                        Park, CA</h5>
                                                                    <p className="mb-0 ftSze14 font-weight500 secondaryColor">15
                                                                        Miles</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="blockRight">
                                                            <div
                                                                className="ml-3 accordionMoreInfo accordionMoreInfo2 brdrRadius4 itemWebsite">
                                                                <a className="ftSze16 ftWgt700 blueClr">More Info</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="media">
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-0 ftSze16 ftWgt500 blueClr2">Bella Vista
                                                                        Elementary</h5>
                                                                    <p className="mb-0 ftSze14 ftWgt400 darkGrey">(323) 721-4335</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="ftSze16 ftWgt500 blueClr2">KG-5</td>
                                                        <td className="ftSze16 ftWgt500 blueClr2">N/A</td>
                                                        <td>
                                                            <div className="media">
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-0 ftSze16 ftWgt500 blueClr2">Monterey
                                                                        Park, CA</h5>
                                                                    <p className="mb-0 ftSze14 font-weight500 secondaryColor">15
                                                                        Miles</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="blockRight">
                                                            <div
                                                                className="ml-3 accordionMoreInfo accordionMoreInfo2 brdrRadius4 itemWebsite">
                                                                <a className="ftSze16 ftWgt700 blueClr">More Info</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="blueLineBtn responsive15 itemWebsite">
                                            <a href="#" className="w-100 transition ftSze16 ftWgt500">Load More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
















                        <div className="col-lg-4 col-md-8 col-sm-12 col-xs-12">
                            <div className="detailRightSec">
                                <div className="checkAvailability">
                                    <div className="sideFormBlock">
                                        <div className="SectionBlock responsive15 availabilitySection">
                                            <div className="mb-24">
                                                <h2 className="blackClr ftWgt600 ftSze20 mb-6">Questions about this property?</h2>
                                                <p className="secondaryColor ftWgt400 ftSze14 mb-0">Get connected with a Local Agent
                                                    immediately</p>
                                            </div>
                                            <form className="rentalForm">
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-6">
                                                        <div className="form-group posRel fieldBlock">



                                                            {/* <img src={require('../../Assets/Images/bottomFooter1.svg').default} /> */}





                                                            <img src={require('../../Assets/Images/user.svg').default} />
                                                            <input type="email" className="form-control textInput" id=""
                                                                aria-describedby="emailHelp" placeholder="Full name" />
                                                        </div>
                                                        <div className="form-group posRel fieldBlock">
                                                            <img src={require('../../Assets/Images/phone.svg').default} />
                                                            <input type="email" className="form-control textInput" id=""
                                                                aria-describedby="emailHelp" placeholder="Phone" />
                                                        </div>
                                                        <div className="form-group posRel fieldBlock">
                                                            <img src={require('../../Assets/Images/mail.svg').default} />
                                                            <input type="email" className="form-control textInput" id=""
                                                                aria-describedby="emailHelp" placeholder="Email" />
                                                        </div>
                                                        <div className="form-group">
                                                            <textarea className="form-control" id="exampleFormControlTextarea1"
                                                                rows="3"
                                                                placeholder="Hi, I’d like to be connected with a local real estate expert about S Kimbark Ave on AuctionDeals.com"></textarea>
                                                        </div>
                                                        <div className="mb-24 checkBlock d-flex align-items-center">
                                                            <div className="input-group">
                                                                <div className="d-flex align-items-center">
                                                                    <input type="checkbox" className="checkInput"
                                                                        aria-label="Checkbox for following text input" />
                                                                    <p className="mb-0 fontSize16 ftWgt400 blackClr">I’d like to
                                                                        periodically receive information about foreclosure
                                                                        properties</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="d-flex align-items-center availSec responsive15 flex-wrap p-0 mb-24">
                                                            <div className="Resnoauto w-100">
                                                                <a href="#" className="longBtn greenBtnLongBtn" data-toggle="modal"
                                                                    data-target="#exampleModal">Get Connected</a>
                                                            </div>
                                                        </div>
                                                        {/* <!-- Modal --> */}
                                                        {/* <div className="modal fade auctionModal" id="exampleModal" tabindex="-1"
                                                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                            <div className="modal-dialog modal-dialog-centered">
                                                                <div className="modal-content">
                                                                    <div className="modal-header p-0 text-center">
                                                                        <div className="w-100 text-center">
                                                                            <img src={require('../../Assets/Images/logo.svg').default} />
                                                                        </div><button type="button" className="close"
                                                                            data-dismiss="modal" aria-label="Close">
                                                                            <img src={require('../../Assets/Images/x.svg').default} />
                                                                        </button>

                                                                    </div>
                                                                    <div className="headerCont mt-24 text-center w-100">
                                                                        <h5 className="ftSze24 ftWgt600 blackClr mb-8">Thank you for
                                                                            submitting your Inquiry!</h5>
                                                                        <p className="ftSze16 ftWgt400 blackClr mb-0">Your message
                                                                            has been sent</p>
                                                                    </div>
                                                                    <div className="brdrLine3"></div>
                                                                    <div className="modal-body text-center p-0">
                                                                        <h3 className="ftSze24 ftWgt600 greenColor">Next Step:</h3>
                                                                        <p className="ftSze18 ftWgt400 blueClr2 stepText mb-0"><b
                                                                            className="ftWgt700">Landlords often favor
                                                                            applicants with a good credit score.</b>
                                                                            If you have not checked yours in the last 2 weeks,
                                                                            please do and verify that there are no errors or
                                                                            discrepancies.</p>
                                                                        <div className="mt-24">
                                                                            <a href="#" className="checkBtn">Check it out</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                        <div className="termsCond">
                                                            <p className="mb-0 fontSize16 ftWgt400 blackClr">By clicking the button,
                                                                you agree to our <a className="blueClr textDecorNone">Terms of
                                                                    Use</a> and <a className="blueClr textDecorNone">Privacy
                                                                        Policy</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="secPad40 similarProperty">
                                <div className="container2">
                                    <div className="titleSection mb-16">
                                        <h2 className="blackClr ftSze20 ftWgt600">Similar Properties</h2>
                                    </div>
                                    <div className="row marginTop">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="owl-carousel owl-theme foreClosureSlider sliderNav">
                                                <div className="item">
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div className="sliderItem">
                                                                <img src={require('../../Assets/Images/slider7.png').default} />
                                                                <a className="likeTag transition"><i className="far fa-heart"></i></a>
                                                                <div
                                                                    className="sliderTagName brdrRadius4 colorWhite font-weight700">
                                                                    New</div>
                                                                <div className="sliderTextArea">
                                                                    <div className="d-flex align-items-center">
                                                                        <h5 className="blackClr ftSze24 ftWgt700 mb-0">$557,800</h5>
                                                                        <div className="ml-auto statusblock">
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="dot purple"></div>
                                                                                <p className="mb-0 ftSze14 ftWgt500">PRE-FORECLOSURE
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex align-items-top">
                                                                        <div>
                                                                            <h4 className="font-weight500 ftSze18 mb-6">Hamilton
                                                                                Heights</h4>
                                                                            <p className="ftSze14 ftWgt400 secondaryColor mb-0">1833
                                                                                Amsterdam Ave. New York, NY, 10031</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="sliderListing">
                                                                        <ul className="clearfix d-flex align-items-center">
                                                                            <li><b className="blackClr">0-3</b>beds</li>
                                                                            <li><b className="blackClr">1</b>baths</li>
                                                                            <li><b className="blackClr">810</b>sq.ft</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="linkproperty text-center">
                                                                        <a href="#" className="ftSze16 ftWgt600 blueClr">View
                                                                            Property Details</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div className="sliderItem">
                                                                <img src={require('../../Assets/Images/slider8.png').default} />
                                                                <a className="likeTag transition"><i className="far fa-heart"></i></a>
                                                                <div
                                                                    className="sliderTagName brdrRadius4 colorWhite font-weight700">
                                                                    New</div>
                                                                <div className="sliderTextArea">
                                                                    <div className="d-flex align-items-center">
                                                                        <h5 className="blackClr ftSze24 ftWgt700 mb-0">$299,800</h5>
                                                                        <div className="ml-auto statusblock">
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="dot green"></div>
                                                                                <p className="mb-0 ftSze14 ftWgt500">FORECLOSURE</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex align-items-top">
                                                                        <div>
                                                                            <h4 className="font-weight500 ftSze18 mb-6">Montgomery
                                                                                Gateway</h4>
                                                                            <p className="ftSze14 ftWgt400 secondaryColor mb-0">361
                                                                                Montgomery St. Jersey City, NJ, 07302</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="sliderListing">
                                                                        <ul className="clearfix d-flex align-items-center">
                                                                            <li><b className="blackClr">3</b>beds</li>
                                                                            <li><b className="blackClr">1.5</b>baths</li>
                                                                            <li><b className="blackClr">1,210</b>sq.ft</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="linkproperty text-center">
                                                                        <a href="#" className="ftSze16 ftWgt600 blueClr">View
                                                                            Property Details</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div className="sliderItem">
                                                                <img src={require('../../Assets/Images/slider9.png').default} />
                                                                <a className="likeTag transition"><i className="far fa-heart"></i></a>
                                                                <div
                                                                    className="sliderTagName brdrRadius4 colorWhite font-weight700">
                                                                    New</div>
                                                                <div className="sliderTextArea">
                                                                    <div className="d-flex align-items-center">
                                                                        <h5 className="blackClr ftSze24 ftWgt700 mb-0">$357,800</h5>
                                                                        <div className="ml-auto statusblock">
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="dot orange"></div>
                                                                                <p className="mb-0 ftSze14 ftWgt500">AUCTION</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex align-items-top">
                                                                        <div>
                                                                            <h4 className="font-weight500 ftSze18 mb-6">Montgomery
                                                                                Gateway</h4>
                                                                            <p className="ftSze14 ftWgt400 secondaryColor mb-0">361
                                                                                Montgomery St. Jersey City, NJ, 07302</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="sliderListing">
                                                                        <ul className="clearfix d-flex align-items-center">
                                                                            <li><b className="blackClr">3</b>beds</li>
                                                                            <li><b className="blackClr">2.5</b>baths</li>
                                                                            <li><b className="blackClr">1,425</b>sq.ft</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="linkproperty text-center">
                                                                        <a href="#" className="ftSze16 ftWgt600 blueClr">View
                                                                            Property Details</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>

        </>
    )
}

export default PropertyDetailPage;