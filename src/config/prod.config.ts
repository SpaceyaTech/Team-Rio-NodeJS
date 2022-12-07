export default {
	db: {
		uri: process.env.DB_URI,
	},
	auth: {
		jwt: {
			secret: process.env.JWT_SECRET,
			atExpires: parseInt(process.env.JWT_AT_EXPIRES), // expires after 30 seconds
			rtExpires: parseInt(process.env.JWT_RT_EXPIRES), // expires after a day
		},
		admin: {
			firstName: process.env.ADMIN_FIRST_NAME,
			lastName: process.env.ADMIN_LAST_NAME,
			email: process.env.ADMIN_EMAIL,
			phone: process.env.ADMIN_PHONE,
			password: process.env.ADMIN_PASSWORD,
		},
	},
};
