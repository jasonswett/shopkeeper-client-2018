(function() {
  var httpRequest;
  document.getElementById('load-product-list-button').addEventListener('click', loadProductList);

  function loadProductList() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = loadProductListSuccess;
    httpRequest.open('GET', 'http://localhost:3000/products');
    httpRequest.send();
  }

  function loadProductListSuccess() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        document.getElementById('product-list-container').innerHTML = httpRequest.responseText;
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();
