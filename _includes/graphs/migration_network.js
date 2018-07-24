  // create an array with nodes
  var nodesPhx = new vis.DataSet([
        {id: 1, label: 'Phoenix', color:'#a0db8e'},
        {id: 2, label: 'Los Angeles', color:'#d1dfea'},
        {id: 3, label: 'Chicago', color:'#d1dfea'},
        {id: 4, label: 'New York', color:'#d1dfea'},
        {id: 5, label: 'Minneapolis', color:'#d1dfea'},
        {id: 6, label: 'Detriot', color:'#d1dfea'},
        {id: 7, label: 'Indianapolis', color:'#d1dfea'},
        {id: 8, label: 'Denver', color:'#d1dfea'},
        {id: 9, label: 'San Diego', color:'#d1dfea'},
        {id: 10, label: 'St. Louis', color:'#d1dfea'},
        {id: 11, label: 'Milwaukee', color:'#d1dfea'}
  ]);
  
  var nodesAnc = new vis.DataSet([
        {id: 1, label: 'Anchorage', color:'#ff8e8e'},
        {id: 2, label: 'New York', color:'#d1dfea'},
        {id: 3, label: 'Chicago', color:'#d1dfea'},
        {id: 4, label: 'Los Angeles', color:'#d1dfea'},
        {id: 5, label: 'Tampa', color:'#d1dfea'},
        {id: 6, label: 'Washington DC', color:'#d1dfea'},
        {id: 7, label: 'Miami', color:'#d1dfea'},
        {id: 8, label: 'Dallas', color:'#d1dfea'},
        {id: 9, label: 'Philadelphia', color:'#d1dfea'},
        {id: 10, label: 'Jacksonville', color:'#d1dfea'},
        {id: 11, label: 'Charleston', color:'#d1dfea'}
  ]);

  // create an array with edges
  var edgesPhx = new vis.DataSet([
        {from: 1, to: 2, value:2.32035839, arrows:'from'},
        {from: 1, to: 3, value:1.3465169, arrows:'from'},
        {from: 1, to: 4, value:0.19541681, arrows:'from'},
        {from: 1, to: 5, value:0.00778209, arrows:'from'},
        {from: 1, to: 6, value:0.18179816, arrows:'from'},
        {from: 1, to: 7, value:0.62602552, arrows:'from'},
        {from: 1, to: 8, value:0.69303792, arrows:'from'},
        {from: 1, to: 9, value:0.72222074, arrows:'from'},
        {from: 1, to: 10, value:0.75680778, arrows:'from'},
        {from: 1, to: 11, value:0.87461991, arrows:'from'}
  ]);
  
  var edgesAnc = new vis.DataSet([
        {from: 1, to: 2, value:2.25586724, arrows:'to'},
        {from: 1, to: 3, value:1.29683218, arrows:'to'},
        {from: 1, to: 4, value:0.58084024, arrows:'to'},
        {from: 1, to: 5, value:0.08999165, arrows:'to'},
        {from: 1, to: 6, value:0.37491045, arrows:'to'},
        {from: 1, to: 7, value:0.56540372, arrows:'to'},
        {from: 1, to: 8, value:0.6951362, arrows:'to'},
        {from: 1, to: 9, value:0.73701188, arrows:'to'},
        {from: 1, to: 10, value:0.8141945, arrows:'to'},
        {from: 1, to: 11, value:0.85689126, arrows:'to'}
  ]);
  
  // create a network
  var containerPhx = document.getElementById('mynetworkPhx');
  var dataPhx = {
    nodes: nodesPhx,
    edges: edgesPhx
  };
  
  var containerAnc = document.getElementById('mynetworkAnc');
  var dataAnc = {
    nodes: nodesAnc,
    edges: edgesAnc
  };
  
  var options = {
      locale: 'en',
      physics: {
          "enabled": true
      },
      edges: {
          smooth: {
              type: 'continuous'
          }
      },
      interaction: {
          dragNodes: true,
          dragView:true
      }
  };

  var networkPhx = new vis.Network(containerPhx, dataPhx, options);
  var networkAnc = new vis.Network(containerAnc, dataAnc, options);
  
  window.onresize = function() {
  setInterval(function() {
    network.fit();
  }, 2000);
};
