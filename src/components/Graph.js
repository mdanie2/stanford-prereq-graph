import React from 'react';
import ReactDOM from 'react-dom';
import ForceDirectedGraph from '../utils/ForceDirectedGraph';
import Selection from './Selection';

export default class Graph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true,
            refresh: false
        }
    }

    componentDidMount() {
        this.graph = new ForceDirectedGraph(this.props.spec, this.props.constants, 20);
        this.graph.buildBidirectionalGraph();
    }

    handleClick = (e) => {
        e.preventDefault();
        this.graph.deconstructGraph();
        if(e.target.value === this.props.constants.exit) {
            this.setState({show: !this.state.show});
        }
        else {
            this.setState({show: !this.state.show, refresh: true})
        }
    }

    render() {
        if(this.state.show){
            return (
                <div>
                    <input type="submit" value={this.props.constants.refresh} onClick={this.handleClick} />
                    <input type="submit" value={this.props.constants.exit} onClick={this.handleClick} />
                </div>
            );
        }
        else if(this.state.refresh){
            return <Selection show={false} specName={this.props.specName} />
        }
        else{
            return <Selection show={true} specName={null} />;
        }
    }
}
