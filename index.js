const express = require('express');
const app = express();
const PORT = 3000;
const Create_User = require("./Model/User_Details")



// Parsing request body
app.use(express.json());




// Creating User
app.post("/Create_User", async (req, res, next) => {

    try {
        const result = await Create_User.create({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Emp_Id: req.body.Emp_Id,
            Email: req.body.Email,
            Password: req.body.Password,
            Profile_Img: req.body.Profile_Img,
            Role: req.body.Role,
            CreatedOn: req.body.CreatedOn,
            IsActive: req.body.IsActive

        })
        res.send(result)
    } catch (er) {
        next(er)
    }


})





// Error handler
app.use((err, req, res, next) => {


    if (req.timedout) {
        // Handle the timeout error
        res.status(408).send('Request timeout');
    } else {
        res.status(err.status || 500);
        res.send({
            error: {
                success: false,
                status: err.status || 500,
                message: err.message
            }
        })
    }

})



app.listen(PORT, (error) => {
    if (error) {
        console.log("error occured");
    }
}
)
