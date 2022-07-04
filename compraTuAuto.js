 window.addEventListener('load',()=>{

    class auto{
        constructor(marca, modelo, ano, KM, precio){
            this.marca = marca;
            this.modelo = modelo;
            this.ano = ano;
            this.KM = KM;
            this.precio = precio;
        }
    }
    
    const autos = [];
    autos.push(new auto("Renault", "Sander 1.6 Privilege", 2015, 82.000, 2000000));
    autos.push(new auto("Ford", "Focus III 2.0 Sedan SE Plus Mt", 2016, 95.474, 2890000));
    autos.push(new auto("Ford", "Ecosport 1.5 Titanium 123cv", 2018,  53.386, 4070000));
    autos.push(new auto("Ford", "Ecosport 1.5 Se 123cv", 2015, 82.000, 3740000));
    autos.push(new auto("Volskwagen", "Up 1.0 High Up! 75cv", 2018, 60.895, 60895));
    autos.push(new auto("Ford", "Focus III 1.6 S", 2016, 39.471, 2870000));
    autos.push(new auto("Peugeot", "308 1.6 Allure", 2015, 82.000, 2000000));
    autos.push(new auto("Jeep", "Renegade 1.8 Lomgitude At6", 2020, 20.768, 5200000));
    autos.push(new auto("Toyota", "RAV4 2.5 Vx", 2018,  68.000, 7450000));
    autos.push(new auto("Chevrolet", "Spin 1.8 Activ7", 2020, 61.500, 3910000));
    autos.push(new auto("Honda", "Hr-V 1.8 Lx 2wd Cvt", 2016, 93.167, 4320000));
    autos.push(new auto("Renault", "Fluence 2.0 Gt T 190cv", 2015,  77.800, 2780000));
    autos.push(new auto("Kia", "Sportage 2.0 Ex 154cv", 2017, 96.600, 4970000));
    autos.push(new auto("Chevrolet", "Onix 1.4 Ltz Mt 98cv", 2016, 100.039, 2150000));
    autos.push(new auto("Ford", "Ka 1.5 Freestyle Se", 2021, 16.032, 3560000));
    autos.push(new auto("Volskwagen", "Voyage 1.6 Trenline 101cv", 2017, 82.100, 1900000));
    autos.push(new auto("Renault", "Sander 1.6 Privilege 105cv", 2017, 65.000, 2250000));
    autos.push(new auto("Volskwagen", "T-Cross 1.6 Comforline Mt", 2019, 62.300, 4650000));
    autos.push(new auto("Renault", "Duster Oroch 2.0 Outsider Plus", 2018, 71.000, 3740000));
    autos.push(new auto("Renault", "Captur 1.6 Intense Cvt", 2019, 83.000, 4190000));
    autos.push(new auto("Ds", "DS3 1.6 Vti 120 So Chic", 2016,  99.000, 2860000));
    autos.push(new auto("Peugeot", "208 1.6 Feline", 2019, 45.000, 3460000));
    autos.push(new auto("Toyota", "Hilux 2.8 Cd Srx 177cv", 2019, 32.000, 7540000));
    autos.push(new auto("Volskwagen", "Up 1.0 Take Up! Aa 75cv", 2017, 62.000, 2040000));
    autos.push(new auto("Renault", "Captur 1.6 Intense Cvt", 2019, 39.700, 4000000));
    autos.push(new auto("Audi", "A3 2.0 T Fsi Stronic", 2017, 102.000, 5900000));
    autos.push(new auto("Ford", "Ecosport 1.5 D Se 100cv", 2018, 92.000, 3200000));
    autos.push(new auto("Renault", "Sandero 2.0 RS 145cv", 2015, 82.000, 2130000));
    autos.push(new auto("Fiat", "Cronos 1.8 16v Precision Pack Style", 2022, 1.023, 363000));
    autos.push(new auto("Toyota", "Hilux 2.8 Cd Srv 177cv", 2017, 41.000, 6100000));
    autos.push(new auto("Renault", "Duster 2.0 Ph2", 2018, 85.000, 3250000))
    autos.push(new auto("Chevrolet", "Captiva 2.4 Ls 167cv", 2018, 96.000, 4540000));
     
    console.log(autos);  


    let container = document.getElementsByClassName("catalogoContainer")

    alert("el auto de tus suenos a unos clics de distancia");
    let confirmar = confirm('desea filtrar los autos?');
    if(confirmar === true){
        let asignarFiltro = prompt("ingrese filtro: marca, ano, KM, precio");
            if(asignarFiltro === "marca"){
                let filtro = prompt("ingrese la marca que busca");
                let resultadoMarca = autos.filter(
                    (elemento) => elemento.marca === filtro);
                    console.log(resultadoMarca)
            }else if(asignarFiltro === "ano"){
                let filtro = parseInt(prompt("ingrese el anio de salida del auto"));
                let resultadoAno = autos.filter(
                    (elemento) => elemento.ano === filtro );
                    console.log(resultadoAno)
            }else if(asignarFiltro === "KM"){
                let filtro = parseInt(prompt("ingrese la cantidad maxima de kilometros que busca"));
                let resultadoKM = autos.filter(
                    (elemento) => elemento.KM < filtro );
                    console.log(resultadoKM)
            }else if(asignarFiltro === "precio"){
                let filtro = (prompt("ingrese el maximo costo que busca para el auto"));
                let resultadoPrecio = autos.filter(
                    (elemento) => elemento.precio < filtro );
                    console.log(resultadoPrecio)
            }
        }


})




