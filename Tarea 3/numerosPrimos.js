let numPrimos = [1];

document.getElementById("formulario").addEventListener("submit", function(event)
{
    event.preventDefault();

    let numero = document.getElementById("numero").value;
    numero = parseInt(numero);
    let primo = true;
    numPrimos = [1];

    for(let j=2; j<=numero; j++)
    {
        primo = true;
        if(j < 2)
        {
            primo = false;
            break;
        }else
        {
            for(let i=2; i<j; i++)
            {
                let res = j % i;
                if(res == 0)
                {
                    primo = false;
                    break;
                }
            }
        }
        if(primo)
        {
            numPrimos.push(j);
        }
    }
    
    //document.getElementById("resultado").innerHTML = numPrimos;
    tableCreate();
});

function tableCreate()
{
    const resultado = document.getElementById("resultado");
    const tbl = document.createElement('table');
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';

    const tr = tbl.insertRow();

    for (let i = 0; i < numPrimos.length; i++)
    {
        const td = tr.insertCell();

        td.appendChild(document.createTextNode(numPrimos[i]));
        td.style.border = '1px solid black';
    }
    resultado.appendChild(tbl);
}

//https://stackoverflow.com/questions/14643617/create-table-using-javascript