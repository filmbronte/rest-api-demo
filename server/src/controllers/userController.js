const router = require('express').Router();
const userService = require('../services/userService');

router.post('/register', async (req, res) => {
	try {
		const { email, password } = req.body;

		await userService.register({ email, password })
		res.json({message: "Registered Successfully"});
	} catch({message}) {
		res.status(400).json({message});
	}
})

module.exports = router;
