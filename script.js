var httpRequest;
document.getElementById('product-button').addEventListener('click', makeRequest);

function makeRequest() {
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert('Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', 'http://localhost:3000/products');
  httpRequest.send();
}

function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      document.getElementById('content').innerHTML = httpRequest.responseText;
    } else {
      alert('There was a problem with the request.');
    }
  }
}
