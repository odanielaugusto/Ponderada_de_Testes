# **Padrões Gerais para Uso do GitHub**  

## **1. Nome de Arquivos**  
- **Formato:** `snake_case` (sempre em inglês).  
- **Regra:** Utilize nomes descritivos e curtos, evitando espaços e caracteres especiais.  
- **Exemplo:**  
  ```
  file_name.txt
  user_data.json
  ```

---

## **2. Nome de Branch**  
- **Estrutura Geral:**  
  ```
  [tipo de branch]/[finalidade]/[nome-da-branch]
  ```

### **Tipos de Branch:**  
- **`feature`**: Implementação de uma nova funcionalidade  
- **`bugfix`**: Correção de um bug identificado  
- **`hotfix`**: Correção urgente em produção  
- **`release`**: Preparação de uma nova versão  
- **`support`**: Suporte técnico ou manutenção específica  

#### **Finalidade da Branch:**  
- **`docs`** (documentação):  
  - **Padrão:** O nome deve seguir a **seção e o título** a que a documentação se refere.  
  - **Exemplos:**  
    ```
    docs/2.1-propostas-e-solucoes  
    docs/4.1.2-analise-swot 
    ```

- **`dev`** (desenvolvimento):  
  - **Padrão:** O nome deve **resumir a funcionalidade ou correção** que está sendo trabalhada.  
  - **Exemplos:**  
    ```
    bugfix/dev/correcoes-login  
    feature/dev/api-autenticacao  
    ```

**Observação:**  
- Utilize sempre **hífens (`-`)** para separar palavras no nome da branch.  

---

## **3. Descrição de Commits**  
A descrição de commits deve indicar de forma clara o que a alteração faz. Use frases curtas no **presente do indicativo**, pensando no efeito que o commit causa, como se começasse com: **"Se aplicado, este commit..."**. 

- **Padrão de Formatação:**  
  ```
  [tipo]: [descrição breve do que foi alterado]
  ```
- **Tipos mais comuns de commit:**  
  - `feat`: Adição de uma nova funcionalidade  
  - `fix`: Correção de um bug  
  - `refactor`: Refatoração de código sem alterar funcionalidade  
  - `style`: Alterações de estilo ou formatação (sem impacto funcional)  
  - `perf`: Otimizações de performance  
  - `test`: Adição ou atualização de testes  
  - `docs`: Alterações na documentação  
  - `chore`: Tarefas auxiliares (como atualização de dependências)

- **Exemplos:**  
  ```
  feat(client-list/filter): adiciona filtro por data na listagem de clientes  

  fix: corrige erro de validação no formulário de cadastro 

  refactor: reorganiza funções de utilidade em um arquivo separado  
  
  test(auth/login): adiciona testes unitários para o componente de login  

  style: remove espaços em branco no main.css  

  docs: adiciona seção de exemplos na documentação da API  

  chore(deps/build): atualiza dependências do projeto  

  perf: otimiza consulta de clientes para reduzir o tempo de resposta  
  ```

**Observação:** Se necessário, adicione comentários adicionais na descrição longa do commit (usando `git commit -m` e `-m` para múltiplas linhas).

---

## **4. Estrutura de Pastas**  
Os assets utilizados na documentação devem ser organizados por **seções** para manter a estrutura clara e modular. Caso um tópico específico exija mais de um asset, crie uma **pasta dedicada** para o mesmo.  

- **Modelo de Organização:**  
  ```
  assets/[seção]/[nome-do-asset-ou-pasta]
  ```

- **Exemplos:**  
  ```
  assets/section4/swot_analysis.png  
  assets/section4/4.1.6_personas/persona_pedro.png  
  assets/section4/4.1.6_personas/persona_paulo.png  
  ```

**Observação:**  
- Use **snake_case** nos nomes das pastas e arquivos.  
- Organize os arquivos e imagens sempre dentro da pasta de seção correspondente para fácil localização.

---

## **5. Nome de Pull Request (PR)**  
- **Regra:** O PR deve ser revisado pelo **Revisor** designado para a sua tarefa.  
- **Formato:**  
  ```
  [tipo]: [descrição breve do que foi feito] #[número-da-task-associada]
  ```
- **Tipos comuns de PR:**  
  - `feat`: Funcionalidades  
  - `fix`: Correções  
  - `docs`: Alterações de documentação  
  - `chore`: Manutenções ou atualizações internas  
  - `refactor`: Refatorações  

- **Exemplo:**  
  ```
  feat: adiciona filtro por data na listagem de clientes #21  
  fix: corrige erro de autenticação no login #32  
  docs: atualiza exemplos de uso na documentação da API #18  
  ```

---

## **6. Boas Práticas para Uso do GitHub**  
1. **Commits Pequenos e Frequentes:**  
   - Faça commits frequentes com alterações pequenas e coesas. Isso facilita o tracking e reverte alterações indesejadas mais facilmente.  
   
2. **Sempre Crie uma Branch Nova para Cada Task:**  
   - Não faça alterações diretamente na branch `main` ou `develop`. Use uma nova branch para cada tarefa ou correção específica.

3. **Revisão e Abertura de PR:**  
   - Ao abrir um PR, descreva claramente o que foi feito e associe-o à task correspondente no repositório.  
   - Solicite revisão do **Revisor** designado no time para garantir que a alteração esteja correta antes do merge.

4. **Nomeação Clara de Arquivos e Pastas:**  
   - Use nomes descritivos e organizados conforme o padrão estabelecido. Isso facilita a localização e leitura do projeto.  

---
