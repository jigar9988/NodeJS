const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/employee", { useNewUrlParser: true })
    .then(() => console.log("connected successfully"))
    .catch((err) => console.log(err));

const playlistSchema = new mongoose.Schema({
    name: String,
    role: String,
    salary: Number,
});

// collection creation 
const Playlist = new mongoose.model("Playlist", playlistSchema);

// create document or insert 

const createDocument = async () => {
    try {
        const Data = new Playlist({
            name: "Jigar Trivedi",
            role: "Full Stack Developer",
            salary: 70000,
        })
        const Data2 = new Playlist({
            name: "Siddarth",
            role: "Python Developer",
            salary: 60000,
        })
        const Data3 = new Playlist({
            name: "Haresh",
            role: "Django Developer",
            salary: 55000,
        })
        const Data4 = new Playlist({
            name: "Anshuman",
            role: "Front-end Developer",
            salary: 50000,
        })
        const Data5 = new Playlist({
            name: "Harsh Patel",
            role: "Android Developer",
            salary: 60000,
        })
        const Data6 = new Playlist({
            name: "Harsh Patel",
            role: "Android Developer",
            salary: 40000,
        })
        const result = await Playlist.insertMany([Data,Data2,Data3,Data4,Data5,Data6]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// createDocument();

// const getDocument =  async () =>{
//     try{
//         const result = await Playlist.find({name :'Harsh Patel'}).select({name:1})
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getDocument()

// comparison operators 

const getDocument =  async () =>{
    try{
        // const result = await Playlist.find({salary:{$gt:50000}})
        // const result = await Playlist.find({role:"Python Developer"})
        // const result = await Playlist.find({$or :[{role:"Python Developer"},{salary:55000}]}) 
        // const result = await Playlist.find({$and :[{role:"Python Developer"},{salary:55000}]}).select({name:1})
        // const result = await Playlist.find({role:"Android Developer"}).countDocuments()
        const result = await Playlist.find({role:"Android Developer"}).sort("salary:1")//1 for acending and -1 for decending
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
getDocument();


