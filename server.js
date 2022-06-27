import app from "./dist/js/app.js";

const port = process.env.PORT || 3000;



app.listen(port, () => {
    console.log(`server listening in http://localhost:${port}`)
})

