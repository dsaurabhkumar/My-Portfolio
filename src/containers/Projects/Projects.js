import React from 'react';
import './Projects.css';
import ScrollToTop from '../../components/Scroll-to-Top/ScrollToTop';


class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            accordian: [
                {
                    title: 'Jones Lang LaSalle Incorporated (JLL)',
                    date: 'Dec 2019 to till date',
                    open: false,
                    logo: require('../../assets/logo/jll.svg'),
                    description: `Jones Lang LaSalle Incorporated (JLL) is an American commercial real estate services firm. It is the second-largest company of its kind in the world. The company is ranked 189th on the Fortune 500.
                    JLL is headquartered in Chicago, Illinois, and is the second largest project managment consultancy in world. The company has approximately 91,000 employees in 80 countries, as of 2019. Services include sales and leasing, property management, project management, and development. In 2014, the organization shortened its name to JLL for marketing purposes, while the legal name remained Jones Lang LaSalle Incorporated.`,
                    techStack: 'HTML5, SASS, JavaScript, Angular, React JS, Bootstrap 4, GIT, Bit Bucket, JIRA.'
                },
                {
                    title: 'Accounting Software-GST',
                    date: 'Nov 2019 to till date',
                    open: false,
                    logo: require('../../assets/logo/ayasya.png'),
                    description: `It’s an in-house project GST is an Indirect Tax which has replaced many Indirect Taxes in India. The Goods and Service Tax Act was passed in the Parliament on 29th March 2017. The Act came into effect on 1st July 2017; Goods & Services Tax Law in India is a comprehensive, multi-stage, destination-based tax that is levied on every value addition. In simple words, Goods and Service Tax (GST) is an indirect tax levied on the supply of goods and services. This law has replaced many indirect tax laws that previously existed in India. GST is one indirect tax for the entire country.`,
                    techStack: 'HTML5, SASS, JavaScript React, Bootstrap 4, GIT.'
                },
                {
                    title: 'Transunion.com',
                    date: 'July 2019 to Sep 2019',
                    open: false,
                    logo: require('../../assets/logo/transunion.svg'),
                    description: `Worked on the POC for the project. Client company has around 140+ websites for different- different countries. Need to convert all the sites on new platform i.e. Jahia (CMS) which is based on JSP.
                    TransUnion is an American consumer credit reporting agency. TransUnion collects and aggregates information on over one billion individual consumers in over thirty countries including "200 million files profiling nearly every credit-active consumer in the United States". Its customers include over 65,000 businesses. Based in Chicago, Illinois, TransUnion's 2014 revenue was US$1.3 billion.
                    TransUnion also markets credit reports and other credit and fraud-protection products directly to consumers. Like all credit reporting agencies, the company is required by U.S. law to provide consumers with one free credit report every year.`,
                    techStack: 'HTML5, CSS, JavaScript, Bootstrap 4, Jahia (CMS), JSP, GIT, Bit Bucket, JIRA.'
                },
                {
                    title: 'Ayasya Didital Pvt. Ltd. (ayasya.com)',
                    date: 'Jan 2019 to May 2019',
                    open: false,
                    logo: require('../../assets/logo/ayasya.png'),
                    description: `It is an in-house Project. IT-sphere is a vibrant arena with continuous changes and challenges. And Ayasya Digital Solutions has been one company which always has absorbed all the shifting requirements in the market and has come up with corresponding solutions right from the year 2010.
                    With the vision to have a truthful engagement with its clients and the mission to provide them with easy, responsive, flexible, affordable and fool-proof IT-solutions, the company over the years has grown from strength to strength.
                    Services provided by the Ayasya Digital Pvt. Ltd : AEM Development, Website Design & Development, Mobile App Development, Digital Marketing etc.`,
                    techStack: 'HTML5, CSS, SCSS, JavaScript, Bootstrap 4, GIT.'
                },
                {
                    title: 'Pioneer Banking (Indusind.com)',
                    date: 'Oct 2018 to March 2019',
                    open: false,
                    logo: require('../../assets/logo/Indusind.jpg'),
                    description: `IndusInd Bank Limited is a Mumbai based Indian new generation bank, established in 1994. The bank offers commercial, transactional and electronic banking products and services. IndusInd Bank was inaugurated in April 1994 by then Union Finance Minister Manmohan Singh. Indusind Bank is the first among the new-generation private banks in India.
                    The bank started its operations with a capital amount of Rs. 1 billion among which Rs. 600 million was raised by the Indian Residents and Rs. 400 million was raised by the Non-Resident Indians. The bank has specialized in retail banking services and continuously upgrades its support systems by introducing newer technologies. It is also working on expanding its network of branches all across the country along with meeting the global benchmark. According to the bank, its name is derived from the Indus Valley Civilisation.`,
                    techStack: 'HTML5, CSS, SCSS, JavaScript, Bootstrap 4, GIT, AEM 6.4, Gitlab.'
                },
                {
                    title: 'Alliancerxwp.com (Walgreens Pharmacy)',
                    details: 'Worked for Capgemini on contract through Ayasya Digital',
                    date: 'May 2018 to June 2019',
                    open: false,
                    logo: require('../../assets/logo/alliance.png'),
                    description: `The Walgreen Company (or simply Walgreens) is an American company that operates as the second-largest pharmacy store chain in the United States behind CVS Health. It specializes in filling prescriptions, health and wellness products, health information, and photo services. As of August 31, 2016, the company operated 8,175 stores in all 50 states, the District of Columbia, Puerto Rico, and the U.S. Virgin Islands. It was founded in Chicago, Illinois, in 1901. The Walgreens headquarters office is in the Chicago suburb of Deerfield, Illinois.
                    Using JIRA as the bug tracking system to track and maintain the history of bugs/issues on everyday basis. Creating Single Page Application with loading multiple views using route services etc. Called the Restful web service calls for POST, PUT, DELETE and GET methods. Developed multiple screens for Mobile Browsers such as Safari, Chrome, Opera to support the screen Compatibility and Resolution using Bootstrap, Flex-box and Grid.
                    `,
                    techStack: 'HTML5, CSS, SCSS, JavaScript, Bootstrap 4, Flex-box, Angular 5, Typescript, GIT, Bit Bucket, Git Lab.'
                },
            ]
        }
    }

    viewMore = (index) => {
        let accordian = [...this.state.accordian];
        accordian[index].open = !accordian[index].open;
        this.setState({
            accordian: accordian,
        })
    }

    render() {
        return (
            <div className="container">
                <h2 className="mt-4 mb-5">Work Experience and Projects</h2>
                {
                    this.state.accordian.map((val, index) => (
                        <div key={'Accordian_item_' + index} className="row mb-2">
                            <div className="col-md-12" id="projects">
                                <div className="row">
                                <div className="col-md-10 projectTitleAlign">
                                        <strong className="projectTitle">{val.title}</strong>
                                    </div>
                                    <div className="col-md-2">
                                        <img className="projectLogo" src={val.logo}></img>
                                    </div>
                                </div>
                                <p className="impDetail mt-2">{val.details}</p>
                                <p><strong className="dates mb-2">{val.date}</strong></p>
                                <button className="accordion mb-3" onClick={() => this.viewMore(index)}>{!val.open ? "Show More..." : "Show Less..."}</button>
                                <div className={"projectDetails " + (!val.open ? 'd-none' : '')} >
                                    <p>{val.description}</p>
                                </div>
                                <p className="techStack">
                                    <strong>Tech Stack:</strong> {val.techStack}
                                </p>
                                {index < this.state.accordian.length - 1 && <hr />}
                            </div>
                        </div>
                    ))
                }
                <ScrollToTop></ScrollToTop>
            </div>
        )
    }
}
export default Projects