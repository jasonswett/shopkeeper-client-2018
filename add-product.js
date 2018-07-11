(function() {
  var httpRequest;
  document.getElementById('add-product-button').addEventListener('click', addProduct);

  function addProduct() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Cannot create an XMLHTTP instance');
      return false;
    }

    httpRequest.onreadystatechange = addProductSuccess;
    httpRequest.open('POST', 'http://localhost:3000/products');
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify({
      product: {
        name: document.getElementById('product-name').value,
        price: document.getElementById('product-price').value
      }
    }));
  }

  function addProductSuccess() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 201) {
        document.getElementById('content').innerHTML = 'Product saved';
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();
