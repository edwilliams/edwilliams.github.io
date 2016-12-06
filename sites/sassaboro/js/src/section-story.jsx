import React, {Component} from 'react';

class SectionStory extends Component {
    render() {
        return (
            <section id="story" className="phm typo-center">
                <h1 className="bg-ribbon typo-center mvm">story</h1>
                <div className="grid grid-vl mobile-vn">
                    <div className="unit size1of2 mobile1of1">
                        <img src="img/bottle.jpg" height="400" />
                    </div>
                    <div className="unit size1of2 mobile1of1 typo-left">
                        <h3 className="f_m mbm">Straight out of Gambian</h3>
                        <p>[insert story re: sauces]... vestibulum odio potenti morbi enim elit a blandit curae vestibulum ac scelerisque elit vel fringilla a risus neque amet.Elementum ipsum ad pulvinar a interdum sodales lacinia in blandit pretium ornare a adipiscing a hendrerit.Vulputate condimentum mus nostra gravida a et a porta imperdiet scelerisque rutrum ultricies tristique nam vivamus vestibulum.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionStory;