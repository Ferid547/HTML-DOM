const cardData = [
{ price: "23 000 $", name: "Toyota Camry", about: "2020, 2.5 L, 41 000 km", time: "Bakı, 03.09.2023 23:39", img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F08%2F18%2F15%2F29%2F15%2F6e2bb20b-13e4-48b2-99a3-ba850adaa397%2F33273_xKN4gew6jGagSFFVYANR-w.jpg"},
{ price: "49 800 AZN", name: "Jetour X70 PLUS", about: "2023, 1.6 L, 0 km", time: "Bakı, 28.08.2023 13:04", img: "https://turbo.azstatic.com/uploads/f660x496/2023%2F08%2F28%2F12%2F56%2F20%2F87d08e59-fbdd-4bb3-919f-b3b7f66811e8%2F91794_lzOevYeVQMNVdI422DJGCQ.jpg" },
{ price: "14 600 AZN", name: "Nissan Tiida", about: "2012, 1.5 L, 39 000 km", time: "Bakı, Dünən 19:08", img:"https://turbo.azstatic.com/uploads/f460x343/2023%2F07%2F26%2F16%2F31%2F00%2F407d72d1-e0a9-4354-a362-23768d8ac78e%2F35496_cQgvyvqLL8AZ9a1YKn313A.jpg" },
{ price: "74 900 $", name: "BMW X5", about: "2021, 2.0 L, 31 000 km", time: "Bakı, 06.09.2023 13:52", img:"https://turbo.azstatic.com/uploads/f660x496/2023%2F09%2F05%2F13%2F01%2F38%2Ffaa0dd18-69a6-4ab0-991e-d5f63a0a9b65%2F88066_AW-lg-ReBluDb_IalhTFtw.jpg" },
{ price: "39 900 $", name: "Mercedes C 200", about: "2020, 2.0 L, 53 000 km", time: "Bakı, Dünən 09:19", img: "https://turbo.azstatic.com/uploads/f660x496/2023%2F06%2F29%2F20%2F29%2F40%2Fce667561-9d36-4abe-944a-7746b04d1e0d%2F60351_4HLGmkRVlnGl7BlUvXgrsQ.jpg"},
{ price: "13 200 AZN", name: "Nissan Note", about: "2012, 1.5 L, 52 000 km", time: "Bakı, Dünən 19:29", img:"https://turbo.azstatic.com/uploads/f660x496/2023%2F08%2F03%2F16%2F40%2F22%2Ffb97f2fe-f713-454c-be47-bc96b182fcb2%2F35466_t1LNGOYMof8hlVANIn9hcQ.jpg" },
{ price: "12 500 AZN", name: "Nissan Micra", about: "2013, 1.2 L, 41 230 km", time: "Bakı, Dünən 14:04", img:"https://turbo.azstatic.com/uploads/f660x496/2023%2F04%2F18%2F17%2F05%2F19%2Fd2b38c7f-9cae-4863-bd0c-a50b296a8e70%2F52072_DJnXskGYLdPW571ed8ieEA.jpg"},
{ price: "83 500 €", name: "Audi Q8", about: "2022, 3.0 L, 0 km", time: "Bakı, 28.08.2023 14:15", img:"https://turbo.azstatic.com/uploads/f660x496/2022%2F06%2F23%2F10%2F46%2F43%2Ff9b52ce5-3b02-4148-bcb1-28096ccd03ec%2F56651_ZufAHoYnYpoyWv7iN4TJcQ.jpg" },
{ price: "26 000 AZN", name: "Kia Mohave", about: "2011, 3.8 L, 241 000 km", time: "Bakı, 30.08.2023 12:54", img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F07%2F01%2F21%2F29%2F06%2Fb60c1a29-8192-4360-805d-8d90dca7d7df%2F99078_aw_fxqb0Z55DFbaQoH6Qlg.jpg" },
{ price: "42 000 $", name: "Audi Q7", about: "2015, 3.0 L, 80 000 km", time: "Bakı, 05.09.2023 18:07", img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F06%2F03%2F10%2F06%2F14%2F2149deb2-01e4-4e71-adb9-e84371a83020%2F21053_dqaXwfv8eKWb_XYiCSOGdg.jpg" },
{ price: "55 000 $", name: "Land Rover RR Sport", about: "2015, 5.0 L, 76 000 km", time: "Bakı, Dünən 22:49", img:"https://turbo.azstatic.com/uploads/f460x343/2023%2F08%2F26%2F11%2F28%2F10%2Fd8429263-aedb-4b83-8b17-264e7287ef24%2F88070_deEH2DTy9V0psVu0dOEJRw.jpg" },
{ price: "32 500 AZN", name: "Hyundai Santa Fe", about: "2013, 2.0 L, 149 000 km", time: "Bakı, 25.08.2023 14:22", img:"https://turbo.azstatic.com/uploads/f460x343/2023%2F02%2F02%2F11%2F48%2F29%2F4c7c442a-6cb4-4a2f-be71-d60f7f6cd59f%2F9741_VAzbQw0EClOmU-0QDtKnKw.jpg" },
];

const postContaniner = document.querySelector(".card-container");
const postMethods = ()=> {
    cardData.map((postData)=>{
        const postElement = document.createElement("div");
        postElement.classList.add("card");
        postElement.innerHTML +=`<i class="fa-regular fa-heart"></i>`
        postElement.innerHTML +=`<img class="img" src="${postData.img}">`;
        postElement.innerHTML +=`<h3 class="card-price">${postData.price}</h3>`
        postElement.innerHTML +=`<p class="card-name">${postData.name}</p>`;
        postElement.innerHTML +=`<p class="card-name">${postData.about}</p>`;
        postElement.innerHTML +=`<p class="card-time">${postData.time}</p>`;
        postContaniner.appendChild(postElement);
    })
}
postMethods()
