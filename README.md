# 📦 Gerador de QR Code com Node.js

Este é um pequeno projeto em Node.js que gera QR Codes a partir de textos ou URLs e salva como imagem (`.png`) no seu computador.

## 🚀 Requisitos

- Node.js **versão 18 ou superior**
- npm (gerenciado automaticamente com o Node.js moderno)

> 💡 Recomenda-se instalar via [nvm](https://github.com/nvm-sh/nvm) para facilitar o gerenciamento de versões.

---

## 📥 Instalação

1. Clone ou baixe o repositório:
   ```bash
   git clone https://github.com/seu-usuario/geradorQrCode.git
   cd geradorQrCode
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

---

## 🛠️ Como usar

1. Edite o arquivo `main.js` e modifique o texto ou URL desejado:

   ```js
   const texto = 'https://google.com';
   ```

2. Execute o gerador:

   ```bash
   node main.js
   ```

3. Um arquivo `qrcode.png` será criado na pasta atual com o QR Code gerado ✅

---

## 🧪 Exemplo de código (`main.js`)

```js
const QRCode = require('qrcode');

const texto = 'https://google.com';

QRCode.toFile('qrcode.png', texto, {
  color: {
    dark: '#000',
    light: '#FFF'
  }
}, function (err) {
  if (err) throw err;
  console.log('✅ QR Code salvo como qrcode.png');
});
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## ✨ Autor

Feito com 💻 por **Vinicius Kilesse**