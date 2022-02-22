var xhr = new XMLHttpRequest();

xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.send();

xhr.onload = function() 
{
    if (xhr.status>= 200 && xhr.status<300) 
    {
        var countryData = JSON.parse(xhr.response);
        // console.log(countryData);
        let countryUSD = countryData.filter((countryData)=>
        {
            if(countryData.currencies[0].code ==='USD'){
            console.log(countryData.name);
            }
        })
    }
}
