import React, {Component} from 'react';
import Config from './config.js';
import Backgrounds from './backgrounds.jsx';
import Header from './header.jsx';
import SectionLogo from './section-logo.jsx';
import SectionStory from './section-story.jsx';
import SectionProducts from './section-products.jsx';
import Product from './product.jsx';
import SectionShop from './section-shop.jsx';
import SectionStockists from './section-stockists.jsx';
import SectionContact from './section-contact.jsx';
import Footer from './footer.jsx';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            story : {
                title: '',
                text: ''
            },
            products : {
                title: '',
                items : [],
            },
            shop : {
                title: '',
                text: ''
            },
            stockists : {
                title: '',
                text: ''
            },
            contact : {
                title: '',
                text: ''
            }
        }
    }

    componentDidMount(){
        var that = this
        $.getJSON( Config.apiURL, function(data) {
            that.setState({
                story: {
                    title: data.pages.story['title'],
                    subTitle: data.pages.story['sub-title'],
                    text: data.pages.story['text']
                },
                products: {
                    title: data.pages.products['title'],
                    items: data.pages.products['items']
                },
                shop: {
                    title: data.pages.shop['title'],
                    text: data.pages.shop['text']
                },
                stockists: {
                    title: data.pages.stockists['title'],
                    text: data.pages.stockists['text']
                },
                contact: {
                    title: data.pages.contact['title'],
                    text: data.pages.contact['text']
                },
            })
        })
    }

    render() {
        return (
            <div>
                <Backgrounds />
                <Header />
                <main className="main">
                    <div className="container bg-white pam">
                        <SectionLogo />
                        <SectionStory title={this.state.story.title} subTitle={this.state.story.subTitle} text={this.state.story.text} />
                        <SectionProducts title={this.state.products.title}>
                            {this.state.products.items.map((x) =>
                                <Product key={x.title} title={x.title} />
                            )}
                        </SectionProducts>
                        <SectionShop title={this.state.shop.title} text={this.state.shop.text} />
                        <SectionStockists title={this.state.stockists.title} text={this.state.stockists.text} />
                        <SectionContact title={this.state.contact.title} text={this.state.contact.text} />
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

}

export default App;