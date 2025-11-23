# Backend - Lopes Designer (Render)

Este é o **backend** do projeto Lopes Designer, pronto para deploy no **Render**.

## 📦 Deploy no Render

### Passo a Passo:

1. **Crie um repositório no GitHub** com TODOS os arquivos desta pasta
2. Acesse [render.com](https://render.com)
3. Clique em "New +" → "Web Service"
4. Conecte seu repositório do GitHub
5. O Render detecta automaticamente o `render.yaml`
6. **IMPORTANTE**: Adicione a variável de ambiente:
   - **Nome**: `FRONTEND_URL`
   - **Valor**: URL do seu frontend no Vercel (ex: `https://seu-frontend.vercel.app`)
7. Clique em "Create Web Service"

### ⚙️ Variáveis de Ambiente

Adicione no Render:
- **FRONTEND_URL**: URL completa do frontend no Vercel (com `https://`)
- **NODE_ENV**: `production` (já configurado no render.yaml)

## 🔧 Estrutura

```
/
├── server/              # Código Express
├── shared/              # Schemas compartilhados
├── data/                # Dados JSON
├── attached_assets/     # Imagens
├── package.json
├── render.yaml
├── tsconfig.json
└── README.md
```

## 🚀 Desenvolvimento Local

```bash
npm install
npm run dev
```

Acesse: `http://localhost:5000`

## 📡 Endpoints da API

```
GET /api/portfolio
GET /api/services
GET /api/testimonials
GET /api/faqs
GET /api/before-after
```

## 🚨 Solução de Problemas

**Erro: "Could not read package.json"**
- Verifique que `package.json` está na **raiz** do repositório

**Erro de CORS**
- Configure `FRONTEND_URL` no Render com a URL completa (incluindo `https://`)

**Build falha**
- Verifique se a versão do Node é >= 20
- Confira se todos os arquivos necessários estão no repositório

---

Desenvolvido com 💜 por Lopes Designer
