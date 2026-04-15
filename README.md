# Rastreador de Despesas

> `web_project_expenses_pt` — Rastreador de despesas pessoais com estatísticas por categoria, persistência local e feedback visual de saldo.

---

## Problema

Controle financeiro pessoal costuma ser disperso e manual. A necessidade era clara: uma forma simples de definir um orçamento, registrar despesas, monitorar o saldo e entender onde o dinheiro está indo, tudo sem depender de planilhas ou ferramentas externas.

O desafio técnico: transformar uma página HTML estática em uma aplicação funcional, implementando toda a lógica em JavaScript puro e conectando os cálculos à interface de forma reativa.

---

## Solução

Uma aplicação web single-page que permite ao usuário:

- Definir um orçamento inicial
- Adicionar e remover despesas por categoria
- Visualizar estatísticas gerais: total gasto, média e saldo atual
- Identificar a categoria com maior gasto
- Acompanhar os gastos separados por categoria: **Mercado, Comer fora, Transporte, Casa e Assinaturas**
- Persistir os dados via `localStorage` — os dados sobrevivem ao refresh da página
- Resetar tudo com um clique

O saldo é exibido com cor dinâmica conforme a situação financeira do usuário.

---

## Arquitetura

```
├── blocks
│   ├── budget.css
│   ├── button.css
│   ├── content.css
│   ├── controls.css
│   ├── expense.css
│   ├── expenses.css
│   ├── footer.css
│   ├── header.css
│   ├── modal.css
│   ├── page.css
│   └── stats.css
├── images
│   └── delete-icon.svg
├── index.html
├── pages
│   └── index.css
├── README.md
├── scripts
│   ├── calculations.js
│   ├── handle-html.js
│   └── index.js
└── vendor
    ├── fonts
    │   ├── Manrope-Bold.ttf
    │   ├── Manrope-Medium.ttf
    │   ├── Manrope-Regular.ttf
    │   └── Montserrat-Bold.ttf
    ├── fonts.css
    └── normalize.css
```

| Arquivo           | Responsabilidade                                   |
| ----------------- | -------------------------------------------------- |
| `index.html`      | Estrutura da interface                             |
| `calculations.js` | Regras de negócio, cálculos e manipulação de dados |
| `handle-html.js`  | Atualização do DOM                                 |
| `index.js`        | Inicialização da aplicação                         |

**Fluxo lógico:**

```
Usuário interage → função JS executa → dados atualizados → DOM atualizado → localStorage salvo
```

---

## Decisões Técnicas

**Array como estrutura de despesas**

```javascript
[
  ["groceries", 33],
  ["restaurants", 50],
];
```

Arrays de pares facilitam iteração, soma, filtro por categoria e remoção de itens — sem overhead de estruturas mais complexas.

**Separação por funções**

Cada responsabilidade tem sua própria função: `calculateAverageExpense()`, `calculateBalance()`, `updateBalanceColor()`, `calculateCategoryExpenses()`, `calculateLargestCategory()`, `addExpenseEntry()`. Isso reduz duplicação, melhora a legibilidade e simplifica a manutenção.

**Persistência com `localStorage`**

Simula persistência sem necessidade de backend. Os dados do usuário são mantidos entre sessões de forma transparente.

**Feedback visual por cor**

| Condição                         | Cor      |
| -------------------------------- | -------- |
| Saldo negativo                   | Vermelho |
| Saldo abaixo de 25% do orçamento | Laranja  |
| Saldo saudável                   | Verde    |

Decisão voltada à UX: o usuário entende sua situação financeira de relance, sem precisar analisar números.

---

## Como Executar

```bash
git clone <url-do-repositório>
cd web_project_expenses_pt
```

Abra o arquivo `index.html` diretamente no navegador, ou utilize a extensão **Live Server** no VS Code para recarregamento automático.

---

## Próximos Passos

- Backend com Node.js e banco de dados para persistência real
- Autenticação de usuário
- Categorias personalizáveis
- Dashboard com gráficos
- Filtros por período e relatórios mensais
- Exportação em CSV e PDF
- Integração com APIs financeiras
