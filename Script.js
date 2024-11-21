function Persona(nombre, telefono, correo, etiqueta) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.correo = correo;
    this.etiqueta = etiqueta;
  }
  
  let ListaContacto = [];

  function GuardarPersona() {
    ListaContacto.push(new Persona(
  
        document.getElementById("Nombre").value,
        document.getElementById("Telefono").value,
        document.getElementById("Correo").value,
        document.getElementById("inputGroupSelect01").value
    ));
    mostrarLista();
  }
  
  function mostrarLista() {
    var todo = document.getElementById("llenar");
    todo.innerHTML = "";
    ListaContacto.forEach((pers,index)=> {
        todo.innerHTML += `
         <tr>
                    <td>${pers.nombre}</td>
                    <td>${pers.telefono}</td>
                    <td>${pers.correo}</td>
                    <td>${pers.etiqueta}</td>
                    <td>
                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button onclick="Eliminar(${index})" id="Eliminar" type="button" class="btn btn-danger">Eliminar</button >
                            <button onclick="alertasss(${index})" id="Editar" type="button" class="btn btn-warning">Editar</button>
                        </div>
                    </td>
                </tr>
                `;
            });
           
        }
        function Eliminar(index){
            ListaContacto.splice(index, 1);
            mostrarLista();
        }
  
      