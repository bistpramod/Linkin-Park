const http = require('http');

// Make a simple GET request
http.get('http://example.com', (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];
  
  console.log(`Status Code: ${statusCode}`);
  console.log(`Content-Type: ${contentType}`);
  
  let error;
  if (statusCode !== 200) {
    error = new Error(`Request Failed. Status Code: ${statusCode}`);
  } else if (!/^text\/html/.test(contentType)) {
    error = new Error(`Invalid content-type. Expected text/html but received ${contentType}`);
  }
  
  if (error) {
    console.error(error.message);
    // Consume response data to free up memory
    res.resume();
    return;
  }
  
  res.setEncoding('utf8');
  let rawData = '';
  
  // Collect response data as it arrives
  res.on('data', (chunk) => { rawData += chunk; });
  
  // Process the complete response
  res.on('end', () => {
    try {
      console.log(`Response length: ${rawData.length} characters`);
      console.log('First 100 characters:');
      console.log(rawData.substring(0, 100) + '...');
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});