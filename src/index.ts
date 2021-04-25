import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import { createConnection } from 'typeorm'

import userRoutes from './routes/user.routes'
import customerRoutes from './routes/customer.routes'
import itemRoutes from './routes/item.routes'
import dataRoutes from './routes/data.routes'

var corsOption = {
    // origin: "*"
    // origin: "http://localhost:3000"
    origin: "http://localhost:2426"
    // origin: "http://host.docker.internal:2426"
}

const port = 8080;

const app = express();
// createConnection();

createConnection().then(async connection => {

    // Middlewares
    app.use(cors(corsOption));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(morgan('dev'));

    // routes
    app.use(userRoutes);
    app.use(customerRoutes);
    app.use(itemRoutes);
    app.use(dataRoutes);

    app.listen(port, () => {
        console.log('Server started on port', port);
    });

})

// // Middlewares
// app.use(cors(corsOption));
// app.use(express.json());
// app.use(morgan('dev'));

// // routes
// app.use(userRoutes);
// app.use(customerRoutes);

// app.listen(port,()=>{
//     console.log('Server started on port', port);
// });