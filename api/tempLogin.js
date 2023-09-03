module.exports = () => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tela de Login Social</title>
        <!-- Adicione o link para a biblioteca de ícones do Google Material Icons -->
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <style>
          /* Estilos para o botão */
          .google-login-button {
            background-color: #4285f4;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          .microsoft-login-button {
            background-color: #000;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          /* Estilos para o ícone do Google */
          .google-icon {
            margin-right: 10px;
            vertical-align: middle;
          }
        </style>
      </head>
      <body>
        <h1>Login Social</h1>
        <!-- Botão de login do Google -->
        <a href="/v1/auth/google">
          <button class="google-login-button" onclick="loginWithGoogle()">
            <i class="material-icons google-icon">account_circle</i>Login com Google
          </button>
        </a>
    
        <!-- Botão de login do Microsoft 
        <a href="/v1/auth/microsoft">
          <button class="microsoft-login-button" onclick="loginWithGoogle()">
            <i class="material-icons google-icon">code</i>Login com Microsoft
          </button>
        </a>-->
      </body>
      <script>
        // Função para executar a ação de login com o Google
        function loginWithGoogle() {
          // Adicione sua lógica de login com o Google aqui
          console.log("Clicou no botão de login com o Google");
        }
      </script>
    </html>
    `;
};
