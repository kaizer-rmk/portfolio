import React from 'react'



function Services() {
    const [header] = React.useState({
        mainHeader: "SERVICES",
        subHeading: "My Services",
        text: "Following are the services provided by me, we can also work together on these servces."
    })
    const [serv] = React.useState([
        {   id:1,
            icon:"/images/web-browser.svg",
            heading: 'Web Development',
            text:'Neem ka patta kadwa h, jo isko padh rha wo sala bhadwa h.',
        },
        {   id:2,
            icon:"/images/android.svg",
            heading: 'Android App Development',
            text:'Neem ka patta kadwa h, jo isko padh rha wo sala bhadwa h.',
        },
        {   id:3,
            icon:"/images/python-language-logotype.svg",
            heading: 'Python',
            text:'Neem ka patta kadwa h, jo isko padh rha wo sala bhadwa h.',
        },
        {   id:4,
            icon:"/images/server-storage.svg",
            heading: 'Firebase/MongoDB/SQL',
            text:'Neem ka patta kadwa h, jo isko padh rha wo sala bhadwa h.',
        },
        {   id:5,
            icon:"/images/linux-logo.svg",
            heading: 'Shell Scripting',
            text:'Neem ka patta kadwa h, jo isko padh rha wo sala bhadwa h.',
        },
        {   id:5,
            icon:"/images/adobe-illustrator.svg",
            heading: 'Graphics Designing',
            text:'Neem ka patta kadwa h, jo isko padh rha wo sala bhadwa h.',
        },

    ])
    return (
        <div className="services">
            <div className="container">
                <div className="services__header">
                    <div className="common">
                        <h3 className="heading">{header.mainHeader}</h3>
                        <h1 className="mainHeader">{header.subHeading}</h1>
                        <p className="mainContent">
                            {header.text}
                        </p>
                        <div className="commonBorder"></div>
                    </div>   
                    <div className="row">
                        {serv.map((info)=>(
                            <div className="col-4">
                                <div className="services__box">
                                    <div className="commonIcons ">
                                        <img src={info.icon}/>
                                    </div>
                                    <div className="services__box-header">
                                        {info.heading}
                                    </div>
                                    <div className="services__box-p">
                                        {info.text}
                                    </div>
                                </div>
                            </div>
                        ))}   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
