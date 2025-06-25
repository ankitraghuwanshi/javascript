//1.click on input/submit form
//2.fetching data from api call
//3.update the screen with new data

async function fetchData(targetcity) {
  //making the api request

  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=f496c83c49ec40fbae4170845251006&q=${targetcity}&aqi=no`;

    //fetch return promise, and promise handle easily using async/await
    const response = await fetch(url);
    //console.log(response);

    const responseBody = await response.json();
    //console.log(responseBody);

    const temp = responseBody.current.temp_c;
    const locationName = responseBody.location.name;
    const dateAndTime = responseBody.location.localtime;
    const emoji = responseBody.current.condition.icon;
    const conditionName = responseBody.current.condition.text;

    //split date and time from dateAndTime
    const arrayofDateAndTime = dateAndTime.split(" ");
    //so date at 0-index and time at 1-index
    const localDate = arrayofDateAndTime[0];
    const localTime = arrayofDateAndTime[1];

    //convert date format into other format
    const dateJS = new Date(localDate).toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const newDateAndTime = `${localTime} ${dateJS}`;

    updateUI(temp, locationName, newDateAndTime, emoji, conditionName);
  } catch (error) {
    console.log(error);
  }
}
//fetchData("bhopal");

//Event Listener to submit button
const form = document.querySelector("form");
form.addEventListener("submit", handlerSearch);

const searchField = document.querySelector(".searchField");

function handlerSearch(e) {
  //prevent the default behaviour of submit a form i.e. refreshing a page
  e.preventDefault();

  const cityName = searchField.value;
  //console.log(cityName)

  fetchData(cityName);
}

const tempField = document.querySelector(".temp");
const locationNameField = document.querySelector(".time_location p");
const timeField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather_condition img");
const conditionNameField = document.querySelector(".weather_condition span");

function updateUI(temp, locationName, time, emoji, conditionName) {
  tempField.innerText = temp;
  locationNameField.innerText = locationName;
  timeField.innerText = time;
  emojiField.src = emoji;
  conditionNameField.innerText = conditionName;
}