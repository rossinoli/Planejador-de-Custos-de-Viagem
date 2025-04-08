# Planejador de Custos de Viagem (Ionic/Angular)
Este projeto é um aplicativo de planejamento de custos de viagem desenvolvido com o framework Ionic e Angular. O objetivo é permitir aos usuários estimar os custos totais de suas viagens de forma detalhada e organizada, cobrindo as principais categorias de gastos.

## Funcionalidades

O aplicativo permite calcular e consolidar os seguintes custos:

*   **Cálculo de Custo de Transporte:**
    *   Permite estimar custos com base no tipo (Carro, Ônibus, Avião).
    *   Para 'Carro': considera distância, consumo médio (km/L) e preço do combustível (R$/L).
    *   Para 'Ônibus' ou 'Avião': considera o valor da passagem de ida e volta.
*   **Cálculo de Custo de Hospedagem:**
    *   Estima custos com base no número de noites, número de pessoas e custo médio da diária por pessoa.
*   **Cálculo de Custo de Alimentação:**
    *   Calcula os gastos com refeições considerando o número de dias da viagem, número de pessoas, média de refeições por dia e custo médio por refeição.
*   **Cálculo de Atrações e Custos Extras:**
    *   Permite adicionar custos estimados para atrações turísticas (número de atrações x custo médio).
    *   Permite adicionar um valor extra para imprevistos, que pode ser:
        *   Um **Valor Fixo** (R$).
        *   Uma **Porcentagem (%)** calculada sobre o subtotal dos outros custos (Transporte, Hospedagem, Alimentação, Atrações).
*   **Exibição do Custo Total:**
    *   Apresenta um resumo consolidado e atualizado de todos os custos estimados na tela principal.
*   **Interface Intuitiva:**
    *   Utiliza modais dedicados para cada categoria de custo, mantendo a tela principal limpa e focada no resultado total.

## Estrutura do Projeto (Tela Principal + Modais)

O aplicativo possui uma estrutura simples e focada:

*   **Tela Principal (`HomePage`):**
    *   Exibe os custos calculados para cada categoria (Transporte, Hospedagem, Alimentação, Atrações, Extras).
    *   Mostra o **Custo Total Estimado** da viagem.
    *   Contém botões para abrir os modais de cálculo específicos.
    *   Possui um botão para resetar todos os custos.
*   **Modais de Cálculo:**
    *   **`TransportModalComponent`**: Para inserir dados e calcular custos de transporte.
    *   **`AccommodationModalComponent`**: Para inserir dados e calcular custos de hospedagem.
    *   **`FoodModalComponent`**: Para inserir dados e calcular custos de alimentação.
    *   **`ExtrasModalComponent`**: Para inserir dados e calcular custos de atrações e definir o valor/tipo do custo extra.

## Tecnologias Utilizadas

*   **Ionic Framework (v7+):** Framework UI para desenvolvimento híbrido.
*   **Angular (v16+):** Framework para desenvolvimento web/mobile.
    *   **Componentes Standalone:** Utiliza a arquitetura moderna de componentes do Angular.
*   **TypeScript:** Superset do JavaScript para tipagem estática.
*   **HTML:** Linguagem de marcação para estrutura.
*   **SCSS:** Pré-processador CSS para estilização.
*   **RxJS:** Para programação reativa e gerenciamento de estado (via `BehaviorSubject` no `CostService`).
*   **Capacitor:** Para acesso a funcionalidades nativas (opcional, mas incluído na criação do projeto Ionic).

## Instalação e Execução

Para executar este projeto localmente, você precisará ter o Node.js, npm e a Ionic CLI instalados.

1.  **Clone o repositório:**
    ```bash
    git clone https://[URL-DO-SEU-REPOSITORIO]/planejador-custos-viagem.git
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd planejador-custos-viagem
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Execute o aplicativo no navegador:**
    ```bash
    ionic serve
    ```
    O aplicativo estará disponível em `http://localhost:8100` (ou outra porta indicada).

5.  **(Opcional) Para executar em dispositivos/emuladores:**
    *   Adicione a plataforma desejada:
        ```bash
        ionic capacitor add android
        # ou
        ionic capacitor add ios
        ```
    *   Compile e execute na plataforma (com live-reload):
        ```bash
        ionic capacitor run android -l --external
        # ou
        ionic capacitor run ios -l --external
        ```
        (Pode requerer configuração adicional do ambiente de desenvolvimento Android/iOS).

## Autor

*   **Thaina* *L.* *Rossinoli* - Desenvolvedor

## Agradecimentos

*   [Opcional: Agradeça a professores, mentores, colegas ou comunidades que ajudaram.]
*   Agradecimento pela inspiração na estrutura da documentação do projeto Calculadora-Multi-Funcional.

## Licença

Este projeto é licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes (se você criar um).
