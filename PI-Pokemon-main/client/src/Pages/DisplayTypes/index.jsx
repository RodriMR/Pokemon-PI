// import { getTypes } from "../../redux/actions";
// import "./style.css";
// import React, { useEffect, useState } from "react";
// import { useStore } from "../../context/store";
// import Card from "../../components/Pokemon";

// const TypesList = () => {
//   const [type1, setType1] = useState("");
//   const [type2, setType2] = useState("");
//   const [state, dispatch] = useStore();
//   useEffect(() => {
//     getTypes(dispatch);
//   }, []);
//   return (
//     <>
//       <div className="materializate">
//         <label>Type:1</label>
//         <select>
//           {state.types?.map((type) => (
//             <option
//               value={type.name}
//               key={type.id}
//               id={type.id}
//               onClick={() => setType1(type.name)}
//             >
//               {type.name}
//             </option>
//           ))}
//         </select>
//         <label>Type:2</label>
//         <select>
//           {state.types?.map((type) => (
//             <option
//               value={type.name}
//               key={type.id}
//               id={type.id}
//               onClick={() => setType2(type.name)}
//             >
//               {type.name}
//             </option>
//           ))}
//           <option value={null} onClick={() => setType2(null)}>
//             Todos
//           </option>
//         </select>

//         {state.pokemons.map((pokemon) => {
//           if (pokemon.slot1 === type1 && pokemon.slot2 === type2 ) {
//             return (
//               <Card
//                 key={pokemon.id}
//                 name={pokemon.name}
//                 img={pokemon.img}
//                 type1={pokemon.slot1}
//                 type2={pokemon.slot2}
//                 id={pokemon.idApi}
//               />
//             );
//           }
//         })}
//       </div>
//     </>
//   );
// };

// export default TypesList;
