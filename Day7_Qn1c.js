var xhr = new XMLHttpRequest();

xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.send();

xhr.onload = function() 
{
    if (xhr.status>= 200 && xhr.status<300) 
    {
        var countryData = JSON.parse(xhr.response);
        // console.log(countryData)
        countryData.forEach(function (countryData){
            console.log(` 
            Country Name: ${countryData.name},
            Country Capital: ${countryData.capital},
            Country Flag: ${countryData.flag} `)
        })
    }
};
