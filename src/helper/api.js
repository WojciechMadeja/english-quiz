// export default function getData() {
//     fetch('data.json'
//     ,{
//       headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     }
//     )
//       .then(function(response){
//         return response.json();
//       })
//       .then(function(myJson) {
//         console.log(myJson.object);
//         return (myJson.object);
//       });
//   }

// import axios from 'axios'

// export default function getData() {
//   (async ()=> {
//     try {
//         const result = await axios.get('data.json');
//           console.log(result.data.object);
  
//     } catch (error) {
//         console.log(error);
//     }
//   })();

// } 