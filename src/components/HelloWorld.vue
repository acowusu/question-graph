<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Zoom in to see the relationships between different questions
    </p>
    <Network class="network" ref="network"
    :nodes="nodes"
    :edges="edges"
    :options="options">
    </Network>
  </div>
</template>

<script>
import { Network } from "vue-vis-network";
import edges from '../edges.json'
import nodes from '../nodes.json'
export default {
  name: 'HelloWorld',
  components: {
  Network
  },
  props: {
    msg: String
  },
    data: function (){
    return {
      options: {
        nodes: {
          shape: "dot",
          scaling: {
            min: 10,
            max: 30
          },
          font: {
            size: 12,
            face: "Tahoma",
            color:'#fff'
          }
        },
        edges: {
          width: 0.15,
          color: { inherit: "from" },
          smooth: {
            type: "continuous"
          }
        },
        physics: {
          stabilization: false,
          barnesHut: {
            gravitationalConstant: -80000,
            springConstant: 0.001,
            springLength: 200
          }
        },
        interaction: {
          tooltipDelay: 200,
          hideEdgesOnDrag: true
        }
  }
    }
  },
  computed:{
    nodes(){
      return nodes
    },
    edges(){
      return edges.map(function (edge){
        edge.title = edge.strength
        edge.physics = edge.strength >0.8
        edge.hidden = edge.strength <0.8

        return edge
      })
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.network{
  height: 90vh;
  background:#2e2e2e;  
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
