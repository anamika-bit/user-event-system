const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const cors = require('cors')
const app = express();

dotenv.config()

app.use(express.json());

//Import Routes
const eventsRoute = require('./Routes/events');
const viewsRoute = require('./Routes/views');
const userRoutes = require('./Routes/userRoutes')

// Handling CORS errors
app.use(cors({ credentials: true, origin: true}))

//Routes
app.get('/', (req,res)=>{
    res.send('Event System');
});

app.use('/events',eventsRoute);
app.use('/view',viewsRoute);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000

const startServer = async (PORT) => {
    await connectDB()

    console.log(PORT, ()=> console.log(`Server started on http://localhost:${PORT}`))
}

startServer(PORT);
app.listen(PORT);