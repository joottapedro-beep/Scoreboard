const state = {
  activeLeague: "all"
};

const appConfig = {
  telegramUrl: "#",
  trackingEnabled: true,
  footballApi: {
    provider: null,
    endpoint: "",
    liveOnly: true
  }
};

const matches = [
  {
    id: "match-benfica-porto",
    home: "Benfica",
    away: "Porto",
    homeShort: "BEN",
    awayShort: "POR",
    leagueKey: "liga-portugal",
    leagueName: "Liga Portugal",
    country: "Portugal",
    minute: "67'",
    status: "Ao vivo",
    score: { home: 2, away: 1 },
    note: "Jogo aberto com pressao alta dos dois lados",
    live: true
  },
  {
    id: "match-city-liverpool",
    home: "Manchester City",
    away: "Liverpool",
    homeShort: "MCI",
    awayShort: "LIV",
    leagueKey: "premier-league",
    leagueName: "Premier League",
    country: "Inglaterra",
    minute: "54'",
    status: "Ao vivo",
    score: { home: 1, away: 1 },
    note: "Ritmo alto e ocasioes claras nos dois lados",
    live: true
  },
  {
    id: "match-inter-milan",
    home: "Inter",
    away: "Milan",
    homeShort: "INT",
    awayShort: "MIL",
    leagueKey: "serie-a",
    leagueName: "Serie A",
    country: "Italia",
    minute: "79'",
    status: "Ao vivo",
    score: { home: 0, away: 0 },
    note: "Derbi intenso, mas com poucas finalizacoes limpas",
    live: true
  },
  {
    id: "match-real-barca",
    home: "Real Madrid",
    away: "Barcelona",
    homeShort: "RMA",
    awayShort: "BAR",
    leagueKey: "laliga",
    leagueName: "LaLiga",
    country: "Espanha",
    minute: "FT",
    status: "Final",
    score: { home: 3, away: 2 },
    note: "Nao aparece no topo porque nao esta live",
    live: false
  }
];

const news = [
  {
    id: "benfica-pressionado-liga-campeoes",
    title: "Benfica entra numa noite decisiva com pressao maxima na Europa",
    description:
      "A equipa encarnada chega ao jogo com margem curta e precisa de intensidade emocional, rigor sem bola e melhor ocupacao no ultimo terco.",
    date: "1 Abril 2026",
    category: "Champions",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1200&q=80",
    intro:
      "O Benfica enfrenta um contexto competitivo exigente e entra em campo com a necessidade de juntar controlo emocional, intensidade e capacidade de decisao nos momentos de maior pressao.",
    body: [
      "Nos ultimos encontros, a equipa mostrou capacidade para chegar rapido ao ultimo terco, mas nem sempre conseguiu transformar dominio territorial em oportunidades claras. Esse tem sido um dos pontos que a equipa tecnica procura ajustar antes de um teste europeu particularmente exigente.",
      "O corredor central deve voltar a ser a zona critica da partida. Sempre que o Benfica consegue ligar medio e ataque com poucos toques, o jogo acelera e os extremos aparecem em melhores condicoes para atacar a area. Sem essa ligacao, a posse torna-se mais previsivel.",
      "A partida tambem sera importante para perceber o peso mental da equipa em contexto de alta exigencia. Uma boa resposta competitiva pode relancar a narrativa da temporada e reforcar a confianca para o ciclo seguinte."
    ]
  },
  {
    id: "mercado-rafa-impacto-ofensivo",
    title: "Rafa acrescenta velocidade e leitura ao ultimo terco",
    description:
      "O novo reforco chega com perfil para acelerar transicoes, atacar espacos curtos e elevar a qualidade de decisao perto da baliza.",
    date: "31 Marco 2026",
    category: "Mercado",
    image:
      "https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=1200&q=80",
    intro:
      "A entrada de um jogador com capacidade para receber entre linhas e desequilibrar em poucos toques pode alterar o teto ofensivo da equipa de forma imediata.",
    body: [
      "A principal vantagem do perfil de Rafa esta na combinacao entre explosao curta e decisao rapida. Esse tipo de jogador reduz o tempo entre recuperacao e finalizacao, algo decisivo em equipas que querem jogar mais perto da baliza adversaria.",
      "Tambem ha impacto no comportamento coletivo. Com mais ameaca no apoio frontal, os laterais ganham melhor enquadramento para subir e os medios podem gerir melhor os tempos da posse sem perder verticalidade.",
      "Se a integracao for rapida, o efeito pode sentir-se nao apenas em golos e assistencias, mas na forma como a equipa fixa defesas e encontra espacos interiores."
    ]
  },
  {
    id: "city-liverpool-duelo-tatico",
    title: "City e Liverpool voltam a oferecer um duelo de detalhe e controlo",
    description:
      "A partida arrancou com pressing agressivo, trocas de corredor constantes e uma batalha clara pela zona entre linhas.",
    date: "1 Abril 2026",
    category: "Premier League",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    intro:
      "Quando as duas equipas se encontram, a historia costuma ser decidida por detalhes de ocupacao, cobertura e escolha no momento do ultimo passe.",
    body: [
      "O City tenta instalar-se em posse longa para empurrar o adversario para tras, enquanto o Liverpool procura acelerar sempre que identifica espaco nas costas da primeira linha de pressao. O equilibrio entre essas duas abordagens tem marcado o jogo.",
      "A zona interior continua a ser a principal area de risco. Sempre que o Liverpool ganha metros nesse corredor, consegue ligar com mais facilidade aos avancados. Quando o City fecha essa porta, recupera controlo territorial.",
      "Mais do que talento individual, este e um jogo de estrutura. A equipa que gerir melhor os tempos sem bola deve aproximar-se da vitoria."
    ]
  },
  {
    id: "serie-a-inter-milan-ritmo",
    title: "Inter e Milan disputam um derbi mais fisico do que fluido",
    description:
      "O encontro esta tenso, com poucas janelas para remate limpo e grande intensidade nas segundas bolas.",
    date: "1 Abril 2026",
    category: "Serie A",
    image:
      "https://images.unsplash.com/photo-1486286701208-1d58e9338013?auto=format&fit=crop&w=1200&q=80",
    intro:
      "O derbi de Milao esta a ser jogado em margens curtas, onde cada duelo individual pesa tanto como a qualidade das circulacoes.",
    body: [
      "A Inter tem tentado empurrar o jogo para zonas laterais e cruzar cedo, enquanto o Milan procura explorar saias rapidas apos recuperacao. O resultado e um encontro mais partido do que propriamente dominado por uma das equipas.",
      "Os treinadores sabem que uma unica falha de cobertura pode decidir tudo. Isso explica alguma prudencia na forma como ambos os blocos sobem e recuam, especialmente depois do intervalo.",
      "Se o jogo mantiver este padrao, o fator banco e a capacidade de atacar o espaco entre central e lateral podem tornar-se determinantes."
    ]
  }
];

const elements = {
  homeView: document.getElementById("home-view"),
  articleView: document.getElementById("article-view"),
  matchesTable: document.getElementById("matches-table"),
  liveSummary: document.getElementById("live-summary"),
  leagueFilters: document.getElementById("league-filters"),
  newsGrid: document.getElementById("news-grid"),
  articleContent: document.getElementById("article-content"),
  heroStats: document.getElementById("hero-stats"),
  backButton: document.getElementById("back-button")
};

function getLiveMatches() {
  return matches.filter((match) => match.live);
}

function getLeagues() {
  const liveMatches = getLiveMatches();
  const uniqueLeagues = new Map();

  liveMatches.forEach((match) => {
    if (!uniqueLeagues.has(match.leagueKey)) {
      uniqueLeagues.set(match.leagueKey, {
        key: match.leagueKey,
        name: match.leagueName
      });
    }
  });

  return [{ key: "all", name: "Todas" }, ...uniqueLeagues.values()];
}

function getFilteredLiveMatches() {
  const liveMatches = getLiveMatches();

  if (state.activeLeague === "all") {
    return liveMatches;
  }

  return liveMatches.filter((match) => match.leagueKey === state.activeLeague);
}

function trackEvent(name, payload = {}) {
  if (!appConfig.trackingEnabled) {
    return;
  }

  const eventPayload = {
    event: name,
    timestamp: new Date().toISOString(),
    ...payload
  };

  console.info("[tracking]", eventPayload);
}

function teamBadge(label) {
  return `<span class="team-badge" aria-hidden="true">${label}</span>`;
}

function renderHeroStats() {
  const liveMatches = getLiveMatches();
  const leagueCount = new Set(liveMatches.map((match) => match.leagueKey)).size;

  elements.heroStats.innerHTML = `
    <div>
      <strong>${liveMatches.length}</strong>
      <span>Jogos live</span>
    </div>
    <div>
      <strong>${leagueCount}</strong>
      <span>Ligas ativas</span>
    </div>
    <div>
      <strong>${news.length}</strong>
      <span>Artigos</span>
    </div>
  `;
}

function renderLeagueFilters() {
  const leagues = getLeagues();

  elements.leagueFilters.innerHTML = leagues
    .map(
      (league) => `
        <button
          class="filter-button ${league.key === state.activeLeague ? "is-active" : ""}"
          type="button"
          data-league="${league.key}"
        >
          ${league.name}
        </button>
      `
    )
    .join("");
}

function renderMatches() {
  const liveMatches = getFilteredLiveMatches();

  elements.liveSummary.textContent = `${liveMatches.length} jogos encontrados`;

  if (!liveMatches.length) {
    elements.matchesTable.innerHTML = `
      <div class="empty-state">
        <strong>Sem jogos live para esta liga.</strong>
        <p>Altere o filtro para voltar a ver todos os encontros em direto.</p>
      </div>
    `;
    return;
  }

  elements.matchesTable.innerHTML = liveMatches
    .map(
      (match) => `
        <article class="match-row">
          <div class="match-time">
            <span class="live-badge">${match.status}</span>
          </div>

          <div class="match-main">
            <div class="match-league">
              <span class="league-pill">${match.leagueName}</span>
              <span>${match.country}</span>
              <span>${match.minute}</span>
            </div>

            <div class="match-teams">
              <div class="team">
                ${teamBadge(match.homeShort)}
                <span class="team-name">${match.home}</span>
              </div>

              <div class="score-block">
                <span class="score">${match.score.home} - ${match.score.away}</span>
              </div>

              <div class="team is-away">
                <span class="team-name">${match.away}</span>
                ${teamBadge(match.awayShort)}
              </div>
            </div>
          </div>

          <div class="match-note">${match.note}</div>
        </article>
      `
    )
    .join("");
}

function renderNews() {
  elements.newsGrid.innerHTML = news
    .map(
      (article) => `
        <article class="news-card">
          <img
            class="news-image"
            src="${article.image}"
            alt="${article.title}"
            loading="lazy"
          >

          <div class="news-content">
            <div class="news-meta">
              <span class="news-date">${article.date}</span>
              <span class="news-tag">${article.category}</span>
            </div>

            <h3 class="news-title">${article.title}</h3>
            <p class="news-desc">${article.description}</p>

            <div class="news-actions">
              <a
                class="read-more"
                href="#news/${article.id}"
                data-track="read_more"
                data-article-id="${article.id}"
              >
                Ler mais
              </a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderArticle(articleId) {
  const article = news.find((item) => item.id === articleId);

  if (!article) {
    elements.articleContent.innerHTML = `
      <div class="article-content">
        <div class="article-meta">
          <span class="article-date">Conteudo indisponivel</span>
        </div>
        <h1 class="article-title">Nao encontramos esta noticia.</h1>
        <p class="article-intro">Volte para a homepage e escolha outro artigo.</p>
      </div>
    `;
    return;
  }

  elements.articleContent.innerHTML = `
    <img class="article-cover" src="${article.image}" alt="${article.title}">
    <div class="article-content">
      <div class="article-meta">
        <span class="article-date">${article.date}</span>
        <span class="news-tag">${article.category}</span>
      </div>

      <h1 class="article-title">${article.title}</h1>
      <p class="article-intro">${article.intro}</p>

      <div class="article-body">
        ${article.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
    </div>
  `;

  trackEvent("article_view", { articleId });
}

function setActiveView(viewName) {
  const isArticle = viewName === "article";

  elements.homeView.classList.toggle("is-active", !isArticle);
  elements.articleView.classList.toggle("is-active", isArticle);
}

function route() {
  const hash = window.location.hash || "#home";

  if (hash.startsWith("#news/")) {
    const articleId = hash.replace("#news/", "");
    renderArticle(articleId);
    setActiveView("article");
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  setActiveView("home");
}

function handleLeagueFilterClick(event) {
  const target = event.target.closest("[data-league]");

  if (!target) {
    return;
  }

  state.activeLeague = target.dataset.league;
  renderLeagueFilters();
  renderMatches();
  trackEvent("league_filter_click", { league: state.activeLeague });
}

function handleTrackedClicks(event) {
  const trackedElement = event.target.closest("[data-track]");

  if (!trackedElement) {
    return;
  }

  trackEvent(trackedElement.dataset.track, {
    articleId: trackedElement.dataset.articleId || null
  });
}

function navigateBack() {
  window.location.hash = "#home";
}

function bindEvents() {
  elements.leagueFilters.addEventListener("click", handleLeagueFilterClick);
  document.addEventListener("click", handleTrackedClicks);
  window.addEventListener("hashchange", route);
  elements.backButton.addEventListener("click", navigateBack);
}

function setupTelegramCTA() {
  const telegramLink = document.querySelector('[data-track="telegram_cta"]');

  if (!telegramLink) {
    return;
  }

  telegramLink.setAttribute("href", appConfig.telegramUrl);
}

function init() {
  renderHeroStats();
  renderLeagueFilters();
  renderMatches();
  renderNews();
  setupTelegramCTA();
  bindEvents();
  route();
}

init();
