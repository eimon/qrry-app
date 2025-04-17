export async function getEventos() {
  const response = await fetch("http://192.168.0.26:8000/eventos/listar/");
  const data = await response.json();
  return data;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getEventoDetalle(id) {
  const response = await fetch(`http://192.168.0.26:8000/eventos/detalle/${id}`);
  const data = await response.json();
  
  // Espera 2 segundos antes de devolver los datos
  await delay(20);
  
  return data;
}
