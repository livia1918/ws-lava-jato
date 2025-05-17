// ========================
// Alternar menu mobile
// ========================
function toggleMenu(element) {
  const menu = document.getElementById('menuMobile');
  menu.classList.toggle('active');
}

// ========================
// Enviar formulário via WhatsApp
// ========================
function sendToWhatsApp(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  // Obter dados do formulário
  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const servico = document.getElementById('servico').value;
  const data = document.getElementById('data').value;
  const observacoes = document.getElementById('observacoes').value.trim();

  // Verificar se todos os campos obrigatórios foram preenchidos
  if (!nome || !telefone || !servico || !data) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  // Montar a mensagem
  const mensagem = `Olá, meu nome é *${nome}*.
Gostaria de agendar o serviço de *${servico}*.
📅 Data: ${data}
📞 Telefone: ${telefone}
📝 Observações: ${observacoes || "Nenhuma"}.

Aguardo confirmação.`;

  // Número de destino no WhatsApp (com DDI e DDD)
  const numero = "5585992448224";

  // Criar a URL do WhatsApp com a mensagem codificada
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  // Abrir o WhatsApp em uma nova aba
  window.open(url, '_blank');
}

// Garantir que a função esteja disponível globalmente (caso necessário)
window.sendToWhatsApp = sendToWhatsApp;





