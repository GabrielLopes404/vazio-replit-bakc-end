# 📝 Como Editar o Conteúdo do Site

Este site utiliza arquivos JSON para gerenciar todo o conteúdo. Você pode editar os textos, imagens, serviços, portfólio e depoimentos **sem precisar mexer no código**!

## 📂 Arquivos JSON Disponíveis

Todos os arquivos estão na pasta `data/`:

### 1. `services.json` - Serviços Oferecidos
```json
[
  {
    "title": "Nome do Serviço",
    "description": "Descrição do serviço",
    "icon": "nome-do-icone"
  }
]
```

**Ícones disponíveis:** `palette`, `image`, `box`, `monitor`, `sparkles`, `code`, `zap`, `star`, `heart`

### 2. `portfolio.json` - Projetos do Portfólio
```json
[
  {
    "title": "Nome do Projeto",
    "category": "Categoria",
    "imageUrl": "URL da imagem",
    "description": "Descrição do projeto",
    "client": "Nome do Cliente",
    "order": 1
  }
]
```

**Categorias sugeridas:** "Identidade Visual", "Social Media", "3D", "Web/App"

### 3. `testimonials.json` - Depoimentos
```json
[
  {
    "author": "Nome do Cliente",
    "text": "Texto do depoimento",
    "avatarUrl": null
  }
]
```

### 4. `faqs.json` - Perguntas Frequentes
```json
[
  {
    "question": "❓ Pergunta?",
    "answer": "Resposta detalhada...",
    "order": 1
  }
]
```

### 5. `before-after.json` - Antes e Depois
```json
[
  {
    "title": "Nome do Projeto",
    "client": "Nome do Cliente",
    "beforeImageUrl": "/attached_assets/antes.png",
    "afterImageUrl": "/attached_assets/depois.png",
    "order": 1
  }
]
```

## 🎨 Como Adicionar Imagens

1. Coloque suas imagens na pasta `attached_assets/`
2. Use o caminho `/attached_assets/nome-da-imagem.png` nos arquivos JSON
3. Ou use URLs externas (ex: Unsplash, Imgur)

## ✅ Como Editar

1. **Abra o arquivo JSON** que deseja editar
2. **Modifique os textos** entre aspas
3. **Salve o arquivo**
4. **Recarregue o site** - as mudanças aparecem automaticamente!

## 📱 Exemplos Práticos

### Adicionar um novo serviço:
```json
{
  "title": "Motion Graphics",
  "description": "Animações profissionais que dão vida às suas ideias",
  "icon": "zap"
}
```

### Adicionar um projeto ao portfólio:
```json
{
  "title": "Logo Empresa X",
  "category": "Identidade Visual",
  "imageUrl": "/attached_assets/logo-empresa-x.png",
  "description": "Identidade visual moderna e impactante",
  "client": "Empresa X",
  "order": 1
}
```

### Adicionar um depoimento:
```json
{
  "author": "Maria Silva",
  "text": "Trabalho excelente! Superou minhas expectativas.",
  "avatarUrl": null
}
```

## 🚀 Dicas

- ✅ Sempre use vírgulas entre os itens (exceto no último)
- ✅ Mantenha o formato JSON correto (aspas duplas, chaves, colchetes)
- ✅ Teste cada alteração para garantir que está funcionando
- ✅ Faça backup antes de grandes mudanças
- ✅ Use emojis nos títulos para deixar mais atrativo

## ⚠️ Importante

- Respeite a sintaxe JSON (não esqueça vírgulas e aspas)
- URLs de imagens devem começar com `http://`, `https://` ou `/attached_assets/`
- O campo `order` define a ordem de exibição (números menores aparecem primeiro)
- `null` significa vazio/nenhum valor

---

**Qualquer dúvida, consulte este guia ou os exemplos nos próprios arquivos JSON!**
