function guardarDatos()
{
    console.log("guardando");

    var nombre = document.getElementById("name");
    var apellido = document.getElementById("lastName");

    if(appellido==""||nombre=="")
    {
        document.getElementById("name").className="error";
        document.getElementById("lastName").className="error";

        alert("debe ingresar los datos solicitados");
        return;
    }

    var fila = "<tr><td>"+nombre.value+"</td><td>"+apellido.value+"</td><td><a href=''>Borrar</td></tr>";

    document.getElementById("tabla").innerHTML += fila;
}

function Borrar(e)
{
    e.preventDefault();
    var tagA = e.target;
    tagA.innerHTML="otra cosa";
    console.log(e.target);
    console.log(e.target.parentNode);
    console.log(e.target.parentNode.parentNode);
    e.target.parentNode.parentNode.innerHTML="";
    alert("se borro una persona");
}


// if(confirm("seguro?"))
// {
//     document.getElementById("name")
//     document.getElementById("lastName")
// }



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

// function sumar(num1,num2)
// {    
//     return num1+num2;
// }

// function guardarSuma(num1,num2)
// {    
//     var retorno = sumar(num1,num2);
//     <tbody>
//     <tr>
//         <td>num1</td>
//         <td>num2</td>
//         <td>retorno</td>
//     </tr>                   
// </tbody>

//     return retorno;
// }

// function gId(id)
// {
//     var num1 = document.getElementById(id);
//     return num1;
// }