(function () {
  'use strict';

  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) root.classList.add('js');

  /* ---------- Galerias (dados) ---------- */
  var GALLERIES = {
    'wf-shared': [
      ['wireframe-login.png', 'Wireframe · Login'],
      ['wireframe-recuperacao.png', 'Wireframe · Recuperação de acesso'],
      ['wireframe-configuracoes.png', 'Wireframe · Configurações']
    ],
    'wf-aluno': [
      ['wireframe-aluno-home.png', 'Wireframe · Aluno · Início'],
      ['wireframe-aluno-treinos.png', 'Wireframe · Aluno · Treinos'],
      ['wireframe-aluno-evolucao.png', 'Wireframe · Aluno · Evolução'],
      ['wireframe-aluno-perfil.png', 'Wireframe · Aluno · Perfil']
    ],
    'wf-professor': [
      ['wireframe-professor-home.png', 'Wireframe · Professor · Início'],
      ['wireframe-professor-alunos.png', 'Wireframe · Professor · Alunos'],
      ['wireframe-professor-treinos.png', 'Wireframe · Professor · Treinos'],
      ['wireframe-professor-agenda.png', 'Wireframe · Professor · Agenda']
    ],
    'wf-gestao': [
      ['wireframe-gestao-home.png', 'Wireframe · Gestão · Início'],
      ['wireframe-gestao-alunos.png', 'Wireframe · Gestão · Alunos'],
      ['wireframe-gestao-financeiro.png', 'Wireframe · Gestão · Financeiro'],
      ['wireframe-gestao-professores.png', 'Wireframe · Gestão · Professores']
    ],
    'ui-aluno': [
      ['aluno-home.png', 'Aluno · Início'],
      ['aluno-treino.png', 'Aluno · Treino'],
      ['aluno-evolucao.png', 'Aluno · Evolução'],
      ['aluno-aulas.png', 'Aluno · Aulas'],
      ['aluno-pagamentos.png', 'Aluno · Pagamentos'],
      ['aluno-perfil.png', 'Aluno · Perfil']
    ],
    'ui-professor': [
      ['professor-home.png', 'Professor · Início'],
      ['professor-alunos.png', 'Professor · Alunos'],
      ['professor-treino.png', 'Professor · Treino'],
      ['professor-avaliacao.png', 'Professor · Avaliação'],
      ['professor-agenda.png', 'Professor · Agenda'],
      ['professor-perfil.png', 'Professor · Perfil']
    ],
    'ui-gestao': [
      ['gestao-home.png', 'Gestão · Início'],
      ['gestao-alunos.png', 'Gestão · Alunos'],
      ['gestao-financeiro.png', 'Gestão · Financeiro'],
      ['gestao-professores.png', 'Gestão · Professores'],
      ['gestao-turmas.png', 'Gestão · Turmas'],
      ['gestao-comunicados.png', 'Gestão · Comunicados']
    ]
  };

  document.querySelectorAll('[data-gallery]').forEach(function (el) {
    var items = GALLERIES[el.getAttribute('data-gallery')] || [];
    el.setAttribute('role', 'list');
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', 'Galeria de imagens, role horizontalmente');
    items.forEach(function (it) {
      var fig = document.createElement('figure');
      fig.setAttribute('role', 'listitem');
      var box = document.createElement('div');
      box.className = 'shot phone';
      box.setAttribute('data-file', it[0]);
      var img = document.createElement('img');
      img.src = 'assets/' + it[0];
      img.alt = it[1] + ' · Academia MOVE-SR';
      img.loading = 'lazy';
      img.setAttribute('data-zoom', '');
      box.appendChild(img);
      var cap = document.createElement('figcaption');
      cap.textContent = it[1];
      fig.appendChild(box);
      fig.appendChild(cap);
      el.appendChild(fig);
    });
  });

  /* ---------- Placeholders quando a imagem não existe ---------- */
  function markMissing(img) {
    var box = img.closest('.shot');
    if (box) box.classList.add('missing');
  }
  document.querySelectorAll('.shot img').forEach(function (img) {
    if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) markMissing(img);
    img.addEventListener('error', function () { markMissing(img); });
  });

  /* ---------- Menu mobile ---------- */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  function setMenu(open) {
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }
  burger.addEventListener('click', function () {
    setMenu(burger.getAttribute('aria-expanded') !== 'true');
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });

  /* ---------- Navbar e botão voltar ao topo ---------- */
  var nav = document.getElementById('nav');
  var totop = document.getElementById('totop');
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    nav.classList.toggle('scrolled', y > 30);
    totop.hidden = y < 700;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  totop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  });

  /* ---------- Scroll suave para âncoras ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', id);
    });
  });

  /* ---------- Entrada suave dos títulos de seção ---------- */
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.sh').forEach(function (el) {
      el.setAttribute('data-r', '');
      io.observe(el);
    });
  }

  /* ---------- Lightbox ---------- */
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbCap = document.getElementById('lbCap');
  var lbClose = document.getElementById('lbClose');
  var lastFocus = null;

  function openLb(img) {
    var box = img.closest('.shot');
    if (box && box.classList.contains('missing')) return;
    lastFocus = document.activeElement;
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt;
    lbCap.textContent = img.alt;
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }
  function closeLb() {
    if (lb.hidden) return;
    lb.hidden = true;
    lbImg.src = '';
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }
  document.addEventListener('click', function (e) {
    var img = e.target.closest && e.target.closest('img[data-zoom]');
    if (img) openLb(img);
  });
  document.addEventListener('keydown', function (e) {
    var img = document.activeElement;
    if (e.key === 'Escape') closeLb();
    if (!lb.hidden && e.key === 'Tab') { e.preventDefault(); lbClose.focus(); }
  });
  lbClose.addEventListener('click', closeLb);
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });

  /* Permite abrir imagens via teclado */
  document.querySelectorAll('img[data-zoom]').forEach(function (img) {
    var box = img.closest('.shot');
    if (!box) return;
    box.setAttribute('tabindex', '0');
    box.setAttribute('role', 'button');
    box.setAttribute('aria-label', 'Ampliar: ' + img.alt);
    box.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(img); }
    });
  });

  /* ---------- Exemplos de interação (Seção 13) ---------- */
  document.querySelectorAll('.slots').forEach(function (group) {
    group.addEventListener('click', function (e) {
      var b = e.target.closest('.slot');
      if (!b) return;
      group.querySelectorAll('.slot').forEach(function (s) { s.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', 'true');
    });
  });
  var toast = document.querySelector('.toast');
  var timer;
  document.querySelectorAll('[data-fb]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!toast) return;
      toast.textContent = 'Treino salvo.';
      clearTimeout(timer);
      timer = setTimeout(function () { toast.textContent = ''; }, 2500);
    });
  });
})();
