let url = "https://hp-api.herokuapp.com/api/characters";
let response = fetch(url);
response
  .then((v) => {
    return v.json();
  })
  .then((data) => {
    //console.log(data);
    ihtml = "";
    for (item = 0; item < 28; item++) {
      console.log(data[item]);

      if (item == 22) {
        data[22].image =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgYi8rv-FtuPlsQZHNTqqQw1WODkrry8x1OA&s";
      }
      if (item == 27) {
        data[27].image =
          "data:image/jpeg;base64,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";
      } else if (item == 24) {
        continue;
      } else {
      }
    //   console.log(data[item]);
    //   ihtml += ` <div class="card" style="width: 23rem; margin: 4px;">
    //       <img src="${data[item].image}" class="card-img-top" style="height: 300px;" alt="..." />
    //       <div class="card-body text-center">  <!-- Center text -->
    //         <h5 class="card-title">${data[item].name}</h5>
    //         <div class="d-flex justify-content-center">  <!-- Center button -->
    //           <button class="btn btn-primary" onclick="openModal('${data[item].image}', '${data[item].name}', '${data[item].house}', '${data[item].gender}', '${data[item].dateOfBirth}', '${data[item].eyeColour}', '${data[item].hairColour}', '${data[item].actor}'  )">Go somewhere</button>
    //         </div>
    //       </div>
    //     </div>`;

        ihtml += `
        <div class="col-md-4 col-sm-6 mb-4"> <!-- Responsive Column -->
            <div class="card">
                <img src="${data[item].image}" class="card-img-top" alt="${data[item].name}" style="height: 300px;" />
                <div class="card-body text-center">
                    <h5 class="card-title">${data[item].name}</h5>
                    <button class="btn btn-primary" onclick="openModal('${data[item].image}', '${data[item].name}', '${data[item].house}', '${data[item].gender}', '${data[item].dateOfBirth}', '${data[item].eyeColour}', '${data[item].hairColour}', '${data[item].actor}')">View Details</button>
                </div>
            </div>
        </div>`;
      cardContainer.innerHTML = ihtml;
    }
  });

// Function to open the modal and populate it
function openModal(
  image,
  name,
  house,
  gender,
  dateOfBirth,
  eyeColour,
  hairColour,
  actor
) {
  document.getElementById("modalImage").src = image;
  document.getElementById("modalName").textContent = name;
  document.getElementById(
    "modalDescription"
  ).innerHTML = ` Original Name:- ${actor} <br> Gender:- ${gender} <br> Date of Birth:- ${dateOfBirth} <br> Eye Colour:- ${eyeColour} <br> Hair colour:- ${hairColour} <br> House:- ${house} <br>`;
  // Open the modal using Bootstrap's modal method
  let modal = new bootstrap.Modal(document.getElementById("characterModal"));
  modal.show();
}
