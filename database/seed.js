const {faker} = require('@faker-js/faker');
const { default: connection } = require('./connection');

function createRandomRoom(){
    let offer = faker.datatype.boolean();
    return {
      roomId: faker.datatype.uuid(),
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

  for(i=0;i>50;i++){
    const room = createRandomRoom();
    connection.query(`INSERT INTO rooms (number, bed_type, rate, description, offer, discount, name, available) VALUES (${room.number},${room.bed_type},${room.rate},${room.description},${room.offer}, ${room.discount},${room.name},${room.available})`)
  }


  module.exports = {createRandomRoom}