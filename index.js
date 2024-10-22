const adviceData = document.getElementById("advice-data");
const idVal = document.getElementById("id");
const diceContainer = document.querySelector(".dice-container")

let value;
const getApiData = async () => {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        console.log(data);

        adviceData.innerText = `"${data?.slip?.advice}"`;
        idVal.innerText = `#${data?.slip?.id}`
      } catch (error) {
        console.error("Error while fetching advice:", error);
        adviceData.innerText = "Error found"; 
      }
}

diceContainer.addEventListener("click", getApiData);

