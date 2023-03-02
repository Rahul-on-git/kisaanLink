const express = require('express');
const router = express.Router();

const farmerController = require('../Controllers/farmer');

router.post('/login', farmerController.login);