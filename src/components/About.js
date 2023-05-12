import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? '#192734' : 'white'
    }

    return (
        <div className='container' style={{ myStyle }}>
            <h2 className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>About Us</h2>
            <div className="accordion accordion-flush container" id="accordionFlushExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={myStyle}>
                            About - Founder and Creator
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>This website is developed by me - <strong>Yash Chandrawat</strong> and Im currently studying and persuing my degree from College in Indore
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={myStyle} >
                            About - Website
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">TextWise is the website with which user can perform manipulation process to thier text and manipulated data can be copied to thier clipboard too! <br />I hope this website will be helpful to you😊</div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={myStyle}>
                            About - Future Enhancements
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">In Future there are too many features which we will add in this website which is helpful for the people to manipulate there text in the desired form !</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
