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
    expect(res.body).toMatchObject(roomsData);
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
    console.log(res.body);
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
    expect(res.body).toMatchObject(bookingsData);
  });

  it("create new booking", async () => {
    const res = await request(app)
      .post("/bookings")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject({
      success: true,
      booking: {},
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
    expect(res.body).toMatchObject(usersData);
  });

  it("create new user", async () => {
    const res = await request(app)
      .post("/users")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject({
      success: true,
      user: {},
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
    expect(res.body).toMatchObject(contactData);
  });

  it("create new contact", async () => {
    const res = await request(app)
      .post("/contact")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject({
      success: true,
      contact: {},
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
