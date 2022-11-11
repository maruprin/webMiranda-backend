const {faker} = require('@faker-js/faker');
const { connection } = require('./connection');

function createRandomRoom(){
    let offer = faker.datatype.boolean();
    return {
      number: faker.datatype.number({ min: 1, max: 200 }),
      bed_type: faker.helpers.arrayElement(['Single Bed', 'Double Bed', 'Suite','Double Superior',]),
      rate: faker.datatype.number({ min: 100, max:500}),
      description: faker.lorem.paragraph(),
      offer: offer,
      discount: offer ? faker.datatype.number({ min: 0, max:100}): 0,
      name: faker.word.noun(),
      available: faker.datatype.boolean(),
    };
  }
  const room = createRandomRoom();
  console.log(room.number)


  
  // insert statment
  let stmt = `INSERT INTO rooms (number, bed_type, rate, description, offer, discount, name, available) VALUES ? `;
  let todos = [
    [room.number,room.bed_type,room.rate,room.description,room.offer,room.discount,room.name,room.available]
  ];
  
  // execute the insert statment
  connection.query(stmt, [todos], (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    // get inserted rows
    console.log('Row inserted:' + results.affectedRows);
  });
  
  // close the database connection
  connection.end();




//   for(i=0;i<50;i++){
//     const room = createRandomRoom();
//     const query = connection.query('INSERT INTO rooms (number, bed_type, rate, description, offer, discount, name, available) VALUES ?', [[room.number, room.bed_type,room.rate,room.description, room.offer,room.discount,room.name,room.available]], function (error, results) {
//     if (error) throw error;
//     });
//     console.log(room)
    // let sql = `INSERT INTO rooms (number, bed_type, rate, description, offer, discount, name, available) VALUES (${room.number},${room.bed_type},${room.rate},${room.description},${room.offer}, ${room.discount},${room.name},${room.available})`
    // connection.query(sql)
//   }
// connection.end();

  



  module.exports = {createRandomRoom}