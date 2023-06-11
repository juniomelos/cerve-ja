<h1 align="left">Cerve-Já</h1>

###

<p align="left">Esse aplicativo de delivery de bebidas vem para ajudar na conveniência e facilidade para os consumidores de bebidas. Antes do surgimento desse tipo de aplicativo, muitas vezes era necessário sair de casa e ir até um estabelecimento físico para comprar bebidas, o que poderia ser um processo inconveniente e demorado.<br><br>
Além disso, muitas vezes os consumidores não tinham acesso a uma ampla variedade de bebidas em um único local. Com o aplicativo de delivery de bebidas, os consumidores podem agora escolher entre uma ampla variedade de bebidas em um único lugar, fazer o pedido com apenas alguns toques na tela do celular ou web e receber as suas bebidas diretamente em suas casas. Isso torna o processo de compra de bebidas mais conveniente e rápido, economizando tempo e esforço.</p> 

<br>

> <h2 align="left">Sobre perfis de usuário no Banco de Dados</h2>

<br>

Ao executar `docker-compose`, será criado os 3 perfís de usuários: Administrador, Vendedor e Consumidor.

```JavaScript
[
  {
    email: 'adm@cerveja.com',
    password: 'adm23@',
    role: 'administrator',
  },
  {
    email: 'seller@cerveja.com',
    password: 'seller23@',
    role: 'seller',
  },
  {
    email: 'customer@email.com',
    password: 'customer23@',
    role: 'customer',
  },
],
```

<br>

> <h2 align="left">Telas</h2>

<br>

<table>
  <tr>
    <td width="300px">
      <h2>Login</h2>
      <img src="./images/login.png" alt="login-preview" />
    </td>
    <td width="300px">
      <h2>Register</h2>
      <img src="./images/register.png" alt="register-preview" />
    </td>
    <td width="300px">
      <h2>Products</h2>
      <img src="./images/products.png" alt="products-preview" />
    </td>
  </tr>
  <tr>
    <td  width="300px">
      <h2>Checkout</h2>
      <img src="./images/checkout.png" alt="checkout-preview" />
    </td>
    <td width="300px">
      <h2>Order Details (Client)</h2>
      <img src="./images/order-details.png" alt="order-details-preview" />
    </td>
    <td width="300px">
      <h2>Orders List</h2>
      <img src="./images/orders.png" alt="orders-preview" />
    </td>
  </tr>
  <tr>
    <td width="300px">
      <h2>Order Details (Seller)</h2>
      <img src="./images/seller-order-details.png" alt="seller-order-details-preview" />
    </td>
    <td width="300px">
      <h2>User Management (Admin)</h2>
      <img src="./images/admin.png" alt="admin-preview" />
    </td>
  </tr>
</table>

<br>

> <h2 align="left">Tecnologias utilizadas</h2>

<br>

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="50" width="62" alt="javascript logo"  />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="50" width="62" alt="nodejs logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="50" width="62" alt="react logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="50" width="62" alt="express logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" height="50" width="62" alt="docker logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="50" width="62" alt="mysql logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="50" width="62" alt="sequelize logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" height="50" width="62" alt="jest logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" height="50" width="62" alt="mocha logo"  />
</div>