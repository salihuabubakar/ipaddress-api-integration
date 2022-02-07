// setTimeout(() => {}, 2000)

async function getIpAddress(ipAddress) {
      // const ipAddress = "41.190.14.147";
      const apiKey = "a3383d8e620cb26f5129f2fb1cea2edf";
      const response = await fetch("https://api.ipstack.com/" + ipAddress + "?access_key=" + apiKey );
      const data = await response.json();
      console.log(data);
      const { type, city, continent_name, country_name, zip, location } = data;

      document.querySelector(".country").innerHTML = "IP Adress in " + country_name + " <span><img class='country-flag' src=" + location.country_flag + " alt='country flag'></span>";
      document.querySelector(".country").classList.remove("skeleton-loading");

      document.querySelector(".ip").innerHTML = ipAddress + "<span class='ip-type'> type: " + type + "</span>";
      document.querySelector(".ip").classList.remove("skeleton-loading");

      document.querySelector(".zip").innerHTML = "Zip code: " + zip;
      document.querySelector(".zip").classList.remove("skeleton-loading");

      document.querySelector(".continent").innerHTML = "Continent: " + continent_name;
      document.querySelector(".continent").classList.remove("skeleton-loading");

      document.querySelector(".city").innerHTML = "City: " + city;
      document.querySelector(".city").classList.remove("skeleton-loading");

      document.querySelector(".capital").innerHTML = "Capital City: " + location.capital;
      document.querySelector(".capital").classList.remove("skeleton-loading");

      document.querySelector(".call-code").innerHTML = "Call code: " + location.calling_code;
      document.querySelector(".call-code").classList.remove("skeleton-loading");

      const {code, name, native} = data.location.languages[0];
      document.querySelector(".code").innerHTML = "Language code: " + code;
      document.querySelector(".code").classList.remove("skeleton-loading");

      document.querySelector(".name").innerHTML = "Language name: " + name;
      document.querySelector(".name").classList.remove("skeleton-loading");

      document.querySelector(".native").innerHTML = "Native Language: " + native;
      document.querySelector(".native").classList.remove("skeleton-loading");
  }


  function search () {
    getIpAddress(document.querySelector(".search-bar").value).catch((err) => {
      console.error(err)
    })
  }

  document.querySelector(".search-bar").addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
      search();
    }
  }) 

  document.querySelector(".search button").addEventListener("click", function () {
    search();
});
