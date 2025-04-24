const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const {loadContact, findContact, addContact, cekDuplikat} = require('./utils/contacts')
const { body, validationResult, check, cookie } = require('express-validator');
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require ("connect-flash")

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);

//built in middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));

//konfigurasi flash
app.use(cookieParser('secret'))
app.use(session({
  cookie:{maxAge:6000},
  secret:"secret",
  resave: true,
  saveUninitialized:true,
}))
app.use(flash())


app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Rizky Rahmahdian Sandy",
      position: "25",
      office: 25000,
      age: 32,
      startdate: 3000000,
    },
    {
      nama: "sabun cuci piring",
      position: "25",
      office: 25000,
      age: 32,
      startdate: "2002/09/20",
    },
    {
      nama: "mie goreng",
      position: "25",
      office: 25000,
      age: 32,
      startdate: "2002/09/20",
    },
    {
      nama: "ayam goreng",
      position: "25",
      office: 25000,
      age: 32,
      startdate: "2002/09/20",
    },
    {
      nama: "lele goreng",
      position: "25",
      office: 25000,
      age: 32,
      startdate: "2002/09/20",
    },
  ];

  res.render("index", {
    nama: "Rizky Sandy",
    title: "Halaman Home",
    mahasiswa,
    layout: "layouts/main-layout",
  });
});

app.get("/about", (req, res,next) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});

app.get("/contact", (req, res) => {
  const contacts = loadContact();  
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
    contacts,
    msg : req.flash("msg"),
  });
});

//halaman form tambah data contact
app.get("/contact/add", (req, res) => {
  res.render("add-contact",{
    title:"Form Tambah Data Contact",
    layout: "layouts/main-layout",
  })
})

//proses data contact
app.post("/contact", [
  body('nama').custom((value)=>{
    const duplikat = cekDuplikat(value)
    if (duplikat) {
      throw new Error("nama contact sudah ada");
    }
    return true; 
  }),
  check('email', 'email tidak valid!').isEmail(),
  check('nohp', 'No HP tidak valid!').isMobilePhone('id-ID')
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    // return res.status(400).json({errors:errors.array() })
    res.render("add-contact",{
      title: "form tambah data Contact",
      layout: "layouts/main-layout",
      errors: errors.array()
    })
  }else{
    addContact(req.body);
    //kirim flash message
    req.flash('msg', "Data Contact berhasil ditambahkan")
    res.redirect("/contact")
  }
});


//halaman  detail data contact
app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);  
  res.render("detail", {
    layout: "layouts/main-layout",
    title: "Halaman Detail Contact",
    contact,
  });
});


app.get("/produk",(req,res)=>{
  const products = [
    {"nama":"sepatu",
      "qty": "11",
    },
    {"nama":"sikat gigi",
      "qty": "12",
    },
    {"nama":"pasta gigi",
      "qty": "12",
    }
  ]
  res.render("product",{
    layout: "layouts/main-layout",
    title : "halaman produk",
    products,
  })
})


app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>halaman tidak ditemukan</h1>");
});

app.listen(port, () => {
  console.log(`app listen http://localhost:${port}`);
});
