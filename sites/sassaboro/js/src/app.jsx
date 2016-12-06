import React, {Component} from 'react';
import Backgrounds from './backgrounds.jsx';
import Header from './header.jsx';
import SectionLogo from './section-logo.jsx';
import SectionStory from './section-story.jsx';
import SectionProducts from './section-products.jsx';
import SectionShop from './section-shop.jsx';
import SectionStockists from './section-stockists.jsx';
import SectionContact from './section-contact.jsx';
import Footer from './footer.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <Backgrounds />
                <Header />
                <main className="main">
                    <div className="container bg-white pam">
                        <SectionLogo />
                        <SectionStory />
                        <SectionProducts />
                        <SectionShop />
                        <SectionStockists />
                        <SectionContact />
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default App;