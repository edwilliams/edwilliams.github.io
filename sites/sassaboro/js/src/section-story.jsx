import React, {Component} from 'react';

class SectionStory extends Component {
    render() {
        return (
            <section id="story" className="container bg-white typo-center ptl">
                <h1 className="bg-ribbon typo-center mbl">{this.props.title}</h1>
                <div className="grid grid-vl mobile-vn">
                    <div className="unit size1of2 mobile1of1">
                        <img className="animated" src="img/bottle.jpg" height="400" />
                    </div>
                    <div className="unit size1of2 mobile1of1 typo-left">
                        <h3 className="f_m mbm">{this.props.subTitle}</h3>
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionStory;