# ProjetoEconobust 🛠️

> Sistema para Cálculo de Economia de Combustível

---
<img width="800" height="400" alt="image" src="https://github.com/user-attachments/assets/5c8585aa-91a5-46ff-8d16-335aaa306be1" />

## 🎯 Visão Geral

O **ProjetoEconobust** é uma aplicação simples desenvolvida em **HTML**, **CSS** e **JavaScript**, que permite calcular a economia de combustível de um veículo com base nos dados informados pelo usuário.
Ele ajuda motoristas a estimarem o consumo e a economia de combustível — útil para planejamento de viagens, manutenção e análises de custos.

---

## 📋 Funcionalidades

* Entrada de dados: distância percorrida, quantidade de combustível consumida ou preço do combustível
* Cálculo automático de **litros por quilômetro (km/L)** ou **quilômetros por litro (km/L)**
* Estimativa de custo de combustível para uma distância dada
* Interface visual simples e intuitiva, adequadas para uso direto no navegador
* Design responsivo para dispositivos móveis

---

## 🧩 Tecnologias Utilizadas

* **HTML** – marcação da interface
* **CSS** – estilização e layout
* **JavaScript** – lógica de cálculo e interatividade
* Deploy via GitHub Pages (ou hospedagem estática)

---

## 🚀 Como Usar

1. Clone o repositório

   ```bash
   git clone https://github.com/devsrenata/ProjetoEconobust.git  
   ```
2. Acesse a pasta do projeto

   ```bash
   cd ProjetoEconobust  
   ```
3. Abra o arquivo `index.html` no seu navegador
4. Preencha os campos solicitados (distância, combustível, preço)
5. Veja o resultado da economia de combustível
6. Opcional: modifique o CSS/JS para personalizar ou estender a aplicação

---

## 🔍 Como Funciona o Cálculo

O sistema realiza os seguintes cálculos básicos:

* Consumo = quantidade de combustível usado ÷ distância percorrida
* Economia = inverso ou cálculo específico escolhido (por exemplo, km por litro)
* Custo estimado = distância planejada × (preço do combustível ÷ consumo)
  Você pode adaptar ou estender essas fórmulas conforme seu cenário.

---

## 🧪 Exemplos de Uso

* Vamos supor: você percorreu **200 km** e usou **15 litros** de combustível

  * Consumo = 200 km ÷ 15 L ≈ 13,33 km/L
* Se o preço do combustível for R$ 5,50/L e quiser saber o custo para **300 km**

  * Consumo estimado = 300 km ÷ 13,33 km/L ≈ 22,5 L
  * Custo estimado ≈ 22,5 L × R$ 5,50/L ≈ R$ 123,75

---

## 📂 Estrutura do Projeto

```
ProjetoEconobust/
├── css/
│   └── styles.css        ← estilos da página
├── img/
│   └── …                 ← imagens ou ícones usados
├── js/
│   └── script.js         ← lógica de cálculo em JavaScript
├── index.html            ← página principal
├── README.md             ← este arquivo de documentação
└── LICENSE               ← licença MIT
```

 https://devsrenata.github.io/ProjetoEconobust/
 
 Projeto desenvolvido com HTML, CSS E JS.
