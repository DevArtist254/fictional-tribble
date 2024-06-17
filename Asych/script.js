// 'use strict';

// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

// const renderCountry = function (data, className = '') {
//     const html = `
//     <article class="country ${className}">
//         <img class="country__img" src="${data[0].url}" />
//         <div class="country__data">
//             <h3 class="country__name">${data[0].breeds[0].name}</h3>
//             <h4 class="country__region">${data[0].breeds[0].origin}</h4>
//             <p class="country__row"><span>temperament</span>${data[0].breeds[0].temperament}</p>
//             <p class="country__row"><span>description</span>${data[0].breeds[0].description}</p>
//         </div>
//     </article>
//     `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
// }

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentHTML('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(res => {
//         if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);

//         return res.json();
//     }).then(data => {
//         console.log(data);
//         renderCountry(data);
//     })
// }

// btn.addEventListener('click', () =>{
//   const country = 'spain';
//   //live_91ENI3atzlYsRCQuWCUZTK48TE7aAiEcPUgDwjvCiWP0buQtWDFaCO9NlknTuC36
//   const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_91ENI3atzlYsRCQuWCUZTK48TE7aAiEcPUgDwjvCiWP0buQtWDFaCO9NlknTuC36`;
//   getJSON(url);
// })

/////////////////////////////////
//The event loop in practise
// console.log('Test start');

// setTimeout(() => console.log('0 sec timer'), 100);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//     for(let i = 0;i < 100; i++){
//         console.log(res);
//     }
// })

// console.log('Test end');

// const wait = function (sec) {
//     return new Promise(res => setTimeout(res, sec * 1000));
// }

// const createImg = function (imgPath) {
//     return new Promise(function (res, rej) {

//         const img = document.querySelector('.big-img');
//         img.src = imgPath;
        
//         img.addEventListener('load', function () {
//             res(img);
//         })

//         img.addEventListener('error', function () {
//             img.alt = 'Image not found';
//             rej(new Error('Image not found'));
//         })
//     })
// }

// let currentImg;

// createImg('./img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('I loaded an img');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImg('./img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg.style.display = 'block';
//     currentImg = img;
//     console.log('I loaded an img 2');
//     return wait(2);
//   });

////////////////////////////////////////////////////////////////
//Returning val from async fn

// const getPosition = function () {
//     return new Promise(function (res, rej) {
//         navigator.geolocation.getCurrentPosition(res, rej);
//     })
// }

// const whereAmI = async function () {
//     try {
//       //Get geo location
//       const pos = await getPosition();
//       const { latitude: lat, longitude: lng } = pos.coords;

//       // Reverse geocoding
//       const resGeo = await fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json`
//       );
//       if (!resGeo.ok) throw new Error('Problem getting location data');

//     } catch (err) {
//         console.error(`${err} 💥`);
//         renderError(`💥 ${err.message}`);     
//     }
// }