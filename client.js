const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', function() {
    console.log('Successfully connected to game server');
  })
  conn.on('data', function(data) {
    console.log("you ded cuz you idled", data);
  })
  conn.on('connect', () => {
    conn.write('Name: AXE')
  });

  
    // conn.on('connect', () => {
    //   conn.write('Move: up')
    // });
  
    // setTimeout(() => {
    //   conn.write('Move: right')
    // }, 1000);
  
    // setTimeout(() => {
    //   conn.write('Move: right')
    // }, 1500);
  
    // setTimeout(() => {
    //   conn.write('Move: down')
    // }, 2000);
  
    // setTimeout(() => {
    //   conn.write('Move: down')
    // }, 2500);
  
    // setTimeout(() => {
    //   conn.write('Move: down')
    // }, 2500);
  
    // setTimeout(() => {
    //   conn.write('Move: down')
    // }, 2500);
  
    // setTimeout(() => {
    //   conn.write('Move: down')
    // }, 2500);
  

  return conn;
}

module.exports = {connect};