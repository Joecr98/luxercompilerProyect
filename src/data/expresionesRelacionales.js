export const expresionesRelacionales = {
    PL_SQL:{ // PL/SQL  
        
        igual: {
            operador: "==",
            nombreOp: "Igualdad"
        },
        distintoDe: "<>",
        menor: "<",
        mayor: ">",
        menorIgual: "<=",
        mayorIgual: ">=",

    },
    T_SQL:{ // T-SQL        
        diferente: "!=",
        menor: "<",
        mayor: ">",
        menorIgual: "<=",
        mayorIgual: ">=",
        notEqual: "<>",
        negacion: "!",
        notLess: "!<" ,
        notGreater: "!>",

    },
    CMASMAS:{ // C++
        
        igual: {
            operador: "==",
            nombreOp: "Igualdad"
        },

        diferente: "!=",
        menor: "<",
        mayor: ">",
        menorIgual: "<=",
        mayorIgual: ">=",

    },
    PASCAL:{ // PASCAL

        igual: {
            operador: "=",
            nombreOp: "Igualdad"
        },

        mayorQue: "<>",
        menor: "<",
        mayor: ">",
        menorIgual: "<=",
        mayorIgual: ">=",
        

    },
    JAVASCRIPT:{ // JAVASCRIPT

        igual: {
            operador: "==",
            nombreOp: "Igualdad"
        },
        igualType:{
            operador: "===",
            nombreOp: "Igualdad estricta"
        },

        diferente: "!=",
        diferenteType: "!==",
        menor: "<",
        mayor: ">",
        menorIgual: "<=",
        mayorIgual: ">=",
        negacion: "!",
        
    },
    HTML:{ // HTML

        igual: {
            operador: "==",
            nombreOp: "Igualdad"
        },
        igualType:{
            operador: "===",
            nombreOp: "Igualdad estricta"
        },
        diferente: "!=",
        menor: "<",
        mayor: ">",
        menorIgual: "<=",
        mayorIgual: ">=",
        
    }
}