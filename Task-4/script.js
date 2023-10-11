var res = fetch("https://jsonplaceholder.typicode.com/users");
res.then((data)=>data.json()).then((data2)=>func(data2))

var container = document.createElement("div");
container.className = "container-md";
var row = document.createElement("div");
row.className = "row";
container.append(row);

function func(data2){
    for(var i=0;i<data2.length;i++){
       row.innerHTML += `
       <div class="cardscol col-md-3">
       <div class="card">
  <div class="card-body">
    <p class="card-text"><b>Name: ${data2[i].name}</b></p>
    <p class="card-text">Email: ${data2[i].email}</p>
    <p class="card-text">Street: ${data2[i].address.street}<p>
    <p class="card-text">City: ${data2[i].address.city}</p>
  </div>
</div>`


    }
    document.body.append(container);
}