function criptografarTexto(texto) {
    return texto
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
  }
  
  function descriptografarTexto(texto) {
    return texto
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
  }
  
  function criptografar() {
    const textoEntrada = document.getElementById('textoEntrada').value;
    const textoSaida = criptografarTexto(textoEntrada);
    document.getElementById('textoSaida').value = textoSaida;
  }
  
  function descriptografar() {
    const textoEntrada = document.getElementById('textoEntrada').value;
    const textoSaida = descriptografarTexto(textoEntrada);
    document.getElementById('textoSaida').value = textoSaida;
  }
  
  function copiarTexto() {
    const textoSaida = document.getElementById('textoSaida');
    textoSaida.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência');
  }
  