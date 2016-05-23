var Global = (function() {

    var data = {
        formReady : new Event('form:ready')
    };

    var Hero = React.createClass({
        render: function() {

            return (
                <div className='unit size1of1'>
                    <img src='assets/img/dog.jpg'/>
                </div>
            );

        }
    });

    var Title = React.createClass({
        render: function() {

            return (
                <div className='unit size1of1'>
                    <h1 className='typo-center'>{this.props.children}</h1>
                </div>
            );

        }
    });

    var Input = React.createClass({
        handleChange: function(e) {

            if ( e.target.name == 'email' ) {
                if ( validateEmail( e.target.value ) ) {
                    document.dispatchEvent(data.formReady);
                }
            }

        },
        render: function() {

            return (
                <div className='unit size1of2 mobile1of1'>
                    <input className='pas' type='text' name={this.props.name} placeholder={this.props.children} onChange={this.handleChange}/>
                </div>
            );

        }
    });

    var Submit = React.createClass({
        getInitialState: function() {

            document.addEventListener('form:ready', function() {

                this.setState({
                    classes : 'btn pas'
                });

            }.bind(this));

            return {
                classes : 'btn pas ' + this.props.disabled
            }

        },
        handleClick: function(e) {

            var json = queryStringToJSON( serialize( document.querySelector('form') ) );
            alert( JSON.stringify(json) );

        },
        render: function() {

            return (
                <div className='unit size1of1'>
                    <a href='javascript:void(0);' onClick={this.handleClick} className={this.state.classes}>
                        {this.props.children}
                    </a>
                </div>
            );

        }
    });

    var App = React.createClass({
        render: function() {

            return (
                <section className='grid grid-vl'>

                    <Hero/>

                    <Title>Happy Birthday!</Title>

                    <form className='grid grid-vm grid-hm'>

                        <Input name='name'>Name</Input>

                        <Input name='email'>Email</Input>

                        <Input name='birthday'>Birthday</Input>

                        <Input name='message'>Message</Input>

                        <Submit disabled='disabled'>Submit</Submit>

                    </form>

                </section>
            );

        }
    });

    ReactDOM.render(
        <App data={data}/>,
        document.getElementById('main')
    );

})();