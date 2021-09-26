# Formação Tech do Itaú
## Desafio individual
## site de Formulário de Cadastro Pessoal

Um simples formulário de cadastro pessoal do Itaú

<p style="text-align: center">
 <img alt="Foto de Daniele Maldonado" src="assets/images/me.png" height="164px" />
</p>

<p style="text-align: center">
 <a href="https://linkedin.com/in/daniele-maldonado-373660186">
  <img alt="Linkedin" src="assets/images/linkedin.png" height="64px" />
 </a>
</p>

### Autora:

- [Daniele Maldonado de Carvalho](https://linkedin.com/in/daniele-maldonado-373660186)
- **Idade**: 42 anos
- **Tipo de deficiência:** Física

### Descrição

Formada em Administração de Empresas e pós-raduada em Controladoria e Auditoria. 

Iniciei a minha carreira no Banco Itaú em agências com atendimento no caixa até o cargo de Gerente Operacional, onde pude ganhar desenvolver habilidades de gestão, riscos, liderança e centralidade do cliente.

Após atuação em projetos direcionados à Nova Plataforma de Caixa, tive a oportunidade de direcionar a minha carreira para a Administração Central, atuando com projetos e melhoria de processos. Atualmente desenvolvendo o papel de PO (*Product Onwer*) em projetos na área de operações finanças.

Iniciante no aprendizado de linguagens de programação, meu primeiro contato foi realizar os desafios do Programa de Formação Tech do Itaú, desenvolvidos em HTML, CSS e Javascript.  

### Objetivo:

Desenvolver um cadastro pessoal num *site* pequeno, com campos do formulários, além de validações e expressões regulares.

### Ferramenta:

Visual Studio Code no Windows 10.

### Linguagens: 

- CSS
- HTML
- JavaScript

### Descrição do site

O site apresenta um formulário simples de cadastro de dados pessoais, onde os campos Nome Completo, CPF, Endereço, Número e Telefone Celular são obrigatórios. O campo deverá aparecer uma mensagem de CPV inválido, caso o número for inferior a 11 ou não confere com o algoritmo.

Ao clicar no botão concluir, apresentará um alerta "confirma o envio do formulário?".

#### HTML

No ínício, começa com <!DOCTYPE HTML>, uma declaração para avisar aos navegadores que é um documento HTML, e dentro, tem <html> representa a raiz de um documento HTML e contém um atributo "lang" para declarar o idioma da página da web a fim de ajudar os mecanismos de busca e os navegadores.

Dentro desse elemento, tem um elemento <head> designado para informar os metadados e buscar os recursos. Está entre <html> e <body>.

Metadados

<meta charset="UTF-8">: É um elemento de metadado para a codificação e a renderização de caracteres para o documento HTML

<meta http-equiv="X-UA-Compatible" content="IE=edge">: É um elemento de metadado de fornecimento de HTTP para o conteúdo do navegador

<meta name="viewport" content="width=device-width, initial-scale=1.0">: É um elemento de metadado para renderizar a compatiblidade de visualizacão da página com todos os dispositivos

O <link> é um elemento que conecta os recursos externos aos documentos atuais para renderizar as coisas. Em seguida, os atributos:

O atributo "rel" é um relacionamento de tipo de arquivo;
O atributo "href" é um endereço do recurso externo

<title>Cadastro Pessoal - Projeto Itaú </title>: O <title> é um elemento que renderiza o título para a aba do navegador

Corpo

O elemento <body> renderiza todo o corpo de um documento.

No corpo, vocês encontram os elementos, que são divisões ou uma seções num documento HTML. O atributo "class" é um nome de classe para um elemento para pegar os seletores de um arquivo CSS.
Além disso, numa divisão, temos:

<h1> é um cabeçalho de primeiro grau.
<p> é uma definição de parágrafos.

Formulário

O <form> é um elemento de criação de formulário usado para onde o usuário possa preencher os campos. Nele, tem um atributo "onsumbit" é um evento de submissão em JavaScript que executa a função. Dentro do formulário, definimos as classes grupo-de-caixa para agrupar o rótulo e o campo para uma mesma linha e expandir a largura do campo até à largura da classe "descricao".

Nele, temos:

-Rótulos
O <label> é um elemento que rotula a informação.

-Campos de entrada
O <input> é um elemento de campo de entrada para o usuário escrever o valor e preenchê-lo.
O atributo "id" é uma vinculação do campo ao rótulo.
O atributo "required" significa que o campo não pode ser vazio.
O atributo "maxlength" define o limite de caracteres.
O atributo "placeholder" é um valor da dica ou do exemplo.
O atributo "pattern" é um método de expressão regular.

Fim
O comando <button type="submit" class="botao" onclick="enviar()">Concluir</button> é um botão de submissão com um valor para renderizar

Temos um script interno que é um elemento para executar JavaScript interno:

<script type="text/javascript" src="assets/js/script.js"></script>

#### Javascript

Executamos uma primeira função (function) chamada validacao(), que foi executada ao clicar o botão "Concluir" em HTML. Dentro de uma função, usamos getElementById para pegar o valor por meio de um identificador do campo de entrada. Então ao obter o valor, analisamos dois casos:

A primeira validação realizada é checar se o número digitado é menor que 11.
Na sequência verificamos se o número do CPF está válido. Se checarmos se é valido, já é valido sem avisar, senão avisamos que é inválido e necessita preencher novamente.

#### CSS

Iniciamos com o seletor *, *::before e *::after que captura inteiramente o site para definir a propriedade box-sizing com um valor border-box, para que preenchimento e borda estejam incluídos na largura e altura de todo o site.

Definimos a cor azul para o corpo inteiro, e a cor cinza escura para todo o texto. 

Em seguida, definimos a fonte para body, button, input, select e textarea.

Também definimos o visual do quadro do formulário, com cor de fundo, alinhamento, tamanho, espaçamento e borda. Já para o id container, definimos a direção e as margens.

Para input e select, foram definidos as cores e tamanhos. Para ajustá-los na mesma linha, utilizamos as classes .linha e .campo. Já o .botao realizamos as definições do botão "Concluir", como a cor e alinhamento.


### Referências

- [Expressão regular de telefone celular e fixo](https://gist.github.com/reggiegutter/5516382): Uma expressão regular completa de ambos os telefones celulares e fixo. 
- [Expressão regular de CPF/CNPJ](https://pt.stackoverflow.com/questions/133691/formatar-campo-cpf-ou-cnpj-usando-regex): Uma expressão regular completa e válida de ambos CPF e CNPJ.

### Licença

Sob a licença MIT. 

