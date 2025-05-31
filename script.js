// Dados dos produtos atualizados
const produtos = {
  fontes: [
    {
      id: 1,
      nome: "Fonte Onex",
      descricao: "Compacta, leve e prática para uso geral",
      preco: 20.0,
      imagem: "img/produto1.png",
    },
    {
      id: 2,
      nome: "Fonte Peining",
      descricao: "Fonte turbo, mais potência e segurança",
      preco: 35.0,
      imagem: "lojavirtual-danorte/img/produto2.png",
    },
    {
      id: 3,
      nome: "Fonte Turbo C iPhone (Duas Entradas)",
      descricao: "Carrega dois aparelhos ao mesmo tempo com segurança e velocidade",
      preco: 60.0,
      imagem: "img/produto3.png",
    },
    {
      id: 4,
      nome: "Fonte Turbo C iPhone (Uma Entrada)",
      descricao: "Potente e compacta para quem busca carregamento rápido",
      preco: 50.0,
      imagem: "img/produto4.png",
    },
  ],
  cabos: [
    {
      id: 60,
      nome: "Cabo HDTV",
      descricao: "Transferir dados de imagem para sua TV",
      preco: 20.0,
      imagem: "img/produto60.png",
    },
    {
      id: 5,
      nome: "Cabo iPhone (Cartela)",
      descricao: "Ideal para quem busca custo-benefício no carregamento diário",
      preco: 15.0,
      imagem: "img/produto5.png",
    },
    {
      id: 6,
      nome: "Cabo Peining (iPhone)",
      descricao: "Mais resistência e durabilidade para uso intenso",
      preco: 25.0,
      imagem: "img/produto6.png",
    },
    {
      id: 7,
      nome: "Cabo Hrebos (iPhone)",
      descricao: "Compacto, prático e resistente",
      preco: 20.0,
      imagem: "img/produto7.png",
    },
    {
      id: 8,
      nome: "Cabo Kaidi (iPhone)",
      descricao: "Cabo premium, super reforçado, ideal para quem quer durabilidade máxima",
      preco: 60.0,
      imagem: "img/produto8.png",
    },
    {
      id: 9,
      nome: "Cabo Tipo C (Cartela)",
      descricao: "Econômico e eficiente para recargas rápidas",
      preco: 15.0,
      imagem: "img/produto9.png",
    },
    {
      id: 10,
      nome: "Cabo Hrebos (Tipo C)",
      descricao: "Carregamento seguro com proteção contra curto",
      preco: 20.0,
      imagem: "img/produto10.png",
    },
    {
      id: 11,
      nome: "Cabo Peining (Tipo C)",
      descricao: "Fio reforçado com ótimo desempenho",
      preco: 25.0,
      imagem: "img/produto11.png",
    },
    {
      id: 12,
      nome: "Cabo V8 (Cartela)",
      descricao: "Simples, prático e acessível",
      preco: 15.0,
      imagem: "img/produto12.png",
    },
    {
      id: 13,
      nome: "Cabo Peining (V8)",
      descricao: "Perfeito para quem usa diariamente e precisa de mais resistência",
      preco: 25.0,
      imagem: "img/produto13.png",
    },
    {
      id: 14,
      nome: "Cabo Hrebos (V8)",
      descricao: "Compacto e eficiente, sem perder qualidade",
      preco: 20.0,
      imagem: "img/produto14.png",
    },
    {
      id: 15,
      nome: "Cabo C iPhone",
      descricao: "Carregamento estável e seguro com conector C para iPhone",
      preco: 35.0,
      imagem: "img/produto15.png",
    },
    {
      id: 16,
      nome: "Cabo Premium iPhone",
      descricao: "Linha premium, ultra reforçado, acabamento de alta qualidade",
      preco: 60.0,
      imagem: "img/produto16.png",
    },
  ],
  controles: [
    {
      id: 17,
      nome: "Controle Samsung",
      descricao: "Controle compatível, simples, funcional e resistente para diversos aparelhos",
      preco: 23.0,
      imagem: "img/produto17.png",
    },
    {
      id: 72,
      nome: "Controle LG",
      descricao: "Controle compatível, simples, funcional e resistente para diversos aparelhos LG",
      preco: 23.0,
      imagem: "img/produto72.png",
    },
    {
      id: 71,
      nome: "Controle TV Box",
      descricao: "Controle compatível, simples, funcional e resistente para diversos aparelhos TV Box",
      preco: 23.0,
      imagem: "img/produto71.png",
    },
    {
      id: 18,
      nome: "Controle Aiwa",
      descricao: "Todos os modelos comuns - compatibilidade universal",
      preco: 10.0,
      imagem: "img/produto18.png",
    },
  ],
  carregadores: [
    {
      id: 69,
      nome: "Carregador USB Moto",
      descricao: "Ideal para você que roda de aplicativo",
      preco: 25.0,
      imagem: "img/produto69.png",
    },
    {
      id: 19,
      nome: "Carregador iPhone Gold",
      descricao: "Compacto e eficiente para quem busca simplicidade no carregamento",
      preco: 30.0,
      imagem: "img/produto19.png",
    },
    {
      id: 20,
      nome: "Carregador iPhone Peining",
      descricao: "Maior potência, proteção contra curto e sobrecarga",
      preco: 50.0,
      imagem: "img/produto20.png",
    },
    {
      id: 21,
      nome: "Carregador Tipo C Gold",
      descricao: "Carregador rápido e prático para uso diário",
      preco: 30.0,
      imagem: "img/produto21.png",
    },
    {
      id: 22,
      nome: "Carregador Tipo C Peining",
      descricao: "Potente e seguro, ideal para quem busca mais velocidade na recarga",
      preco: 50.0,
      imagem: "img/produto22.png",
    },
    {
      id: 23,
      nome: "Carregador V8 Gold",
      descricao: "Simples e eficiente para aparelhos com entrada V8",
      preco: 30.0,
      imagem: "img/produto23.png",
    },
    {
      id: 24,
      nome: "Carregador V8 Peining",
      descricao: "Mais robusto, indicado para quem precisa de maior desempenho",
      preco: 50.0,
      imagem: "img/produto24.png",
    },
    {
      id: 25,
      nome: "Carregador C iPhone (Maçã)",
      descricao: "Linha premium da Apple, com potência e segurança",
      preco: 100.0,
      imagem: "img/produto25.png",
    },
  ],
  capas: [
    {
      id: 26,
      nome: "Capa Samsung Galaxy S23",
      descricao: "Consulte Cores VIA WHATSAPP - Samsung Galaxy S23",
      preco: 10.0,
      imagem: "img/produto26.png",
    },
    {
      id: 27,
      nome: "Capa iPhone 14",
      descricao: "Consulte Cores VIA WHATSAPP - iPhone 14",
      preco: 10.0,
      imagem: "img/produto27.png",
    },
    {
      id: 28,
      nome: "Capa iPhone 13",
      descricao: "Consulte Cores VIA WHATSAPP - iPhone 13",
      preco: 10.0,
      imagem: "img/produto27.png",
    },
    {
      id: 29,
      nome: "Capa Samsung Galaxy A54",
      descricao: "Consulte Cores VIA WHATSAPP - Samsung Galaxy A54",
      preco: 10.0,
      imagem: "img/produto29.png",
    },
    {
      id: 30,
      nome: "Capa Universal",
      descricao: "Disponível para todos os modelos Samsung e iPhone",
      preco: 10.0,
      imagem: "img/produto30.png",
    },
  ],
  peliculas: [
    {
      id: 31,
      nome: "Película iPhone 14",
      descricao: "Proteção contra riscos, quedas e sujeiras - iPhone 14",
      preco: 15.0,
      imagem: "img/produto31.png",
    },
    {
      id: 32,
      nome: "Película Samsung Galaxy S23",
      descricao: "Proteção contra riscos, quedas e sujeiras - Samsung Galaxy S23",
      preco: 15.0,
      imagem: "img/produto32.png",
    },
    {
      id: 33,
      nome: "Película iPhone 13",
      descricao: "Proteção contra riscos, quedas e sujeiras - iPhone 13",
      preco: 15.0,
      imagem: "img/produto33.png",
    },
    {
      id: 34,
      nome: "Película Samsung Galaxy A54",
      descricao: "Proteção contra riscos, quedas e sujeiras - Samsung Galaxy A54",
      preco: 15.0,
      imagem: "img/produto34.png",
    },
    {
      id: 35,
      nome: "Película Universal",
      descricao: "Disponível para todos os modelos de smartphone",
      preco: 15.0,
      imagem: "img/produto35.png",
    },
  ],
  suportes: [
    {
      id: 36,
      nome: "Suporte Veicular Magnético",
      descricao: "Fixação magnética forte e segura para carro",
      preco: 20.0,
      imagem: "img/produto36.png",
    },
    {
      id: 38,
      nome: "Suporte para TV",
      descricao: "Suporte ajustável para TV até 50p",
      preco: 20.0,
      imagem: "img/produto37.png",
    },
    {
      id: 70,
      nome: "Suporte para Bike e Moto",
      descricao: "Suporte resistente",
      preco: 30.0,
      imagem: "img/produto70.png",
    },
  ],
  fones: [
    {
      id: 40,
      nome: "Fone Saco",
      descricao: "Simples e funcional, ideal para chamadas e músicas casuais",
      preco: 15.0,
      imagem: "img/produto40.png",
    },
    {
      id: 41,
      nome: "Fone Peining",
      descricao: "Som equilibrado, bom grave e ótima resistência",
      preco: 20.0,
      imagem: "img/produto41.png",
    },
    {
      id: 42,
      nome: "Fone iPhone",
      descricao: "Fone padrão Apple, som nítido e conexão estável",
      preco: 35.0,
      imagem: "img/produto42.png",
    },
    {
      id: 43,
      nome: "Fone Tipo C",
      descricao: "Qualidade de som superior, conexão estável via Tipo C",
      preco: 35.0,
      imagem: "img/produto43.png",
    },
    {
      id: 44,
      nome: "Fone I7 Mini (Bluetooth)",
      descricao: "Compacto, leve e sem fio. Perfeito para o dia a dia",
      preco: 40.0,
      imagem: "img/produto44.png",
    },
    {
      id: 45,
      nome: "Fone Hmaston",
      descricao: "Som potente e graves reforçados, ideal para quem ama música",
      preco: 80.0,
      imagem: "img/produto45.png",
    },
    {
      id: 46,
      nome: "Fone Hmaston Tela",
      descricao: "Top de linha, com painel digital e qualidade premium",
      preco: 100.0,
      imagem: "img/produto46.png",
    },
  ],
  acessorios: [
    {
      id: 65,
      nome: "Microfone Lapela Sem Fio",
      descricao: "Seu microfone para gravar vídeos",
      preco: 60.0,
      imagem: "img/produto65.png",
    },
    {
      id: 61,
      nome: "Microfone Lapela Sem Fio",
      descricao: "Seu microfone para gravar vídeos",
      preco: 60.0,
      imagem: "img/produto61.png",
    },
    {
      id: 62,
      nome: "Microfone Lapela Com Fio",
      descricao: "Ideal para seu Notebook ou Celular",
      preco: 30.0,
      imagem: "img/produto62.png",
    },
    {
      id: 63,
      nome: "Mini Teclado Sem Fio",
      descricao: "Muito mais praticidade",
      preco: 40.0,
      imagem: "img/produto63.png",
    },
    {
      id: 64,
      nome: "Cabo OTG",
      descricao: "Muito mais praticidade",
      preco: 40.0,
      imagem: "img/produto64.png",
    },
    {
      id: 56,
      nome: "Pen-Drive 16gb",
      descricao: "Muito espaço para suas músicas",
      preco: 40.0,
      imagem: "img/produto56.png",
    },
    {
      id: 57,
      nome: "Pen-Drive 32gb",
      descricao: "Muito espaço para seus projetos",
      preco: 50.0,
      imagem: "img/produto57.png",
    },
    {
      id: 58,
      nome: "Pen-Drive 4gb",
      descricao: "Ideal para fotos",
      preco: 30.0,
      imagem: "img/produto58.png",
    },
    {
      id: 59,
      nome: "Pen-Drive 8gb",
      descricao: "Ideal para fotos",
      preco: 35.0,
      imagem: "img/produto59.png",
    },
    {
      id: 47,
      nome: "Power Bank 10000mAh",
      descricao: "Bateria portátil de alta capacidade para múltiplas cargas",
      preco: 130.0,
      imagem: "img/produto47.png",
    },
    {
      id: 67,
      nome: "Power Bank 5000mAh",
      descricao: "Bateria portátil de alta capacidade para múltiplas cargas",
      preco: 70.0,
      imagem: "img/produto67.png",
    },
    {
      id: 68,
      nome: "Capa de chuva para Celular",
      descricao: "Ideal para tirar fotos de baixo d'água",
      preco: 15.0,
      imagem: "img/produto68.png",
    },
    {
      id: 49,
      nome: "Chip VIVO, CLARO e TIM",
      descricao: "Com recarga 25,00",
      preco: 15.0,
      imagem: "img/produto49.png",
    },
    {
      id: 50,
      nome: "Cartão de Memória 4gb",
      descricao: "Ideal para fotos",
      preco: 25.0,
      imagem: "img/produto50.png",
    },
    {
      id: 39,
      nome: "Cartão de Memória 8gb",
      descricao: "Ideal para vídeos",
      preco: 30.0,
      imagem: "img/produto39.png",
    },
    {
      id: 54,
      nome: "Cartão de Memória 16gb",
      descricao: "Ideal para vídeos",
      preco: 35.0,
      imagem: "img/produto54.png",
    },
    {
      id: 51,
      nome: "Carregador Notebook",
      descricao: "Para quase todos os Notebook (CONSULTE)",
      preco: 60.0,
      imagem: "img/produto51.png",
    },
  ],
  som: [
    {
      id: 52,
      nome: "Caixa de Som Bluetooth Bolinha",
      descricao: "Som potente e graves profundos com conectividade Bluetooth",
      preco: 35.0,
      imagem: "img/produto52.png",
    },
    {
      id: 53,
      nome: "Caixa de Som G",
      descricao: "Som potente e graves profundos com conectividade Bluetooth",
      preco: 90.0,
      imagem: "img/produto53.png",
    },
    {
      id: 55,
      nome: "Som ONEX",
      descricao: "Potencialize o áudio dos seus dispositivos",
      preco: 60.0,
      imagem: "img/produto55.png",
    },
  ],
  garrafas: [
    {
      id: 66,
      nome: "Garrafa Térmica Display Digital 500ML",
      descricao: "Display de temperatura digital em LED",
      preco: 30.0,
      imagem: "img/produto66.png",
    },
  ],
}

// Estado da aplicação
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
let categoriaAtiva = "todos"
const quantidades = {}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  inicializarQuantidades()
  renderizarProdutos()
  atualizarContadorCarrinho()
  configurarEventListeners()
  inicializarUX()
  implementarLazyLoading()

  // Verificar se há itens no carrinho ao carregar
  if (carrinho.length > 0) {
    const cartFooter = document.getElementById("cartFooter")
    const cartEmpty = document.getElementById("cartEmpty")
    if (cartFooter) cartFooter.style.display = "block"
    if (cartEmpty) cartEmpty.style.display = "none"
  }

  // Garantir visibilidade dos botões no mobile
  garantirVisibilidadeBotoesMobile()
})

// Configurar event listeners
function configurarEventListeners() {
  // Pesquisa
  const searchInput = document.getElementById("searchInput")
  const searchBtn = document.getElementById("searchBtn")

  if (searchBtn) {
    searchBtn.addEventListener("click", realizarPesquisa)
  }

  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        realizarPesquisa()
      }
    })
    // Aplicar debounce na pesquisa
    searchInput.addEventListener("input", debounce(realizarPesquisa, 300))
  }

  // Categorias
  document.querySelectorAll(".category-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const categoria = this.dataset.category
      filtrarPorCategoria(categoria)

      // Atualizar classe ativa
      document.querySelectorAll(".category-link").forEach((l) => l.classList.remove("active"))
      this.classList.add("active")
    })
  })

  // Fechar carrinho ao clicar fora
  document.addEventListener("click", (e) => {
    const cartModal = document.getElementById("cartModal")
    if (e.target === cartModal) {
      toggleCart()
    }
  })

  // Smooth scroll para navegação
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Detectar scroll para efeitos no header
  let lastScrollTop = 0
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const header = document.querySelector(".header")

    if (header) {
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = "translateY(-100%)"
      } else {
        // Scrolling up
        header.style.transform = "translateY(0)"
      }
    }

    lastScrollTop = scrollTop
  })

  // Adicionar transição suave ao header
  const header = document.querySelector(".header")
  if (header) {
    header.style.transition = "transform 0.3s ease"
  }

  // Event listeners para responsividade mobile
  window.addEventListener("resize", garantirVisibilidadeBotoesMobile)
}

// Inicializar quantidades dos produtos
function inicializarQuantidades() {
  Object.values(produtos)
    .flat()
    .forEach((produto) => {
      quantidades[produto.id] = 1
    })
}

// Renderizar produtos
function renderizarProdutos() {
  Object.keys(produtos).forEach((categoria) => {
    const grid = document.getElementById(`${categoria}-grid`)
    if (grid) {
      grid.innerHTML = ""
      produtos[categoria].forEach((produto) => {
        const produtoElement = criarElementoProduto(produto)
        grid.appendChild(produtoElement)
      })
    }
  })

  // Aplicar zoom nas imagens após renderizar
  setTimeout(criarZoomImagem, 100)
}

// Criar elemento do produto
function criarElementoProduto(produto) {
  const div = document.createElement("div")
  div.className = "product-card"
  div.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}" class="product-image" onerror="this.src='/placeholder.svg?height=200&width=280'">
    <h3 class="product-name">${produto.nome}</h3>
    <p class="product-description">${produto.descricao}</p>
    <div class="product-price">R$ ${produto.preco.toFixed(2).replace(".", ",")}</div>
    <div class="quantity-controls">
      <button class="quantity-btn" onclick="alterarQuantidade(${produto.id}, -1)">−</button>
      <span class="quantity-display" id="qty-${produto.id}">${quantidades[produto.id]}</span>
      <button class="quantity-btn" onclick="alterarQuantidade(${produto.id}, 1)">+</button>
    </div>
    <button class="add-to-cart-btn" onclick="adicionarAoCarrinho(${produto.id})">
      Adicionar ao Carrinho
    </button>
  `
  return div
}

// Alterar quantidade do produto
function alterarQuantidade(produtoId, delta) {
  const novaQuantidade = quantidades[produtoId] + delta
  if (novaQuantidade >= 1) {
    quantidades[produtoId] = novaQuantidade
    const qtyElement = document.getElementById(`qty-${produtoId}`)
    if (qtyElement) {
      qtyElement.textContent = novaQuantidade
    }
  }
}

// Adicionar produto ao carrinho
function adicionarAoCarrinho(produtoId) {
  const produto = encontrarProduto(produtoId)
  const quantidade = quantidades[produtoId]

  if (!produto) return

  const itemExistente = carrinho.find((item) => item.id === produtoId)

  if (itemExistente) {
    itemExistente.quantidade += quantidade
  } else {
    carrinho.push({
      ...produto,
      quantidade: quantidade,
    })
  }

  // Reset quantidade para 1
  quantidades[produtoId] = 1
  const qtyElement = document.getElementById(`qty-${produtoId}`)
  if (qtyElement) {
    qtyElement.textContent = 1
  }

  salvarCarrinho()
  atualizarContadorCarrinho()
  mostrarNotificacao("Produto adicionado ao carrinho!")

  // Tracking de evento
  trackEvent("add_to_cart", {
    product_id: produtoId,
    product_name: produto?.nome,
    product_price: produto?.preco,
  })
}

// Encontrar produto por ID
function encontrarProduto(id) {
  return Object.values(produtos)
    .flat()
    .find((produto) => produto.id === id)
}

// Toggle do carrinho
function toggleCart() {
  const cartModal = document.getElementById("cartModal")
  if (!cartModal) return

  cartModal.classList.toggle("active")

  if (cartModal.classList.contains("active")) {
    renderizarCarrinho()
    document.body.style.overflow = "hidden"
    // Garantir visibilidade dos botões no mobile após abrir o carrinho
    setTimeout(garantirVisibilidadeBotoesMobile, 100)
  } else {
    document.body.style.overflow = ""
  }
}

// Renderizar carrinho
function renderizarCarrinho() {
  const cartItems = document.getElementById("cartItems")
  const cartEmpty = document.getElementById("cartEmpty")
  const cartFooter = document.getElementById("cartFooter")

  if (!cartItems || !cartEmpty || !cartFooter) return

  if (carrinho.length === 0) {
    cartItems.style.display = "none"
    cartEmpty.style.display = "block"
    cartFooter.style.display = "none"
    return
  }

  cartItems.style.display = "block"
  cartEmpty.style.display = "none"
  cartFooter.style.display = "block"

  cartItems.innerHTML = ""

  carrinho.forEach((item) => {
    const itemElement = document.createElement("div")
    itemElement.className = "cart-item"
    itemElement.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}" class="cart-item-image" onerror="this.src='/placeholder.svg?height=80&width=80'">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.nome}</div>
        <div class="cart-item-price">R$ ${item.preco.toFixed(2).replace(".", ",")}</div>
        <div class="cart-item-controls">
          <button class="quantity-btn" onclick="alterarQuantidadeCarrinho(${item.id}, -1)">−</button>
          <span class="quantity-display">${item.quantidade}</span>
          <button class="quantity-btn" onclick="alterarQuantidadeCarrinho(${item.id}, 1)">+</button>
          <button class="remove-item" onclick="removerDoCarrinho(${item.id})">Remover</button>
        </div>
      </div>
    `
    cartItems.appendChild(itemElement)
  })

  atualizarTotalCarrinho()
}

// Alterar quantidade no carrinho
function alterarQuantidadeCarrinho(produtoId, delta) {
  const item = carrinho.find((item) => item.id === produtoId)
  if (item) {
    item.quantidade += delta
    if (item.quantidade <= 0) {
      removerDoCarrinho(produtoId)
    } else {
      salvarCarrinho()
      renderizarCarrinho()
      atualizarContadorCarrinho()
    }
  }
}

// Remover do carrinho
function removerDoCarrinho(produtoId) {
  carrinho = carrinho.filter((item) => item.id !== produtoId)
  salvarCarrinho()
  renderizarCarrinho()
  atualizarContadorCarrinho()
  mostrarNotificacao("Produto removido do carrinho!")
}

// Atualizar contador do carrinho
function atualizarContadorCarrinho() {
  const contador = carrinho.reduce((total, item) => total + item.quantidade, 0)
  const cartCount = document.getElementById("cartCount")
  if (cartCount) {
    cartCount.textContent = contador
  }
}

// Atualizar total do carrinho
function atualizarTotalCarrinho() {
  const total = carrinho.reduce((sum, item) => sum + item.preco * item.quantidade, 0)
  const cartTotal = document.getElementById("cartTotal")
  if (cartTotal) {
    cartTotal.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`
  }
}

// Salvar carrinho no localStorage
function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho))
}

// Finalizar compra
function finalizarCompra() {
  if (carrinho.length === 0) {
    mostrarNotificacao("Seu carrinho está vazio!")
    return
  }

  const formaPagamentoElement = document.querySelector('input[name="payment"]:checked')
  const formaPagamento = formaPagamentoElement ? formaPagamentoElement.value : "Não informado"
  const total = carrinho.reduce((sum, item) => sum + item.preco * item.quantidade, 0)

  let mensagem = `🛒 *NOVO PEDIDO - DaNorte Recife*\n\n`
  mensagem += `📋 *PRODUTOS:*\n`

  carrinho.forEach((item) => {
    const subtotal = item.preco * item.quantidade
    mensagem += `• ${item.nome}\n`
    mensagem += `  Qtd: ${item.quantidade} | Valor: R$ ${item.preco.toFixed(2).replace(".", ",")} | Subtotal: R$ ${subtotal.toFixed(2).replace(".", ",")}\n\n`
  })

  mensagem += `💰 *TOTAL: R$ ${total.toFixed(2).replace(".", ",")}*\n\n`
  mensagem += `💳 *FORMA DE PAGAMENTO:* ${formaPagamento.toUpperCase()}\n\n`
  mensagem += `📍 *ENDEREÇO DE ENTREGA:*\n`
  mensagem += `Por favor, informe seu endereço completo para entrega.\n\n`
  mensagem += `📞 *DaNorte (81) 991281842*\n`
  mensagem += `Rua da Mangabeira-350, Alto José do Pinho-300 - Casa Amarela\n`
  mensagem += `WhatsApp: (81) 991281842`

  const numeroWhatsApp = "5581991281842"
  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`

  // Tracking de evento
  trackEvent("purchase", {
    value: total,
    items: carrinho.length,
  })

  // Limpar carrinho após finalizar
  carrinho = []
  salvarCarrinho()
  atualizarContadorCarrinho()
  toggleCart()

  // Abrir WhatsApp
  window.open(urlWhatsApp, "_blank")

  mostrarNotificacao("Redirecionando para WhatsApp...")
}

// Filtrar produtos por categoria
function filtrarPorCategoria(categoria) {
  categoriaAtiva = categoria

  const sections = document.querySelectorAll(".category-section")

  if (categoria === "todos") {
    sections.forEach((section) => {
      section.style.display = "block"
    })
  } else {
    sections.forEach((section) => {
      if (section.dataset.category === categoria) {
        section.style.display = "block"
      } else {
        section.style.display = "none"
      }
    })
  }
}

// Realizar pesquisa
function realizarPesquisa() {
  const searchInput = document.getElementById("searchInput")
  if (!searchInput) return

  const termo = searchInput.value.toLowerCase().trim()

  if (!termo) {
    renderizarProdutos()
    return
  }

  const resultados = Object.values(produtos)
    .flat()
    .filter((produto) => produto.nome.toLowerCase().includes(termo) || produto.descricao.toLowerCase().includes(termo))

  // Limpar todas as grids
  Object.keys(produtos).forEach((categoria) => {
    const grid = document.getElementById(`${categoria}-grid`)
    if (grid) {
      grid.innerHTML = ""
    }
  })

  // Mostrar apenas resultados da pesquisa
  if (resultados.length > 0) {
    // Agrupar resultados por categoria
    const resultadosPorCategoria = {}
    resultados.forEach((produto) => {
      const categoria = Object.keys(produtos).find((cat) => produtos[cat].some((p) => p.id === produto.id))
      if (!resultadosPorCategoria[categoria]) {
        resultadosPorCategoria[categoria] = []
      }
      resultadosPorCategoria[categoria].push(produto)
    })

    // Renderizar resultados
    Object.keys(resultadosPorCategoria).forEach((categoria) => {
      const grid = document.getElementById(`${categoria}-grid`)
      if (grid) {
        resultadosPorCategoria[categoria].forEach((produto) => {
          const produtoElement = criarElementoProduto(produto)
          grid.appendChild(produtoElement)
        })
      }
    })

    // Mostrar todas as seções que têm resultados
    document.querySelectorAll(".category-section").forEach((section) => {
      const categoria = section.dataset.category
      if (resultadosPorCategoria[categoria]) {
        section.style.display = "block"
      } else {
        section.style.display = "none"
      }
    })

    // Aplicar zoom nas imagens dos resultados
    setTimeout(criarZoomImagem, 100)
  } else {
    mostrarNotificacao("Nenhum produto encontrado!")
  }
}

// Scroll do carrossel
function scrollCarousel(categoria, direcao) {
  const grid = document.getElementById(`${categoria}-grid`)
  if (!grid) return

  const scrollAmount = 300

  if (direcao === 1) {
    grid.scrollBy({ left: scrollAmount, behavior: "smooth" })
  } else {
    grid.scrollBy({ left: -scrollAmount, behavior: "smooth" })
  }
}

// Scroll para o footer
function scrollToFooter() {
  const footer = document.getElementById("footer")
  if (footer) {
    footer.scrollIntoView({
      behavior: "smooth",
    })
  }
}

// Toggle menu mobile
function toggleMobileMenu() {
  const nav = document.getElementById("categoriesNav")
  if (nav) {
    nav.classList.toggle("mobile-open")
  }
}

// Função para criar zoom na imagem do produto
function criarZoomImagem() {
  document.querySelectorAll(".product-image").forEach((img) => {
    // Verificar se já tem zoom aplicado
    if (img.dataset.zoomApplied) return
    img.dataset.zoomApplied = "true"

    const container = img.parentElement
    container.style.position = "relative"
    container.style.overflow = "hidden"

    // Criar lente de zoom
    const lens = document.createElement("div")
    lens.className = "zoom-lens"
    container.appendChild(lens)

    // Criar modal de zoom
    const modal = document.createElement("div")
    modal.className = "zoom-modal"
    modal.innerHTML = `
      <button class="zoom-close">&times;</button>
      <img src="${img.src}" alt="${img.alt}">
    `
    document.body.appendChild(modal)

    // Event listeners para zoom
    img.addEventListener("mouseenter", () => {
      lens.style.opacity = "1"
    })

    img.addEventListener("mouseleave", () => {
      lens.style.opacity = "0"
    })

    img.addEventListener("mousemove", (e) => {
      const rect = img.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      lens.style.left = x - 50 + "px"
      lens.style.top = y - 50 + "px"
    })

    img.addEventListener("click", () => {
      modal.classList.add("active")
      document.body.style.overflow = "hidden"
    })

    modal.addEventListener("click", () => {
      modal.classList.remove("active")
      document.body.style.overflow = ""
    })
  })
}

// Função para garantir visibilidade dos botões no mobile
function garantirVisibilidadeBotoesMobile() {
  const isMobile = window.innerWidth <= 480

  if (isMobile) {
    const cartFooter = document.querySelector(".cart-footer")
    const cartActions = document.querySelector(".cart-actions")
    const btnCheckout = document.querySelector(".btn-checkout")
    const btnContinue = document.querySelector(".btn-continue")

    if (cartFooter) {
      cartFooter.style.display = "block"
      cartFooter.style.visibility = "visible"
      cartFooter.style.opacity = "1"
      cartFooter.style.position = "relative"
      cartFooter.style.zIndex = "1000"
    }

    if (cartActions) {
      cartActions.style.display = "flex"
      cartActions.style.flexDirection = "column"
      cartActions.style.gap = "12px"
      cartActions.style.width = "100%"
    }

    if (btnCheckout) {
      btnCheckout.style.display = "block"
      btnCheckout.style.visibility = "visible"
      btnCheckout.style.opacity = "1"
      btnCheckout.style.width = "100%"
      btnCheckout.style.height = "50px"
      btnCheckout.style.fontSize = "16px"
      btnCheckout.style.fontWeight = "700"
      btnCheckout.style.backgroundColor = "#ff6b35"
      btnCheckout.style.color = "#ffffff"
      btnCheckout.style.border = "none"
      btnCheckout.style.borderRadius = "25px"
      btnCheckout.style.padding = "14px"
      btnCheckout.style.marginTop = "0"
    }

    if (btnContinue) {
      btnContinue.style.display = "block"
      btnContinue.style.visibility = "visible"
      btnContinue.style.opacity = "1"
      btnContinue.style.width = "100%"
      btnContinue.style.height = "50px"
    }
  }
}

// Mostrar notificação
function mostrarNotificacao(mensagem) {
  // Criar elemento de notificação
  const notificacao = document.createElement("div")
  notificacao.className = "notification"
  notificacao.textContent = mensagem
  notificacao.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--secondary-color);
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: var(--shadow);
    z-index: 3000;
    animation: slideInRight 0.3s ease;
    font-weight: 500;
    font-size: 14px;
    max-width: 300px;
    word-wrap: break-word;
  `

  document.body.appendChild(notificacao)

  // Remover após 3 segundos
  setTimeout(() => {
    notificacao.style.animation = "slideOutRight 0.3s ease"
    setTimeout(() => {
      if (document.body.contains(notificacao)) {
        document.body.removeChild(notificacao)
      }
    }, 300)
  }, 3000)
}

// Lazy loading para imagens
function implementarLazyLoading() {
  const images = document.querySelectorAll("img[data-src]")

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.classList.remove("lazy")
          imageObserver.unobserve(img)
        }
      })
    })

    images.forEach((img) => imageObserver.observe(img))
  }
}

// Otimização de performance - Debounce
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Inicializar melhorias de UX
function inicializarUX() {
  // Adicionar loading states
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function () {
      if (!this.classList.contains("loading")) {
        this.classList.add("loading")
        setTimeout(() => {
          this.classList.remove("loading")
        }, 1000)
      }
    })
  })

  // Melhorar acessibilidade
  document.querySelectorAll("button, a").forEach((element) => {
    if (!element.getAttribute("aria-label") && !element.textContent.trim()) {
      element.setAttribute("aria-label", "Botão de ação")
    }
  })
}

// Analytics básico
function trackEvent(eventName, eventData) {
  // Implementar tracking de eventos
  console.log("Event tracked:", eventName, eventData)
}

// Service Worker para cache (opcional)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registrado com sucesso:", registration.scope)
      })
      .catch((registrationError) => {
        console.log("Falha no registro do SW:", registrationError)
      })
  })
}

// Adicionar animações CSS para notificações
const style = document.createElement("style")
style.textContent = `
  @keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideOutRight {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
  
  @media (max-width: 768px) {
    .categories-nav.mobile-open .categories-menu {
      display: flex !important;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--bg-light);
      box-shadow: var(--shadow);
      padding: 20px;
      z-index: 100;
    }
    
    .categories-nav .categories-menu {
      display: none;
    }
  }
`
document.head.appendChild(style)
