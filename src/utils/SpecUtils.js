import _ from 'lodash';

export default class SpecUtils {

    constructor(spec, radius) {
        this.spec = spec;
        this.graph = this.specTransformer(this.spec);
        this.radius = radius;
        this.nodeSize = this.cacheNodeConnections();
    }

    /**
     * Takes in a UKSpec and translates it to a structure where D3 can consume
     * it.
     * @param  {JS Object} spec The navigation spec
     * @return {JS Object}      The massaged structure
     */
    specTransformer(spec) {
        return spec.reduce((accum, item) => {
            accum.push({
                'name': item.name,
                'type': item.id || 'noType',
                'description': item.description || '',
                // 'meta': {
                    // 'url': item.url,
                    // 'state': item.state
                // },
                'links': this.resolveTransitions(item, item.transitions)
            });
            // debugger;
            return accum;
        }, []);
    }

    /**
     * gets the number of incoming connections to a named node.
     * @param  {[type]} name [description]
     * @return {[type]}      [description]
     */
    getNumOfLinksByName(name) {
        return this.nodeSize[name];
    }

    /**
     * Returns the radius of the node
     * @param  {[type]} name [description]
     * @return {[type]}      [description]
     */
    getNodeRadius(name) {
        return name ? this.nodeSize[name] * this.radiusScalar : this.radiusScalar;
    }

    /**
     * Creates and caches the number of incoming connections per node to be
     * used for the radius of reach node.
     * @return {[void]} Returns nothing.
     */
    cacheNodeConnections() {
        let numOfConnections = {};
        this.graph.map((node) => {
            numOfConnections[node.name] = numOfConnections[node.name] ? numOfConnections[node.name] : 1; //every node is connected to itself
            node.links.map((link) => {
                numOfConnections[link.d3.target] = numOfConnections[link.d3.target] ? numOfConnections[link.d3.target] + 1 : 1;
            });
        });
        return numOfConnections;
    }

    /**
     * Creates the links of a particular node
     * @param  {[type]} sourceName  [description]
     * @param  {[type]} sourceIndex [description]
     * @param  {[type]} transitions [description]
     * @return {[type]}             [description]
     */
    resolveTransitions(node, transitions, parentNode) {
      // let rand = _.get(this.spec[0], 'id'); === invisible
        return transitions.reduce((accum, item) => {
            accum.push({
                'd3': {
                    'source': node.name,
                    'target': item.escalate ? parentNode.name : item.to,
                    // 'type': node.id || 'noType',
                    //EITHER USE LODASH OR sourceType/toType
                    'sourceType': node.id || 'noType',
                    'toType': item.toType || 'noType',
                    'action': item.action || ''
                }
            });
            return accum;
        }, []);
    }

    /**
     * Returns the transitions in a structure that D3 can consume.
     * @param  {[type]} transformedSpec [description]
     * @return {[type]}                 [description]
     */
    getD3Links() {
        return this.graph.reduce(function(accum, item) {
            Array.prototype.push.apply(accum, item.links.reduce((transitions, transition) => {
                transitions.push(transition.d3);
                return transitions;
            }, []));
            return accum;
        }, []);
    }
}
