# DIETFIT — Landing Page de Alta Conversão

Landing page de alta conversão, responsiva e otimizada para dispositivos móveis, desenvolvida especialmente para o programa **DIETFIT** direcionado a mulheres em Moçambique.

---

## 🚀 Como Executar o Projeto Localmente

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acede a `http://localhost:3000` no teu navegador.

3. **Gerar a versão de produção (Build):**
   ```bash
   npm run build
   ```
   Os ficheiros finais prontos para publicação estarão na pasta `dist/`.

4. **Pré-visualizar o build de produção:**
   ```bash
   npm run preview
   ```

---

## ⚙️ Configuração Centralizada (`src/config/siteConfig.js`)

Todos os dados críticos de conversão podem ser alterados num único ficheiro: [`src/config/siteConfig.js`](file:///c:/Users/Administrator/OneDrive/Documentos/Dietfit/src/config/siteConfig.js).

### 1. Alterar o Preço (Placeholder em Meticais — MT)
Localiza o campo `pricing.pricePlaceholder`:
```javascript
pricing: {
  pricePlaceholder: "1.490 MT", // Ou o valor definido para a oferta
  currency: "MT",
  // ...
}
```

### 2. Alterar o Número de WhatsApp
Localiza o campo `whatsapp.number`:
```javascript
whatsapp: {
  number: "+258841234567", // Insere o teu número com indicativo (+258)
  defaultMessage: "Olá! Tenho interesse no programa Dietfit e gostaria de receber mais informações."
}
```

### 3. Link de Checkout
O link de checkout fornecido já está configurado em:
```javascript
checkoutUrl: "https://pay.tutora.co.mz/fcf06edfefd34360882aa1ea6b8fd6f3"
```
Todos os botões de adesão na página redirecionam automaticamente para este endereço.

---

## 🎨 Identidade Visual e Cores

- **Verde Floresta (Principal):** `#173D2C`
- **Verde Fresco (Destaque/CTA):** `#6D9F72`
- **Verde Sálvia Suave:** `#DCE8DA`
- **Creme Quente (Fundo):** `#FAF7F0`
- **Bege Natural:** `#EDE4D6`
- **Tipografia Escura:** `#242B25`
- **Fontes:** *Playfair Display* (Títulos) e *Inter* (Texto de Apoio)

---

## 📱 Provas Sociais e Depoimentos Reais

Os 7 depoimentos reais do WhatsApp fornecidos foram integrados na pasta `public/testimonials/` com visualização em cards elegantes e lightbox interativo (clique para ampliar os prints autênticos).
