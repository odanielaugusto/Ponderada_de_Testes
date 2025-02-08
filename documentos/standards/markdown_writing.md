# **Padrões de Escrita em Markdown para o Projeto**  

## **1. Hierarquia de Títulos**

&ensp; No Markdown, os títulos seguem uma hierarquia baseada no número de `#` utilizados. A estrutura recomendada é:  
- `#` Título Principal (nível 1)  
- `##` Subtítulo (nível 2)  
- `###` Subsubtítulo (nível 3)  
- `####` Título de Seção Menor (nível 4)  

**Exemplo de aplicação correta da hierarquia:**  
```markdown
# Seção 1 - Introdução  
## Seção 1.1 - Quem é o parceiro  
### Seção 1.1.1 - O que o parceiro faz  
#### Seção 1.1.1.1 - Como é possível realizar
```

**Nota:**  
- Use cada título de forma adequada para dividir as seções do documento logicamente.  
- Evite pular níveis. Por exemplo, não use `###` logo após um `#`.  

---

## **2. Padrões para Inserção de Texto**  

&ensp; Todo parágrafo deve ser claro e bem estruturado, mantendo uma linha de raciocínio contínua e coerente, contendo introdução, desenvolvimento e conclusão (mesmo que o desenvolvimento abrange todo o assunto, retome ele na conclusão). As citações ao longo do texto devem ser formatadas entre parênteses com link a uma seção de **Referências**.

**Exemplo:**  
```markdown
&ensp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. [(FONTE, 2000)](#referencias).
```

&ensp; Utilize `&ensp;` (espaço em HTML) no início de parágrafos para ajustar a indentação, caso necessário.

---

## **3. Inserção de Imagens**  

&ensp; Todas as imagens devem ser centralizadas e acompanhadas de uma legenda clara e descritiva, seguida da indicação da fonte. Abaixo está um modelo para a inserção de imagens:  

```markdown
<div align="center">
  <sub>Figura X - Título Descritivo da Imagem</sub> <br>

  <img src="../assets/documentation/section4/4.1.1_industry_context/porters_five_forces.png" alt="Descrição da imagem">

  <sup>Fonte: Material produzido pelos autores (2024).</sup>
</div>
```

*A utilização de um `<br>` depois do fechamento do `<sub>` é para evitar a quebra de texto quanto exite uma imagem seguida da outra.*

**Regras:**  
- Use `<div align="center">` para centralizar a imagem e a legenda.  
- A legenda deve ser precedida por `<sub>` e finalizada por um `<sup>` indicando a fonte da imagem.    

---

## **4. Referências no Corpo do Texto**  

&ensp; As referências devem ser mencionadas no texto utilizando o seguinte formato:  

```markdown
&ensp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. [(FONTE; 2000)](#referencias).
```

### **Citações com múltiplos autores**  
- **Um autor:** [(FONTE; 2000)](#referencias).  
- **Até 3 autores:** [(FONTE1; FONTE2; FONTE3, 2020)](#referencias).
- **Mais de 3 autores:** [(FONTE1 et al., 2023)](#referencias) (Atenção: O autor que aparece deve ser o que possui maior cargo de formação, caso não seja informado, preencha com o primeiro nome que aparecer no artigo).
- **Múltiplas fontes:** [(FONTE1, 2021; FONTE2, 2022)](#referencias).  

---

## **5. Exemplo Completo de Conteúdo**  

```markdown
# **5 História da Arte**  
## **5.1. Introdução**  

&ensp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. [(FONTE; 2000)](#referencias).

<div align="center">
  <sub>Figura 1 - Modelo das Cinco Forças de Porter</sub>

  <img src="../assets/documentation/section4/4.1.1_industry_context/porters_five_forces.png" alt="Diagrama das cinco forças de Porter">

  <sup>Fonte: Material produzido pelos autores (2024).</sup>
</div>

&ensp; A figura acima ilustra o modelo das cinco forças competitivas de Porter, que é amplamente utilizado para análise de indústrias. O modelo considera fatores como concorrentes, poder de barganha e barreiras de entrada [(FONTE et al., 2000)](#referencias).  

&ensp; A figura acima ilustra o modelo das cinco forças competitivas de Porter, que é amplamente utilizado para análise de indústrias. O modelo considera fatores como concorrentes, poder de barganha e barreiras de entrada [(FONTE1, 2021; FONTE2, 2015)](#referencias).  

```

---

## **6. Referências** <a name="referencias"></a>  

&ensp; Exemplos de padrões de escrita de referências, conforme o [guia da USP](https://usp.br/sddarquivos/arquivos/abnt6023.pdf) e a [página da Exame](https://exame.com/tecnologia/examelab/referencias-bibliograficas-no-padrao-abnt-saiba-como-fazer/), que também trata do tema.

* ALBERTACCI, Laura. Devo me preocupar com a LGPD? Jusbrasil, 2024. Disponível em: <https://www.jusbrasil.com.br/artigos/devo-me-preocupar-com-a-lgpd/1239975999>. Acesso em: 10 ago. 2024.

  *Exemplo de site com nome do autor.* 

* IBM. O que é blockchain? 2024. Disponível em: <https://www.ibm.com/br-pt/topics/blockchain>. Acesso em: 10 ago. 2024.

  *Exemplo de site sem nome do autor.*

* ANDRADE, José Eduardo Pessoa de; ZAPORSKI, Janusz. A indústria de cloro-soda. Revista do BNDES, Rio de Janeiro, v. 1, n. 2, p. [183]-225, dez. 1994. Disponível em: <https://web.bndes.gov.br/bib/jspui/bitstream/1408/11836/2/RB%2002%20A%20Ind%c3%bastria%20de%20Cloro-Soda_P_BD.pdf>. Acesso em: 7 ago. 2024.

  *Exemplo de livro com volume, número, página.*
---