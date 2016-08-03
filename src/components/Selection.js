import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './Graph';
import {Constants} from '../utils/Constants';
import {CSSpec} from '../utils/CSSpecv2';
import {MESpec} from '../utils/MESpec';

export default class Selection extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            show: true,
            major: '',
            track: ''
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        let major = this.state.major.trim().replace(/\s+/g, '_'),
            track = this.state.track.trim().replace(/\s+/g, '_');
            debugger;
        let theSpec = Constants.spec.major;
        debugger;
        this.setState({show: !this.state.show});
    }

    handleMajorChange = (e) => {
        this.setState({major: e.target.value});
    }

    handleTrackChange = (e) => {
        this.setState({track: e.target.value});
    }

    render(){
        if(this.state.show){
            return (
            <div>
                <input type="text" placeholder="Major" onChange={this.handleMajorChange} />
                <input type="text" placeholder="Track (optional)" onChange={this.handleTrackChange} />
                <input type="submit" value="Create Graph" onClick={this.handleClick} />
            </div>
            );
        }
        else{
            return (<Graph spec={CSSpec.navSpecs} constants={Constants.webpage} />);
        }
    }
}
