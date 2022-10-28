const request = require("supertest");
const app = require("../app");
const jwt = require("jsonwebtoken");
const bookingsData = require("../data/bookingsData");
const roomsData = require("../data/roomsData");
const usersData = require("../data/usersData");
const contactData = require("../data/contactData");
const token = jwt.sign({ user: {} }, "TOP_SECRET");

const room = {
  "Room Id": 1,
  "Room Number": 216,
  Facilities: "bar",
  "Bed Type": "Single Bed",
  Status: "Available",
  Rate: 300,
  description:
    "quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi",
  Offer: 15,
  discount: 20,
  "Room Name": "Qasr Abu Hadi",
};
const booking = {
  "Booking Id": 1,
  "Guest": "Gallard Hammer",
  "Order date": "11/13/2023",
  "Ckeck-in": "9/21/2022",
  "Check-out": "9/21/2022",
  "Special Request": "ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi",
  "room_number": 138,
  "Room type": "Double Superior",
  "Status": "In Progress"
}
const user = {
  "User Id": 83,
  "User Name": "Gifford Hamal",
  "email": "ghamal2a@virginia.edu",
  "Contact": 632756421,
  "photo": null,
  "work_position": "manager",
  "Start Date": "11/29/2021",
  "Status": "Active",
  "pasword": "Nwy4Ew",
  "Job Desk": "hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at"
}
const contact = {
  "Order Id": 50,
  "Customer": "Porty Littledyke",
  "email": "plittledyke1d@bloomberg.com",
  "Date": "1/28/2022",
  "phone": 9,
  "subject": "aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis",
  "Comment": "at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare",
  "Archive": "Archive"
}
describe("Rooms route", () => {
  it("Access denegated without authorization", async () => {
    const res = await request(app).get("/rooms");
    expect(res.statusCode).toBe(401);
  });

  it("return all rooms", async () => {
    const res = await request(app)
      .get("/rooms")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject({rooms:roomsData});
  });

  it("create new room", async () => {
    const res = await request(app)
      .post("/rooms")
      .set("Authorization", `Bearer ${token}`)
      .send(room)
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject({
      success: true,
      room: room,
    });
  });
  it("no se puede hacer post sin auth", async () => {
    const res = await request(app).post("/rooms").send({
      message: "post de prueba",
    });
    expect(res.statusCode).toEqual(401);
  });
  it("return one room", async () => {
    const res = await request(app)
      .get("/rooms/23")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
      .expect("Content-Type", /json/);

    expect(res.body).toBeInstanceOf(Object);
  });
  it("update one room", async () => {
    const res = await request(app)
      .put("/rooms/23")
      .set("Authorization", `Bearer ${token}`)
      .send({
        message: "probando update",
      });
    expect(res.statusCode).toEqual(200); // deberia dar contenido vacio pero da un 200 "ok"
  });
  it("delete one room", async () => {
    const res = await request(app)
      .delete("/rooms/23")
      .set("Authorization", `Bearer ${token}`)
      .send({
        message: "probando delete",
      });
    expect(res.statusCode).toBe(200); // deberia dar contenido vacio pero da un 200 "ok"
  });
});

describe("Bookings route", () => {
  it("Access denegated without authorization", async () => {
    const res = await request(app).get("/bookings");
    expect(res.statusCode).toBe(401);
  });
  it("return all booking", async () => {
    const res = await request(app)
      .get("/bookings")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject({bookings:bookingsData});
  });

  it("create new booking", async () => {
    const res = await request(app)
      .post("/bookings")
      .set("Authorization", `Bearer ${token}`)
      .send(booking)
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject({
      success: true,
      booking: booking,
    });
  });
  it("no se puede hacer post sin auth", async () => {
    const res = await request(app).post("/bookings").send({
      message: "post de prueba",
    });
    expect(res.statusCode).toEqual(401);
  });
  it("return one booking", async () => {
    const res = await request(app)
      .get("/bookings/23")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
      .expect("Content-Type", /json/);

    expect(res.body).toBeInstanceOf(Object);
  });
  it("update one booking", async () => {
    const res = await request(app)
      .put("/bookings/23")
      .set("Authorization", `Bearer ${token}`)
      .send({
        message: "probando update",
      });
    expect(res.statusCode).toEqual(200); // deberia dar contenido vacio pero da un 200 "ok"
  });
  it("delete one booking", async () => {
    const res = await request(app)
      .delete("/bookings/23")
      .set("Authorization", `Bearer ${token}`)
      .send({
        message: "probando delete",
      });
    expect(res.statusCode).toBe(200); // deberia dar contenido vacio pero da un 200 "ok"
  });
});

describe("Users route", () => {
  it("Access denegated without authorization", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(401);
  });

  it("return all users", async () => {
    const res = await request(app)
      .get("/users")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject({users:usersData});
  });

  it("create new user", async () => {
    const res = await request(app)
      .post("/users")
      .set("Authorization", `Bearer ${token}`)
      .send(user)
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject({
      success: true,
      user: user,
    });
  });
  it("no se puede hacer post sin auth", async () => {
    const res = await request(app).post("/users").send({
      message: "post de prueba",
    });
    expect(res.statusCode).toEqual(401);
  });
  it("return one room", async () => {
    const res = await request(app)
      .get("/rooms/23")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
      .expect("Content-Type", /json/);

    expect(res.body).toBeInstanceOf(Object);
  });
  it("update one user", async () => {
    const res = await request(app)
      .put("/users/23")
      .set("Authorization", `Bearer ${token}`)
      .send({
        message: "probando update",
      });
    expect(res.statusCode).toEqual(200); // deberia dar contenido vacio pero da un 200 "ok"
  });
  it("delete one user", async () => {
    const res = await request(app)
      .delete("/users/23")
      .set("Authorization", `Bearer ${token}`)
      .send({
        message: "probando delete",
      });
    expect(res.statusCode).toBe(200); // deberia dar contenido vacio pero da un 200 "ok"
  });
});

describe("Contact route", () => {
  it("Access denegated without authorization", async () => {
    const res = await request(app).get("/contact");
    expect(res.statusCode).toBe(401);
  });

  it("return all contacts", async () => {
    const res = await request(app)
      .get("/contact")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject({contacts:contactData});
  });

  it("create new contact", async () => {
    const res = await request(app)
      .post("/contact")
      .set("Authorization", `Bearer ${token}`)
      .send(contact)
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject({
      success: true,
      contact: contact,
    });
  });
  it("no se puede hacer post sin auth", async () => {
    const res = await request(app).post("/rooms").send({
      message: "post de prueba",
    });
    expect(res.statusCode).toEqual(401);
  });
  it("return one contact", async () => {
    const res = await request(app)
      .get("/contact/23")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
      .expect("Content-Type", /json/);

    expect(res.body).toBeInstanceOf(Object);
  });
  it("update one contact", async () => {
    const res = await request(app)
      .put("/contact/23")
      .set("Authorization", `Bearer ${token}`)
      .send({
        message: "probando update",
      });
    expect(res.statusCode).toEqual(200); // deberia dar contenido vacio pero da un 200 "ok"
  });
  it("delete one contact", async () => {
    const res = await request(app)
      .delete("/contact/23")
      .set("Authorization", `Bearer ${token}`)
      .send({
        message: "probando delete",
      });
    expect(res.statusCode).toBe(200); // deberia dar contenido vacio pero da un 200 "ok"
  });
});
