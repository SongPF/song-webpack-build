'use strict';

const React = require('react');
const logo = require('../image/logo.png');
const s = require('./search.less');

class Search extends React.Component {

    constructor() {
        super(...arguments);

        this.state = {
            Text: null
        };
    }

    loadComponent() {
        import('./text.js').then((Text) => {
            this.setState({
                Text: Text.default
            });
        });
    }

    render() {
        const {Text} = this.state;
        return <div className="search-text">
                {
                    Text ? <Text /> : null
                }
                search text新叶黑黑
                <img src={logo} onClick={ this.loadComponent.bind(this)} />
            </div>;
    }

}

module.exports = <Search />;