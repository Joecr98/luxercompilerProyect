export function evaluarTokens(texto, jsonRegex, palabras_reservadas, check) {
    let texto_ = texto.replaceAll(/^\n/g, " ");
    texto_ = texto_.replaceAll(";", " ; ");
    texto_ = texto_.replaceAll("{", " { ");
    texto_ = texto_.replaceAll("}", " } "); 
    texto_ = texto_.replaceAll("[", " [ ");
    texto_ = texto_.replaceAll("]", " ] ");
    texto_ = texto_.replaceAll("(", " ( ");
    texto_ = texto_.replaceAll(")", " ) ");
    texto_ = texto_.replaceAll(",", " , ");
    texto_ = texto_.replaceAll(" .", " . ");
    texto_ = texto_.replaceAll('"', ' " ');
    texto_ = texto_.replaceAll('"', "$%&");
    texto_ = texto_.replaceAll("'", " ' ");
    texto_ = texto_.replaceAll("'", "$%*");
    
    if(check === "HTML"){    
    texto_ = texto_.replaceAll(">", "> ");
    texto_ = texto_.replaceAll("<", " <");
    };
    const arreglo = arreglarCadenas(texto_.split(/[\s ]+/)); 
    return validarTokens(jsonRegex, arreglo, palabras_reservadas);
  }
  
  
  export function validarTokens(jsonRegex, array, palabras_reservadas) {
    let resultado = [];
    let estado = false;
    if (jsonRegex && array) {
      array.map((palabra) => {
        if (palabra) {
          estado = false;
          Object.keys(jsonRegex).map((key) => {
            const is = palabra.match(jsonRegex[key].regex);
            if (is) {
              if (is[0] !== "") {
                const tipo =
                  key === "variable" &&
                  verificarReservada(palabra, palabras_reservadas);
                estado = true;
                resultado.push({
                  toKn_: palabra,
                  tipo: tipo || jsonRegex[key].tokenNombre,
                });
              }
            }
            return true;
          });
          if (!estado) {
            resultado.push({ toKn_: palabra, tipo: "No reconocido" });
          }
        }
        return true;
      });
    }
    return resultado;
  }
  
  export function verificarReservada(palabra, jsonRegex) {
    let palabra_ = null;
    if (jsonRegex) {
      Object.keys(jsonRegex).map((key) => {
        const is = palabra === jsonRegex[key];
        if (is) {
          if (is[0] !== "") {
            palabra_ = "Palabra reservada";
          }
        }
        return true;
      });
    }
    return palabra_;
  }
  
  export function arreglarCadenas(arrayTexto = []) {
    let auxString = "";
    let bandera = false;
    let bandera2 = false;
    let arreglo = [];
    let bol = false;
  
    for (let i = 0; i < arrayTexto.length; i++) {
      const palabra = arrayTexto[i];
      bol =
        (palabra.substring(0, 1) === "$%&" ||
          palabra.substring(0, 1) === "$%*") &&
        (palabra.substring(palabra.length - 1, palabra.length) === "$%&" ||
          palabra.substring(palabra.length - 1, palabra.length) === "$%*");
  
      if (
        (palabra.includes("$%&") ||
          palabra === "$%&" ||
          palabra.includes("$%*") ||
          palabra === "$%*") &&
        !bol
      ) {
        bandera = !bandera;
        auxString += palabra + " ";
        let aux = "";
        if (!bandera && auxString !== "") {
          const simpleComia = auxString.includes("$%*");
          if (simpleComia) {
            aux = auxString.replaceAll("$%*", "'");
            aux = aux.replaceAll(" '", "'");
            aux = aux.replaceAll("' ", "'");
          } else {
            aux = auxString.replaceAll("$%&", '"');
            aux = aux.replaceAll(' "', '"');
            aux = aux.replaceAll('" ', '"');
          }
          arreglo.push(aux.replaceAll(" , ", ", "));
          bandera2 = !bandera2;
          auxString = "";
          bol = false;
        }
      } else if (bandera) {
        auxString += palabra + " ";
        bol = false;
      }
  
      if (
        !bandera &&
        !bandera2 &&
        (!palabra.includes("$%&") || !palabra.includes("$%*"))
      ) {
        arreglo.push(palabra);
      } else {
        bandera2 = !bandera2;
      }
    }
    if (bandera && auxString !== "") {
      arreglo.push(auxString.replaceAll(" , ", ", "));
    }
    return arreglo;
  }