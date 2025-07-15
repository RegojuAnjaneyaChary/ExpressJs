const express = require("express");
// console.log(express)
const app = express();
app.use(express.json()) // use: is a built in middleware
app.use(express.urlencoded())

//get
app.get("/", (req, res) => {
    res.send("iam default api");
});

//post
app.post("/", (req, res) => {
    res.json({ method: "POST", apiName: "/" });
})
//put
app.put("/", (req, res) => {
    res.status(400).send("iam put api");
});
// patch
app.patch("/", (req, res) => {
    res.json({ endpoint: "iam patch api" });
});
//delete
app.delete("/", (req, res) => {
    res.status(204).send("iam deleting");
})
//

app.get("/books/:id", (req, res) => {
    console.log(req.params);
    const params = req.params;
    console.log(params.id);
    res.send("books" +params.id);
});

// in path params using using params

app.get('/books/:id/:id', (req, res) => {
    console.log(req.query);
    res.json(req.params);
    // console.log( res.json(req.params))
});

//
app.get('/books/:id/:name', (req, res) => {
    res.json(req.params);
    
});

//
app.post('/addbook', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.json({message: "book created successfully",
         data:req.body,
         params:req.query
          })
})


//query params
app.get("/filterbook", (req, res) => {
    console.log(req.query); // get data from query parameter
    res.json({
        message: "iam filter book",
        // query: req.query
        name: req.query.name,
        price: req.query.price
        // type: req.query.type 1hour
    });
});

//



app.listen(8000, () => console.log("server started on port 8000"));