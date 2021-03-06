import './index.scss';
import React, {Component} from 'react';

class ThumbsUpIcon extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        email: '',
    };

    render(props) {
        return (
            <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={this.props.fill || 'none'}
                     stroke={this.props.stroke || 'currentColor'}
                     stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round" className="feather feather-thumbs-up">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                </svg>

            </div>
        );
    }
}

export default ThumbsUpIcon;
