function showMessage() {
    console.log('Test script loaded successfully');
    alert('Hello from test.js');
  }
  
  // Expose the function to the global scope
  window.showMessage = showMessage;
  