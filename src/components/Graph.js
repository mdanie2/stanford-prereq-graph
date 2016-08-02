import React from 'react';
import ReactDOM from 'react-dom';
import ForceDirectedGraph from '../utils/ForceDirectedGraph';
import Selection from './Selection';

export default class Graph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    componentDidMount() {
        this.graph = new ForceDirectedGraph(this.props.spec, this.props.constants, 20);
        this.graph.buildBidirectionalGraph();
    }

    handleClick = (e) => {
        e.preventDefault();
        this.graph.deconstructGraph();
        this.setState({show: !this.state.show});
    }

    render() {
        if(this.state.show){
            return (
                <div>
                    <input type="submit" value="x" onClick={this.handleClick} />
                </div>
            );
        }
        else{
            return <Selection />;
        }
    }
}
