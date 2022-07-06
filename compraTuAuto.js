window.addEventListener('load',()=>{
    class auto{
        constructor(marca, modelo, ano, KM, precio, img){
            this.marca = marca;
            this.modelo = modelo;
            this.ano = ano;
            this.KM = KM;
            this.precio = precio;
            this.img = img;
        }
    }
    
    const autos = [];
    autos.push(new auto("Renault", "Sander 1.6 Privilege", 2015, 82000, 2000000));
    autos.push(new auto("Ford", "Focus III 2.0 Sedan SE Plus Mt", 2016, 95474, 2890000));
    autos.push(new auto("Ford", "Ecosport 1.5 Titanium 123cv", 2018,  53386, 4070000));
    autos.push(new auto("Ford", "Ecosport 1.5 Se 123cv", 2015, 82000, 3740000));
    autos.push(new auto("Volskwagen", "Up 1.0 High Up! 75cv", 2018, 60895, 60895));
    autos.push(new auto("Ford", "Focus III 1.6 S", 2016, 3.471, 2870000));
    autos.push(new auto("Peugeot", "308 1.6 Allure", 2015, 82000, 2000000));
    autos.push(new auto("Jeep", "Renegade 1.8 Lomgitude At6", 2020, 20768, 5200000));
    autos.push(new auto("Toyota", "RAV4 2.5 Vx", 2018,  68000, 7450000));
    autos.push(new auto("Chevrolet", "Spin 1.8 Activ7", 2020, 61500, 3910000));
    autos.push(new auto("Honda", "Hr-V 1.8 Lx 2wd Cvt", 2016, 93167, 4320000));
    autos.push(new auto("Renault", "Fluence 2.0 Gt T 190cv", 2015,  77800, 2780000));
    autos.push(new auto("Kia", "Sportage 2.0 Ex 154cv", 2017, 9.600, 4970000));
    autos.push(new auto("Chevrolet", "Onix 1.4 Ltz Mt 98cv", 2016, 100039, 2150000));
    autos.push(new auto("Ford", "Ka 1.5 Freestyle Se", 2021, 16032, 3560000));
    autos.push(new auto("Volskwagen", "Voyage 1.6 Trenline 101cv", 2017, 82100, 1900000));
    autos.push(new auto("Renault", "Sander 1.6 Privilege 105cv", 2017, 65000, 2250000));
    autos.push(new auto("Volskwagen", "T-Cross 1.6 Comforline Mt", 2019, 62300, 4650000));
    autos.push(new auto("Renault", "Duster Oroch 2.0 Outsider Plus", 2018, 71000, 3740000));
    autos.push(new auto("Renault", "Captur 1.6 Intense Cvt", 2019, 83000, 4190000));
    autos.push(new auto("Ds", "DS3 1.6 Vti 120 So Chic", 2016,  99000, 2860000));
    autos.push(new auto("Peugeot", "208 1.6 Feline", 2019, 45000, 3460000));
    autos.push(new auto("Toyota", "Hilux 2.8 Cd Srx 177cv", 2019, 32000, 7540000));
    autos.push(new auto("Volskwagen", "Up 1.0 Take Up! Aa 75cv", 2017, 62000, 2040000));
    autos.push(new auto("Renault", "Captur 1.6 Intense Cvt", 2019, 39700, 4000000));
    autos.push(new auto("Audi", "A3 2.0 T Fsi Stronic", 2017, 102000, 5900000));
    autos.push(new auto("Ford", "Ecosport 1.5 D Se 100cv", 2018, 92000, 3200000));
    autos.push(new auto("Renault", "Sandero 2.0 RS 145cv", 2015, 82000, 2130000));
    autos.push(new auto("Fiat", "Cronos 1.8 16v Precision Pack Style", 2022, 1023, 363000));
    autos.push(new auto("Toyota", "Hilux 2.8 Cd Srv 177cv", 2017, 41000, 6100000));
    autos.push(new auto("Renault", "Duster 2.0 Ph2", 2018, 85000, 3250000))
    autos.push(new auto("Chevrolet", "Captiva 2.4 Ls 167cv", 2018, 96000, 4540000));
     
   
let catalogo = document.getElementsByClassName("catalogo"); 

alert("el auto de tus suenos a unos clics de distancia");
    let confirmar = confirm('desea filtrar los autos?');
    if(confirmar === true){
        let asignarFiltro = prompt("ingrese filtro: marca, ano, KM, precio");
        if(asignarFiltro === "marca"){
            let filtro = prompt("ingrese la marca que busca");
            let resultadoMarca = autos.filter(
                (elemento) => elemento.marca === filtro);
               
                    for(const auto of resultadoMarca){
                        let item = document.createElement("figure");
                        item.innerHTML = `<h4>${auto.marca} ${auto.modelo}</h4>   
                                            <p>${auto.ano} || ${auto.modelo} || Buenos aires</p>
                                            <p>${auto.precio}</p>`;
                        document.body.appendChild(item)            
                }
    }
         else if(asignarFiltro === "ano"){
                let filtro = parseInt(prompt("ingrese el anio de salida del auto"));
                let resultadoAno = autos.filter(
                    (elemento) => elemento.ano === filtro );

                    for(const auto of resultadoAno){
                        let item = document.createElement("figure");
                        item.innerHTML = `<h4>${auto.marca} ${auto.modelo}</h4>   
                                            <p>${auto.ano} || ${auto.modelo} || Buenos aires</p>
                                            <p>${auto.precio}</p>`;
                            document.body.appendChild(item)              
                }
            }else if(asignarFiltro === "KM"){
                let filtro = parseInt(prompt("ingrese la cantidad maxima de kilometros que busca"));
                let resultadoKM = autos.filter(
                    (elemento) => elemento.KM < filtro );   
                    
                    for(const auto of resultadoKM){
                        let item = document.createElement("figure");
                        item.innerHTML = `<h4>${auto.marca} ${auto.modelo}</h4>   
                                            <p>${auto.ano} || ${auto.modelo} || Buenos aires</p>
                                            <p>${auto.precio}</p>`;
                        document.body.appendChild(item)              
                }
                    console.log(resultadoKM)
            }else if(asignarFiltro === "precio"){
                let filtro = (prompt("ingrese el maximo costo que busca para el auto"));
                let resultadoPrecio = autos.filter(
                    (elemento) => elemento.precio < filtro );

                    for(const auto of resultadoPrecio){
                        let item = document.createElement("figure");
                        item.innerHTML = `<h4>${auto.marca} ${auto.modelo}</h4>   
                                            <p>${auto.ano} || ${auto.modelo} || Buenos aires</p>
                                            <p>${auto.precio}</p>`;
                    document.body.appendChild(item)              
                }
                   
            }
            } 
    

        })



















/* for(const auto of autos){
    let item = document.createElement("figure");
    item.innerHTML = `<h2>${auto.marca} ${auto.modelo}</h2>   
                        <p>${auto.ano} || ${auto.modelo} || Buenos aires</p>
                        <p>${auto.precio}</p>`;
    document.body.appendChild(item)
} 
 */


/* let filtro = parseInt(prompt("ingrese el precio del auto"));
let filtrados = autos.filter(elemento => elemento.precio < filtro) ;

for(const auto of filtrados){
             let item = document.createElement("figure");
    item.innerHTML = `<h2>${auto.marca} ${auto.modelo}</h2>   
                        <p>${auto.ano} || ${auto.modelo} || Buenos aires</p>
                        <p>${auto.precio}</p>`;
    document.body.appendChild(item)        
                    } */






/*  
     {

        
            
                
                      */
 

/* let filtro = parseInt(prompt("ingrese el precio del auto"));
let filtrados = autos.filter(elemento => elemento.precio < filtro) ;   */