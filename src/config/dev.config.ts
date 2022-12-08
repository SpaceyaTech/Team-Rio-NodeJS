export default {
  db: {
    uri: process.env.DB_URI,
  },
  auth: {
    jwt: {
      secret: '6gJi7^e941VD^m^q7SFBCOv&ZIxHL*94fvDO',
      atExpires: 60 * 60 * 1, // expires after 30 seconds
      rtExpires: 60 * 60 * 24 * 1, // expires after a day
    },
    admin: {
      firstName: 'Ernest',
      lastName: 'Wambua',
      email: 'admin@spaceyatech.com',
      phone: '+254719286396',
      password: 'eEs0O3DBdjWl',
    },
  },
};
