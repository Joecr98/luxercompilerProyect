/* eslint-disable*/
// https://regexr.com/ url para probar las expresiones regulares
export const tokensRegex = {
    PL_SQL: { // PL/SQL                       
      delimitador: {
        regex: /^(\(|\)|\[|\]|;|,)$/g,
        tokenNombre: "Delimitador",          
      },
      variable: {
        regex: /^([a-zA-Z_]{1}[a-zA-Z0-9_]*)$/g, 
        tokenNombre: "Variable",
      },
      variable_objeto: {
        regex: /^([a-zA-Z_]{1}[a-zA-Z0-9_]*[.])+([a-zA-Z_]{1}[a-zA-Z0-9_]*){1}$/g,
        tokenNombre: "Variable Objeto",
      },
      numero: {
        regex: /^([0-9]*|(([0-9]{1}[0-9]*[.])+([0-9]{1}[0-9]*)){1})$/g,
        tokenNombre: "Número",
      },
      cadena: {
        regex: /^(["'])(?:[^\1\\]|\\.)*?\1*/g,
        tokenNombre: "Cadena",
      },
      expresionAsignacion: {
        regex: /^(:=)$/g,
        tokenNombre: "Operador de Asignación",
      },
      expresionAritmeticas: {
        regex: /^(\+|-|\*{1,2}|\/|\%)$/g,
        tokenNombre: "Operador Aritmético",
      },
      expresionesLogicos: {
        regex: /^(["AND"]|["OR"]|["NOT"]|["||"])$/g,
        tokenNombre: "Operador Lógico",
      },
      expresionesRelacionales: {
        regex: /^(={2}|\|{1,2}|\&{1,2}|>=|<=)|^(>|<|<>)$/g,
        tokenNombre: "Operador Relacional",
      },
    },
    T_SQL: { // T-SQL 
      delimitador: {
        regex: /^(\(|\)|\[|\]|;|,|.)$/g,
        tokenNombre: "Delimitador",
      },
      variable: {
        regex: /^([a-zA-Z_]{1}[a-zA-Z0-9_]*)$/g,
        tokenNombre: "Variable",
      },
      variable_objeto: {
        regex: /^([a-zA-Z_]{1}[a-zA-Z0-9_]*[.])+([a-zA-Z_]{1}[a-zA-Z0-9_]*){1}$/g,
        tokenNombre: "Variable Objeto",
      },
      numero: {
        regex: /^([0-9]*|(([0-9]{1}[0-9]*[.])+([0-9]{1}[0-9]*)){1})$/g,
        tokenNombre: "Número",
      },
      Texto: {
        regex: /^(["'])(?:[^\1\\]|\\.)*?\1*/g,
        tokenNombre: "Texto",
      },
      expresionAsignacion: {
        regex: /^(=)$/g,
        tokenNombre: "Operador de Asignación",
      },
      expresionesAritCombinados: {
        regex: /^(\+|-|\*{1,2}|\/|&|[|]|\%)=$/g,
        tokenNombre: "Operador Aritmético Combinado",
      },
      expresionAritmeticas: {
        regex: /^(\+|-|\*{1,2}|\/|\%)$/g,
        tokenNombre: "Operador Aritmético",
      },
      expresionesLogicos: {
        regex: /^(["AND"]|["OR"]|["NOT"]|["ALL"]|["ANY"]|["BETWEEN"]|["EXISTS"]|["IN"]|["LIKE"]|["SOME"])$/g,
        tokenNombre: "Operador Lógico",
      },
      expresionesRelacionales: {
        regex: /^(\|{1,2}|\&{1,2}|>=|<=)|^(>|<|<>|!|!>|!<|!=)$/g,
        tokenNombre: "Operador Relacional",
      },
    }, 
    CMASMAS: { // C++
      delimitador: {
        regex: /^(\(|\)|\{|\}|\[|\]|<<|>>|;|,)$/g, //Si ponemos text.find lo reconoce como cadena?
        tokenNombre: "Delimitador",
      },
      variable: {
        regex: /^([a-zA-Z_]{1}[a-zA-Z0-9_]*)$/g,
        tokenNombre: "Variable",
      },
      variable_objeto: {
        regex: /^([a-zA-Z_]{1}[a-zA-Z0-9_]*[.])+([a-zA-Z_]{1}[a-zA-Z0-9_]*){1}$/g,
        tokenNombre: "Variable Objeto",
      },
      numero: {
        regex: /^([0-9]*|(([0-9]{1}[0-9]*[.])+([0-9]{1}[0-9]*)){1})$/g,
        tokenNombre: "Número",
      },
      libreria: {
        regex: /^([#]|[<]|[>])(?:[^\1\\]|\\.)*?\1*/g,
        tokenNombre: "Librería",
      },
      cadena: {
        regex: /^(["'])(?:[^\1\\]|\\.)*?\1*/g,
        tokenNombre: "Cadena",
      },
      expresionAsignacion: {
        regex: /^(=|(\+|-|\*{1,2}|\/|\%)=)$/g,
        tokenNombre: "Asignación",
      },
      expresionesAritCombinados: {
        regex: /^(\+|-|\*{1,2}|\/|&|[|]|<<|>>|\%)=$/g,
        tokenNombre: "Operador Aritmético Combinado",
      },
      expresionesAritmeticas: {
        regex: /^(\+|-|\*{1,2}|\/|\%)$/g,
        tokenNombre: "Operador Aritmético",
      },
      expresionesIncrementales: {
        regex: /^(([a-zA-Z_]{1}[a-zA-Z0-9_]*)(([+]{2}|[-]{2})|[+|-][1-9][0-9]*))/g,
        tokenNombre: "Aumento/Decremento",
      },
      expresionLogicos: {
        regex: /^([=]{2}|![=]{1}|\|{1,2}|\&{1,2}|>=|<=|!)|^(>|<)$/g,
        tokenNombre: "Operador Logico",
      },     
      expresionesRelacionales: {
        regex: /^(={2}|\|{1,2}|\&{1,2}|>=|<=)|^(>|<|!=)$/g,
        tokenNombre: "Operador Relacional",
      },
    },
    PASCAL: { // PASCAL
      delimitador: {
        regex: /^(\(|\)|\{|\}|\[|\]|;|,|.)$/g,
        tokenNombre: "Delimitador",
      },
      numero: {
        regex: /^([0-9]*|(([0-9]{1}[0-9]*[.])+([0-9]{1}[0-9]*)){1})$/g,
        tokenNombre: "Número",
      },
      cadena: {
        regex: /^(["'])(?:[^\1\\]|\\.)*?\1*/g,
        tokenNombre: "Cadena",
      },
      variable: {
        regex: /^([a-zA-Z_]{1}[a-zA-Z0-9_]*)$/g,
        tokenNombre: "Variable",
      },
      variable_objeto: {
        regex: /^([a-zA-Z_]{1}[a-zA-Z0-9_]*[.])+([a-zA-Z_]{1}[a-zA-Z0-9_]*){1}$/g,
        tokenNombre: "Variable Objeto",
      },
      expresionAsignacion: {
        regex: /^(:=)$/g,
        tokenNombre: "Operador de Asignación",
      },
      expresionesAritmeticas: {
        regex: /^(\+|-|\*|\/|\%)$/g,
        tokenNombre: "Operador Aritmético",
      },
      expresionesLogicos: {
        regex: /^(["AND"]|["OR"])$/g,
        tokenNombre: "Operador Lógico",
      },
      expresionesRelacionales: {
        regex: /^(=|\|{1,2}|\&{1,2}|>=|<=)|^(>|<|<>)$/g,
        tokenNombre: "Operador Relacional",
      },      
    },
    JAVASCRIPT: { //JAVASCRIPT
      delimitador: {
        regex: /^(\(|\)|\{|\}|\[|\]|;|,|\.)$/g,
        tokenNombre: "Delimitador",
      },
      numero: {
        regex: /^([0-9]*|(([0-9]{1}[0-9]*[.])+([0-9]{1}[0-9]*)){1})$/g,
        tokenNombre: "Número",
      },
      cadena: {
        regex: /^(["'])(?:[^\1\\]|\\.)*?\1*/g,
        tokenNombre: "Cadena",
      },
      variable: {
        regex: /^([a-zA-Z_]{1}[a-zA-Z0-9_]*)$/g,
        tokenNombre: "Variable",
      },
      variable_objeto: {
        regex: /^([a-zA-Z_]{1}[a-zA-Z0-9_]*[.])+([a-zA-Z_]{1}[a-zA-Z0-9_]*){1}$/g,
        tokenNombre: "Variable Objeto",
      },
      expresionAsignacion: {
        regex: /^={1}$/g,
        tokenNombre: "Operador de Asignación",
      },
      expresionesAritCombinados: {
        regex: /^(\+|-|\*{1,2}|\/|\%)=$/g,
        tokenNombre: "Operador Aritmético Combinado",
      },
      expresionAritmeticas: {
        regex: /^(\+|-|\*{1,2}|\/|\%)$/g,
        tokenNombre: "Operador Aritmético",
      },
      expresionesIncrementales: {
        regex: /^(([a-zA-Z_]{1}[a-zA-Z0-9_]*)(([+]{2}|[-]{2})|[+|-][1-9][0-9]*))/g,
        tokenNombre: "Aumento/Decremento",
      },
      expresionesLogicos: {
        regex: /^([||]{2}|&&)$/g,
        tokenNombre: "Operador Lógico",
      },
      expresionesRelacionales: {
        regex: /^([=]{2,3}|![=]{1,2}|\|{1,2}|\&{1,2}|>=|<=|!)|^(>|<)$/g,
        tokenNombre: "Operador Relacional",
      },
      funcionFlecha: {
        regex: /(=>)/g,
        tokenNombre: "Operador Funcion",
      },
      // funcionFlecha: {
      //   regex: /([a-zA-Z_]{1}[a-zA-Z0-9_])*(\s=\s)\((([a-zA-Z_]{1}[a-zA-Z0-9_,])*[a-zA-Z_]{1}[a-zA-Z0-9_]*)*\)\s=>/g,
      //   tokenNombre: "Función Flecha",
      // },
      // funcion: {
      //   regex: /([a-zA-Z_]{1}[a-zA-Z0-9_])*\((([a-zA-Z_]{1}[a-zA-Z0-9_,])*[a-zA-Z_]{1}[a-zA-Z0-9_]*)*\)(;){0,1}$/g,
      //   tokenNombre: "Función",
      // },
      // funcionObjeto: {
      //   regex: /([a-zA-Z_]{1}[a-zA-Z0-9_])\(((\+)*([a-zA-Z_]{1}[a-zA-Z0-9_.])*[a-zA-Z_]{1}[a-zA-Z0-9_]*)*\)(;){0,1}$/g,
      //   tokenNombre: "Función",
      // },
      // funcionNumero: {
      //   regex: /([a-zA-Z_]{1}[a-zA-Z0-9_])\((([0-9,])*[0-9])*\)(;){0,1}$/g,
      //   tokenNombre: "Función",
      // },    
    },
    HTML: { //HTML
      etiqueta: {
        regex: /^<\\??(?!p).+?>$/g,
        tokenNombre: "Etiqueta",
      },
      numero: {
        regex: /^([0-9]*|(([0-9]{1}[0-9]*[.])+([0-9]{1}[0-9]*)){1})$/g,
        tokenNombre: "Número",
      },
      cadena: {
        regex: /^[a-zA-Z]*/g,
        tokenNombre: "Texto",
      },
      //cadena: {
       //regex: /^([])(?:[^\1\\]|\\.)*?\1*/g,
        //tokenNombre: "Cadena",
      //},
      expresionAsignacion: {
        regex: /^(=)$/g,
        tokenNombre: "Operador de Asignación",
      },
      expresionAritmeticas: {
        regex: /^(\+|-|\*{1,2}|\/|\%)$/g,
        tokenNombre: "Operador Aritmético",
      },
      expresionesIncrementales: {
        regex: /^(([a-zA-Z_]{1}[a-zA-Z0-9_]*)(([+]{2}|[-]{2})|[+|-][1-9][0-9]*))/g,
        tokenNombre: "Aumento/Decremento",
      },
      expresionesLogicos: {
        regex: /^([||]{2}|&&)$/g,
        tokenNombre: "Operador Lógico",
      },
      expresionesRelacionales: {
        regex: /^([=]{2,3}|![=]{1,2}|\|{1,2}|\&{1,2}|>=|<=|!)|^(>|<)$/g,
        tokenNombre: "Operador Relacional",
      },
    },
  };
  