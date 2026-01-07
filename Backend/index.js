import express from "express"
const app = express();

app.get('/getuser',(req,res)=>{
    const data = [
    {"id": 1,  "name": "shailesh", "profile": "full stack developer"},
    { "id": 2,  "name": "amit", "profile": "frontend developer" },
  { "id": 3,  "name": "rahul", "profile": "backend developer" },
  { "id": 4,  "name": "priya", "profile": "ui/ux designer" },
  { "id": 5,  "name": "neha", "profile": "react developer" },
  { "id": 6,  "name": "rohit", "profile": "nodejs developer" },
  { "id": 7,  "name": "kiran", "profile": "mern stack developer" },
  { "id": 8,  "name": "sneha", "profile": "software engineer" },
  { "id": 9,  "name": "vikas", "profile": "devops engineer" },
  { "id": 10, "name": "anita", "profile": "product designer" },

  { "id": 11, "name": "arjun", "profile": "java developer" },
  { "id": 12, "name": "pooja", "profile": "angular developer" },
  { "id": 13, "name": "manish", "profile": "python developer" },
  { "id": 14, "name": "ravi", "profile": "data analyst" },
  { "id": 15, "name": "komal", "profile": "qa engineer" },
  { "id": 16, "name": "sachin", "profile": "mobile app developer" },
  { "id": 17, "name": "megha", "profile": "cloud engineer" },
  { "id": 18, "name": "deepak", "profile": "system administrator" },
  { "id": 19, "name": "nisha", "profile": "technical writer" },
  { "id": 20, "name": "harsh", "profile": "blockchain developer" },

  { "id": 21, "name": "ankit", "profile": "web developer" },
  { "id": 22, "name": "sonali", "profile": "seo specialist" },
  { "id": 23, "name": "akash", "profile": "ai engineer" },
  { "id": 24, "name": "payal", "profile": "machine learning engineer" },
  { "id": 25, "name": "suresh", "profile": "database administrator" },
  { "id": 26, "name": "divya", "profile": "business analyst" },
  { "id": 27, "name": "lalit", "profile": "cyber security analyst" },
  { "id": 28, "name": "kavita", "profile": "content strategist" },
  { "id": 29, "name": "mohit", "profile": "game developer" },
  { "id": 30, "name": "ritu", "profile": "technical recruiter" },

];
if(req.query.search){
    let filterData = data.filter((currItem)=>currItem.name.toLowerCase().includes(req.query.search.toLowerCase()))
    res.send(filterData);
    return;
}
setTimeout(()=>{
    res.send(data)

},3000)
})






const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})