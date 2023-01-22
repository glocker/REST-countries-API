// Get country name
const url = document.location.href;
const params = (new URL(url)).searchParams;
const countryName = params.get("name");

document.createElement(<div>${countryName}</div>);

console.log(countryName)