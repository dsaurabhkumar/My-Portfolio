import React, { Fragment } from 'react';
import './Projects.css';

class Projects extends React.Component {

    // viewMore = () => {
    //     var x = document.getElementById("projectDetails");
    //     if (x.style.display === "block") {
    //         x.style.display = "none";
    //     } else {
    //         x.style.display = "block";
    //     }
    // }

    viewMore = () => {
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var projectDetails = this.nextElementSibling;
                if (projectDetails.style.display === "block") {
                    projectDetails.style.display = "none";
                } else {
                    projectDetails.style.display = "block";
                }
            });
        }
    }

    render() {
        return (
            <div className="container">
                <h2 className="mt-4">Work Experience and Projects Handled</h2>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <p><strong className="projectTitle">Jones Lang LaSalle Incorporated (JLL)</strong></p>
                        <p className="dates mb-2">Dec 2019 to till date</p>
                        <p className="accordion" id="accordion" onClick={this.viewMore}></p>
                        <div className="projectDetails" id="projectDetails">
                            <p>Jones Lang LaSalle Incorporated (JLL) is an American commercial real estate services firm. It is the second-largest company of its kind in the world. The company is ranked 189th on the Fortune 500.</p>
                            <p>JLL is headquartered in Chicago, Illinois, and is the second largest project managment consultancy in world. The company has approximately 91,000 employees in 80 countries, as of 2019.Services include sales and leasing, property management, project management, and development. In 2014, the organization shortened its name to JLL for marketing purposes, while the legal name remained Jones Lang LaSalle Incorporated.</p>
                        </div>
                        <p className="techStack">
                            <strong>Tech Stack:</strong> HTML5, SASS, JavaScript, Angular, React JS, Bootstrap 4, GIT, Bit Bucket, JIRA.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="row mt-4">
                    <div className="col-md-12">
                        <p><strong className="projectTitle">Accounting Software (GST)</strong></p>
                        <p className="dates mt-2 mb-2">Oct 2019 - Dec 2019</p>
                        <p className="accordion" id="accordion" onClick={this.viewMore}></p>

                        <div className="projectDetails" id="projectDetails">
                            <p>It’s an in-house project GST is an Indirect Tax which has replaced many Indirect Taxes in India. The Goods and Service Tax Act was passed in the Parliament on 29th March 2017. The Act came into effect on 1st July 2017; Goods & Services Tax Law in India is a comprehensive, multi-stage, destination-based tax that is levied on every value addition.</p>
                            <p>In simple words, Goods and Service Tax (GST) is an indirect tax levied on the supply of goods and services. This law has replaced many indirect tax laws that previously existed in India. GST is one indirect tax for the entire country.</p>
                        </div>
                        <p className="techStack">
                            <strong>Tech Stack:</strong> HTML5, SASS, JavaScript, React JS, Bootstrap 4, GIT.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="row mt-4">
                    <div className="col-md-12">
                        <p><strong className="projectTitle">Transunion.com </strong></p>
                        <p className="dates mt-2 mb-2">July 2019 - Sep 2019</p>
                        <p className="accordion" id="accordion" onClick={this.viewMore}></p>
                        <div className="projectDetails">
                            <p>Worked on the POC for the project. Client company has around 140+ websites for different- different countries. Need to convert all the sites on new platform i.e. Jahia (CMS) which is based on JSP.</p>
                            <p>TransUnion is an American consumer credit reporting agency. TransUnion collects and aggregates information on over one billion individual consumers in over thirty countries including "200 million files profiling nearly every credit-active consumer in the United States". Its customers include over 65,000 businesses. Based in Chicago, Illinois, TransUnion's 2014 revenue was US$1.3 billion. It is the smallest of the three largest credit agencies, along with Experian and Equifax (known as the "Big Three").</p>
                        </div>
                        <p className="techStack">
                            <strong>Tech Stack:</strong> HTML5, SASS, JavaScript, Bootstrap 4, Jahia (CMS), JSP, GIT, Bit Bucket, JIRA etc.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="row mt-4">
                    <div className="col-md-12">
                        <p><strong className="projectTitle">Pioneer Banking</strong></p>
                        <p className="dates mt-2 mb-2">Oct 2018 - March 2019</p>
                        <p className="accordion" id="accordion" onClick={this.viewMore}></p>
                        <div className="projectDetails">
                            <p>IndusInd Bank Limited is a Mumbai based Indian new generation bank, established in 1994. The bank offers commercial, transactional and electronic banking products and services. IndusInd Bank was inaugurated in April 1994 by then Union Finance Minister Manmohan Singh.Indusind Bank is the first among the new-generation private banks in India.</p>
                            <p>The bank started its operations with a capital amount of Rs. 1 billion among which Rs. 600 million was raised by the Indian Residents and Rs. 400 million was raised by the Non-Resident Indians. The bank has specialized in retail banking services and continuously upgrades its support systems by introducing newer technologies. It is also working on expanding its network of branches all across the country along with meeting the global benchmark.</p>
                        </div>
                        <p className="techStack">
                            <strong>Tech Stack:</strong> HTML5, SASS, JavaScript, Bootstrap 4, GIT, AEM 6.4, JIRA.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="row mt-4 mb-5">
                    <div className="col-md-12">
                        <p><strong className="projectTitle">Alliancerxwp.com (Walgreens Pharmacy)</strong></p>
                        <p className="dates mt-2 mb-2">May 2018 - June 2019</p>
                        <p className="impDetail mt-2 mb-2">Worked for Capgemini on contract through Ayasya Digital Private Limited</p>
                        <p className="accordion" id="accordion" onClick={this.viewMore}></p>
                        <div className="projectDetails">
                            <p>The Walgreen Company (or simply Walgreens) is an American company that operates as the second-largest pharmacy store chain in the United States behind CVS Health. It specializes in filling prescriptions, health and wellness products, health information, and photo services. As of August 31, 2016, the company operated 8,175 stores in all 50 states, the District of Columbia, Puerto Rico, and the U.S. Virgin Islands. It was founded in Chicago, Illinois, in 1901. The Walgreens headquarters office is in the Chicago suburb of Deerfield, Illinois.</p>
                            <p>Using JIRA as the bug tracking system to track and maintain the history of bugs/issues on everyday basis. Creating Single Page Application with loading multiple views using route services etc. Called the Restful web service calls for POST, PUT, DELETE and GET methods. Developed multiple screens for Mobile Browsers such as Safari, Chrome, Opera to support the screen Compatibility and Resolution using Bootstrap, Flex-box and Grid.</p>
                        </div>
                        <p className="techStack">
                            <strong>Tech Stack:</strong> HTML5, SASS, JavaScript, Bootstrap 4, Flex-box, Angular 5, Typescript, GIT, Bit Bucket, Git Lab etc.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Projects