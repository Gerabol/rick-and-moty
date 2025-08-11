# Rick and Morty App

Aplicação web desenvolvida em **Vite + React** para consumir a API oficial do [Rick and Morty](https://rickandmortyapi.com), exibindo informações sobre episódios e personagens de forma interativa, com suporte a **modo claro/escuro** e animações personalizadas.

---

## 📚 Sobre o Projeto

Este projeto foi desenvolvido por **Geraldo Valencia** como parte da **Pós-Graduação em Desenvolvimento de Aplicações Web**  
**Centro Universitário Unipê - Cruzeiro do Sul Educacional**.

O sistema permite:
- Listar episódios em um layout responsivo.
- Paginação dos episódios com indicador dinâmico.
- Visualizar detalhes completos de cada episódio (título, código, data de exibição e personagens participantes).
- Visualizar a última localização de cada personagem.
- Alternar entre **modo claro e escuro** com ícone de lâmpada animado.
- Animação de brilho ao redor da lâmpada adaptada para modo claro e escuro.
- Layout adaptado para desktop e dispositivos móveis.

---

## 🚀 Tecnologias Utilizadas

- ⚡ **[Vite](https://vitejs.dev/)** – build rápido para desenvolvimento moderno em React.
- ⚛ **React** – biblioteca para construção da interface.
- 📡 **Axios** – consumo da API Rick and Morty.
- 🎨 **CSS3 / Flexbox / Grid Layout** – estilização responsiva.
- 🌓 **Dark Mode** – alternância de tema com animação personalizada na lâmpada.

---

## 📂 Estrutura de Páginas

### **Lista de Episódios**
- Grid adaptável (5 colunas no desktop, adaptando para telas menores).
- Botão para **voltar** à página anterior.
- Paginação dinâmica (**Página X de Y**).
- Cada episódio é clicável e leva aos detalhes.

### **Detalhe do Episódio**
- Título e botão voltar no topo.
- Cartão com:
  - Código do episódio (ex: S01 E10).
  - Data de exibição.
- Lista de personagens participantes:
  - Nome
  - Status
  - Última localização
  - Foto
- Layout responsivo e integrado ao modo claro/escuro.

### **Navbar com Toggle**
- Botão no formato **lâmpada** para alternar entre claro/escuro.
- Brilho pulsante animado:
  - Verde no modo claro.
  - Tom escuro no modo escuro.

---

## 📸 Demonstração da Interface

> *(adicione screenshots do seu sistema aqui para ilustrar a interface no modo claro e escuro).*

---

## ⚙️ Como Executar Localmente

1. **Clone o repositório:**
