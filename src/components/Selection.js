import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './Graph';
import {CSSpec} from '../utils/CSSpecv2';
import {Constants} from '../utils/Constants';
import {MESpec} from '../utils/MESpec';

export default class Selection extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            show: true
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({show: !this.state.show});
    }

    render(){
        if(this.state.show){
            return (
            <div>
                <input type="text" placeholder="Major" />
                <input type="text" placeholder="Track (optional)" />
                <input type="submit" value="Post" onClick={this.handleClick} />
            </div>
            );
        }
        else{
            return (<Graph spec={CSSpec.navSpecs} constants={Constants.constants} />);
        }
    }
}
