const api = "https://api.wheretheiss.at/v1/satellites/25544";
async function getiss() {
  const responce = await fetch(api);
  console.log(responce);
  var data = await responce.json();
  const { latitude, longitude } = data;
  console.log(data);
  console.log(latitude);
  console.log(longitude);
  document.getElementById("latitude").innerHTML = latitude;
  document.getElementById("longitude").innerHTML = longitude;
}
getiss();
