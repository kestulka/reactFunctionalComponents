import React from "react";
import styles from "../Styles/DogList.module.css";

// 1 punktas:

// const DogList = () => {
//   const dogs = ["šuo", "cucikas", "Bobikas", "kudlius", "Reksas", "aviganis"];

//   return (
//     <div>
//       {dogs.map((dog, index) => (
//         <div
//           key={index}
//           style={{
//             margin: "10px",
//             padding: "10px",
//             border: "1px solid black",
//             borderRadius: "5px",
//             display: "inline-block",
//           }}
//         >
//           {dog}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DogList;

// 2 punktas:

// const DogList = () => {
//   const dogs = ["šuo", "cucikas", "Bobikas", "kudlius", "Reksas", "aviganis"];

//   // sortinimas nuo ilgiausio iki trumpiausio
//   const sortedDogs = dogs.sort((a, b) => b.length - a.length);

//   return (
//     <div>
//       {sortedDogs.map((dog, index) => (
//         <div key={index} className={styles.circle}>
//           <p className={styles.number}>{index + 1}</p>
//           <p className={styles.name}>{dog}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DogList;

// 3 punktas:

// const DogList = () => {
//   const dogs = ["šuo", "cucikas", "Bobikas", "kudlius", "Reksas", "aviganis"];

//   return (
//     <div>
//       {dogs.map((dog, index) => (
//         <div
//           key={index}
//           className={index % 2 === 0 ? styles.square : styles.circle}
//         >
//           {dog}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DogList;

// 4 punktas:

// const DogList = () => {
//   const dogs = ["šuo", "cucikas", "Bobikas", "kudlius", "Reksas", "aviganis"];

//   const filteredDogs = dogs.filter((dog) => dog[0] !== dog[0].toUpperCase());

//   return (
//     <div>
//       {filteredDogs.map((dog, index) => (
//         <div key={index} className={styles.circle}>
//           {dog}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DogList;

// 5 punktas:

// const DogList = () => {
//   const dogs = ["šuo", "cucikas", "Bobikas", "kudlius", "Reksas", "aviganis"];
//   const dogElements = [];

//   dogs.forEach((dog, index) => {
//     const length = dog.length;
//     const colors = length > 6 ? styles.green : styles.red;

//     dogElements.push(
//       <div key={index} className={`${styles.dog} ${colors}`}>
//         {dog} - ({length} raides)
//       </div>,
//     );
//   });

//   return <div>{dogElements}</div>;
// };

// export default DogList;
