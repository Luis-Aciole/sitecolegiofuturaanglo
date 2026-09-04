<h1 align="center">Colegio Futura Anglo</h1>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Responsive-Mobile%20First-blue?style=for-the-badge" alt="Responsivo">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</p>

<p align="center">
  Site institucional profissional para o Colegio Futura Anglo - Ensino Fundamental e Medio em Vrzea Paulista, SP.
</p>

<p align="center">
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-estrutura-do-projeto">Estrutura</a> •
  <a href="#-paleta-de-cores">Cores</a> •
  <a href="#-como-usar">Como Usar</a> •
  <a href="#-personaliza%C3%A7%C3%A3o">Personalizacao</a>
</p>

---

## Sobre o Projeto

O site do **Colegio Futura Anglo** foi desenvolvido do zero utilizando tecnologias web puras (HTML5, CSS3 e JavaScript vanilla), sem o uso de frameworks ou bibliotecas externas. O projeto foi pensado para ser **profissional, chamativo e altamente responsivo**, atendendo dispositivos moveis, tablets e desktops.

O site apresenta informacoes sobre o colegio, seus cursos (Ensino Fundamental e Medio), infraestrutura, metodologia pedagogica e formulario de contato para matriculas.

---

## Funcionalidades

### Layout & Design
- **Design moderno e profissional** com paleta azul escuro, branco e laranja
- **Mobile-first** com 3 breakpoints responsivos (480px, 768px, 1024px)
- **CSS Custom Properties** (variaveis) para facil personalizacao de cores, fontes e espacamentos
- **CSS Grid e Flexbox** para layouts flexiveis e adaptaveis
- **Sombras e bordas arredondadas** em cards e componentes
- **Gradientes** em backgrounds do hero, cards e galeria

### Animacoes & Interatividade
- **Fade-in ao scrollar** — Elementos aparecem suavemente com Intersection Observer
- **Contadores animados** — Numeros no hero contam de 0 ate o valor final (anos, alunos, aprovacao)
- **Hover effects** — Cards sobem, botoes ganham sombra, links mudam de cor com transicoes suaves
- **Scroll suave** — Links ancora rolam suavemente ate a secao de destino
- **Animacao pulsante** no botao flutuante do WhatsApp

### Navegacao
- **Header sticky** — Barra de navegacao fixa no topo que muda de appearance ao rolar
- **Menu hamburger** em mobile com animacao de transicao (3 linhas -> X)
- **Overlay escuro** ao abrir o menu mobile, clicavel para fechar
- **Links de navegacao** com indicador de pagina ativa (sublinhado laranja)
- **Breadcrumb** nas paginas internas

### Botoes & CTAs
- **Botao primario** (laranja) — Para acoes principais
- **Botao outline** (borda branca) — Para acoes secundarias
- **Botao secundario** (azul escuro) — Para acoes alternativas
- **Botao WhatsApp flutuante** — Fixo no canto inferior direito com animacao pulse
- **Todos os botoes** com efeito hover (elevacao + sombra colorida)

### Formulario de Contato
- **Campos:** Nome, E-mail, Telefone, Interesse (select), Mensagem
- **Mascara automatica** no campo de telefone — Formato `(11) 99999-9999`
- **Validacao em tempo real** — Campos obrigatorios e formato de e-mail
- **Animacao de envio** — Botao mostra spinner durante o "envio"
- **Mensagem de sucesso** — Feedback visual apos envio bem-sucedido

### Secoes do Site

| Secao | Descricao |
|---|---|
| **Hero/Banner** | Fundo gradiente com badge, titulo, subtitulo, 2 CTAs e 3 estatisticas animadas |
| **Destaques** | 4 cards com icones (Professores, Turmas, Tecnologia, Extracurriculares) |
| **Cursos** | 2 cards com imagem gradiente, tags e botao "Saiba Mais" |
| **Diferenciais** | 4 cards sobre fundo azul escuro (Seguranca, Integral, Comunicacao, Resultados) |
| **Galeria** | Grid de 6 itens com hover overlay e icone placeholder |
| **CTA Banner** | Faixa laranja com chamada para acao |
| **Missao/Visao/Valores** | 3 cards com borda lateral laranja |
| **Infraestrutura** | Grid de 10 itens com icones (salas, labs, quadra, etc.) |
| **Corpo Docente** | 3 cards sobre fundo azul |
| **Grade Curricular** | Tabelas completas para Fundamental (iniciais + finais) e Medio |
| **Metodologia** | 6 cards com icones e borda superior laranja |
| **Formulario** | Split layout: formulario a esquerda + card de informacoes a direita |
| **Google Maps** | Iframe com localizacao do colegio em Vrzea Paulista |
| **Footer** | Grid 4 colunas: Sobre, Links, Cursos, Contato + redes sociais |

### Paginas

| Arquivo | Pagina | Conteudo |
|---|---|---|
| `index.html` | Inicio | Hero, destaques, cursos, diferenciais, galeria, CTA |
| `sobre.html` | Sobre Nos | Historia, MVV, infraestrutura (10 itens), corpo docente |
| `cursos.html` | Cursos | Ensino Fundamental (1-9), Ensino Medio (1-3), grade completa, metodologia |
| `contato.html` | Contato | Formulario, informacoes de contato, Google Maps |

---

## Estrutura do Projeto

sitecolegiofuturaanglo/
│
├── index.html              # Pagina inicial
├── sobre.html              # Sobre o colegio
├── cursos.html             # Ensino Fundamental e Medio
├── contato.html            # Contato e matriculas
├── README.md               # Este arquivo
│
├── css/
│   └── style.css           # Estilo principal (~1180 linhas)
│
├── js/
│   └── main.js             # JavaScript (~212 linhas)
│
└── assets/
    └── images/
        ├── logo.png        # Logo do colegio (a adicionar)
        └── gallery/        # Fotos da galeria (a adicionar)

**Total de linhas de codigo:** ~2.535 (HTML: 1.146 | CSS: 1.180 | JS: 212)

---

## Paleta de Cores

| Cor | Codigo Hex | Uso |
|---|---|---|
| Azul Escuro | `#0D2B4E` | Cor principal, header, footer, titulos |
| Azul Medio | `#1A4A7A` | Gradientes, fundo hero |
| Azul Claro | `#2E6BA6` | Acentos, gradientes |
| Laranja | `#F47B20` | Botoes, destaques, hover, badges |
| Laranja Hover | `#E06A10` | Estado hover dos botoes |
| Branco | `#FFFFFF` | Fundo, texto claro |
| Cinza Claro | `#F5F7FA` | Fundo alternado das secoes |
| Preto | `#1A1A2E` | Footer, texto escuro |

---

## Tipografia

| Fonte | Uso | Peso |
|---|---|---|
| **Poppins** | Titulos, botoes, logos, navegacao | 400, 500, 600, 700, 800 |
| **Open Sans** | Corpo de texto, paragrafos | 400, 600, 700 |

Ambas as fontes sao carregadas via **Google Fonts**.

---

## Responsividade

O site foi construido com abordagem **Mobile-First** e utiliza 3 breakpoints:

| Breakpoint | Dispositivo | Comportamento |
|---|---|---|
| `< 480px` | Smartphones pequenos | Colunas empilhadas, botoes full-width, stats verticais |
| `480px - 768px` | Smartphones grandes | Grid de 1 coluna, menu hamburger ativo |
| `768px - 1024px` | Tablets | Grid de 2 colunas, layout adaptado |
| `> 1024px` | Desktop | Layout completo, nav horizontal, grid 3-4 colunas |

### Componentes Responsivos
- **Header:** Transparente no hero -> Solido ao rolar (apenas na index)
- **Menu:** Horizontal em desktop -> Hamburger lateral em mobile
- **Hero:** Texto centralizado, botoes empilhados em mobile
- **Cards/Features:** Grid auto-fit com `minmax()`
- **Tabelas:** Overflow horizontal em mobile
- **Footer:** 4 colunas em desktop -> 1 coluna em mobile
- **Formulario:** Split layout em desktop -> Empilhado em mobile
- **Galeria:** Grid responsivo de 1 a 4 colunas

---

## Tecnologias Utilizadas

- **HTML5** — Semantico, acessivel (`aria-label`, `alt`, `title`)
- **CSS3** — Custom Properties, Grid, Flexbox, Transitions, Keyframes
- **JavaScript ES6+** — Vanilla, sem dependencias
- **[Font Awesome 6.5](https://fontawesome.com/)** — Icones via CDN
- **[Google Fonts](https://fonts.google.com/)** — Poppins e Open Sans

### APIs Externas
- **Google Maps Embed API** — Mapa interativo na pagina de contato

### Licenca
Este projeto esta sob a licenca MIT.
<p align="center">
  Desenvolvido com dedicacao para o <strong>Colegio Futura Anglo</strong> - Vrzea Paulista, SP
</p>
<p align="center">
  <img src="https://img.shields.io/badge/Feito%20com-HTML5%20%7C%20CSS3%20%7C%20JS-blue?style=for-the-badge" alt="Feito com HTML5, CSS3 e JS">
</p>
```
