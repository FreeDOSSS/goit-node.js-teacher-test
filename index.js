const app = require('./src/app');
const connectMongo = require('./src/utils/mongo');

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on ${process.env.PORT}`);
    connectMongo();
})
