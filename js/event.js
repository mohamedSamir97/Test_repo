var products;
if (localStorage.getItem("productsList") == null) 
{
    products =[];    
}
else
{
    products = JSON.parse(localStorage.getItem("productsList"));
    displayData();
}
var clrForm = document.getElementsByClassName("form-control");

function addProduct() 
{
    var ProductName = document.getElementById("ProductNameInp").value;
    var ProductPrice = document.getElementById("ProductPriceInp").value;
    var ProductCategory = document.getElementById("ProductCategoryInp").value;
    var ProductDescription = document.getElementById("ProductDescriptionInp").value;
    var product =
    {
        name: ProductName,
        price: ProductPrice,
        Category: ProductCategory,
        Description: ProductDescription
    }
    if (ProductName == "" || ProductPrice == "" || ProductCategory == "" || ProductDescription == "") 
    {
      window.alert("Fill empty fields")  
    }
    else
    {
    products.push(product);
    localStorage.setItem("productsList",JSON.stringify(products));
    displayData();
    clearForm();
    }   
}

function displayData() 
{
    var temp = "";
    for (i = 0; i < products.length; i++) {
        temp += "<tr><td>" + products[i].name + "</td><td>" + products[i].price + "</td><td>" + products[i].Category + "</td><td>" + products[i].Description + "</td><td><button onclick='deleteProduct("+ i +")' class='btn btn-danger'>delete</button></td></tr>"
    }
    document.getElementById("tableBody").innerHTML = temp;
}

function clearForm()
{
    for (let i = 0; i < clrForm.length; i++) {
        clrForm[i].value = "";   
    }
}

function deleteProduct (index)
{
    products.splice(index,1);
    localStorage.setItem("productsList",JSON.stringify(products));
    displayData();
}