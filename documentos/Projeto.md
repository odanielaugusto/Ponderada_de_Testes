<Table>
  <tr>
    <td><a href= "https://www.cps.sp.gov.br/"><img src="img/logo-CPS.jpg" alt="Centro Paula Souza" border="0"></td>
    <td>
      <a href= "https://www.inteli.edu.br/"><img src="img/logo-Inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
    </td>
  </tr>
</table>

# Nome do Projeto: <TODO>

## Nome do Grupo: <TODO>

## Integrantes:

- <a href="https://www.linkedin.com/in/anna-riciopo/">Anna Giulia Marques Riciopo</a>  
- <a href="https://www.linkedin.com/in/danielaraujogonncalves/">Daniel Augusto de Araujo Gonçalves</a>  
- <a href="https://www.linkedin.com/in/joao-souza-campos/">João Victor de Souza Campos</a>  
- <a href="https://www.linkedin.com/in/lucas-brasil9/">Lucas Paiva Brasil</a>  
- <a href="https://www.linkedin.com/in/natalycunha/">Nataly de Souza Cunha</a>  
- <a href="https://www.linkedin.com/in/otavio-vasc/">Otávio Vasconcelos</a>  
- <a href="https://www.linkedin.com/in/thiagogomesalmeida/">Thiago Gomes de Almeida</a> 

# Sumário

- [1. Introdução](#1-introdução)
  - [1.1 Termos e Abreviações](#11-termos-e-abreviações)
  - [1.2 Objetivo do Documento](#12-objetivo-do-documento)
- [2. Entendimento do Projeto e do Negócio](#2-entendimento-do-projeto-e-do-negócio)
  - [2.1 Contexto da Indústria do Parceiro](#21-contexto-da-indústria-do-parceiro)
  - [2.2 Problema](#22-problema)
  - [2.3 Visão do Projeto e do Produto](#23-visão-do-projeto-e-do-produto)
  - [2.4 Personas e Jornada do Usuário](#24-personas-e-jornada-do-usuário)
  - [2.5 Modelagem do Fluxo de Negócio](#25-modelagem-do-fluxo-de-negócio)
    - [2.5.1 Fluxo de Negócio Atual (AS-IS)](#251-fluxo-de-negócio-atual-as-is)
    - [2.5.2 Fluxo de Negócio Proposto (TO-BE)](#252-fluxo-de-negócio-proposto-to-be)
  - [2.6 Matriz de Risco do Projeto](#26-matriz-de-risco-do-projeto)
  - [2.7 Ideação](#27-ideação)
    - [2.7.1 Brainstorming de features](#271-brainstorming-de-features)
    - [2.7.2 Sequenciamento/Priorização de entregas](#272-sequenciamentopriorização-de-entregas)
  - [2.8 Canvas do Projeto](#28-canvas-do-projeto)
- [3. Requisitos do Projeto](#3-requisitos-do-projeto)
  - [3.1 Requisitos Funcionais (RFs)](#31-requisitos-funcionais-rfs)
  - [3.2 Requisitos Não Funcionais (RNFs)](#32-requisitos-não-funcionais-rnfs)
  - [3.3 Correlação RFs e RNFs](#33-correlação-rfs-e-rnfs)
- [4. Modelagem de Dados](#4-modelagem-de-dados)
  - [4.1 Modelo Conceitual de Dados](#41-modelo-conceitual-de-dados)
  - [4.2 Modelo Lógico de Dados](#42-modelo-lógico-de-dados)
  - [4.3 Modelo Físico de Dados](#43-modelo-físico-de-dados)
- [5. Solução Técnica (Design)](#5-solução-técnica-design)
  - [5.1 Diagrama de Componentes da UML](#51-diagrama-de-componentes-da-uml)
  - [5.2 Diagramas de Sequência da UML](#52-diagramas-de-sequência-da-uml)
  - [5.3 Descrição Textual dos Diagramas](#53-descrição-textual-dos-diagramas)
- [6. Mapeamento Técnico de Infraestrutura e Implantação](#6-mapeamento-técnico-de-infraestrutura-e-implantação)
  - [6.1 Diagrama de Implantação da UML](#61-diagrama-de-implantação-da-uml)
  - [6.2 Justificativa das Escolhas de Implantação](#62-justificativa-das-escolhas-de-implantação)
  - [6.3 Considerações sobre Desempenho e Segurança](#63-considerações-sobre-desempenho-e-segurança)
- [7. Projeto Visual da Solução](#7-projeto-visual-da-solução)
  - [7.1 Desenvolvimento de Wireframes](#71-desenvolvimento-de-wireframes)
  - [7.2 Desenvolvimento de Mockups](#72-desenvolvimento-de-mockups)
  - [7.3 Guia Visual](#73-guia-visual)
- [8. Desenvolvimento do Projeto](#8-desenvolvimento-do-projeto)
  - [8.1 Arquitetura de Codificação e Estrutura de Diretórios](#81-arquitetura-de-codificação-e-estrutura-de-diretórios)
  - [8.2 Desenvolvimento de Features](#82-desenvolvimento-de-features)
    - [8.2.1 Sprint 3](#821-sprint-3)
    - [8.2.2 Sprint 4](#822-sprint-4)
    - [8.2.3 Sprint 5](#823-sprint-5)
  - [8.3 Testes Unitários e de Integração](#83-testes-unitários-e-de-integração)
  - [8.4 Documentações automáticas](#84-documentações-automáticas)
- [9. Planejamento e Execução de Testes](#9-planejamento-e-execução-de-testes)
  - [9.1 Testes Funcionais](#91-testes-funcionais)
    - [9.1.1 Planejamento](#911-planejamento)
    - [9.1.2 Resultados](#912-resultados)
  - [9.2 Testes de RNFs](#92-testes-de-rnfs)
    - [9.2.1 Planejamento](#921-planejamento)
    - [9.2.2 Resultados](#922-resultados)
  - [9.3 Testes de Usabilidade](#93-testes-de-usabilidade)
    - [9.3.1 Planejamento](#931-planejamento)
    - [9.3.2 Resultados](#932-resultados)
- [10. Procedimentos de Implantação](#10-procedimentos-de-implantação)
  - [10.1 Implantação e Configuração do Banco de Dados](#101-implantação-e-configuração-do-banco-de-dados)
  - [10.2 Implantação do Protótipo para uso por equipe de desenvolvimento](#102-implantação-do-protótipo-para-uso-por-equipe-de-desenvolvimento)
- [Referências](#referências)


# 1. Introdução
_conteúdo_

## 1.1 Termos e Abreviações
_conteúdo_

## 1.2 Objetivo do Documento
_conteúdo_

# 2. Entendimento do Projeto e do Negócio
_conteúdo_

## 2.1 Contexto da Indústria do Parceiro
_conteúdo_

## 2.2 Problema
_conteúdo_

## 2.3 Visão do Projeto e do Produto
  _conteúdo_

  **Nota**: _Insira aqui informações sobre o que se trata o projeto e que valor ele vai entregar, Objetivos do Produto e O que o produto faz e não faz._

## 2.4 Personas e Jornada do Usuário
_conteúdo_

## 2.5 Modelagem do Fluxo de Negócio
_conteúdo_

## 2.5.1 Fluxo de Negócio Atual (AS-IS)
_conteúdo_

## 2.5.2 Fluxo de Negócio Proposto (TO-BE)
_conteúdo_

## 2.6 Matriz de Risco do Projeto
_conteúdo_

## 2.7 Ideação
_conteúdo_

## 2.7.1 Brainstorming de features
&nbsp;&nbsp;&nbsp; O brainstorming de features foi realizado com base no problema central do projeto: a necessidade de organizar e gerenciar os atendimentos da Assessoria de Inclusão do Centro Paula Souza (CPS). O objetivo foi identificar funcionalidades que não apenas resolvessem os problemas atuais, como a falta de organização e rastreabilidade dos atendimentos, mas também agregassem valor ao produto, como a geração de relatórios estatísticos e a integração com sistemas existentes. As features foram pensadas para garantir que a solução seja **acessível**, **escalável** e em **conformidade com a LGPD**, atendendo às **necessidades dos servidores, alunos e profissionais envolvidos**.

Durante o brainstorming, foram consideradas features essenciais, como o **cadastro de alunos via API, a gestão de atendimentos e a lista de tecnologias assistivas**, além de funcionalidades complementares, como **notificações e dashboards de gestão**. A ideia foi cobrir todos os aspectos do problema, desde o registro básico de dados até a análise avançada e a comunicação eficiente entre os envolvidos. O resultado é uma lista abrangente de features que servirá como base para o desenvolvimento da solução.

| **Feature**                                      | **Descrição**                                                                                   |
|--------------------------------------------------|-------------------------------------------------------------------------------------------------|
| **Filtros e Buscas Avançadas**                   | Filtros por unidade, curso, tipo de necessidade especial, status de atendimento, etc.           |
| **Dashboard de Informações dos Alunos**          | Visualização centralizada de dados dos alunos cadastrados.                                      |
| **Cadastro de Gerente Geral e Gerente de Unidade**| Cadastro de gerentes com diferentes níveis de acesso e responsabilidades.                      |
| **Cadastro de Alunos via API + Validação de Dados**| Integração com sistemas acadêmicos para cadastro automático, com validação dos dados.          |
| **Cadastro de Unidade de Ensino**                | Cadastro de unidades de ensino (Etecs, Fatecs, etc.) com informações detalhadas.               |
| **Registro de Ações no Sistema (Logs)**          | Registro de quem fez, o que fez e quais dados foram alterados no sistema.                       |
| **Gestão de Profissionais**                      | Cadastro de profissionais e vínculo com alunos, com datas de início e fim de atendimento.       |
| **Gestão de Atendimentos**                       | Registro de data e hora de início e fim, tipo de atendimento e profissional responsável.        |
| **Histórico Completo do Aluno**                  | Visualização de atendimentos, tecnologias assistivas utilizadas e profissionais vinculados.     |
| **Lista de Tecnologias Assistivas**              | Lista organizada de tecnologias disponíveis, com descrições detalhadas.                        |
| **Notificações**                                 | Envio de notificações para responsáveis e profissionais sobre atendimentos e prazos.            |
| **Status de Atendimento**                        | Indicador visual (ativo, em espera, concluído) do status do atendimento do aluno.               |
| **Timeline do Aluno**                            | Linha do tempo com todos os eventos e atendimentos relacionados ao aluno.                       |
| **Relatórios e Estatísticas**                    | Geração de relatórios sobre tipos de atendimentos, necessidades atendidas, origem dos alunos, etc. |
| **Exportação de Dados de Alunos**                | Exportação de dados de alunos para planilhas (CSV ou Excel) para análise externa.               |

## 2.7.2 Sequenciamento/Priorização de entregas

&nbsp;&nbsp;&nbsp; O sequenciamento e a priorização das entregas foram definidos com base em critérios claros e lógicos, como **impacto no problema central** e **dependências técnicas**. O objetivo foi garantir que o **MVP (Minimum Viable Product)** seja entregue dentro do prazo de **70 dias**, com funcionalidades que resolvam os problemas mais urgentes da Assessoria de Inclusão. As features foram organizadas em sprints, começando pela base do sistema (cadastros essenciais) e evoluindo para funcionalidades mais complexas, como a gestão de atendimentos e a geração de relatórios.

### **Critérios de Priorização**

1. **Impacto no Problema Central**:
   - Features que resolvem diretamente o problema de gestão de atendimentos e cadastro de alunos foram priorizadas.
2. **Dependências Técnicas**:
   - Features que dependem de outras para funcionar foram sequenciadas após a implementação das bases.
3. **Conformidade Legal e Acessibilidade**:
   - Features relacionadas à segurança, LGPD e acessibilidade foram priorizadas desde o início.
4. **Valor Agregado**:
   - Features que agregam valor ao produto, mas não são urgentes, foram deixadas para as sprints finais.
5. **Complexidade de Implementação**:
   - Features mais simples e de rápida implementação foram priorizadas para entregar valor rapidamente.


### **Sequenciamento das Entregas**

#### **Sprint 1 – Base do Sistema e Cadastros Essenciais**
- **Features Prioritárias**:

  1. **Cadastro de Gerente Geral e Gerente de Unidade**:
     - Definição de níveis de acesso e responsabilidades.
  2. **Cadastro de Unidade de Ensino**:
     - Cadastro de unidades (Etecs, Fatecs) com informações básicas.
  3. **Cadastro de Alunos via API + Validação de Dados**:
     - Integração com sistemas acadêmicos para cadastro automático e validação de dados.

- **Justificativa**:
  - Essas features são a base do sistema, permitindo que outras funcionalidades sejam construídas sobre elas.


#### **Sprint 2 – Gestão de Dados e Visualização Inicial**
- **Features Prioritárias**:

  4. **Dashboard de Informações dos Alunos**:
     - Visualização centralizada de dados dos alunos cadastrados.
  5. **Filtros e Buscas Avançadas**:
     - Filtros por unidade, curso, tipo de necessidade especial, status de atendimento, etc.
  6. **Gestão de Profissionais**:
     - Cadastro de profissionais e vínculo com alunos, com datas de início e fim de atendimento.

- **Justificativa**:
  - Essas features permitem a visualização e organização dos dados, além de iniciar a gestão de profissionais, que é essencial para os atendimentos.


#### **Sprint 3 – Gestão de Atendimentos e Logs**
- **Features Prioritárias**:

  7. **Gestão de Atendimentos**:
     - Registro de data e hora de início e fim, tipo de atendimento e profissional responsável.
  8. **Registro de Ações no Sistema (Logs)**:
     - Registro de quem fez, o que fez e quais dados foram alterados no sistema.

- **Justificativa**:
  - A gestão de atendimentos é o cerne do projeto, e os logs garantem conformidade com a LGPD e auditoria das ações.


#### **Sprint 4 – Histórico e Tecnologias Assistivas**
- **Features Prioritárias**:

  9. **Histórico Completo do Aluno**:
     - Visualização de atendimentos, tecnologias assistivas utilizadas e profissionais vinculados.
  10. **Lista de Tecnologias Assistivas**:
      - Lista organizada de tecnologias disponíveis, com descrições detalhadas.
  11. **Status de Atendimento**:
      - Indicador visual (ativo, em espera, concluído) do status do atendimento do aluno.

- **Justificativa**:
  - Essas features complementam a gestão de atendimentos, fornecendo informações detalhadas e status atualizados.


#### **Sprint 5 – Funcionalidades Avançadas e Finalização**
- **Features Prioritárias**:

  12. **Timeline do Aluno**:
      - Linha do tempo com todos os eventos e atendimentos relacionados ao aluno.
  13. **Notificações**:
      - Envio de notificações para responsáveis e profissionais sobre atendimentos e prazos.

- **Justificativa**:
  - Essas features agregam valor ao produto, mas não são urgentes para o MVP. A Timeline melhora a experiência do usuário, e as notificações aumentam a eficiência da comunicação.



### **Tabela de Sequenciamento de Entregas**

| **Sprint** | **Features Prioritárias**                                                                 | **Justificativa**                                                                 |
|------------|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| **Sprint 1** | Cadastro de Gerente Geral e Gerente de Unidade, Cadastro de Unidade de Ensino, Cadastro de Alunos via API + Validação de Dados | Base do sistema, permitindo que outras funcionalidades sejam construídas sobre elas. |
| **Sprint 2** | Dashboard de Informações dos Alunos, Filtros e Buscas Avançadas, Gestão de Profissionais   | Visualização e organização dos dados, além de iniciar a gestão de profissionais.   |
| **Sprint 3** | Gestão de Atendimentos, Registro de Ações no Sistema (Logs)                               | Centro do projeto e garantia de conformidade com a LGPD.                           |
| **Sprint 4** | Histórico Completo do Aluno, Lista de Tecnologias Assistivas, Status de Atendimento        | Complementam a gestão de atendimentos com informações detalhadas e status.        |
| **Sprint 5** | Timeline do Aluno, Notificações                                                           | Agregam valor ao produto, melhorando a experiência do usuário e a comunicação.    |

## 2.8 Canvas do Projeto
_conteúdo_

# 3. Requisitos do Projeto
_conteúdo_

## 3.1 Requisitos Funcionais (RFs)
_conteúdo_ 

## 3.2 Requisitos Não Funcionais (RNFs)
_conteúdo_

## 3.3 Correlação RFs e RNFs
_conteúdo_

# 4. Modelagem de Dados
_conteúdo_

## 4.1 Modelo Conceitual de Dados
_conteúdo_

## 4.2 Modelo Lógico de Dados
_conteúdo_

## 4.3 Modelo Físico de Dados
_conteúdo_

**Nota:** Insira uma explicação e direcionamento para o readme.md da pasta database.

# 5. Solução Técnica (Design)
_conteúdo_

## 5.1 Diagrama de Componentes da UML
_conteúdo_

## 5.2 Diagramas de Sequência da UML
_conteúdo_

## 5.3 Descrição Textual dos Diagramas
_conteúdo_

# 6. Mapeamento Técnico de Infraestrutura e Implantação
_conteúdo_

## 6.1 Diagrama de Implantação da UML
_conteúdo_

## 6.2 Justificativa das Escolhas de Implantação
_conteúdo_

## 6.3 Considerações sobre Desempenho e Segurança
_conteúdo_

# 7. Projeto Visual da Solução
_conteúdo_

## 7.1 Desenvolvimento de Wireframes
_conteúdo_

## 7.2 Desenvolvimento de Mockups
_conteúdo_

## 7.3 Guia Visual
_conteúdo_

# 8. Desenvolvimento do Projeto
_conteúdo_

## 8.1 Arquitetura de Codificação e Estrutura de Diretórios
_conteúdo_

## 8.2 Desenvolvimento de Features
_conteúdo_

**Nota:** Insira uma explicação de entregas em cada Sprint.

## 8.2.1 Sprint 3
_conteúdo_

## 8.2.2 Sprint 4
_conteúdo_

## 8.2.3 Sprint 5
_conteúdo_

## 8.3 Testes Unitários e de Integração
_conteúdo_

## 8.4 Documentações automáticas
_conteúdo_

# 9. Planejamento e Execução de Testes
_conteúdo_

## 9.1 Testes Funcionais
_conteúdo_

## 9.1.1 Planejamento
_conteúdo_

## 9.1.2 Resultados
_conteúdo_

## 9.2 Testes de RNFs
_conteúdo_

## 9.2.1 Planejamento
_conteúdo_

## 9.2.2 Resultados
_conteúdo_

## 9.3 Testes de Usabilidade
_conteúdo_

## 9.3.1 Planejamento
_conteúdo_

## 9.3.2 Resultados
_conteúdo_

# 10. Procedimentos de Implantação
_conteúdo_

## 10.1 Implantação e Configuração do Banco de Dados
_conteúdo_

## 10.2 Implantação do Protótipo para uso por equipe de desenvolvimento
_conteúdo_

# Referências
_conteúdo_

