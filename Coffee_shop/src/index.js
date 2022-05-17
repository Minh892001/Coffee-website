const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const ehs = require('express-handlebars-sections')
const app = express()
const port = 3000

const db = require('./config/db')

db.connect();

//khong can go file index vi mac dinh tu nap
const route = require('./routes')

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { 
    // secure: true
  }
}))

app.use(bodyParser.urlencoded({ extended: true }))

app.use(async function(req, res, next) {
  if(req.session.isAuthenticated === null) {
    req.session.isAuthenticated = false
  }

  res.locals.lcIsAuthenticated = req.session.isAuthenticated
  res.locals.lcAuthUser = req.session.authUser
  next()
})

app.use(methodOverride('_method'))

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))

app.engine('hbs', handlebars.engine({
  extname: 'hbs',
  helpers: {
    section: ehs(),
    sum: (a, b) => a + b,
    ConvertTime: (a) => {
      var date = new Date(a)
      var d = date.getDate();
      var m = date.getMonth() + 1;
      var y = date.getFullYear();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var dt = d + "-" + m + "-" + y + " " + hour + ":" + minute;
      return dt;
    },
    Total: (a, b) => {
      var temp1 = new Number(a)
      var temp2 = new Number(b)
      return Math.round(temp1 * temp2 * 100) / 100
    } ,
    checkSuccess: (a) => {
      if(a == 'Your order has been successfully placed')
        return true
      else
        return false
    },
    toUpper: (a) => {
      var result = a.charAt(0).toUpperCase()
      for(let i = 1; i < a.length; i++) {
        if(a.charAt(i) === ' ') {
          result += a.charAt(i) + a.charAt(i+1).toUpperCase()
          i++
        }else {
          result += a.charAt(i).toLowerCase()
        }
      }
      return result
    },
    getName: (a) => {
      var arrayString = a.split(" ")
      return arrayString[arrayString.length-1]
    }
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
