# Academia MOVE-SR · Case study de UX/UI Design

Portfólio em página única dedicado exclusivamente ao projeto **Academia MOVE-SR**, uma proposta de aplicativo mobile para organizar treinos, aulas, evolução, pagamentos e gestão de uma academia em uma única experiência.

**Autora:** Abigaiu Porto do Prado · UX/UI Design · Product Design

## Sobre o projeto

Projeto acadêmico de UX/UI e prototipação, desenvolvido na **Fatec São Roque** para a disciplina **Projeto de Navegação e Interação**.

- Plataforma: mobile
- Perfis: aluno, professor e gestão
- Ferramenta: Figma
- Escopo: UX/UI, arquitetura da informação, fluxos, wireframes, design system e protótipo

Observações importantes:

- O aplicativo **não foi desenvolvido**. O que existe é o design e o protótipo navegável no Figma.
- O questionário exploratório **não foi aplicado a usuários reais** e serviu de apoio às hipóteses de projeto.
- As personas são **fictícias**, criadas para fins acadêmicos.
- Não houve testes de usabilidade com usuários reais.

## O que o case study apresenta

Problema, pesquisa exploratória, personas, jornada do usuário, requisitos, arquitetura da informação, user flows, wireframes, design system, interface final, interações, protótipo, resultado (dados de produção), aprendizados e próximos passos.

## Tecnologias

- HTML5
- CSS3
- JavaScript (vanilla)
- Fonte: Space Grotesk (Google Fonts)

Não usa frameworks nem bibliotecas. Funciona direto no navegador.

## Estrutura de arquivos

```text
move-sr-portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── (imagens exportadas do Figma)
```

## Imagens

Todas as imagens ficam na pasta `assets/`. Exporte do Figma em PNG (2x) e use exatamente estes nomes, em minúsculas e sem espaços:

| Seção | Arquivos |
|---|---|
| Arquitetura | `arquitetura.png` |
| Fluxos | `fluxos.png` |
| Wireframes compartilhados | `wireframe-login.png`, `wireframe-recuperacao.png`, `wireframe-configuracoes.png` |
| Wireframes aluno | `wireframe-aluno-home.png`, `wireframe-aluno-treinos.png`, `wireframe-aluno-evolucao.png`, `wireframe-aluno-perfil.png` |
| Wireframes professor | `wireframe-professor-home.png`, `wireframe-professor-alunos.png`, `wireframe-professor-treinos.png`, `wireframe-professor-agenda.png` |
| Wireframes gestão | `wireframe-gestao-home.png`, `wireframe-gestao-alunos.png`, `wireframe-gestao-financeiro.png`, `wireframe-gestao-professores.png` |
| UI aluno | `aluno-home.png`, `aluno-treino.png`, `aluno-evolucao.png`, `aluno-aulas.png`, `aluno-pagamentos.png`, `aluno-perfil.png` |
| UI professor | `professor-home.png`, `professor-alunos.png`, `professor-treino.png`, `professor-avaliacao.png`, `professor-agenda.png`, `professor-perfil.png` |
| UI gestão | `gestao-home.png`, `gestao-alunos.png`, `gestao-financeiro.png`, `gestao-professores.png`, `gestao-turmas.png`, `gestao-comunicados.png` |

As imagens do hero e a do protótipo reutilizam `aluno-home.png`, `aluno-treino.png` e `aluno-evolucao.png`.

Se alguma imagem não existir, a página mostra um quadro tracejado com o nome do arquivo esperado.

### Alterar nomes e legendas das galerias

As galerias de wireframes e de interface final são montadas pelo `script.js`. Para mudar um arquivo, uma legenda, ou adicionar e remover telas, edite o objeto `GALLERIES` no início desse arquivo.

## Links

No `index.html`, procure e substitua:

- `COLE_AQUI_O_LINK_DO_GITHUB`: link do seu perfil ou repositório no GitHub.

Para que o botão "Abrir protótipo" leve direto ao protótipo navegável, no Figma use **Share → Share prototype → Copy link** e troque o link do Figma nos botões da seção 14 e do CTA final.

## Como rodar localmente

1. Abra a pasta `move-sr-portfolio` no VS Code.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.

Também é possível abrir o `index.html` diretamente no navegador.

## Como publicar no GitHub Pages

1. Crie um repositório público no GitHub, por exemplo `move-sr-portfolio`.
2. Envie `index.html`, `style.css`, `script.js` e a pasta `assets/` com as imagens.
3. Vá em **Settings → Pages**.
4. Em **Source**, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)`, e salve.
5. Aguarde de 1 a 2 minutos. O site ficará em `https://SEU-USUARIO.github.io/move-sr-portfolio/`.

Para usar um domínio próprio, preencha **Custom domain** na mesma tela e configure o DNS no provedor.

O GitHub Pages diferencia maiúsculas de minúsculas e pode ter problemas com acentos em nomes de arquivo. Use sempre nomes em minúsculas, sem acentos e sem espaços.

## Identidade visual

| Cor | Hex | Uso |
|---|---|---|
| Cinza escuro | `#332F2F` | Seções escuras e textos |
| Preto | `#000000` | Navbar, hero e contraste |
| Verde-limão | `#DCF230` | Somente destaque |
| Branco | `#FFFFFF` | Fundo e textos sobre escuro |

Tipografia: **Space Grotesk**. Sem gradientes, sem efeito de vidro e sem emojis.

## Acessibilidade

- HTML semântico
- Texto alternativo nas imagens
- Foco visível para navegação por teclado
- Link "Ir para o conteúdo"
- Menu mobile e lightbox acessíveis por teclado (Esc fecha o lightbox)
- Respeito a `prefers-reduced-motion`

## Interações em JavaScript

Menu mobile, rolagem suave, lightbox das imagens, animação leve de entrada dos títulos, navbar com destaque durante a rolagem, botão de voltar ao topo e pequenos exemplos interativos na seção de interações.

## Créditos

Design, pesquisa exploratória e prototipação: **Abigaiu Porto do Prado**
Instituição: Fatec São Roque · Disciplina: Projeto de Navegação e Interação

Todos os direitos reservados ao conteúdo do projeto.
