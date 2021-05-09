// export function validarSinInformacion(json, word) {
//     if (json) {
//       const rgxFecha = /^\d{4}([-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])T/;
//       Object.keys(json).map((key) => {
//         //Evalua si el atributo de json es otro json/{} si es asi hace una funcion recursiva.
//         if(typeof json[key] === 'object') validarSinInformacion(json[key]);
//         // Remplaza nulls a sin informacion
//         if (!json[key]) json[key] = SIN_INFORMACION;
//         // En caso de no ser null pero si poseer espacios lo cambia por sin informacion.
//         if (typeof json[key] === "string") {
//           const aux = json[key].replace(/\s/g, "");
//           if (!aux) json[key] = SIN_INFORMACION;
//         }
//         //se evalua tambien si es una cadena de tipo fecha para darle formato
//         const isDate = Boolean(String(json[key]).match(rgxFecha));
//         if (isDate) {
//           json[key] = formatearFechaUTC(json[key], "DD/MM/YYYY HH:mm");
//         }
//         return true;
//       });
//     }
//     return json;
//   }