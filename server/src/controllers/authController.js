const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const validation = require('express-validator')
const registerController = async (req, res) => {
	const errors = validation.validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({
			status: "fail",
			"data": errors.array()[0]
		})
	}
	const { firstName, lastName, email, password } = req.body;
	const oldUser = await User.findOne({ email: email })
	if (oldUser) {
		return res.status(400).json(
			{
				status: "success",
				data: {
					title: "cannot use that email"
				}
			}
		)
	}
	const user = new User({
		firstName,
		lastName,
		email,
		password
	})
	await user.save()
	token = 'Bearer ' + await jwt.sign({ firstName: user.firstName, id: user._id }, "bla bla", { expiresIn: '1d' })
	return res.status(201).json(
		{
			status: "success",
			data: {
				token
			}
		}
	)
}

const loginController = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email: email });
	if (!user) {
		return res.status(404).json(
			{
				"status": "fail",
				"data": { "title": "User Not Found" }
			}
		)
	}
	const result = await user.matchPassword(password)
	if (!result) {
		return res.status(400).json(
			{
				"status": "fail",
				"data": { "title": "Wrong password" }
			}
		)
	}
	token = 'Bearer ' + await jwt.sign({ firstName: user.firstName, id: user._id }, "bla bla", { expiresIn: '1d' })
	return res.status(200).json(
		{
			status: "success",
			data: {
				token
			}
		}
	)
}

module.exports = {
	registerController,
	loginController
}
