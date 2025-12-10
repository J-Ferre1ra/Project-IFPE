# Projeto Final – Unidade 4
## Arquitetura de Software (POO + Design Pattern)
### Alunos: João Henrique, Maria Eduarda Bezerra e Jamison Viana

Este projeto implementa um sistema simples de cadastro de usuários utilizando JavaScript/Node.js, aplicando de forma objetiva os quatro pilares da Programação Orientada a Objetos (Abstração, Encapsulamento, Herança e Polimorfismo) e o Padrão de Projeto Strategy.

O foco principal é demonstrar domínio prático de arquitetura, organização e POO.

📌 1. DESCRIÇÃO DO SISTEMA

O sistema é um gerenciador de usuários, onde cada usuário possui:

Nome

Email

Senha

Antes de ser cadastrado, o usuário passa por uma validação.
Essa validação pode seguir regras diferentes, e o sistema permite trocar o tipo de validação de forma dinâmica.

As validações disponíveis são:

SimpleValidation → regras básicas

StrictValidation → regras rígidas e completas

O comportamento do sistema muda sem alterar o código principal, apenas trocando a estratégia utilizada — o que evidencia o uso correto do padrão Strategy.

📌 2. APLICAÇÃO DOS QUATRO PILARES DA POO

🔹 1. Abstração

O projeto representa conceitos reais usando classes com responsabilidades claras:

User → representa um usuário com dados essenciais

UserManager → gerencia o cadastro e a validação

Estratégias de validação (SimpleValidation, StrictValidation) → definem comportamentos específicos

Cada classe possui apenas o necessário para cumprir sua função.

🔹 2. Encapsulamento

A classe UserManager protege seus dados internos:

A lista de usuários (this.users)

A estratégia ativa de validação (this.validationStrategy)

Nada disso é acessado diretamente de fora.
Toda operação só acontece através de métodos controlados:

addUser()

listUsers()

setStrategy()

Isso impede acesso indevido e garante segurança da lógica interna.

🔹 3. Herança

Embora o padrão Strategy não use herança clássica, ele aplica herança conceitual:

Todas as classes de validação seguem o mesmo "contrato":

validate(user)


Ou seja: formas diferentes da mesma ação, mantendo uma estrutura comum.
Essa abordagem substitui herança tradicional e é amplamente utilizada em arquitetura moderna.

🔹 4. Polimorfismo

O polimorfismo aparece quando o UserManager executa:

this.validationStrategy.validate(user)


A estratégia pode ser:

new SimpleValidation()

new StrictValidation()

Ambas possuem o método .validate(), mas cada uma executa de forma diferente.
O código usa o mesmo comando para validar, mas o comportamento muda conforme a classe utilizada.

Isso é polimorfismo.

📌 3. PADRÃO DE PROJETO UTILIZADO: Strategy

O padrão Strategy foi escolhido para resolver o seguinte problema:

"Como permitir validações diferentes sem alterar o código da lógica principal?"

Com Strategy:

Cada regra de validação é uma classe independente.

O UserManager não precisa saber como a validação funciona.

A estratégia pode ser trocada em tempo de execução.

O sistema fica flexível, organizado e desacoplado.

Estratégias implementadas:

SimpleValidation

StrictValidation

Esse padrão se encaixa perfeitamente porque o sistema exige variação de comportamento sem modificar sua estrutura.

📌 4. COMO RODAR O SISTEMA

1. Instale o Node.js

Certifique-se de que o Node está instalado.

2. Inicie o projeto (caso ainda não tenha feito)
````bash
npm init -y
````
4. Execute o sistema
````bash
node index.js
````

6. O sistema exibirá:

Usuários aceitos

Usuários rejeitados

Mensagens de validação

Troca de estratégia funcionando na prática
