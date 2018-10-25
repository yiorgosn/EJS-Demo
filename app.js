var express = require("express");
var app = express();
app.use(express.static("public"));  // This tells express to use the 'public' dir as well default dir is just 'views'
app.set("view engine", "ejs");  // Here we tell it to expect the files to be ejs and not bother with home.ejs
// ALWAYS INCLUDE THE ABOVE

app.get("/", function(req, res){
    res.render("home");
})

app.get("/fellinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?", author: "Colt"},
        ];
    res.render("posts", {posts_inside: posts})
});

// "/repeat/:word/:num" => "word word word ... " num times
app.get("/repeat/:word/:num", function(req, res){
    var word = req.params.word;
    var num = parseInt(req.params.num);
    var new_string = "";
    for (var i = 0; i < num; i++){
        new_string = new_string  + " " + word ;
    }
    res.send(new_string);
});

// ALWAYS INCLUDE THE BELOW
// Catch everything else that the application was not exepcting
app.get("*", function(req, res){
    res.send("Sorry page not found!... What are you doing with your life?");
});

// Tell express to listen for requests on PORT and IP
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening!");
});
