const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User')
passport.use(new GoogleStrategy({
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	callbackURL: "/auth/google/callback"
},
	async function (accessToken, refreshToken, profile, cb) {
		const currentUser = await User.findOne({googleId: profile.id})
		if (!currentUser){
			const newUser = new User({
				firstName: profile.name.givenName,
				lastName: profile.name.familyName,
				email:profile.emails[0].value || "",
				profilePic:profile.photos[0].value || "",
				googleId: profile.id
			})
			await newUser.save()
			return cb(null, newUser)
		}
		cb(null, currentUser)
	}
));