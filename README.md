# Sistema de Controle e Padronização de Lotes para Cosméticos Artesanais

Aplicação web desenvolvida em HTML, CSS e JavaScript para cálculo automatizado de insumos, geração de ficha técnica e impressão de etiquetas padronizadas para produção de cosméticos artesanais.

---

## 🎯 Objetivo

Automatizar o processo de:

- Cálculo proporcional de matérias-primas
- Geração de lote com rastreabilidade
- Emissão de ficha técnica de produção
- Impressão de etiquetas organizadas em formato A4
- Padronização de produção artesanal

---

## 🚀 Funcionalidades

- Cálculo automático de insumos com base na quantidade informada (ml)
- Geração automática de número de lote
- Registro de data e hora da produção
- Impressão de ficha técnica em PDF
- Geração dinâmica de 24 etiquetas por página (4 colunas x 6 linhas)
- Layout otimizado para impressão A4
- Interface responsiva

---

## 🧮 Fórmula Utilizada (Hidratante)

| Insumo | Percentual |
|--------|------------|
| Base de creme | 16.1% |
| Água desmineralizada | 69.7% |
| Nipagin | 0.2% |
| Propilenoglicol | 4.3% |
| Óleo vegetal | 3.2% |
| Extrato glicólico | 3.2% |
| Essência | 3.2% |
| Ureia | 3.2% |

O sistema calcula automaticamente os valores proporcionais à quantidade inserida.

--

## 🏷️ Sistema de Etiquetas

- Geração dinâmica de 24 etiquetas por página
- Estrutura em Grid CSS (4 por linha)
- Informações incluídas:
  - Composição
  - Responsável técnico
  - Observações
  - Número do lote
  - Data de fabricação
  - Validade (6 meses)

---

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Grid Layout + Media Queries)
- JavaScript Vanilla
- Print Media Queries (@media print)

---

## 📄 Impressão

O sistema utiliza:

- `window.print()`
- `@media print`
- Configuração A4
- Ocultação automática de elementos não necessários na impressão

---

## 💡 Possíveis Melhorias Futuras

- Exportação direta em PDF sem reload
- Banco de dados para histórico de lotes
- Cadastro de múltiplas fórmulas
- Sistema multi-produto
- Controle de validade automatizado
- Versão PWA

---

## 📌 Status do Projeto

✔ Funcional  
✔ Estruturado  
✔ Utilizável comercialmente  

---

## 📸 Screenshots

<img src="assets/screenshots/telainicio.png" width="600">
<img src="assets/screenshots/telacalculo.png" width="600">
<img src="assets/screenshots/telaetiquetas.png" width="600">

### Tela Principal
![Tela Principal](assets/screenshots/telainicio.png)

### Cálculo de Insumos
![Cálculo](assets/screenshots/telacalculo.png)

### Geração de Etiquetas
![Etiquetas](assets/screenshots/telaetiquetas.png)

---

## 👩‍💻 Desenvolvido por

Sâmea Brazão
