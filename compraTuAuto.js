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
    autos.push(new auto("Renault", "Sander 1.6 Privilege", 2015, 82.000, "2.000.000"));
    autos.push(new auto("Ford", "Focus III 2.0 Sedan SE Plus Mt", 2016, 95.474, "2.890.000"));
    autos.push(new auto("Ford", "Ecosport 1.5 Titanium 123cv", 2018,  53.386, "4.070.000"));
    autos.push(new auto("Ford", "Ecosport 1.5 Se 123cv", 2015, 82.000, "3.740.000"));
    autos.push(new auto("Volskwagen", "Up 1.0 High Up! 75cv", 2018, 60.895, "60.895"));
    autos.push(new auto("Ford", "Focus III 1.6 S", 2016, 39.471, "2.870.000"));
    autos.push(new auto("Peugeot", "308 1.6 Allure", 2015, 82.000, "2.000.000"));
    autos.push(new auto("Jeep", "Renegade 1.8 Lomgitude At6", 2020, 20.768, "5.200.000"));
    autos.push(new auto("Toyota", "RAV4 2.5 Vx", 2018,  68.000, "7.450.000"));
    autos.push(new auto("Chevrolet", "Spin 1.8 Activ7", 2020, 61.500, "3.910.000"));
    autos.push(new auto("Honda", "Hr-V 1.8 Lx 2wd Cvt", 2016, 93.167, "4.320.000"));
    autos.push(new auto("Renault", "Fluence 2.0 Gt T 190cv", 2015,  77.800, "2.780.000"));
    autos.push(new auto("Kia", "Sportage 2.0 Ex 154cv", 2017, 96.600, "4.970.000"));
    autos.push(new auto("Chevrolet", "Onix 1.4 Ltz Mt 98cv", 2016, 100.039, "2.150.000"));
    autos.push(new auto("Ford", "Ka 1.5 Freestyle Se", 2021, 16.032, "3.560.000"));
    autos.push(new auto("Volskwagen", "Voyage 1.6 Trenline 101cv", 2017, 82.100, "1.900.000"));
    autos.push(new auto("Renault", "Sander 1.6 Privilege 105cv", 2017, 65.000, "2.250.000"));
    autos.push(new auto("Volskwagen", "T-Cross 1.6 Comforline Mt", 2019, 62.300, "4.650.000"));
    autos.push(new auto("Renault", "Duster Oroch 2.0 Outsider Plus", 2018, 71.000, "3.740.000"));
    autos.push(new auto("Renault", "Captur 1.6 Intense Cvt", 2019, 83.000, "4.190.000"));
    autos.push(new auto("Ds", "DS3 1.6 Vti 120 So Chic", 2016,  99.000, "2.860.000"));
    autos.push(new auto("Peugeot", "208 1.6 Feline", 2019, 45.000, "3.460.000"));
    autos.push(new auto("Toyota", "Hilux 2.8 Cd Srx 177cv", 2019, 32.000, "7.540.000"));
    autos.push(new auto("Volskwagen", "Up 1.0 Take Up! Aa 75cv", 2017, 62.000, "2.040.000"));
    autos.push(new auto("Renault", "Captur 1.6 Intense Cvt", 2019, 39.700, "4.000.000"));
    autos.push(new auto("Audi", "A3 2.0 T Fsi Stronic", 2017, 102.000, "5.900.000"));
    autos.push(new auto("Ford", "Ecosport 1.5 D Se 100cv", 2018, 92.000, "3.200.000"));
    autos.push(new auto("Renault", "Sandero 2.0 RS 145cv", 2015, 82.000, "2.130.000"));
    autos.push(new auto("Fiat", "Cronos 1.8 16v Precision Pack Style", 2022, 1.023, "3.630.00"));
    autos.push(new auto("Toyota", "Hilux 2.8 Cd Srv 177cv", 2017, 41.000, "6.100.000"));
    autos.push(new auto("Renault", "Duster 2.0 Ph2", 2018, 85.000, "3.250.000"))
    autos.push(new auto("Chevrolet", "Captiva 2.4 Ls 167cv", 2018, 96.000, "4.540.000"));
     
    console.log(autos);  


        alert("el auto de tus suenos, a unos clics de distancia");
        let aceptar = confirm('desea filtrar los autos?')
            if (aceptar === true){
                alert("seleccione uno o mas de los siguientes filtros:");
            
            let filtro = prompt("ano, kilometros, precio, marca");
            let filtroElegido = filtro
            
            let kilometros 
            let precio
            let ano
            let marca 


            function solicitarFiltro(){
                if(filtroElegido == "kilometros"){
                  kilometros = parseInt(prompt("seleccione la cantidad maxima de kilometros que busca: -10.000 | -50.000 | -100.000"))
              } else if(filtroElegido == "ano"){
                   ano = parseInt(prompt("ingrese un ano"))
              }  else if(filtroElegido == "precio"){
                 console.log("entramos")
                  precio = parseInt(prompt("ingrese lo maximo que esta dispuesto a pagar: $2000000 | $4000000 | $6000000"))
               }   else if (filtroElegido == "marca"){
                  marca = parseInt(prompt("seleccione una marca"))
              }   else if (filtroElegido == "ano, precio") {
                  ano = parseInt(prompt("ingrese un ano"));
                  precio = parseInt(prompt("ingrese lo maximo que esta dispuesto a pagar: $2000000 | $4000000 | $6000000"))
              }   else if (filtroElegido == "ano, precio, marca") {
                  ano = parseInt(prompt("ingrese un ano"));
                  precio = parseInt(prompt("ingrese lo maximo que esta dispuesto a pagar: $2000000 | $4000000 | $6000000"));
                     marca = parseInt(prompt("seleccione una marca"))
                 } else if(filtroElegido == "ano, precio, marca, kilometros"){
                     ano = parseInt(prompt("ingrese un ano"));
                     precio = parseInt(prompt("ingrese lo maximo que esta dispuesto a pagar: $2000000 | $4000000 | $6000000"));
                  marca = parseInt(prompt("que marca esta buscando?"));
                  kilometros = parseInt(prompt("seleccione la cantidad maxima de kilometros que busca: -10.000 | -50.000 | -100.000"))
              }   else if(filtroElegido == "precio, marca"){
                 precio = parseInt(prompt("ingrese lo maximo que esta dispuesto a pagar: $2000000 | $4000000 | $6000000"));
                  marca = parseInt(prompt("seleccione una marca"));
              }   else if(filtroElegido == "precio, marca, kilometros"){
                  precio = parseInt(prompt("ingrese lo maximo que esta dispuesto a pagar: $2000000 | $4000000 | $6000000"));
                  marca = parseInt(prompt("seleccione una marca"));
                  kilometros = parseInt(prompt("seleccione la cantidad maxima de kilometros que busca: -10.000 | -50.000 | -100.000"))
             }   else if(filtroElegido == "marca, kilometros"){
                 marca = parseInt(prompt("seleccione una marca"));
                 kilometros = parseInt(prompt("seleccione la cantidad maxima de kilometros que busca: -10.000 |-50.000 | -100.000 | +100.000"))
             }   else{
                 alert("dato ingresado no valido, por favor vuelva a intentar")
             }
        }
     
     function solicitarValoresDelFiltro (){     
         if ((filtroElegido == kilometros) || (kilometros == -10000)){
             alert("tiene los siguientes autos disponibles: Fiat Cronos 1.8 16v Precision Pack Style")
         }   else if ((filtroElegido == kilometros) || (kilometros == -50000)){
             alert("tiene los siguientes autos disponibles: Fiat Cronos 1.8 16v Precision Pack Style | Jeep Renegade 1.8 Lomgitude At6 | Ford Focus III 1.6 S | Ford Ka 1.5 Freestyle Se | Renault Captur 1.6 Intense Cvt | Toyota Hilux 2.8 Cd Srv 177cv | Peugeot 208 1.6 Feline ")
         }   else if ((filtroElegido == kilometros) || (kilometros == -100000)){
             alert("tiene los siguientes autos disponibles: Fiat Cronos 1.8 16v Precision Pack Style | Jeep Renegade 1.8 Lomgitude At6 | Ford Focus III 1.6 S | Ford Ka 1.5 Freestyle Se | Renault Captur 1.6 Intense Cvt | Toyota Hilux 2.8 Cd Srv 177cv | Peugeot 208 1.6 Feline | Renault Sander 1.6 Privilege 105cv | Renault Sander 1.6 Privilege | Ford Focus III 2.0 Sedan SE Plus Mt | Ford Ecosport 1.5 Titanium 123cv | Ford Ecosport 1.5 Se 123cv | Volskwagen Up 1.0 High Up! 75cv | Peugeot 308 1.6 Allure | Toyota RAV4 2.5 Vx | Chevrolet Spin 1.8 Activ7 | Honda Hr-V 1.8 Lx 2wd Cvt | Renault Fluence 2.0 Gt T 190cv | Kia Sportage 2.0 Ex 154cv | Volskwagen Voyage 1.6 Trenline 101cv | Renault Sander 1.6 Privilege 105cv | Volskwagen T-Cross 1.6 Comforline Mt | Renault Duster Oroch 2.0 Outsider Plus | Renault Captur 1.6 Intense Cvt | Ds DS3 1.6 Vti 120 So Chic | Volskwagen Up 1.0 Take Up! Aa 75cv | Ford Ecosport 1.5 D Se 100cv | Renault Sandero 2.0 RS 145cv | Renault Duster 2.0 Ph2 | Chevrolet Captiva 2.4 Ls 167cv")
         }   else if ((filtroElegido == precio) || (precio == 2000000)) {
             alert("tiene los siguientes autos disponibles:Renault Sander 1.6 Privilege | Peugeot 308 1.6 Allure | Volskwagen Voyage 1.6 Trenline 101cv ")
          }  else if ((filtroElegido == precio) || (precio == 4000000)) {
             alert("tiene los siguientes autos disponibles:Renault Sander 1.6 Privilege | Peugeot 308 1.6 Allure | Volskwagen Voyage 1.6 Trenline 101cv | Ford Focus III 2.0 Sedan SE Plus Mt | Ford Ecosport 1.5 Se 123cv | Volskwagen Up 1.0 High Up! 75cv | Ford Focus III 1.6 S | Chevrolet Spin 1.8 Activ7 | Renault Fluence 2.0 Gt T 190cv | Chevrolet Onix 1.4 Ltz Mt 98cv | Ford Ka 1.5 Freestyle Se | Renault Sander 1.6 Privilege 105cv | Renault Duster Oroch 2.0 Outsider Plus | Ds DS3 1.6 Vti 120 So Chic | Peugeot 208 1.6 Feline | Volskwagen Up 1.0 Take Up! Aa 75cv | Renault Captur 1.6 Intense Cvt | Ford Ecosport 1.5 D Se 100cv | Renault Sandero 2.0 RS 145cv | Fiat Cronos 1.8 16v Precision Pack Style | Renault Duster 2.0 Ph2")
         } else if ((filtroElegido == precio) || (precio == 6000000)) {
             alert("tiene los siguientes autos disponibles:Renault Sander 1.6 Privilege | Peugeot 308 1.6 Allure | Volskwagen Voyage 1.6 Trenline 101cv | Ford Focus III 2.0 Sedan SE Plus Mt | Ford Ecosport 1.5 Se 123cv | Volskwagen Up 1.0 High Up! 75cv | Ford Focus III 1.6 S | Chevrolet Spin 1.8 Activ7 | Renault Fluence 2.0 Gt T 190cv | Chevrolet Onix 1.4 Ltz Mt 98cv | Ford Ka 1.5 Freestyle Se | Renault Sander 1.6 Privilege 105cv | Renault Duster Oroch 2.0 Outsider Plus | Ds DS3 1.6 Vti 120 So Chic | Peugeot 208 1.6 Feline | Volskwagen Up 1.0 Take Up! Aa 75cv | Renault Captur 1.6 Intense Cvt | Ford Ecosport 1.5 D Se 100cv | Renault Sandero 2.0 RS 145cv | Fiat Cronos 1.8 16v Precision Pack Style | Renault Duster 2.0 Ph2 | Ford Ecosport 1.5 Titanium 123cv | Jeep Renegade 1.8 Lomgitude At6 | Honda Hr-V 1.8 Lx 2wd Cvt | Chevrolet Onix 1.4 Ltz Mt 98cv | Volskwagen T-Cross 1.6 Comforline Mt | Renault Captur 1.6 Intense Cvt | Audi A3 2.0 T Fsi Stronic | Chevrolet Captiva 2.4 Ls 167cv")
         }   else if ((filtroElegido == ano) || (ano <= 2014 )){
             alert("no contamos con autos de antes del 2015")
         }   else if ((filtroElegido == ano) || ((ano > 2014) || (ano <= 2016))){
            alert("tiene los siguientes autos disponibles: Renault Sander 1.6 Privilege | Ford Focus III 2.0 Sedan SE Plus Mt | Ford Ecosport 1.5 Se 123cv | Ford Focus III 1.6 S | Peugeot 308 1.6 Allure |  Honda Hr-V 1.8 Lx 2wd Cvt | Renault Fluence 2.0 Gt T 190cv | Kia Sportage 2.0 Ex 154cv | Chevrolet Onix 1.4 Ltz Mt 98cv | Ds DS3 1.6 Vti 120 So Chic | Renault Sandero 2.0 RS 145cv ");
        }   else if ((filtroElegido == ano) || ((ano > 2016) || (ano <= 2018))){
            alert("tenemos los siguientes autos disponibles: Ford Ecosport 1.5 Titanium 123cv | Volskwagen Up 1.0 High Up! 75cv | Toyota RAV4 2.5 Vx | Kia Sportage 2.0 Ex 154cv | Volskwagen Voyage 1.6 Trenline 101cv | Renault Sander 1.6 Privilege 105cv | Renault Duster Oroch 2.0 Outsider Plus | Volskwagen Up 1.0 Take Up! Aa 75cv | Audi A3 2.0 T Fsi Stronic | Ford Ecosport 1.5 D Se 100cv | Toyota Hilux 2.8 Cd Srv 177cv | Renault Duster 2.0 Ph2 | Chevrolet Captiva 2.4 Ls 167cv");
        }   else if ((filtroElegido == ano) || ((ano > 2018) || (ano <= 2020))) {
            alert("tenemos los siguientes autos disponibles: Jeep Renegade 1.8 Lomgitude At6 | Chevrolet Spin 1.8 Activ7 | Volskwagen T-Cross 1.6 Comforline Mt | Renault Captur 1.6 Intense Cvt | Peugeot 208 1.6 Feline | Toyota Hilux 2.8 Cd Srx 177cv | Renault Captur 1.6 Intense Cvt ")
        }   else if ((filtroElegido == ano) || (ano > 2020)){
            alert("tenemos los siguientes autos disponibles: Ford Ka 1.5 Freestyle Se | Fiat Cronos 1.8 16v Precision Pack Style ");
        }   else if ((filtroElegido == marca) || (marca == "ford")){
            alert("tenemos los siguientes autos disponibles: Ford Ka 1.5 Freestyle Se | Ford Focus III 2.0 Sedan SE Plus Mt | Ford Ecosport 1.5 Titanium 123cv | Ford Ecosport 1.5 Se 123cv | Ford Focus III 1.6 S | Ford Ecosport 1.5 D Se 100cv ");
        }   else if ((filtroElegido == marca) || (marca == "renault")){
            alert("tenemos los siguientes autos disponibles: Renault Sander 1.6 Privilege | Renault Fluence 2.0 Gt T 190cv | Renault Sander 1.6 Privilege 105cv | Renault Duster Oroch 2.0 Outsider Plus | Renault Captur 1.6 Intense Cvt | Renault Captur 1.6 Intense Cvt | Renault Sandero 2.0 RS 145cv | Renault Duster 2.0 Ph2");
        }   else if ((filtroElegido == marca) || (marca == "volskwagen")){
            alert("tenemos los siguientes autos disponibles: Volskwagen Up 1.0 High Up! 75cv | Volskwagen Voyage 1.6 Trenline 101cv | Volskwagen T-Cross 1.6 Comforline Mt | Volskwagen Up 1.0 Take Up! Aa 75cv ")
        }   else if ((filtroElegido == marca) || (marca == "peugeot")){
            alert("tenemos los siguientes autos disponibles: Peugeot 308 1.6 Allure | Peugeot 208 1.6 Feline ");
        }   else if ((filtroElegido == marca) || (marca == "jeep")){
            alert("tenemos los siguientes autos disponibles: Jeep Renegade 1.8 Lomgitude At6 ");
        }   else if ((filtroElegido == marca) || (marca == "chevrolet")){
            alert("tenemos los siguientes autos disponibles: Chevrolet Spin 1.8 Activ7 | Chevrolet Onix 1.4 Ltz Mt 98cv | Chevrolet Captiva 2.4 Ls 167cv ");
        }   else if ((filtroElegido == marca) || (marca == "toyota")){
            alert("tenemos los siguientes autos disponibles: Toyota RAV4 2.5 Vx | Toyota Hilux 2.8 Cd Srx 177cv | Toyota Hilux 2.8 Cd Srv 177cv");
        }   else if ((filtroElegido == marca) || (marca == "honda")){
            alert("tenemos los siguientes autos disponibles: Honda Hr-V 1.8 Lx 2wd Cvt ");
        }   else if ((filtroElegido == marca) || (marca == "audi")){
            alert("tenemos los siguientes autos disponibles: Audi A3 2.0 T Fsi Stronic");
        }   else if ((filtroElegido == marca) || (marca == "ds")){
            alert("tenemos los siguientes autos disponibles: Ds DS3 1.6 Vti 120 So Chic");
        }   else if ((filtroElegido == marca) || (marca == "kia")){
            alert("tenemos los siguientes autos disponibles: Kia Sportage 2.0 Ex 154cv")
        }   else if ((filtroElegido == marca) && (marca != "kia") || (marca != "ds") || (marca != "audi") || (marca != "honda") || (marca != "toyota") || (marca != "chevrolet") || (marca != "kia") || (marca != "jeep") || (marca != "peugeot") || (marca != "volskwagen") || (marca != "renault") || (marca != "ford")) {
            alert("actualmente no contamos con esa marca")
        } 
                
    }
} 
        
 solicitarFiltro() 
 solicitarValoresDelFiltro()
            
                    
    
                    
        
            



})




