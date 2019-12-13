// var v;
// window.onload = cargar();

// function cargar()
// {
//     var boton = document.getElementById("btn");
//     console.log(boton);
// }
// window.onload=

// function log()
// {
//     var a = document.getElementById("txtUsr");
//     alert(a.value);
// }

function sumar(num1,num2)
{    
    return num1+num2;
}

function guardarSuma(num1,num2)
{    
    var retorno = sumar(num1,num2);
    <tbody>
    <tr>
        <td>num1</td>
        <td>num2</td>
        <td>retorno</td>
    </tr>                   
</tbody>

    return retorno;
}

function gId(id)
{
    var num1 = document.getElementById(id);
    return num1;
}