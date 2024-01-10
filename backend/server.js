import  express  from "express";

const app = express()

app.get('/', (req,res) => {
    res.send("Server is ready")
})

const port = process.env.PORT || 3000;

app.get('/jokes', (req,res) => {
    const jokes = [
        {
            id: 1,
            title: 'This is joke 1',
            content: 'Nice',
        },
        {
            id: 2,
            title:'This is joke 2',
            content: 'Funny',
        },
        {
            id: 3,
            title:'This is joke 3',
            content: 'Good',
        },
        {
            id: 4,
            title:'This is joke 4',
            content: 'Amazing',
        }
    ]
    res.send(jokes)
})

app.listen(port, () => {
    console.log(`Serve at http://localhost: ${port} `)
    }
);