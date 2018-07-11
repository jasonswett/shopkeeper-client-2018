(function() {
  var httpRequest;
  document.getElementById('get-products-button').addEventListener('click', getProducts);

  function getProducts() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Cannot create an XMLHTTP instance');
      return false;
    }

    httpRequest.onreadystatechange = getProductsSuccess;
    httpRequest.open('GET', 'http://localhost:3000/products');
    httpRequest.send();
  }

  function getProductsSuccess() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        document.getElementById('content').innerHTML = httpRequest.responseText;
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();
