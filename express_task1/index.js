const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json());

const allData = [
  {
    id: 1,
    first_name: "Elsa",
    last_name: "Berthomier",
    email: "eberthomier0@google.es",
    pincode: "9124",
    city: "Mamburao",
    state: null,
  },
  {
    id: 2,
    first_name: "Joanie",
    last_name: "Stalf",
    email: "jstalf1@nba.com",
    pincode: "1",
    city: "San Luis",
    state: null,
  },
  {
    id: 3,
    first_name: "Uta",
    last_name: "Piken",
    email: "upiken2@independent.co.uk",
    pincode: "6746",
    city: "Pilzno",
    state: null,
  },
  {
    id: 4,
    first_name: "Tiphany",
    last_name: "Mulder",
    email: "tmulder3@bloomberg.com",
    pincode: "9",
    city: "Mangai",
    state: null,
  },
  {
    id: 5,
    first_name: "Basilio",
    last_name: "Crean",
    email: "bcrean4@archive.org",
    pincode: "353",
    city: "Katyr-Yurt",
    state: null,
  },
  {
    id: 6,
    first_name: "Loutitia",
    last_name: "Lobb",
    email: "llobb5@multiply.com",
    pincode: "65",
    city: "Saqqez",
    state: null,
  },
  {
    id: 7,
    first_name: "Marta",
    last_name: "D'Agostino",
    email: "mdagostino6@time.com",
    pincode: "8",
    city: "Hajnówka",
    state: null,
  },
  {
    id: 8,
    first_name: "Porter",
    last_name: "Bugbee",
    email: "pbugbee7@hibu.com",
    pincode: "9",
    city: "Mikhnëvo",
    state: null,
  },
  {
    id: 9,
    first_name: "Roderick",
    last_name: "Pordal",
    email: "rpordal8@cafepress.com",
    pincode: "3",
    city: "Alpedrinha",
    state: "Castelo Branco",
  },
  {
    id: 10,
    first_name: "Teirtza",
    last_name: "Beckenham",
    email: "tbeckenham9@issuu.com",
    pincode: "6481",
    city: "Toulouse",
    state: "Midi-Pyrénées",
  },
  {
    id: 11,
    first_name: "Gerrie",
    last_name: "Swanne",
    email: "gswannea@gov.uk",
    pincode: "2767",
    city: "Banjar Kelodan",
    state: null,
  },
  {
    id: 12,
    first_name: "Chris",
    last_name: "Detloff",
    email: "cdetloffb@washingtonpost.com",
    pincode: "27",
    city: "Karonga",
    state: null,
  },
  {
    id: 13,
    first_name: "Courtney",
    last_name: "Simonetti",
    email: "csimonettic@wiley.com",
    pincode: "46333",
    city: "Emiliano Zapata",
    state: "Tabasco",
  },
  {
    id: 14,
    first_name: "Claribel",
    last_name: "Skellington",
    email: "cskellingtond@gov.uk",
    pincode: "15649",
    city: "De la Paz",
    state: null,
  },
  {
    id: 15,
    first_name: "Gertrud",
    last_name: "Mainstone",
    email: "gmainstonee@si.edu",
    pincode: "04783",
    city: "Sagbayan",
    state: null,
  },
  {
    id: 16,
    first_name: "Rodge",
    last_name: "Blaxter",
    email: "rblaxterf@theatlantic.com",
    pincode: "2644",
    city: "Paritaman",
    state: null,
  },
  {
    id: 17,
    first_name: "Lenee",
    last_name: "Bute",
    email: "lbuteg@paypal.com",
    pincode: "3",
    city: "Jieting",
    state: null,
  },
  {
    id: 18,
    first_name: "Kristin",
    last_name: "Roft",
    email: "krofth@dell.com",
    pincode: "91425",
    city: "Staré Město",
    state: null,
  },
  {
    id: 19,
    first_name: "Ross",
    last_name: "Dowe",
    email: "rdowei@photobucket.com",
    pincode: "909",
    city: "Sorol",
    state: null,
  },
  {
    id: 20,
    first_name: "Giacomo",
    last_name: "Knoller",
    email: "gknollerj@cnet.com",
    pincode: "2054",
    city: "Aragua de Barcelona",
    state: null,
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getAll", (req, res) => {
  res.send(allData);
});

app.get("/getById/:id", (req, res) => {
  const userId = req.params.id;
  const getById = allData.find((element) => element.id === parseInt(userId));

  if (!getById) {
    res.status(404).send("The given ID not found");
    return;
  }

  res.send(getById);
});

app.get("/getByEmail/:email", (req, res) => {
  const userEmail = req.params.email;
  const getByEmail = allData.find((element) => element.email == userEmail);

  if (!getByEmail) {
    res.status(400).send("Bab Request");
    return;
  }

  res.send(getByEmail);
});

app.post("/post", (req, res) => {
  if (!req.body.first_name) {
    res.status(400).send("Bad Request");
    return;
  }
  const data = {
    id: allData.length + 1,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    pincode: req.body.pincode,
    city: req.body.city,
    state: req.body.state,
  };

  allData.push(data);

  res.send(data);
});

app.put('/edit/email/:id', (req, res)=>{
  const userId = req.params.id;
  const editEmail = allData.find((element)=> element.id == parseInt(userId));
  if (!editEmail) {
    res.status(404).send("The given email not found");
    return;
  }
  editEmail.email = req.body.email;
  res.send(editEmail);

})

app.delete('/delete/:id', (req, res)=>{
  const userId = req.params.id;
  const deleteRecord = allData.find((element)=> element.id == parseInt(userId));
  if (!deleteRecord) {
    res.status(404).send("The given record not found");
    return;
  }

  const index = allData.indexOf(deleteRecord);
  allData.splice(index, 1);
  res.send(deleteRecord);
})

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
