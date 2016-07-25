import React from 'react';
import ReactDOM from 'react-dom';
import ForceDirectedGraph from '../utils/ForceDirectedGraph';

export default class Graph extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.graph = new ForceDirectedGraph(this.props.spec, 20);
        this.graph.buildBidirectionalGraph();
    }

    render() {
        return (
            <div></div>
        );
    }
}
