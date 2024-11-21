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
  
        function Editar(index){
  
            ListaContacto.splice(index, 1, { nombre:document.getElementById("nombreEd").value, telefono:document.getElementById("telefonoed").value ,correo: document.getElementById("correoed").value , etiqueta:document.getElementById("inputGroupSelect01ed").value  });
           mostrarLista();
       }
  
       function alertasss(id){
       Swal.fire({
        title: 'Ingrese sus datos',
        html: `
            <input id="nombreEd" class="swal2-input" placeholder="Nombre">
            <input id="telefonoed" class="swal2-input" placeholder="Telefono">
            <input id="correoed" class="swal2-input" placeholder="Correo">
            <div class="input-group mb-3">
                                <label class="input-group-text" for="inputGroupSelect01">Etiqueta</label>
                                <select class="form-select" id="inputGroupSelect01ed">
                                    <option value="Familia">Familia</option>
                                    <option value="Trabajo">Trabajo</option>
                                </select>
                            </div>
        `,
        title: "Quieres Realizar Cambios",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Guardar",
        denyButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
            Editar(id);
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });}
       

      function mostrartabla(){

        return  document.getElementById("flitrador").value;
    
    }
    
    document.getElementById("btn").addEventListener("click" , function(){
    var todo =  document.getElementById("llenar");
    todo.innerHTML ="";
    if(mostrartabla()===""){
    
      ListaContacto.forEach((pers,index)=>{
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
        } )
    
    }else{
       
        var filtroo = ListaContacto.filter(perss =>  perss.nombre === mostrartabla());
        filtroo.forEach((flt) =>{
          const originalIndex = ListaContacto.findIndex(pers => pers.nombre === flt.nombre);
          const filteredIndex = ListaContacto.indexOf(flt);
    todo.innerHTML += `
         <tr>
                    <td>${flt.nombre}</td>
                    <td>${flt.telefono}</td>
                    <td>${flt.correo}</td>
                    <td>${flt.etiqueta}</td>
                    <td>
                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button onclick="Eliminar(${filteredIndex})" id="Eliminar" type="button" class="btn btn-danger">Eliminar</button >
                            <button onclick="alertasss(${originalIndex})" id="Editar" type="button" class="btn btn-warning">Editar</button>
                        </div>
                    </td>
                </tr>
                `;
    
        })
    
    
        
    }})
    
    
    