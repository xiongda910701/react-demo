import React from 'react'
import PureRenderMixin  from 'react-addons-pure-render-mixin'


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="wrap">
               <h2>search page</h2>
            </div>
        )
    }
}

export default Search