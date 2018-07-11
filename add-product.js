(function() {
  var httpRequest;
  document.getElementById('add-product-button').addEventListener('click', addProduct);

  function addProduct() {
    httpRequest = new XMLHttpRequest();
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
        alert('Product saved');
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();
