/**
 * NSFW Image Detector API - Basic Usage Example
 *
 * This example demonstrates the basic usage of the NSFW Image Detector API.
 * API Documentation: https://docs.apiverve.com/ref/nsfwimagedetector
 */

const API_KEY = process.env.APIVERVE_API_KEY || 'YOUR_API_KEY_HERE';
const API_URL = 'https://api.apiverve.com/v1/nsfwimagedetector';

/**
 * Make a POST request to the NSFW Image Detector API
 */
async function callNSFWImageDetectorAPI() {
  try {
    // Request body
    const requestBody &#x3D; {
    &quot;image&quot;: &quot;https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Camponotus_flavomarginatus_ant.jpg/640px-Camponotus_flavomarginatus_ant.jpg&quot;
};

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Check API response status
    if (data.status === 'ok') {
      console.log('✓ Success!');
      console.log('Response data:', data.data);
      return data.data;
    } else {
      console.error('✗ API Error:', data.error || 'Unknown error');
      return null;
    }

  } catch (error) {
    console.error('✗ Request failed:', error.message);
    return null;
  }
}

// Run the example
callNSFWImageDetectorAPI()
  .then(result => {
    if (result) {
      console.log('\n📊 Final Result:');
      console.log(JSON.stringify(result, null, 2));
    }
  });
