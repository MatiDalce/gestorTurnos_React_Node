const jwt = require('jsonwebtoken');

const signInController = {
  log: async (req, res) => {
    try {
      const user = { password: "contraseña123" }; // Example user object

      if (user) {
        const password = user.password;
        const papaya = { papaya: "papaya" };

        const isMatch = req.body.password === password;
        if (isMatch) {
          const token = generateJwtToken(papaya); // Generate JWT token

          return res.json({ token: token }); // Return the token in the response
        }
      }

      return res.send("no");
    } catch (err) {
      res.status(400).json({ errors: 'Server error' });
    }
  },
};

function generateJwtToken(papaya) {
  const secretKey = 'your_secret_key'; // Replace with your own secret key

  const payload = {
    id: 3,
    username: "Ariel"
    // Add any additional user information as needed
  };

  const token = jwt.sign(payload, secretKey);

  return token;
}

module.exports = signInController;
