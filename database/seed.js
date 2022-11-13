const {faker} = require('@faker-js/faker');
const { connection } = require('./connection');

function createRandomRoom(){
    let offer = faker.datatype.boolean();
    return {
      number: faker.datatype.number({ min: 1, max: 200 }),
      bed_type: faker.helpers.arrayElement(['Single Bed', 'Double Bed', 'Suite','Double Superior',]),
      rate: faker.datatype.number({ min: 100, max:500}),
      description: faker.lorem.sentence(10),
      offer: offer,
      discount: offer ? faker.datatype.number({ min: 0, max:100}): 0,
      name: faker.word.noun(),
      available: faker.datatype.boolean(),
    };
  }
  
  
  for(i=0;i<50;i++){
  const room = createRandomRoom();
  // insert statment
  let stmt = 'INSERT INTO rooms SET ? ';
  
  // execute the insert statment
  connection.query(stmt, room, (err, results) => {
    if (err) {
      return console.error(err.message);
    }
    // get inserted rows
    console.log('Row inserted:' + results.affectedRows);
  });
}
  // close the database connection
  connection.end();

  module.exports = {createRandomRoom}