const QRCode = require('qrcode');

// Texto ou URL para gerar QR Code
const texto = 'https://google.com';

// Gera e salva em arquivo
QRCode.toFile('qrcode.png', texto, {
  color: {
    dark: '#000',  // Cor do QR
    light: '#FFF'  // Fundo
  }
}, function (err) {
  if (err) throw err;
  console.log('✅ QR Code salvo como qrcode.png');
});
