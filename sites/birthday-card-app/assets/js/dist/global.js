function queryStringToJSON(qs) {
    qs = qs || location.search.slice(1);

    var pairs = qs.split('&');
    var result = {};
    pairs.forEach(function(pair) {
        var pair = pair.split('=');
        var key = pair[0];
        var value = decodeURIComponent(pair[1] || '');

        if( result[key] ) {
            if( Object.prototype.toString.call( result[key] ) === '[object Array]' ) {
                result[key].push( value );
            } else {
                result[key] = [ result[key], value ];
            }
        } else {
            result[key] = value;
        }
    });

    return JSON.parse(JSON.stringify(result));
}

function validateEmail( x ) {
    var atpos = x.indexOf('@');
    var dotpos = x.lastIndexOf('.');
    if ( atpos < 1 || dotpos < atpos+2 || dotpos + 2 >= x.length ) {
        return false;
    } else {
        return true;
    }
}

var global = (function() {

    var data = {};

    var Input = React.createClass({
        render: function() {
            return (
                <div className='unit size1of2 mobile1of1'>
                    <input className='pas' type='text' name={this.props.name} placeholder={this.props.name} />
                </div>
            );
        }
    });

    var App = React.createClass({
        getInitialState: function() {
            return {
                greeting: 'Happy Birthday!',
                emailValid : 'disabled'
            }
        },
        handleClick: function(e) {
            this.setState({
                greeting: 'Thank You! Your arbitary birthday JSON has been generated!'
            });
            var json = queryStringToJSON( $('#main input').serialize() );
            console.log( json );
        },
        handleChange: function(e) {
            if ( validateEmail( e.target.value ) ) {
                this.setState({
                    emailValid : ''
                });
            }
        },
        active: function() {
            return 'disabled';
        },
        render: function() {
            return (
                <div className='grid grid-vl grid-hl'>

                    <div className='unit size1of1'>
                        <img src='assets/img/dog.jpg' />
                    </div>

                    <div className='unit size1of1'>
                        <h1 className='typo-center'>{this.state.greeting}</h1>
                    </div>

                    <Input name='name' />

                    <div className='unit size1of2 mobile1of1'>
                        <input className='pas' type='text' name='email' placeholder='email' onChange={this.handleChange} />
                    </div>

                    <Input name='birthday' />

                    <div className='unit size1of2 mobile1of1'>
                        <input className='pas' type='text' name='message' placeholder='message' />
                    </div>

                    <div className='unit size1of1'>
                        <a href='javascript:void(0);' onClick={this.handleClick} className={'btn pas ' + this.state.emailValid}>Submit</a>
                    </div>

                </div>
            );
        }
    });

    ReactDOM.render(
        <App data={data} />,
        document.getElementById('main')
    );

})();