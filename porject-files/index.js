// get elements bt the ID

const container = document.getElementById("root");
const btn = document.getElementById("btn");

// using the dogs API link

// fetching url function url = "https://dog.ceo/api/breeds/image/random"

const fetchDog = async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

// rendering the dog images

const render = async () => {
  const data = await fetchDog();
  // console.log(data);

  container.innerHTML = "";

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("imageContainer");

  const dogImage = document.createElement("img");
  dogImage.src = data.message;

  imgContainer.append(dogImage);
  container.append(imgContainer);
};

btn.addEventListener("click", render);
