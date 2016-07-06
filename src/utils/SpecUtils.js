export default class SpecUtils {

    constructor(spec, radiusScalar) {
        this.spec = spec;
        this.graph = this.specTransformer(this.spec);
        this.radiusScalar = radiusScalar;
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
                'type': item.type || 'view',
                'meta': {
                    'url': item.url,
                    'state': item.state,
                },
                'links': this.resolveTransitions(item, item.transitions)
            });
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
        return transitions.reduce((accum, item) => {
            accum.push({
                'd3': {
                    'source': node.name,
                    'target': item.escalate ? parentNode.name : item.to,
                    'type': node.type,
                    'action': item.action ? item.action : item.attribute + ' = ' + item.value.toString()
                }
            });
            if (node.childSpec) {
                node.childSpec.navSpec.map((item) => {
                    accum = accum.concat(this.resolveTransitions(item, item.transitions, node));
                    accum.push({
                        'd3': {
                            'source': node.name,
                            'target': node.childSpec.metadata.enter,
                            'type': undefined,
                            'action': undefined
                        }
                    }); //action undefined for now
                });
            }
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