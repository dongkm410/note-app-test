// export default function Hello({ name, age }) {
//   return (
//     <div>
//       <h1>
//         Welcome {name}({age})
//       </h1>
//     </div>
//   );
// }

export default function Hello(props) {
  console.log(props);
  console.log(props.name);
  console.log(props.age);

  return (
    <div>
      <h1>
        Welcome {props.name} / {props.age}
      </h1>
    </div>
  );
}
