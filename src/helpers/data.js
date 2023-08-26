// NO REPETIR DATOS
export function peopleAll(datos) {
    const data = datos.map(item => {
      // eslint-disable-next-line no-unused-vars
      const {height, mass, films, species, starships, created, edited,  ...dataWithout} = item; // desestructuración para separar las propiedades del objeto que no vamos a usar
      return dataWithout;
    })
    const dataObjectText =  data.map(JSON.stringify); // JSONstringify convierte el objeto en string 
    const dataUniqueObject = Array.from(dataObjectText).map(JSON.parse); //convertimos el objeto en un array y JSONparse los string en objetos
    return dataUniqueObject;
  }
  
  //FILTROS
  export function filterDataName(data, condition) {
    return data.filter ((item) => (item.name === condition));
  }

  export function filterDataGender(data, condition) {
    return data.filter ((item) => (item.gender === condition));
  }
