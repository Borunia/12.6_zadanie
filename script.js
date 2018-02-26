var url = "https://restcountries.eu/rest/v1/name/";
var countriesList = $("#countries");

$("#search").click(searchCountries);

function searchCountries() {
    var countryName = $("#country-name").val();
    if (!countryName.length) countryName = "Poland";

  
    
    $.ajax({
        url: url + countryName,
        method: "GET",
        success: showCountriesList
    })
    .fail(function(){
    	countriesList.empty();
    	$('#countries').text('Country doesn\'t\ exist. Please try again.');   
	});
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
        $('<li>')
        .append($('<h3>').text(item.name))
        .append($('<p>').text('Capital city: ' + item.capital))
        .append($('<p>').text('Region: ' + item.region))
        .appendTo(countriesList);
    
});
}


