const Contact = require('../models/Contact');

exports.submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    res.status(200).json({ message: 'Message received successfully.' });
  } catch (error) {
    console.error('Error submitting contact:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};
