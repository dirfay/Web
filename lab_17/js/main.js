document.addEventListener('DOMContentLoaded', function() {
    const countrySelect = document.getElementById('country');
    const citySelect = document.getElementById('cities');
    const output = document.querySelector('p');

    const citiesByCountry = {
        ger: ['Berlin', 'Munich', 'Hamburg'],
        usa: ['New-York', 'Los Angeles', 'Chicago'],
        ukr: ['Kyiv', 'Lviv', 'Odessa']
    };

    countrySelect.addEventListener('change', function() {
        const selectedCountry = countrySelect.value;
        const cities = citiesByCountry[selectedCountry] || [];
        
        citySelect.innerHTML = '';
        
        cities.forEach(function(city) {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });

        updateOutput();
    });

    citySelect.addEventListener('change', updateOutput);

    function updateOutput() {
        const selectedCountryText = countrySelect.options[countrySelect.selectedIndex].text;
        const selectedCityText = citySelect.value;
        output.textContent = ` ${selectedCountryText}, ${selectedCityText}`;
    }

    countrySelect.dispatchEvent(new Event('change'));
});