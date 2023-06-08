// Promisificar

export const getCoordinates = async () => {
  try {
    const position = await new Promise((resolve, reject) => {
      // Cuando se ejecuta resolve, la promesa se resuelve con el valor pasado a resolve
      // Cuando se ejecta reject, la promesa se rechaza con el valor pasado a reject
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
  } catch (_) {
    return null;
  }

  //   console.log("Datos obtenidos desde la promesa");
  //   console.log(position);
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => console.log(position),
  //     () => console.log("No hay permisos")
  //   );
};
