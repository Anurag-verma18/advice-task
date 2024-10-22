
const getApiData = async () => {
    const data = await fetch("https://api.adviceslip.com");
    const result = await data.json();
    console.log(result);
}

getApiData();

const adviceData = document.getElementById("advice-data");

