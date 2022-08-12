import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@mail.com',
      password: bcrypt.hashSync('admin123'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'john@mail.com',
      password: bcrypt.hashSync('john123'),
      isAdmin: true,
    },
    {
      name: 'Joy',
      email: 'joy@mail.com',
      password: bcrypt.hashSync('joy123'),
      isAdmin: false,
    },
    {
      name: 'Angelito Quiambao',
      email: 'angelito.quiambao@tuitt.com',
      password: bcrypt.hashSync('angelito123'),
      isAdmin: false,
    },
  ],

  products: [
    {
      // _id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      image: '/images/p1.jpg',
      price: 10,
      countInStock: 10,
      brand: 'Nike',
      description: 'High quality shirt',
    },
    {
      // _id: '2',
      name: 'Adidas Slim shirt',
      slug: 'adidas-slim-shirt',
      image: '/images/p2.jpg',
      price: 50,
      countInStock: 0,
      brand: 'Adidas',
      description: 'High quality shirt',
    },
    {
      // _id: '3',
      name: 'Fila Slim shirt',
      slug: 'fila-slim-shirt',
      image: '/images/p3.jpg',
      price: 40,
      countInStock: 10,
      brand: 'Fila',
      description: 'High quality shirt',
    },
    {
      // _id: '4',
      name: 'Wranco Body-Fit shirt',
      slug: 'wranco-body-fit-shirt',
      image: '/images/p4.jpg',
      price: 20,
      countInStock: 5,
      brand: 'Wranco',
      description: 'Soft Fabric',
    },
  ],
};

export default data;
