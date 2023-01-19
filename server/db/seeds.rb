# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
User.create(
  [
    {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@doe.fr',
      password: 'password',
    }
    }
  ]
)
Friend.create([
  {
    name: 'Anna Smith',
    phone: 754_135_546,
    twitter: '@AnnaSmith',
    email: 'contact@anna-smith.com',
    location: 'New York, USA'
  },
  {
    name: 'Bob Johnson',
    phone: 754_135_547,
    twitter: '@BobJohnson',
    email: 'contact@bob-johnson.com',
    location: 'Toronto, Canada'
  },
  {
    name: 'Caroline Williams',
    phone: 754_135_548,
    twitter: '@CarolineWilliams',
    email: 'contact@caroline-williams.com',
    location: 'London, UK'
  },
  {
    name: 'David Brown',
    phone: 754_135_549,
    twitter: '@DavidBrown',
    email: 'contact@david-brown.com',
    location: 'Berlin, Germany'
  },
  {
    name: 'Elizabeth Thompson',
    phone: 754_135_550,
    twitter: '@ElizabethThompson',
    email: 'contact@elizabeth-thompson.com',
    location: 'Sydney, Australia'
  },
  {
    name: 'Frank Davis',
    phone: 754_135_551,
    twitter: '@FrankDavis',
    email: 'contact@frank-davis.com',
    location: 'Beijing, China'
  },
  {
    name: 'Grace Taylor',
    phone: 754_135_552,
    twitter: '@GraceTaylor',
    email: 'contact@grace-taylor.com',
    location: 'Tokyo, Japan'
  },
  {
    name: 'Henry Moore',
    phone: 754_135_553,
    twitter: '@HenryMoore',
    email: 'contact@henry-moore.com',
    location: 'Mumbai, India'
  },
  {
    name: 'Isabella Anderson',
    phone: 754_135_554,
    twitter: '@IsabellaAnderson',
    email: 'contact@isabella-anderson.com',
    location: 'Cairo, Egypt'
  },
  {
    name: 'James Smith',
    phone: 754_135_555,
    twitter: '@JamesSmith',
    email: 'contact@james-smith.com',
    location: 'Johannesburg, South Africa'
  },
  {
    name: 'Kate Williams',
    phone: 754_135_556,
    twitter: '@KateWilliams',
    email: 'contact@kate-williams.com',
    location: 'Rio de Janeiro, Brazil'
  },
  {
    name: 'Laura Johnson',
    phone: 754_135_557,
    twitter: '@LauraJohnson',
    email: 'contact@laura-johnson.com',
    location: 'Mexico City, Mexico'
  },
  {
    name: 'Michael Brown',
    phone: 754_135_558,
    twitter: '@MichaelBrown',
    email: 'contact@michael-brown.com',
    location: 'Santiago, Chile'
  },
  {
    name: 'Natalie Davis',
    phone: 754_135_559,
    twitter: '@NatalieDavis',
    email: 'contact@natalie-davis.com',
    location: 'Lima, Peru'
  }
]
             )
