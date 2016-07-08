import SpecUtils from './SpecUtils';
import _ from 'lodash';

export default class ForceDirectedGraph {

    static SpecUtils;

    constructor(spec, radius) {
        ForceDirectedGraph.SpecUtils = new SpecUtils(spec, radius);
    }

    buildBidirectionalGraph() {
        let radius = ForceDirectedGraph.SpecUtils.radius;
        let nodes = {};
        const links = ForceDirectedGraph.SpecUtils.getD3Links();

        // Compute the distinct nodes from the links.
        links.forEach(function(link) {
            if (nodes[link.source]) {
                link.source = nodes[link.source];
                if (link.type && !_.get(nodes[link.source], 'type')) {
                    nodes[link.source.name].type = link.type;
                }
            } else {
                link.source = nodes[link.source] = {name: link.source, type: link.type};
            }
            link.target = nodes[link.target] || (nodes[link.target] = {name: link.target, type: link.type});
        });

        const width = window.innerWidth,
            height = window.innerHeight,
            margin = {top: -5, right: -5, bottom: -5, left: -5};

        const zoomed = () => {
            container.attr('transform', 'translate(' + d3.event.translate + ')scale(' + d3.event.scale + ')');
        };

        let zoom = d3.behavior.zoom()
            .scaleExtent([1, 10])
            .on('zoom', zoomed);

        let svg = d3.select('body').append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.right + ')')
            .call(zoom);

        //TODO: Seems uneeded. remove?
        // let rect = svg.append('rect')
        //     .attr('width', width)
        //     .attr('height', height)
        //     .style('fill', 'none')
        //     .style('pointer-events', 'all');

        let tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function (d) {
                return "TESTING";
            });

        let container = svg.append('g');

        this.addToContainer(container, width, height);

        // add the curvy lines
        const tick = () => {
            path.attr('d', (d) => {
                const sourceRadius = ForceDirectedGraph.SpecUtils.getNodeRadius(d.name || d.source.name),
                    targetRadius = ForceDirectedGraph.SpecUtils.getNodeRadius(d.name || d.target.name) * (d.target.type === 'decision' ? 1.5 : 1);
                let deltaX = d.target.x - d.source.x,
                    deltaY = d.target.y - d.source.y,
                    dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
                    normX = deltaX / dist,
                    normY = deltaY / dist,
                    // sourcePadding = d.left ? sourceRadius + 15 : sourceRadius - 5,
                    // targetPadding = d.right ? targetRadius + 15 : targetRadius - 5,
                    sourcePadding = d.left ? radius + 15 : radius - 5,
                    targetPadding = d.right ? radius + 15 : radius - 5,
                    sourceX = d.source.x + (sourcePadding * normX),
                    sourceY = d.source.y + (sourcePadding * normY),
                    targetX = d.target.x - (targetPadding * normX),
                    targetY = d.target.y - (targetPadding * normY);
                return `M${sourceX},${sourceY}A${dist},${dist} 0 0,1 ${targetX},${targetY}`;
            });

            node.attr('transform', function(d) {
                return 'translate(' + d.x + ',' + d.y + ')';
            });
        };

        let force = this.buildD3Force(nodes, links, width, height, tick);

        // add the links and the arrows
        let path = container.append('svg:g').selectAll('path')
            .data(force.links())
            .enter()
            // .append('svg:g')
            // .attr('class', 'text')
            .append('svg:path')
            .attr('class', 'link')
            .attr('marker-end', 'url(#end)');



        //TODO: what about nodes that have literally no connections? :O
        // define the nodes
        let node = container.selectAll('.node')
            .data(force.nodes())
            .enter()
            .append('svg:g')
            .attr('class', 'node');

        container.selectAll('.node').call(tip);

        container.selectAll('.node')
            .on("mouseover", tip.show)
            .on("mouseout", tip.hide);

        node.each(function(d) {
            // if (d.type === 'decision') {
            //     d3.select(this).append('path')
            //         .attr('class', 'nodeShape')
            //         .attr('transform', 'rotate(-45)')
            //         .attr('d', d3.svg.symbol()
            //             .size((d) => { return ForceDirectedGraph.SpecUtils.getNodeRadius(d.name) * 20; })
            //             .type((d) => { return d.type == 'decision' ? 'square' : 'circle'; }));
            // } else {
            //TODO: Fix sizing
                d3.select(this).append('circle')
                    .attr('class', 'nodeShape')
                    .attr('r', radius);
                    // .attr('r', (d) => {
                    //     return ForceDirectedGraph.SpecUtils.getNodeRadius(d.name);
                    // });
            // }
        });

        // add the text
        node.append('text')
            .attr('dy', '.35em')
            .text(function(d) {return d.name; });

    }

    addToContainer(container, width, height){
        this.buildAxes(container, width, height);
        this.buildArrow(container);
    }

    buildAxes(container, width, height) {
        this.buildX(container, width, height);
        this.buildY(container, width, height);
    }

    buildX(container, width, height){
        container.append('g')
            .attr('class', 'x axis')
            .selectAll('line')
            .data(d3.range(0, width, 10))
            .enter().append('line')
            .attr('x1', function(d) { return d; })
            .attr('y1', 0)
            .attr('x2', function(d) { return d; })
            .attr('y2', height);
    }

    buildY(container, width, height){
        container.append('g')
            .attr('class', 'y axis')
            .selectAll('line')
            .data(d3.range(0, height, 10))
            .enter().append('line')
            .attr('x1', 0)
            .attr('y1', function(d) { return d; })
            .attr('x2', width)
            .attr('y2', function(d) { return d; });
    }

    buildArrow(container){
        container.append('svg:defs').selectAll('marker')
            .data(['end'])      // Different link/path types can be defined here
            .enter().append('svg:marker')    // This section adds in the arrows
            .attr('id', String)
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 15)
            .attr('refY', -0.5)
            .attr('markerWidth', 6)
            .attr('markerHeight', 6)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M0,-5L10,0L0,5');
    }

    buildD3Force(nodes, links, width, height, tick){
        return d3.layout.force()
            .nodes(d3.values(nodes))
            .links(links)
            .size([width, height])
            .gravity(0.09)
            .linkDistance(100)
            .charge(-1000)
            .on('tick', tick)
            .start();
    }
}