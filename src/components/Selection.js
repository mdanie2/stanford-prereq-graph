import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Graph from './Graph';
import {Constants} from '../utils/Constants';
import {CSSpec} from '../utils/CSSpecv2';
import {MESpec} from '../utils/MESpec';
import {MSESpec} from '../utils/MSESpec';

export default class Selection extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            show: this.props.show,
            specSheet: this.props.specName || '',
            track: ''
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        let major = this.state.major.trim().replace(/\s+/g, '_'),
            track = this.state.track.trim().replace(/\s+/g, '_');
        let theSpec = _.get(Constants.spec, major);
        if(theSpec){
            this.setState({show: !this.state.show, specSheet: theSpec});
        }
    }

    handleMajorChange = (e) => {
        this.setState({major: e.target.value});
    }

    handleTrackChange = (e) => {
        this.setState({track: e.target.value});
    }

    getSpecSheet = () => {
        let spec = this.state.specSheet;
        if(spec === "CSSpec"){
            return CSSpec.navSpecs;
        }
        else if(spec === "MESpec"){
            return MESpec.navSpecs;
        }
        else if(spec === "MSESpec"){
            return MSESpec.navSpecs;
        }
        //If we ever get here, there's a problem.
        else{
            return null;
        }
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
            return (<Graph spec={this.getSpecSheet()} specName={this.state.specSheet} constants={Constants.webpage} />);
        }
    }
}
