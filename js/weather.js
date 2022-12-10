let params = new URLSearchParams({
    access_key: '91b6218204eadc204ee9b3d799e5fad4',
    query: 'Cairo',
    units: 'm'

})



// async function fetchPosts() {
//     try {
//         const response = await fetch(`http://api.weatherstack.com/current?${params}`);
//         if (!response.ok) {
//             throw new Error(`Failed to fetch posts: ${response.status}`)
//         }
//         return response.json();
//     } catch (e) {
//         console.log(e);
//     }
// }
// fetch_data('http://api.weatherstack.com/current', params, "", async (res) => {
//     const body = await res.json();
//     // $('.test').html(`<span>${body.current.temperature}</span>`)
//     console.log(body);

// }, (res) => {
//     throw new Error(`Failed to fetch posts: ${res.status}`)
// });
// async function fetch_data(url, params, data, success_callback, failur_callback) {
//     console.log(params);
//     const response = await fetch(url + '?' + params);
//     if (response.status == 200 || response.status == 201 || response.ok) {
//         success_callback(response);
//     }
//     else {
//         failur_callback(response);
//     }
// }


// $.ajax({
//     url: 'https://api.weatherstack.com/current',
//     data: {
//       access_key: '91b6218204eadc204ee9b3d799e5fad4',
//       query: 'Cairo'
//     },
//     dataType: 'json',
//     success: function(apiResponse) {
//       console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
//     }
//   });

