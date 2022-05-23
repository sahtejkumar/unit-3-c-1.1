var getData = JSON.parse(localStorage.getItem("pumadetails"));
display(getData)
function display(getData) {
    getData.forEach(function (ele, index) {
        
        var div = document.createElement("div");
         
        var img = document.createElement("img");
        img.setAttribute("src", ele.image)
        img.setAttribute("id", "image");

        var type = document.createElement("h2");
        type.innerText = ele.type;

        var price = document.createElement("h3");
        price.innerText = "price : " + ele.price;

        var desc = document.createElement("p");
        desc.innerText = ele.desc;

        var remove = document.createElement("button");
        remove.innerText = "Remove"
        remove.addEventListener("click", function () {
            forDelete(ele,index)
        })

        div.append(img, type, price, desc, remove)
        document.querySelector("#all_products").append(div)
    })
}
function forDelete(ele, index) {
    getData.splice(index, 1);
    localStorage.setItem("pumadetails", JSON.stringify(getData));
    window.location.reload()
}