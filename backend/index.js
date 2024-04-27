const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Proxy endpoint
app.get('/api', async (req, res) => {
    try {
        // Forward the request to the Pexels API
        const response = await axios.get('https://api.pexels.com/v1/search', {
            headers: {
                'Authorization': '5q2xUWFPpBpAvvwCWTA07Yt5D93TVe9ehF7Wq9MyKZeTCGeAtUqWDgLO' // Replace with your actual API key
            },
            params: req.query // Pass query parameters from the client to the Pexels API
        });

        // Return the response from the Pexels API to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error.response.data);
        res.status(error.response.status).send(error.response.statusText);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
