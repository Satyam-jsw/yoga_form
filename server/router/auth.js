// auth.js
const express = require('express');
const User = require('../model/userSchema');
const router = express.Router();


require('../db/conn');

// router.get('/', (req, res) => {
//     res.send('hello from auth.js file');
// });

router.post('/enroll', async (req, res) => {
    const { name, phone, age, fee, selectedBatch, gender } = req.body;
    

    if (!name || !phone || !age || !selectedBatch || !gender || !fee) {
        return res.status(422).json({ error: 'Please fill in all fields.' });
    }
    else if (age < 18 || age > 65) {
        return res.status(422).json({ error: 'Age must be between 18 and 65.' });
    }
    else if (fee > 500 || fee < 500) {
        return res.status(422).json({ error: 'Fill 500rs only' });
    }
    else if (phone.length != 10) {
        return res.status(422).json({ error: 'Fill Correct Phone Number' });
    }

    try {
        const userExit =await User.findOne({ phone });
        const date = new Date();
        if (userExit) {
    
            if (date <= userExit.subscriptionEnd) {
                return res.status(422).json({ error: 'Already enrolled for the current month.' });
            }
            else {
                const nextmonth= new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
                
                const p=await User.findOneAndUpdate({ _id: userExit._id }, {$set:{subscriptionStart: date,subscriptionEnd: nextmonth,age,selectedBatch}});

                res.status(201).json({ message: 'Enrollment Updated' });
            }
        }
        else {
         
            const user = new User({
                name,
                phone,
                age,
                fee,
                gender,
                selectedBatch: selectedBatch,
            });

            const enrolledForCurrentMonth = user.enrollmentStatus;

            user.enrollmentStatus = true;

            user.subscriptionStart = date;
            user.subscriptionEnd = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
            

            await user.save();
            res.status(201).json({ message: 'Enrollment Successful' });
            
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
