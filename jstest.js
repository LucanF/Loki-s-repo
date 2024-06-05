async function sendPostRequests(url, numRequests, requestData) {
    for (let i = 0; i < numRequests; i++) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json' // Adjust if needed
          },
          body: JSON.stringify(requestData)
        });
  
        if (response.ok) {
          console.log(`Request ${i + 1}: Success`);
          // Optionally handle the response data here
          // const data = await response.json();
        } else {
          console.error(`Request ${i + 1}: Error ${response.status}`);
        }
      } catch (error) {
        console.error(`Request ${i + 1}: Network Error`, error);
      }
  
      // Introduce a delay to prevent overloading the server
      await new Promise(resolve => setTimeout(resolve, 100)); // 100ms delay
    }
  }
  
  // Example usage:
  const targetUrl = 'https://your-api-endpoint.com/data';
  const numRequestsToSend = 100;
  const postData = { /* Your request data */ };
  
  sendPostRequests(targetUrl, numRequestsToSend, postData);