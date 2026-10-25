function traducir_a_morse(texto)
{
    let resultado = '';
    let output = '';
    let palabras = [];
    let  morse = false;

    const codigoA = {
        "a": ". _",
        "b": "_ . . .",
        "c": "_ . _ .",
        "d": "_ . .",
        "e": ".",
        "f": ". . _ .",
        "g": "_ _ .",
        "h": ". . . .",
        "i": ". .",
        "j": ". _ _ _",
        "k": "_ . _",
        "l": ". _ . .",
        "m": "_ _",
        "n": "_ .",
        "o": "_ _ _",
        "p": ". _ _ .",
        "q": "_ _ . _",
        "r": ". _ .",
        "s": ". . .",
        "t": "_",
        "u": ". . _ _",
        "v": ". . . _",
        "w": ". _ _",
        "x": "_ . . _",
        "y": "_ . _ _",
        "z": "_ _ . .",
        "1": ". _ _ _ _",
        "2": ". . _ _ _",
        "3": ". . . _ _",
        "4": ". . . . _",
        "5": ". . . . .",
        "6": "_ . . . .",
        "7": "_ _ . . .",
        "8": "_ _ _ . .",
        "9": "_ _ _ _ .",
        "0": "_ _ _ _ _",
    }

    const codigoB = {
    ". _": "a",
    "_ . . .": "b",
    "_ . _ .": "c",
    "_ . .": "d",
    ".": "e",
    ". . _ .": "f",
    "_ _ .": "g",
    ". . . .": "h",
    ". .": "i",
    ". _ _ _": "j",
    "_ . _": "k",
    ". _ . .": "l",
    "_ _": "m",
    "_ .": "n",
    "_ _ _": "o",
    ". _ _ .": "p",
    "_ _ . _": "q",
    ". _ .": "r",
    ". . .": "s",
    "_": "t",
    ". . _ _": "u",
    ". . . _": "v",
    ". _ _": "w",
    "_ . . _": "x",
    "_ . _ _": "y",
    "_ _ . .": "z",
    ". _ _ _ _": "1",
    ". . _ _ _": "2",
    ". . . _ _": "3",
    ". . . . _": "4",
    ". . . . .": "5",
    "_ . . . .": "6",
    "_ _ . . .": "7",
    "_ _ _ . .": "8",
    "_ _ _ _ .": "9",
    "_ _ _ _ _": "0",
}

    if(/^[_. /]+$/i.test(texto)) //https://www.geeksforgeeks.org/dsa/write-regular-expressions/
    {
        morse = true;
        //console.log("ES morse");
        palabras = texto.split('/');
    }else
    {
        morse = false;
        //console.log("NO es morse");
        output = texto.split('');
    }

    if(morse)
    {
        for(let i=0; i<palabras.length; i++)
        {
            output = palabras[i].split('  ');
            for(let j=0; j<output.length; j++)
            {
                resultado+= codigoB[output[j]];
            }
            if(i < palabras.length)
            {
                resultado += " ";
            }
        }
    }else
    {
        for(let i=0; i<output.length; i++)
        {
            if(/^[a-z0-9]+$/i.test(output[i]))
            {
                let letraMinus = output[i].toLowerCase();
                //console.log(letraMinus);
                resultado += codigoA[letraMinus];
                //console.log(codigo[letraMinus]);
            }else if(output[i] == " ")
            {
                resultado += "/";
            }else
            {
                //resultado += output[i];
            }

            if(i + 1 != output.length)
            {
                if(output[i + 1] != " " && output[i] != " ")
                {
                    resultado += "  ";
                }
            }
        }
    }
    return resultado;
}

//console.log("(imprime)" + traducir_a_morse("¡Hola mundo!"));
//console.log(window.prompt("El texto que escribas se traducirá a Morse:"));
let input = window.prompt("El texto que escribas se traducirá a Morse:");
document.getElementById("texto").textContent = input;
document.getElementById("traduccion").textContent = traducir_a_morse(input);
//console.log("Texto introducido: " + input);
//console.log(traducir_a_morse(input));
//window.prompt("Esot es una prueba:");
//console.log("La consola funciona");
//la booleana es true si es de morse a texto natural, false si es de texto natural a morse