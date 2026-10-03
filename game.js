(function () {
   /* ============================================================
   КАРТА ЗВУКОВЫХ ФАЙЛОВ
   Имена файлов должны точно совпадать с тем, что лежит на GitHub.
   ============================================================ */

var SOUND_FILES = {
  // ==== Атмосферные (фон сцен) ====
  'amb_intro_lab':         'assets/audio/1.%20ambient_Vhod_v_laboratoriyu.mp3',
  'amb_intro_rules':       'assets/audio/2.%20ambient_Instrukciya_i_podgotovka.mp3',
  'amb_intro_dive':        'assets/audio/4.%20ambient_Nachalo_puteshestviya.mp3',
  'amb_h_glory_1': 'assets/audio/5.1%20ambient_Zal_slavy%20.mp3',
'amb_h_glory_2': 'assets/audio/5.2%20ambient_Zal_slavy.mp3',
'amb_h_glory_3': 'assets/audio/5.3%20ambient_Zal_slavy.mp3',
  'amb_t_vrach':           'assets/audio/6.%20ambient_Vrach.mp3',
  'amb_j_journalist':      'assets/audio/7.%20ambient_Zhurnalist.mp3',
  'amb_f_family':          'assets/audio/8.%20ambient_Semejnaya_idilliya.mp3',
  'amb_t_experiment':      'assets/audio/9.%20ambient_Eksperiment_nad_igrokom.mp3',
  'amb_t_patient1':        'assets/audio/10.%20ambient_Pacient%E2%84%961.mp3',
  'amb_t_patient1_rel':    'assets/audio/11.%20ambient_Pacient%E2%84%961Vypustit.mp3',
  'amb_t_patient1_hold':   'assets/audio/12.%20ambient_Pacient%E2%84%961Ne_vypuskat.mp3',
  'amb_pet':               'assets/audio/13.%20ambient_Gibel_pitomca.mp3',
  'amb_t_lobotomy':        'assets/audio/14.%20ambient_Lobotomiya.mp3',
    'amb_t_sasha_small':  'assets/audio/17.%20ambient_Sasha%20melkij.mp3',
  'amb_t_natasha':      'assets/audio/ambient_Natasha_new.mp3',
  'amb_d_diagnosis':    'assets/audio/ambient_Diagnoz.mp3',

  // ==== Клики по выборам ====
  'click_hero':       'assets/audio/click_choice_On_geroj.mp3',
  'click_truth':      'assets/audio/click_choice_my_ne_znaem.mp3',
  'click_take_folder':'assets/audio/click_choice_Vzyat_papku.mp3',
  'click_no_folder':  'assets/audio/click_choice_ne_brat_papku.mp3',
  'click_abort':      'assets/audio/click_choice_abort.mp3',
  'click_family':     'assets/audio/click_choice_semya.mp3',
  'click_keys':       'assets/audio/click_choice_klyuchi.mp3',
  'click_release':    'assets/audio/click_choice_vypustit.mp3',
  'click_hold':       'assets/audio/click_choice_ne_vypuskat.mp3',

  // ==== Кнопки «Продолжить» ====
  'click_next':       'assets/audio/click_choice_Prodlolzhit.mp3',
  'click_next2':      'assets/audio/click_choice_Prodlolzhit1.mp3',
  'click_next3':      'assets/audio/click_choice_Prodlolzhit2.mp3'
};
'use strict';

var CSS = [
':root{--bg:#07080c;--panel:#0c0e15;--border:rgba(94,230,224,.15);--text:#d6dbe4;--dim:#9aa4b5;--faint:#4a5262;--acc:#5ee6e0;--acc2:#d18cff;--dg:#ff4757;--gd:#5ee6e0;--wr:#ffb84d;--vp:#5ee6e0;--vm:#ff4757;--vz:#9aa4b5;}',
'*{box-sizing:border-box;margin:0;padding:0;}',
   'html,body{display:block !important;align-items:initial !important;justify-content:initial !important;padding:0 !important;margin:0 !important;height:auto !important;min-height:100vh;overflow-anchor:none !important;scroll-behavior:auto !important;}',
'#app,#scene,#text,#choices,#end{overflow-anchor:none !important;}',
   'html,body{display:block !important;align-items:initial !important;justify-content:initial !important;padding:0 !important;margin:0 !important;height:auto !important;min-height:100vh;}',
'html{scroll-behavior:auto;}',
'body{background:var(--bg);color:var(--text);font-family:"JetBrains Mono",Consolas,ui-monospace,monospace;font-size:17px;line-height:1.8;min-height:100vh;padding:0;position:relative;overflow-x:hidden;-webkit-font-smoothing:antialiased;}',
'body::before{content:"";position:fixed;inset:0;background:radial-gradient(1200px 800px at 50% 15%,rgba(94,230,224,.05),transparent 60%),radial-gradient(900px 700px at 85% 95%,rgba(255,71,87,.04),transparent 60%);pointer-events:none;z-index:0;animation:breathe 8s ease-in-out infinite;}',
'body::after{content:"";position:fixed;inset:0;background:repeating-linear-gradient(to bottom,rgba(255,255,255,.012) 0 1px,transparent 1px 3px),radial-gradient(ellipse at center,transparent 35%,rgba(0,0,0,.75) 100%);mix-blend-mode:overlay;pointer-events:none;z-index:9998;}',
'@keyframes breathe{0%,100%{opacity:.8}50%{opacity:1}}',
'#app{max-width:900px;margin:0 auto;background:linear-gradient(180deg,rgba(12,14,21,.98),rgba(8,9,14,.98));border-left:1px solid var(--border);border-right:1px solid var(--border);min-height:100vh;box-shadow:0 0 80px rgba(94,230,224,.08);position:relative;z-index:1;}',
'#statusbar{position:sticky;top:0;display:flex;justify-content:space-between;align-items:center;padding:11px 20px;background:linear-gradient(180deg,rgba(7,8,12,.99),rgba(7,8,12,.94));border-bottom:1px solid var(--border);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--dim);z-index:100;backdrop-filter:blur(8px);flex-wrap:wrap;gap:8px;}',
'.vscale{display:flex;gap:8px;align-items:center;flex-wrap:wrap;}',
'.vpill{padding:3px 9px;border-radius:2px;font-weight:600;font-size:10px;border:1px solid;letter-spacing:.15em;background:rgba(0,0,0,.3);}',
'.vplus{color:var(--vp);border-color:rgba(94,230,224,.5);}',
'.vminus{color:var(--vm);border-color:rgba(255,71,87,.5);}',
'.vbal{color:var(--acc);border-color:var(--acc);}',
'#mood{font-style:italic;color:var(--acc);text-transform:none;letter-spacing:.05em;font-size:11px;}',
'#progress{height:3px;background:rgba(255,255,255,.03);position:sticky;top:0;z-index:99;}',
'#pfill{height:100%;background:linear-gradient(90deg,var(--acc),var(--dg));width:0%;transition:width .6s cubic-bezier(.2,.7,.2,1);box-shadow:0 0 12px var(--acc);}',
'#scene{padding:44px 48px 56px;display:flex;flex-direction:column;transition:opacity .3s ease;}',
'#scene.fading-out{opacity:0;}',
'#title{font-family:"Oswald","Arial Narrow",sans-serif;font-weight:500;font-size:26px;color:#fff;margin-bottom:6px;letter-spacing:.15em;text-transform:uppercase;text-shadow:0 0 20px rgba(94,230,224,.3);}',
'#subtitle{font-size:11px;color:var(--faint);margin-bottom:28px;letter-spacing:.3em;text-transform:uppercase;}',
'#text{font-size:17px;line-height:1.85;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:break-word;margin-bottom:28px;color:var(--text);}',
'#text .voice{font-weight:600;letter-spacing:.03em;}',
'#text .whisper{color:var(--dim);font-style:italic;}',
'#text .danger{color:var(--dg);font-weight:600;text-shadow:0 0 14px rgba(255,71,87,.5);}',
'#text .sfx{color:var(--acc2);font-style:italic;opacity:.95;}',
'#text strong{color:#fff;font-weight:600;}',
'#choices{display:flex;flex-direction:column;gap:10px;}',
'.cbtn{background:rgba(94,230,224,.04);border:1px solid rgba(94,230,224,.25);color:var(--text);padding:16px 20px 16px 54px;text-align:left;font-family:inherit;font-size:15px;line-height:1.5;cursor:pointer;border-radius:2px;transition:all .3s cubic-bezier(.2,.7,.2,1);position:relative;overflow:hidden;}',
'.cbtn::before{content:">>";position:absolute;left:20px;top:50%;transform:translateY(-50%);color:var(--faint);font-size:12px;letter-spacing:-2px;transition:all .3s;}',
'.cbtn::after{content:"";position:absolute;left:0;top:0;bottom:0;width:2px;background:var(--acc);transform:scaleY(0);transition:transform .35s;}',
'.cbtn:hover{background:rgba(94,230,224,.1);border-color:var(--acc);transform:translateX(4px);box-shadow:0 0 24px rgba(94,230,224,.2);}',
'.cbtn:hover::before{color:var(--acc);text-shadow:0 0 10px var(--acc);}',
'.cbtn:hover::after{transform:scaleY(1);}',
'.cbtn:active{transform:translateX(2px) scale(.995);}',
'.cbtn:focus-visible{outline:2px solid var(--acc);outline-offset:2px;}',
'.pbtn{background:transparent;border:1px solid rgba(94,230,224,.5);color:#fff;padding:16px 36px;font-family:"Oswald","Arial Narrow",sans-serif;font-size:13px;letter-spacing:.3em;text-transform:uppercase;cursor:pointer;border-radius:2px;align-self:flex-start;transition:all .3s;position:relative;overflow:hidden;}',
'.pbtn::before{content:"";position:absolute;inset:0;background:linear-gradient(120deg,transparent,rgba(94,230,224,.2),transparent);transform:translateX(-100%);transition:transform .6s;}',
'.pbtn:hover::before{transform:translateX(100%);}',
'.pbtn:hover{border-color:var(--acc);color:var(--acc);box-shadow:0 0 24px rgba(94,230,224,.3),inset 0 0 24px rgba(94,230,224,.08);}',
'.pbtn:active{transform:scale(.98);}',
'.pbtn:focus-visible{outline:2px solid var(--acc);outline-offset:3px;}',
'#log{border-top:1px solid var(--border);padding:12px 22px;font-size:11px;color:var(--dim);max-height:110px;overflow-y:auto;background:rgba(5,6,9,.6);letter-spacing:.05em;}',
'#log div{padding:2px 0;}',
'.lplus{color:var(--vp);}.lminus{color:var(--vm);}.lzero{color:var(--vz);}',
'#end{padding:60px 48px;text-align:center;display:none;}',
'#etitle{font-family:"Oswald","Arial Narrow",sans-serif;font-size:34px;letter-spacing:.15em;margin-bottom:22px;text-transform:uppercase;}',
'#etext{font-size:16px;line-height:1.85;max-width:720px;margin:0 auto 32px;white-space:pre-wrap;text-align:left;}',
'#estats{font-size:12px;color:var(--dim);margin-bottom:32px;line-height:1.9;padding:20px 24px;border:1px solid var(--border);background:rgba(0,0,0,.3);text-align:left;max-width:560px;margin-left:auto;margin-right:auto;letter-spacing:.05em;}',
'.e1{color:var(--dg);text-shadow:0 0 20px rgba(255,71,87,.5);}',
'.e2{color:var(--gd);text-shadow:0 0 20px rgba(94,230,224,.5);}',
'.e3{color:var(--wr);}',
'.e4{color:#ffb84d;}',
'.e5{color:var(--acc2);text-shadow:0 0 20px rgba(209,140,255,.5);}',
'.e6{color:#ff69b4;text-shadow:0 0 20px rgba(255,105,180,.5);}',
'#dbg{display:none;background:rgba(5,6,9,.9);border-top:1px solid var(--border);padding:12px 22px;font-size:11px;color:var(--dim);font-family:ui-monospace,monospace;white-space:pre-wrap;letter-spacing:.05em;}',
'#dbg.on{display:block;}',
'#dtog{position:absolute;top:11px;right:14px;background:transparent;border:1px solid var(--border);color:var(--faint);padding:3px 10px;font-size:9px;cursor:pointer;border-radius:2px;font-family:inherit;letter-spacing:.2em;transition:all .25s;}',
'#dtog:hover{color:var(--acc);border-color:var(--acc);}',
'@media (max-width:720px){#scene{padding:32px 22px 44px;}#end{padding:44px 22px;}#statusbar{font-size:10px;padding:10px 14px;}#title{font-size:20px;}#etitle{font-size:24px;}.cbtn{padding:14px 16px 14px 44px;font-size:14px;}.cbtn::before{left:16px;}#text{font-size:16px;line-height:1.8;}.pbtn{padding:14px 26px;font-size:12px;letter-spacing:.25em;width:100%;text-align:center;}}',
'@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms !important;transition-duration:.01ms !important;}}'
].join('');

var HTML = '<div id="app">' +
'<div id="statusbar"><span id="plabel">Погружение...</span>' +
'<div class="vscale"><span class="vpill vplus" id="pplus">S+ : 0</span>' +
'<span class="vpill vminus" id="pminus">S- : 0</span>' +
'<span class="vpill vbal" id="pbal">Баланс: 0</span>' +
'<span id="mood">-</span></div>' +
'<button id="dtog" type="button">DEBUG</button></div>' +
'<div id="progress"><div id="pfill"></div></div>' +
'<div id="scene"><div id="title"></div><div id="subtitle"></div><div id="text"></div><div id="choices"></div></div>' +
'<div id="end"><div id="etitle"></div><div id="etext"></div><div id="estats"></div>' +
'<button class="pbtn" id="restart" type="button">Сыграть снова</button></div>' +
'<div id="log"></div><div id="dbg"></div></div>';

var S = {};
   /* ============================================================
   ЦВЕТА ПЕРСОНАЖЕЙ (яркие, читаемые)
   ============================================================ */

var CHARACTER_COLORS = {
  'ЕЛЕНА ИВАНОВНА': '#7df0ff',
  'ЕЛЕНА':          '#7df0ff',
  'АЛЕКСАНДР СЕРГЕЕВИЧ': '#d18cff',
  'АЛЕКСАНДР':      '#d18cff',
  'ЕКАТЕРИНА':      '#ff9dc7',
  'ИГОРЬ ВАСИЛЬЕВИЧ': '#ffd166',
  'ИГОРЬ':          '#ffd166',
  'РОМАН':          '#ff9c42',
  'ВРАЧ':           '#6dc7ff',
  'НАТАША':         '#ff9dd6',
  'САША':           '#ffb3d9',
  'ПАЦИЕНТ':        '#a7f97a',
  'ВЕДУЩИЙ':        '#9d7fff',
  'ЖУРНАЛИСТ':      '#ff9c42',
  'МОНСТР/ИГОРЬ':   '#ff4757',
  'МОНСТР':         '#ff4757',
  'МЕДБРАТ':        '#b8c8dc',
  'ПРОФЕССОР':      '#ffd166',
  'МАМА':           '#ffd4a3',
  'ГОЛОС В ГОЛОВЕ': '#ff4757',
  'КУКЛЫ-МЕДСЁСТРЫ':'#e0e8f0',
  'АКТЁР В ЧЁРНОМ': '#a896c8'
};

/* ============================================================
   СКРИМЕРЫ (один раз за сеанс на сцену)
   ============================================================ */

var SCREAMER_SCENES = {
  // Пока пусто. Сюда впишем сцены-скримеры, когда появятся mp3.
};
/* ============================================================
   АТМОСФЕРНЫЕ ЗВУКИ ПО СЦЕНАМ
   ============================================================ */

var SCENE_AMBIENT = {
  'intro_lab':           'amb_intro_lab',
  'intro_rules':         'amb_intro_rules',
  'intro_dive':          'amb_intro_dive',
  'h_glory':             'amb_h_glory_1',
  't_vrach':             'amb_t_vrach',

  // === Индива Журналист ===
  'j_journalist':        'amb_j_journalist',
  'j_branch_pay':        'amb_j_journalist',
  'j_branch_refuse':     'amb_j_journalist',
  'j_branch_silence':    'amb_j_journalist',

  // === Семейная идиллия ===
  'f_family':            'amb_f_family',

  // === Кровь на руках (все варианты) — играет музыка Семейной идиллии ===
  'f_ek_1_1':            'amb_f_family',
  'f_ek_1_2':            'amb_f_family',
  'f_ek_1_3':            'amb_f_family',
  'f_ek_1_4':            'amb_f_family',
  'f_el_2_1':            'amb_f_family',
  'f_el_2_2':            'amb_f_family',
  'f_el_2_3':            'amb_f_family',
  'f_el_2_4':            'amb_f_family',

  // === Диагноз ===
  'd_diagnosis':         'amb_d_diagnosis',

  // === Индива Эксперимент над игроком (взять папку) ===
  't_experiment':        'amb_t_experiment',

  // === Индива Пациент №1 (не брать папку) ===
  't_patient1':          'amb_t_patient1',
  't_patient1_release':  'amb_t_patient1_rel',
  't_patient1_hold':     'amb_t_patient1_hold',

  // === Гибель питомца ===
  'pet_real':            'amb_pet',
  'pet_fake':            'amb_pet',

  // === Индива Лоботомия ===
  't_lobotomy_task':     'amb_t_lobotomy',

  // === Индива Наташа ===
  't_natasha':           'amb_t_natasha',

  // === Индива Саша мелкий ===
  't_sasha_small':       'amb_t_sasha_small'
};
   var SCENE_VOLUME = {
  'pet_real': 0.85,
  'pet_fake': 0.85
};

var SCENE_PLAYLISTS = {
  'h_glory': ['amb_h_glory_1', 'amb_h_glory_2', 'amb_h_glory_3']
};

/* ============================================================
   ЗВУКОВОЙ ДВИЖОК
   ============================================================ */

var Mp3 = (function(){
  var cache = {};
  var ambientAudio = null;

  function load(name){
    if (cache[name]) return cache[name];
    var path = SOUND_FILES[name];
    if (!path) return null;
    var a = new Audio();
    a.src = path;
    a.preload = 'auto';
    cache[name] = a;
    return a;
  }

  function exists(name){ return !!SOUND_FILES[name]; }

  function preloadAll(){
    for (var n in SOUND_FILES) { load(n); }
  }

  function play(name, volume){
    if (!exists(name)) return false;
    try {
      var a = load(name);
      if (!a) return false;
      var c = a.cloneNode();
      c.volume = (typeof volume === 'number') ? volume : 0.9;
      var p = c.play();
      if (p && p.catch) p.catch(function(){});
      return true;
    } catch(e){ return false; }
  }

  function stopLoop(){
    if (ambientAudio){
      try { ambientAudio.pause(); ambientAudio.currentTime = 0; } catch(e){}
      ambientAudio = null;
    }
  }

  function playLoop(name, volume){
    if (!exists(name)) return false;
    stopLoop();
    try {
      var a = load(name);
      if (!a) return false;
      ambientAudio = a.cloneNode();
      ambientAudio.loop = true;
      ambientAudio.volume = (typeof volume === 'number') ? volume : 0.4;
      var p = ambientAudio.play();
      if (p && p.catch) p.catch(function(){});
      return true;
    } catch(e){ return false; }
  }

  function playPlaylist(names, volume){
    stopLoop();
    function playAt(index){
      if (index >= names.length) return;
      var name = names[index];
      if (!exists(name)) { playAt(index + 1); return; }
      var a = load(name);
      if (!a) { playAt(index + 1); return; }
      var clone = a.cloneNode();
      var isLast = (index === names.length - 1);
      clone.loop = isLast;
      clone.volume = (typeof volume === 'number') ? volume : 0.5;
      clone.onended = function(){
        if (!isLast) playAt(index + 1);
      };
      ambientAudio = clone;
      var p = clone.play();
      if (p && p.catch) p.catch(function(){});
    }
    playAt(0);
  }

  function setMuted(v){
    if (ambientAudio){
      try { ambientAudio.volume = v ? 0 : 0.4; } catch(e){}
    }
  }

  return {
    preloadAll: preloadAll,
    play: play,
    playLoop: playLoop,
    playPlaylist: playPlaylist,
    stopLoop: stopLoop,
    setMuted: setMuted,
    exists: exists
  };
})();
   var Audio2 = (function(){
  var ctx, master, muted = false, started = false;
  var playedScreamers = {};
  var currentAmbient = null;

      function init(){
    if (!ctx) {
      try {
        var AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) { console.warn('[Audio] Web Audio API не поддерживается'); return; }
        ctx = new AC();
        master = ctx.createGain();
        master.gain.value = 0.55;
        master.connect(ctx.destination);
        console.log('[Audio] init OK, state =', ctx.state);
      } catch(e){ console.error('[Audio] init failed:', e); return; }
    }
    if (ctx.state === 'suspended') {
      ctx.resume().then(function(){
        console.log('[Audio] resumed, state =', ctx.state);
      });
    }
    started = true;
  }
  function resume(){
    if (!ctx) init();
    if (ctx && ctx.state === 'suspended') ctx.resume();
  }
       function setMuted(v){
    muted = v;
    if (!ctx || !master) return;
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.setValueAtTime(v ? 0.0001 : 0.55, ctx.currentTime);
  }
  function noiseBuffer(dur){
    var size = Math.max(1, Math.floor(ctx.sampleRate * dur));
    var buf = ctx.createBuffer(1, size, ctx.sampleRate);
    var d = buf.getChannelData(0);
    for (var i = 0; i < size; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }
  function burst(dur, vol, filterType, freq, q){
    if (!ctx || muted) return;
    var src = ctx.createBufferSource();
    src.buffer = noiseBuffer(dur);
    var filt = ctx.createBiquadFilter();
    filt.type = filterType || 'bandpass';
    filt.frequency.value = freq || 400;
    filt.Q.value = q || 2.5;
    var g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(vol, ctx.currentTime + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
    src.connect(filt).connect(g).connect(master);
    src.start();
  }
  function tone(f1, f2, dur, vol, type){
    if (!ctx || muted) return;
    var o = ctx.createOscillator();
    o.type = type || 'sawtooth';
    var g = ctx.createGain();
    o.frequency.setValueAtTime(f1, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(f2, ctx.currentTime + dur);
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(vol, ctx.currentTime + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
    o.connect(g).connect(master);
    o.start();
    o.stop(ctx.currentTime + dur);
  }
  function blip(freq, dur, vol, type){
    if (!ctx || muted) return;
    var o = ctx.createOscillator();
    var g = ctx.createGain();
    o.type = type || 'square';
    o.frequency.value = freq || 660;
    dur = dur || 0.05; vol = vol || 0.025;
    g.gain.setValueAtTime(vol, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
    o.connect(g).connect(master);
    o.start();
    o.stop(ctx.currentTime + dur);
  }
  function whoosh(){
    if (!ctx || muted) return;
    var src = ctx.createBufferSource();
    src.buffer = noiseBuffer(0.4);
    var filt = ctx.createBiquadFilter();
    filt.type = 'bandpass';
    filt.frequency.setValueAtTime(200, ctx.currentTime);
    filt.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.4);
    filt.Q.value = 1.2;
    var g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.05);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
    src.connect(filt).connect(g).connect(master);
    src.start();
  }
  function heartbeat(){
    if (!ctx || muted) return;
    for (var i = 0; i < 2; i++){
      (function(idx){
        setTimeout(function(){
          if (!ctx || muted) return;
          var o = ctx.createOscillator();
          var g = ctx.createGain();
          o.type = 'sine';
          o.frequency.value = 42;
          g.gain.setValueAtTime(0.0001, ctx.currentTime);
          g.gain.exponentialRampToValueAtTime(0.32, ctx.currentTime + 0.02);
          g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.14);
          o.connect(g).connect(master);
          o.start();
          o.stop(ctx.currentTime + 0.18);
        }, idx * 170);
      })(i);
    }
  }
    function screamer(type){
    // Скримеры пока отключены — ты их добавишь позже.
    // Если когда-нибудь появится файл screamer_stab.mp3 и т.п. — заиграет он.
    if (Mp3.play('screamer_' + type, 1.0)) return;
    return;
  }
  function tryPlayScreamer(sceneId){
    if (playedScreamers[sceneId]) return;
    var type = SCREAMER_SCENES[sceneId];
    if (!type) return;
    playedScreamers[sceneId] = true;
    setTimeout(function(){ screamer(type); }, 400);
  }
    function clickChoice(btn){
    var text = btn ? (btn.textContent || '') : '';

    if (/герой|верим/i.test(text) && Mp3.play('click_hero', 0.8)) return;
    if (/не знаем|правду|скажите правд/i.test(text) && Mp3.play('click_truth', 0.8)) return;
    if (/взять папку/i.test(text) && Mp3.play('click_take_folder', 0.8)) return;
    if (/не брать|отказать/i.test(text) && Mp3.play('click_no_folder', 0.8)) return;
    if (/аборт/i.test(text) && Mp3.play('click_abort', 0.8)) return;
    if (/семья|попробуем/i.test(text) && Mp3.play('click_family', 0.8)) return;
    if (/ключи|дешево/i.test(text) && Mp3.play('click_keys', 0.8)) return;
    if (/не выпускать/i.test(text) && Mp3.play('click_hold', 0.8)) return;
    if (/выпустить/i.test(text) && Mp3.play('click_release', 0.8)) return;

    if (Mp3.play('click_next', 0.7)) return;
    blip(740, 0.05, 0.03);
  }
    function clickContinue(){
    var variants = ['click_next', 'click_next2', 'click_next3'];
    var name = variants[Math.floor(Math.random() * variants.length)];
    if (Mp3.play(name, 0.7)) return;
    blip(420, 0.09, 0.04);
  }
  function clickRestart(){ blip(300, 0.12, 0.05, 'sawtooth'); }
  function clickToggle(){ blip(880, 0.04, 0.02, 'triangle'); }

  function stopAmbient(){
    if (!currentAmbient) return;
    var nodes = currentAmbient.nodes, gain = currentAmbient.gain;
    try {
      gain.gain.cancelScheduledValues(ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
    } catch(e){}
    setTimeout(function(){
      nodes.forEach(function(n){ try { n.stop && n.stop(); n.disconnect && n.disconnect(); } catch(e){} });
    }, 600);
    currentAmbient = null;
  }

  function makeAmbient(type){
    var nodes = [];
    var gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(1.0, ctx.currentTime + 1.5);
    gain.connect(master);
    nodes.push(gain);

    function osc(freq, t, vol){
      var o = ctx.createOscillator(); o.type = t || 'sine'; o.frequency.value = freq;
      var g = ctx.createGain(); g.gain.value = vol;
      o.connect(g).connect(gain); o.start();
      nodes.push(o); nodes.push(g);
      return o;
    }
    function noiseLoop(vol, filtType, freq, q){
      var src = ctx.createBufferSource();
      src.buffer = noiseBuffer(2);
      src.loop = true;
      var f = ctx.createBiquadFilter();
      f.type = filtType || 'bandpass'; f.frequency.value = freq || 400; f.Q.value = q || 1;
      var g = ctx.createGain(); g.gain.value = vol;
      src.connect(f).connect(g).connect(gain);
      src.start();
      nodes.push(src); nodes.push(f); nodes.push(g);
      return src;
    }

    switch(type){
      case 'hospital':
        osc(60, 'sine', 0.18);
        osc(120, 'triangle', 0.05);
        noiseLoop(0.035, 'lowpass', 300, 0.7);
        (function beepLoop(){
          var beep = function(){
            if (!currentAmbient || currentAmbient.type !== 'hospital') return;
            if (ctx && !muted){
              var o = ctx.createOscillator();
              var g = ctx.createGain();
              o.type = 'sine'; o.frequency.value = 1180;
              g.gain.setValueAtTime(0.0001, ctx.currentTime);
              g.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 0.01);
              g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);
              o.connect(g).connect(gain);
              o.start(); o.stop(ctx.currentTime + 0.15);
            }
            setTimeout(beep, 1000);
          };
          setTimeout(beep, 800);
        })();
        break;
      case 'whispers':
        osc(48, 'sine', 0.15);
        osc(48.4, 'sine', 0.12);
        noiseLoop(0.05, 'bandpass', 900, 3);
        (function whisperLoop(){
          var next = function(){
            if (!currentAmbient || currentAmbient.type !== 'whispers') return;
            if (ctx && !muted){
              var src = ctx.createBufferSource();
              src.buffer = noiseBuffer(0.6);
              var f = ctx.createBiquadFilter();
              f.type = 'bandpass'; f.frequency.value = 600 + Math.random() * 800; f.Q.value = 5;
              var g = ctx.createGain();
              g.gain.setValueAtTime(0.0001, ctx.currentTime);
              g.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 0.15);
              g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.55);
              src.connect(f).connect(g).connect(gain);
              src.start();
            }
            setTimeout(next, 5000 + Math.random() * 9000);
          };
          setTimeout(next, 2500);
        })();
        break;
      case 'applause':
        osc(55, 'sine', 0.12);
        noiseLoop(0.06, 'bandpass', 1400, 0.7);
        (function applauseLoop(){
          var next = function(){
            if (!currentAmbient || currentAmbient.type !== 'applause') return;
            if (ctx && !muted){
              var src = ctx.createBufferSource();
              src.buffer = noiseBuffer(1.6);
              var f = ctx.createBiquadFilter();
              f.type = 'bandpass'; f.frequency.value = 1500; f.Q.value = 0.6;
              var g = ctx.createGain();
              g.gain.setValueAtTime(0.0001, ctx.currentTime);
              g.gain.exponentialRampToValueAtTime(0.09, ctx.currentTime + 0.15);
              g.gain.exponentialRampToValueAtTime(0.03, ctx.currentTime + 0.9);
              g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.5);
              src.connect(f).connect(g).connect(gain);
              src.start();
            }
            setTimeout(next, 7000 + Math.random() * 8000);
          };
          setTimeout(next, 1200);
        })();
        break;
      case 'tv':
        osc(50, 'sine', 0.13);
        noiseLoop(0.045, 'highpass', 1800, 0.6);
        (function radioBeep(){
          var next = function(){
            if (!currentAmbient || currentAmbient.type !== 'tv') return;
            if (ctx && !muted){
              var o = ctx.createOscillator();
              var g = ctx.createGain();
              o.type = 'square'; o.frequency.value = 320 + Math.random() * 400;
              g.gain.setValueAtTime(0.0001, ctx.currentTime);
              g.gain.exponentialRampToValueAtTime(0.02, ctx.currentTime + 0.01);
              g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.2);
              o.connect(g).connect(gain);
              o.start(); o.stop(ctx.currentTime + 0.25);
            }
            setTimeout(next, 4000 + Math.random() * 6000);
          };
          setTimeout(next, 1500);
        })();
        break;
      case 'candle':
        osc(45, 'sine', 0.12);
        (function crackle(){
          var next = function(){
            if (!currentAmbient || currentAmbient.type !== 'candle') return;
            if (ctx && !muted){
              var src = ctx.createBufferSource();
              src.buffer = noiseBuffer(0.04);
              var f = ctx.createBiquadFilter();
              f.type = 'highpass'; f.frequency.value = 2500;
              var g = ctx.createGain();
              g.gain.setValueAtTime(0.0001, ctx.currentTime);
              g.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 0.003);
              g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);
              src.connect(f).connect(g).connect(gain);
              src.start();
            }
            setTimeout(next, 400 + Math.random() * 1400);
          };
          setTimeout(next, 300);
        })();
        break;
      case 'surgery':
        osc(60, 'sine', 0.15);
        osc(125, 'triangle', 0.04);
        noiseLoop(0.04, 'lowpass', 400, 0.7);
        (function tools(){
          var next = function(){
            if (!currentAmbient || currentAmbient.type !== 'surgery') return;
            if (ctx && !muted){
              var o = ctx.createOscillator();
              var g = ctx.createGain();
              o.type = 'triangle'; o.frequency.value = 2200 + Math.random() * 1800;
              g.gain.setValueAtTime(0.0001, ctx.currentTime);
              g.gain.exponentialRampToValueAtTime(0.025, ctx.currentTime + 0.003);
              g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
              o.connect(g).connect(gain);
              o.start(); o.stop(ctx.currentTime + 0.45);
            }
            setTimeout(next, 1800 + Math.random() * 3200);
          };
          setTimeout(next, 900);
        })();
        break;
      case 'strobe':
        osc(55, 'sine', 0.14);
        noiseLoop(0.03, 'lowpass', 350, 0.6);
        (function click(){
          var next = function(){
            if (!currentAmbient || currentAmbient.type !== 'strobe') return;
            if (ctx && !muted){
              var o = ctx.createOscillator();
              var g = ctx.createGain();
              o.type = 'square'; o.frequency.value = 160;
              g.gain.setValueAtTime(0.0001, ctx.currentTime);
              g.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 0.003);
              g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);
              o.connect(g).connect(gain);
              o.start(); o.stop(ctx.currentTime + 0.06);
            }
            setTimeout(next, 950);
          };
          setTimeout(next, 500);
        })();
        break;
      case 'prison':
        osc(52, 'sine', 0.16);
        osc(90, 'triangle', 0.04);
        (function drop(){
          var next = function(){
            if (!currentAmbient || currentAmbient.type !== 'prison') return;
            if (ctx && !muted){
              var o = ctx.createOscillator();
              var g = ctx.createGain();
              o.type = 'sine'; o.frequency.value = 1400;
              o.frequency.exponentialRampToValueAtTime(280, ctx.currentTime + 0.15);
              g.gain.setValueAtTime(0.0001, ctx.currentTime);
              g.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 0.005);
              g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);
              o.connect(g).connect(gain);
              o.start(); o.stop(ctx.currentTime + 0.2);
            }
            setTimeout(next, 2200 + Math.random() * 3500);
          };
          setTimeout(next, 800);
        })();
        break;
      case 'garden':
        osc(45, 'sine', 0.16);
        osc(48, 'sine', 0.11);
        noiseLoop(0.035, 'bandpass', 600, 1.2);
        (function dog(){
          var next = function(){
            if (!currentAmbient || currentAmbient.type !== 'garden') return;
            if (ctx && !muted){
              var o = ctx.createOscillator();
              var g = ctx.createGain();
              o.type = 'sawtooth'; o.frequency.value = 280;
              g.gain.setValueAtTime(0.0001, ctx.currentTime);
              g.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 0.01);
              g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);
              o.connect(g).connect(gain);
              o.start(); o.stop(ctx.currentTime + 0.15);
            }
            setTimeout(next, 6000 + Math.random() * 9000);
          };
          setTimeout(next, 3000);
        })();
        break;
      case 'toys':
        osc(70, 'sine', 0.12);
        noiseLoop(0.025, 'highpass', 2400, 0.8);
        (function chime(){
          var next = function(){
            if (!currentAmbient || currentAmbient.type !== 'toys') return;
            if (ctx && !muted){
              var notes = [523, 659, 784, 988];
              var n = notes[Math.floor(Math.random() * notes.length)];
              var o = ctx.createOscillator();
              var g = ctx.createGain();
              o.type = 'sine'; o.frequency.value = n;
              g.gain.setValueAtTime(0.0001, ctx.currentTime);
              g.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 0.02);
              g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.1);
              o.connect(g).connect(gain);
              o.start(); o.stop(ctx.currentTime + 1.2);
            }
            setTimeout(next, 3500 + Math.random() * 5000);
          };
          setTimeout(next, 1500);
        })();
        break;
      case 'home_night':
        osc(48, 'sine', 0.14);
        osc(60, 'sine', 0.06);
        noiseLoop(0.02, 'lowpass', 250, 0.7);
        break;
      case 'clock':
        osc(42, 'sine', 0.12);
        (function tick(){
          var next = function(){
            if (!currentAmbient || currentAmbient.type !== 'clock') return;
            if (ctx && !muted){
              var src = ctx.createBufferSource();
              src.buffer = noiseBuffer(0.02);
              var f = ctx.createBiquadFilter();
              f.type = 'bandpass'; f.frequency.value = 3000; f.Q.value = 8;
              var g = ctx.createGain();
              g.gain.setValueAtTime(0.0001, ctx.currentTime);
              g.gain.exponentialRampToValueAtTime(0.03, ctx.currentTime + 0.002);
              g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.02);
              src.connect(f).connect(g).connect(gain);
              src.start();
            }
            setTimeout(next, 1000);
          };
          setTimeout(next, 300);
        })();
        noiseLoop(0.03, 'highpass', 2000, 0.5);
        break;
      case 'heartbeat':
        osc(50, 'sine', 0.15);
        (function beat(){
          var next = function(){
            if (!currentAmbient || currentAmbient.type !== 'heartbeat') return;
            if (ctx && !muted){
              var o = ctx.createOscillator();
              var g = ctx.createGain();
              o.type = 'sine'; o.frequency.value = 42;
              g.gain.setValueAtTime(0.0001, ctx.currentTime);
              g.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 0.02);
              g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.15);
              o.connect(g).connect(gain);
              o.start(); o.stop(ctx.currentTime + 0.2);
            }
            setTimeout(next, 900);
          };
          setTimeout(next, 400);
        })();
        break;
      case 'final':
        osc(38, 'sine', 0.18);
        osc(38.5, 'sine', 0.14);
        osc(76, 'triangle', 0.05);
        noiseLoop(0.04, 'lowpass', 220, 0.6);
        break;
      default:
        osc(48, 'sine', 0.14);
        noiseLoop(0.03, 'lowpass', 300, 0.7);
    }

    currentAmbient = { type: type, nodes: nodes, gain: gain };
  }

      function playSceneAmbient(sceneId){
    // Если для сцены задан плейлист (несколько треков подряд) — запускаем его
    if (typeof SCENE_PLAYLISTS !== 'undefined' && SCENE_PLAYLISTS[sceneId]) {
      var vList = (typeof SCENE_VOLUME !== 'undefined' && SCENE_VOLUME[sceneId]) || 0.55;
      Mp3.playPlaylist(SCENE_PLAYLISTS[sceneId], vList);
      return;
    }

    // Обычная одна мелодия для сцены
    var name = SCENE_AMBIENT[sceneId];
    if (name){
      var vol = (typeof SCENE_VOLUME !== 'undefined' && SCENE_VOLUME[sceneId]) || 0.55;
      if (Mp3.playLoop(name, vol)) return;
    }

    // Если для сцены нет музыки — останавливаем всё, что играет
    Mp3.stopLoop();
  }
  function stopAll(){ stopAmbient(); }

  return {
    init: resume, resume: resume, setMuted: setMuted,
    isMuted: function(){ return muted; },
    blip: blip, whoosh: whoosh, heartbeat: heartbeat,
    screamer: screamer, tryPlayScreamer: tryPlayScreamer,
    playSceneAmbient: playSceneAmbient, stopAll: stopAll,
    clickChoice: clickChoice, clickContinue: clickContinue,
    clickRestart: clickRestart, clickToggle: clickToggle
  };
})();

/* ============================================================
   РАСКРАСКА ИМЁН ПЕРСОНАЖЕЙ
   ============================================================ */
function colorizeText(html){
  if (!html) return '';
  html = html.replace(/<span class="voice">([^<]+?)<\/span>/g, function(m, name){
    var t = name.replace(/\s+/g, ' ').trim();
    var hasColon = t.charAt(t.length - 1) === ':';
    var clean = hasColon ? t.slice(0, -1).trim() : t;
    var color = CHARACTER_COLORS[clean] || '#5ee6e0';
    return '<span class="voice" style="color:' + color + ';text-shadow:0 0 14px ' + color + '80">' + name + '</span>';
  });
  html = html.replace(/<span class="danger">([^<]+?):<\/span>/g, function(m, name){
    var t = name.replace(/\s+/g, ' ').trim();
    var color = CHARACTER_COLORS[t] || '#ff4757';
    return '<span class="voice" style="color:' + color + ';text-shadow:0 0 14px ' + color + '80">' + name + ':</span>';
  });
  return html;
}

/* ============================================================
   АКТ I. ПОГРУЖЕНИЕ В ЛАБОРАТОРИЮ
   ============================================================ */

S.intro_lab = { type:'story', title:'Акт I. Сцена 1. Вход в лабораторию', subtitle:'Секретная лаборатория 80-х',
text:`Полутёмное помещение в стиле секретной лаборатории 80-х. Свет идёт от неоновых трубок и проектора. На стенах — газетные вырезки под стеклом, портреты, фотографии с церемоний. Центральное место занимает большой портрет Александра Сергеевича Петрова в белом халате с золотистым ретривером у ног.

<span class="sfx">Звуковой фон: Тихий гул аппаратуры, где-то капает вода, иногда — шипение статики.</span>

Игроки входят. Свет приглушён. Из полумрака выходит <strong>ЕЛЕНА ИВАНОВНА СМИРНОВА</strong>. Ей около 55. Белый халат нараспашку, под ним строгий костюм. В руках — планшет и старый пульт от проектора.

<span class="voice">ЕЛЕНА ИВАНОВНА:</span>
<span class="whisper">(Останавливается под портретом, обводит игроков взглядом, выдерживает паузу.)</span>
Добрый вечер, мои не огранённые алмазы. <span class="whisper">(Короткая улыбка.)</span>
Я — Елена Ивановна. Научный руководитель. И правая рука человека, который смотрит на вас сейчас с этой стены.

<span class="whisper">(Она резко нажимает кнопку на пульте. Проектор за спиной игроков выхватывает крупное фото — Александр Сергеевич получает орден, рядом с ним стоит тот самый золотистый ретривер с бантом на шее.)</span>
<span class="whisper">(Она подходит ближе к фотографиям, касается пальцем стекла.)</span>
Вы знаете, кто он. Все знают. Александр Сергеевич Петров — онколог. Гений. Благотворитель. Человек, который мог вытащить с того света, когда остальные опускали руки.

<span class="whisper">(Она резко меняет тон — становится тише, жёстче.)</span>
А теперь — самое страшное.
Судьба, эта старая злодейка, решила посмеяться над нами. Александр Сергеевич, главный онколог страны, заболел раком. <span class="danger">Метастазы в мозг.</span>

<span class="whisper">(Она замолкает на три секунды. Слышно только капанье воды.)</span>

Мы скрыли это от прессы. От семьи. Потому что если мир узнает — вера в науку рухнет. Люди перестанут ждать лекарства.

<span class="whisper">(Она снимает очки, трёт переносицу.)</span>

Мы сделали всё. Химиотерапия, экспериментальная вакцина, искусственная кома. Мы почти выиграли. Почти.

Но вакцина мутировала. Сознание Александра запуталось в собственных воспоминаниях. Он не может проснуться. Там — внутри — он бродит по своим лабиринтам и не находит выхода.

<span class="whisper">(Она поднимает глаза на игроков.)</span>

А мы не можем его оттуда забрать. Потому что мы — снаружи. А вы — пойдёте внутрь.

<span class="whisper">(Она подходит к каждому игроку, смотрит в глаза.)</span>

Вы отобраны. Не случайно. По биосовместимости. По частоте пульса. По чему-то, чего мы до сих пор не понимаем до конца. Ваши мозги — единственные, кто способен войти в его разум без отторжения.

<span class="whisper">(Она указывает на часы.)</span>

У вас ровно 90 минут. Потому что кома начнёт сопротивляться. Она почувствует чужаков и начнёт вас уничтожать. Или — что ещё хуже — вы останетесь там навсегда.

<span class="whisper">(Пауза. Она говорит почти шёпотом.)</span>

А ваши тела здесь начнут угасать.

<span class="whisper">(Внезапно её голос становится громче, почти бодрым.)</span>

Но! Если вы вытащите его оттуда — живым и осознанным:

<span class="whisper">(Она загибает пальцы.)</span>

— вы спасёте величайший ум планеты;
— вы подарите миру надежду на лекарство от рака;
— вы получите столько денег, что ваши правнуки смогут не работать;
— и ваши имена навсегда войдут в историю медицины.

<span class="whisper">(Она улыбается, но в глазах — тревога.)</span>

Ну что, алмазы мои. Вы всё ещё хотите стать бриллиантами? Или кто-то хочет выйти?

<span class="whisper">(Она делает паузу, даёт возможность ответить. Затем берёт со стола несколько чёрных браслетов.)</span>

Тогда надевайте. Эти браслеты — датчики пульса. Если частота падает ниже критической — мы вас отключаем и вытаскиваем. Но помните: если отключим слишком рано — Александр останется там навсегда.

<span class="whisper">(Она протягивает браслеты игрокам. Жёстко и требовательно.)</span>
Вопросы есть? Нет? Тогда — приборы готовы. Проходите к креслам.

<span class="sfx">Свет гаснет почти полностью. Остаётся только подсветка на креслах. Проектор выключается. Елена Ивановна отходит в тень, но её голос звучит из темноты:</span>

<span class="voice">ЕЛЕНА ИВАНОВНА (голос за кадром):</span>
И запомните, алмазы. Он там — не просто доктор. Он — тот, кто лечил других. Теперь — он пациент. Не дайте ему почувствовать себя беспомощным. Найдите его. И приведите домой.`,
next:'intro_rules' };

S.intro_rules = { type:'story', title:'Акт I. Сцена 2. Инструкция и подготовка', subtitle:'Конференц-зал',
text:`Строгий конференц-зал с мониторами и медицинскими приборами.

<span class="voice">ЕЛЕНА ИВАНОВНА</span> <span class="whisper">(подключает всех к оборудованию):</span>
Итак, удачи.`,
next:'intro_dive' };

S.intro_dive = { type:'story', title:'Акт II. Эпизод 1. Начало путешествия', subtitle:'Сознательное Пространство',
text:`Темнота, рассеянный синий свет, неясные фигуры впереди.

<span class="sfx">Шёпот, эхо шагов, редкие всплески белого шума.</span>

Группа медленно движется вперёд, держась за руки. Впереди мелькает неясная фигура, быстро исчезающая в темноте.`,
next:'h_glory' };

/* ============================================================
   АКТ II. ЭПИЗОД 2. ЗАЛ СЛАВЫ
   ============================================================ */

S.h_glory = { type:'choice', title:'Эпизод 2. Зал славы', subtitle:'Торжественный зал',
text:`Зал в торжественном полумраке. На сцене — трибуна с микрофоном, цветы. Зал — стоящие манекены.

<span class="voice">ВЕДУЩИЙ</span> <span class="whisper">(подходит к трибуне под бурные аплодисменты, жестом просит тишины):</span>
Дорогие друзья! Сегодня мы чествуем величайшего человека современности — Александра Сергеевича Петрова!

<span class="sfx">ЗАЛ (взрыв аплодисментов, свист, топот ног. Крики: «Браво!», «Гордость науки!»)</span>

Александр Сергеевич делает шаг вперед. Он щурится от софитов, поднимает ладонь, призывая тишину. Шум стихает, слышен только шелест микрофона.

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ:</span>
Спасибо... спасибо всем вам! Я глубоко тронут... Честно говоря, я никогда не умел принимать такие почести. Моя жизнь посвящена служению людям — и это единственная награда, которая мне нужна.

<span class="whisper">(Он переводит дух, и тут его пробивает сухой, надрывный кашель. Он прикрывает рот платком, делает паузу.)</span>

<span class="whisper">Внутренний голос: «Чёрт, опять эта пыль. Надо было настоять, чтобы сцену проветрили. Но как же приятно стоять здесь... Слышать их гул. Они даже не представляют, что их жизнь изменилась благодаря мне — и только мне. Но нельзя показывать этого. Я — слуга, я — скромный труженик».</span>

<span class="whisper">(Он убирает платок, извиняюще улыбается.)</span>
Простите, аллергия на цветы. Такая ирония — мне дарят букеты, а я от них кашляю. <span class="whisper">(он смеётся, зал поддерживает смех)</span>
Но, как говорится, красота требует жертв. И если моя маленькая жертва — это возможность видеть ваши счастливые лица, я готов кашлять вечно.

<span class="whisper">(Он делает шаг к трибуне, опирается на неё руками. Взгляд становится глубокомысленным.)</span>

Знаете, коллеги, когда я начинал свой путь, мне говорили: «Александр, ты слишком много берёшь на себя. Невозможно объять необъятное». А я отвечал: «Я не объять — я отдать. Отдать знания, отдать время, отдать себя». И если сегодня человечество шагнуло вперёд в вопросах медицины — это не моя заслуга. Это заслуга сотен лаборантов, ассистентов, моих учеников…

<span class="whisper">(Он делает паузу, на мгновение позволяя себе внутреннюю усмешку.)</span>
«Да, да, конечно. Лаборанты. Которые без меня и пробирку не поставят. Но пусть думают, что я демократичен. Скромность — лучшая броня для величия».

<span class="whisper">(Продолжая, теперь уже с лёгким пафосом.)</span>
...Я лишь стоял у руля. И этот руль я держал не ради славы. Ради того, чтобы каждый из вас, каждый ребёнок, каждая бабушка в больнице могли сказать: «Спасибо, наука». Вот что движет мной. Не амбиции, а любовь.

<span class="sfx">Зал снова взрывается аплодисментами. Он стоит с опущенными глазами, как монах. Но в этот момент кашель возвращается — глубже, больнее. Ведущий бросается с водой.</span>

<span class="voice">ВЕДУЩИЙ</span> <span class="whisper">(встревоженно):</span>
Александр Сергеевич, может быть, сделаем перерыв? Врачи в зале...

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(выпрямляясь, с усилием улыбаясь):</span>
Ну что вы, голубчик! Врачи тут не нужны...

<span class="voice">ВЕДУЩИЙ</span> <span class="whisper">(в микрофон, бодрым голосом перекрывая шум):</span>
Волнение! Самое искреннее волнение! Мы все понимаем вас, Александр Сергеевич! Давайте поддержим нашего героя!

<span class="sfx">ЗАЛ разражается овацией. Петров ставит стакан.</span>

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(уже совсем бодро, поднимая бокал воды):</span>
Итак, друзья! Давайте выпьем за нашу науку! За то, что мы — несмотря ни на что — движемся вперёд! А я, как всегда, буду с вами, пока сердце бьётся...

<span class="sfx">(Свет в общей сцене выключается. Загорается свет над задним манекеном, который ближе к клетке с игроками.)</span>

<span class="danger">ЖУРНАЛИСТ:</span>
Скажите, пожалуйста, это правда, что ваши великие достижения были открыты через незаконные эксперименты и жестокие опыты над людьми?`,
choices:[
{ text:'Вариант А: «Он — герой. Мы верим ему» — «Александр Сергеевич, не обращайте внимания. Мы знаем, что вы спасли тысячи людей»', v:-1, log:'Зал славы: поддержали ложь', set:{hasJ:true}, next:'j_journalist' },
{ text:'Вариант Б: «Мы не знаем. Скажите правду» — «Александр Сергеевич, что вы сделали с теми испытуемыми?»', v:1, log:'Зал славы: правда', next:'t_vrach' },
{ text:'Вариант В: Молчание (игроки не отвечают)', v:0, log:'Зал славы: молчание', next:'f_family' }
] };

/* ============================================================
   ИНДИВИДУАЛЬНОЕ ЗАДАНИЕ «ЖУРНАЛИСТ»
   ============================================================ */

S.j_journalist = { type:'choice', title:'Индивидуальное задание. Журналист', subtitle:'Квартира в хрущёвке',
text:`Маленькая квартира в хрущёвке. За окном — серое утро, которое ещё не наступило. Точнее — ночь, которая никак не кончится. Радиоточка на стене бормочет что-то о курсе доллара. На столе — включённый телевизор без звука: транслируют рекламу «Сникерса». Экран мерцает, выхватывая из темноты стены.

Стены — не просто стены. Это коллаж. Распечатанные на принтере фотографии (роскошь для 95-го): Александр выходит из института, Александр в морге, Александр в кафе, подписи от руки, стрелки.

<strong>РОМАН</strong> сидит в кресле, спиной к входной двери. Он пьёт виски и смотрит на экран телевизора. Слышен стук, кашель и звук открывающегося замка. Роман не оборачивается. Улыбается.

<span class="voice">РОМАН</span> <span class="whisper">(не оборачиваясь, вальяжно):</span>
Ты пунктуален. Проходи, Саша. Не стесняйся. Чувствуй себя... как дома.

Александр стоит в дверях. Он не двигается. Его лицо — маска. Он смотрит на затылок Романа. Потом — на стены. На фотографии. Он видит себя. Много себя.

<span class="voice">АЛЕКСАНДР:</span>
У вас проблемы с замком. Он был открыт.

<span class="voice">РОМАН</span> <span class="whisper">(усмехается, поворачивается в кресле):</span>
Конечно, открыт. Я тебя ждал. Мы оба знаем, что этот визит — вопрос времени. Виски?

<span class="voice">АЛЕКСАНДР:</span>
Я не пью.

<span class="voice">РОМАН:</span>
Знаю. Ты предпочитаешь... другие субстанции. Как там говорится в твоих отчетах? «Поддержание жизнедеятельности изолированного биоматериала». Звучит почти как поэзия. Садись, Саша. Ты меня нервируешь, когда стоишь. Как будто ты уже прикидываешь, где тут можно разложить скальпель.

Александр медленно проходит в комнату, но не садится. Он кладет портфель на стул. Слышен тяжелый стук — в портфеле что-то металлическое.

<span class="voice">РОМАН</span> <span class="whisper">(кивает на портфель):</span>
Инструменты? Или подарок для меня? Ты знаешь, я собираю. У меня, вон, целая галерея.

<span class="voice">АЛЕКСАНДР:</span>
Чего ты хочешь, Роман?

<span class="voice">РОМАН:</span>
Тише, тише. Мы же культурные люди. Ты — профессор, светило. Я — скромный служитель пера. Мы можем поговорить о науке. Например, о твоем последнем эксперименте.

Александр замирает. Он смотрит на Романа.

<span class="voice">РОМАН</span> <span class="whisper">(смакуя):</span>
Ах, да. Ты думал, что это был бездомный? Ну, тот, с эпилепсией. Ты думал, что его никто не ищет. Что он — мусор. У него была сестра. Представь себе. Она подала заявление в прокуратуру. Но в нашей стране заявление без денег — это просто бумажка. А я, как журналист, интересующийся социальной несправедливостью, естественно, начал копать. И выкопал тебя.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(перебивает):</span>
Сколько?

<span class="voice">РОМАН:</span>
Я оцениваю молчание в... миллион. Долларов. Наличными.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(тихо):</span>
У меня нет таких денег.

<span class="voice">РОМАН</span> <span class="whisper">(смеется, встает):</span>
Ой, не смеши. У тебя есть. Просто они лежат в другом месте. Ты же не думал, что я буду довольствоваться подачками? Я следил за тобой, Саша. Долго. Месяцами. Я знаю, во сколько ты встаешь, засыпаешь. Я знаю о тебе больше, чем ты сам.

Роман подходит к Александру. Он стоит слишком близко. Нарушает личное пространство.

Александр отступает на шаг. Его рука тянется к портфелю.

<span class="voice">РОМАН:</span>
О, не надо. Не надо резких движений. Я знаю, что у тебя там. Но если ты меня тронешь, завтра же утром копии всех файлов уйдут в прокуратуру, в газеты и твоему ректору.

<span class="whisper">(пауза, Роман допивает виски, ставит бокал)</span>

Всё. Хватит этой прелюдии. Давай деньги. Сейчас. Ну?`,
choices:[
{ text:'ВЕТКА 1: «ОТДАТЬ ДЕНЬГИ»', v:-1, log:'Журналист: деньги отданы', next:'j_branch_pay' },
{ text:'ВЕТКА 2: «НЕ ОТДАВАТЬ ДЕНЬГИ»', v:1, log:'Журналист: отказ платить', next:'j_branch_refuse' },
{ text:'ВЕТКА 3: «МОЛЧАНИЕ» (ничего не нажимать)', v:0, log:'Журналист: молчание', next:'j_branch_silence' }
] };

S.j_branch_pay = { type:'story', title:'Ветка 1. Отдать деньги', subtitle:'Квартира Романа',
text:`Александр долго смотрит на Романа. Потом — на портфель. Потом — на телефон. Что-то в его лице меняется. Он медленно ставит портфель на стол. Щёлкает замками. Открывает. Внутри — не скальпель. Внутри — пачки долларов, перетянутые резинками. Много. Очень много. Больше, чем миллион.

<span class="voice">РОМАН</span> <span class="whisper">(присвистывает):</span>
Ого. А ты подготовился. Я думал, ты будешь торговаться. Мол, «это всё, что есть», «давай частями». А ты... серьёзный человек. Уважаю.

Александр молчит. Он смотрит, как Роман берёт пачки, считает. Роман — профессионал. Он быстро считает, раскладывает по кучкам. Деньги занимают весь стол.

Он поднимает глаза. Улыбается.

<span class="voice">РОМАН:</span>
Ладно. Сделка есть сделка. Я не расскажу прессе.

Он подходит к Александру. Теперь они стоят лицом к лицу. Роман протягивает руку.

<span class="voice">РОМАН:</span>
Мир?

Александр смотрит на руку. Долго. Потом — пожимает. Рукопожатие крепкое. Слишком крепкое. Роман чувствует что-то — не боль, но... холод. Как будто он только что пожал руку статуе.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(отпуская руку):</span>
Мир.

Он берёт портфель — теперь пустой. Идёт к двери. Останавливается.

<span class="voice">АЛЕКСАНДР:</span>
Роман.

<span class="voice">РОМАН:</span>
М?

<span class="voice">АЛЕКСАНДР:</span>
Ты сказал, что знаешь обо мне больше, чем я сам. Это неправда. Я знаю о себе всё. Каждую смерть. Каждое лицо. Каждую ошибку. Ты просто... свидетель. А свидетелей, Роман, не любят. Даже тех, кто молчит. Особенно тех, кто молчит.

Он выходит. Закрывает дверь. Роман стоит один. Он смотрит на деньги. На фотографии. На пустой бокал. Он улыбается. Но улыбка уже не такая уверенная.

<span class="sfx">ЗАТЕМНЕНИЕ.</span>`,
next:'f_family' };

S.j_branch_refuse = { type:'story', title:'Ветка 2. Не отдавать деньги', subtitle:'Квартира Романа',
text:`Александр не двигается. Смотрит на Романа. Долго. Молча. Роман перестаёт улыбаться.

<span class="voice">РОМАН:</span>
Саша. Я жду. Деньги.

<span class="voice">АЛЕКСАНДР:</span>
Ты думаешь, ты меня знаешь.

<span class="voice">РОМАН:</span>
Я знаю, что ты монстр, который притворяется святым. И я — единственный, кто держит тебя за яйца.

<span class="voice">АЛЕКСАНДР:</span>
Ты ошибаешься.

Роман хмурится.

<span class="voice">РОМАН:</span>
Что? О чём ты?

<span class="voice">АЛЕКСАНДР:</span>
Ты следил за мной. Месяцами. Но не задался вопросом: почему я не замечал твою машину? Потому что я знал. С самого начала.

Он делает шаг вперёд.

<span class="voice">АЛЕКСАНДР:</span>
Ты думаешь, что ты хищник. Но ты — просто крыса. А я — тот, кто ставит эксперименты. Ты был интересен мне. Ты — идеальный образец. Одинокий. Циничный. Ты думал, что шантажируешь меня? Нет. Я позволял тебе это делать. Я хотел посмотреть, насколько ты жадный. Насколько ты предсказуемый.

<span class="voice">РОМАН</span> <span class="whisper">(нервно усмехаясь):</span>
Блеф. Ты блефуешь. Если бы ты знал, ты бы...

<span class="voice">АЛЕКСАНДР:</span>
Что? Убил тебя раньше? Зачем? Ты был частью исследования. «Влияние хронического стресса и токсинов на дегенерацию личности». Ты — мой пациент, Роман. Уже полгода. С тех пор, как пришёл ко мне впервые в кабинет — брать интервью. Ты приходил ко мне сам. Часто. Спрашивал обо всех моих открытиях. О достижениях. И каждый раз я наливал тебе виски. Помнишь?

<span class="voice">РОМАН:</span>
Ты не пьёшь.

<span class="voice">АЛЕКСАНДР:</span>
Не пью. Поэтому бутылка всегда стояла для тебя. Я даже подарил тебе одну. На день рождения. Ты сказал, что это лучший виски в твоей жизни.

<span class="voice">РОМАН:</span>
Ты... больной.

<span class="voice">АЛЕКСАНДР:</span>
Я — учёный. Ты — биоматериал. Ты хотел миллион? Получишь место в монографии. В разделе «Клинические случаи». Посмертно.

Он открывает портфель. Внутри — пробирка.

<span class="voice">РОМАН:</span>
Что ты сделал?

<span class="voice">АЛЕКСАНДР:</span>
Ничего особенного. Ты чувствуешь, как немеют кончики пальцев? Как путаются мысли? Это не алкоголь. Это моя особая сыворотка по выработки метаболита в твоей печени. Ты умрешь скоро и мучительно. От «естественных причин». Вскрытие покажет... цирроз. Или опухоль. Я еще не решил. Зависит от того, как ты будешь себя вести сегодня. Сядь.

<span class="voice">РОМАН:</span>
Что... что в пробирке?

<span class="voice">АЛЕКСАНДР:</span>
Антидот.

Роман смотрит на плёнки. Пауза. Роман медленно встаёт. Снимает фотографии со стен. Достаёт кассеты, плёнки, блокноты, диктофон. Кладёт всё на стол. Полгода работы — небольшая кучка.

<span class="voice">АЛЕКСАНДР:</span>
Молодец, хороший мальчик.

<span class="voice">РОМАН:</span>
Всё. Здесь всё.

<span class="voice">АЛЕКСАНДР:</span>
Проверю. Если хоть одна копия всплывёт...

<span class="voice">РОМАН:</span>
Не всплывёт. Я всё отдал.

Александр протягивает пробирку. Роман берёт. Руки трясутся.

Роман пьёт залпом. Секунда. Его резко сгибает. Пробирка падает. Пена. Судороги. Он скребёт пол. Пытается ползти. Хрипит.

<span class="voice">РОМАН:</span>
Ты сказал... антидот...

Александр смотрит на Романа безразлично.

Роман бьётся в агонии. Затихает. Александр наклоняется. Двумя пальцами на шее. Пульса нет. Выпрямляется.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(тихо):</span>
Эксперимент завершён. Пациент выбыл.

Берёт документы. Пустую пробирку. Идёт к двери. Останавливается. Смотрит на тело.

Выходит.

<span class="sfx">ЗАТЕМНЕНИЕ.</span>

<span class="danger">V = -1. Комы получают питание.</span>`,
next:'f_family' };

S.j_branch_silence = { type:'story', title:'Ветка 3. Молчание', subtitle:'Квартира Романа',
text:`Роман ждёт. Александр ждёт. Тишина становится физической. Она давит. Она звенит в ушах. Радиоточка молчит. Телевизор показывает что-то без звука.

Александр не двигается. Смотрит на Романа. Долго. Молча. Роман перестаёт улыбаться.

<span class="voice">РОМАН:</span>
Саша. Я жду. Деньги.

<span class="voice">АЛЕКСАНДР:</span>
Ты думаешь, ты меня знаешь.

<span class="voice">РОМАН:</span>
Я знаю, что ты монстр, который притворяется святым. И я — единственный, кто держит тебя за яйца.

<span class="voice">АЛЕКСАНДР:</span>
Ты ошибаешься.

Роман хмурится.

<span class="voice">РОМАН:</span>
Что? О чём ты?

<span class="voice">АЛЕКСАНДР:</span>
Ты следил за мной. Месяцами. Но не задался вопросом: почему я не замечал твою машину? Потому что я знал. С самого начала.

Он делает шаг вперёд.

<span class="voice">АЛЕКСАНДР:</span>
Ты думаешь, что ты хищник. Ты — крыса. А я — тот, кто ставит эксперименты. Ты приходил ко мне полгода. Брал интервью. О достижениях, открытиях. Я не пью. Виски стоял для тебя. Я наливал. Даже бутылку подарил. Ты думал — собираешь материал для «положительной» статьи. А ты был в протоколе. Каждый визит — доза. Я изучал твою жадность. Твой страх. Ты — мой пациент, Роман. Давно.

<span class="voice">РОМАН:</span>
Ты... больной.

<span class="voice">АЛЕКСАНДР:</span>
Я — учёный. Ты — биоматериал. Ты хотел миллион? Получишь место в монографии. Посмертно.

Он открывает портфель. Внутри — пробирка и шприц.

<span class="voice">РОМАН:</span>
Что ты сделал?

<span class="voice">АЛЕКСАНДР:</span>
Ничего особенного. Ты чувствуешь, как немеют кончики пальцев? Как путаются мысли? Это не алкоголь. Это моя особая сыворотка по выработки метаболита в твоей печени. Ты умрешь скоро и мучительно. От «естественных причин». А вскрытие покажет... цирроз. Или опухоль. Я еще не решил. Зависит от того, как ты будешь себя вести сегодня. Сядь. От твоего выбора зависит, сколько ты проживёшь.

<span class="voice">РОМАН:</span>
Что... что в пробирке?

<span class="voice">АЛЕКСАНДР:</span>
Антидот.

Роман смотрит на плёнки.

Пауза. Роман медленно встаёт. Снимает фотографии со стен. Достаёт кассеты, плёнки, блокноты, диктофон. Кладёт всё на стол. Полгода работы — небольшая кучка.

<span class="voice">АЛЕКСАНДР:</span>
Молодец, хороший мальчик.

<span class="voice">РОМАН:</span>
Всё. Здесь всё.

<span class="voice">АЛЕКСАНДР:</span>
Проверю. Если хоть одна копия всплывёт...

<span class="voice">РОМАН:</span>
Не всплывёт. Я всё отдал.

Александр протягивает пробирку. Роман берёт. Руки трясутся.

Роман пьёт залпом. Секунда. Его резко сгибает. Пробирка падает. Пена. Судороги. Он скребёт пол. Пытается ползти. Хрипит.

<span class="voice">РОМАН:</span>
Ты сказал... антидот...

Александр смотрит на Романа безразлично.

Роман бьётся в агонии. Затихает. Александр наклоняется. Двумя пальцами на шее. Пульса нет. Выпрямляется.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(тихо):</span>
Эксперимент завершён. Пациент выбыл.

Берёт документы. Пустую пробирку. Идёт к двери. Останавливается. Смотрит на тело.

<span class="voice">АЛЕКСАНДР:</span>
Ты хотел, чтобы я тебя заметил. Я заметил.

Выходит.

<span class="sfx">ЗАТЕМНЕНИЕ.</span>

<span class="danger">V = 0.</span>`,
next:'f_family' };

/* ============================================================
   ИНДИВИДУАЛЬНОЕ ЗАДАНИЕ «ВРАЧ»
   ============================================================ */

S.t_vrach = { type:'story', title:'Индивидуальное задание. Врач', subtitle:'Тёмный сырой коридор',
text:`Тёмный, сырой коридор. Воздух кажется тягучим, как патока. Единственный источник света — мерцающие, синие стробоскопические вспышки, которые выхватывают из темноты то лицо, то руки, то силуэт. Где-то капает вода. Гулкий, ритмичный звук, как метроном.

Коридор разделён пополам толстой металлической решёткой. Ржавые прутья уходят от пола до потолка, образуя непреодолимую стену.

<strong>АЛЕКСАНДР</strong> стоит в левой части коридора. Он одет в безупречный, но старомодный белый халат. Стоит прямо, как статуя. Его лицо — спокойная, холодная маска. Он не может пошевелиться. Только глаза следят за собеседником.

<strong>ВРАЧ</strong> стоит в правой части. Его силуэт выхватывается синим светом. Он молод, но уже сломлен. Он нервно переминается с ноги на ногу. Одна рука у него за спиной, он что-то там прячет.

Тишина. Только капель и гул.

<span class="voice">ВРАЧ</span> <span class="whisper">(Голос дрожит, он пытается говорить светски, но получается жалко):</span>
Знаете, Александр... я вчера перечитывал «Братьев Карамазовых». Этот вопрос... о слезинке ребёнка. Он ведь... он ведь всё ещё актуален, правда? В наше время. В нашем... контексте.

Александр молчит. Синий свет на мгновение выхватывает его глаза. Они пусты.

<span class="voice">ВРАЧ</span> <span class="whisper">(Продолжает, запинаясь):</span>
Или вот... погода. В Калининграде сегодня... туман. Такой... знаете... как молоко. Ничего не видно. Хочется... спрятаться. Переждать.

Он делает шаг назад, прижимая руку за спиной крепче.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(Голос тихий, ровный, ледяной. Он не повышает тона.):</span>
Я знаю, что у вас за спиной, коллега, папка с копиями журнала учёта. Мне доложили, что вы хотите передать это... прессе.

Врач замирает. Стробоскоп вспыхивает быстрее. Синий, белый, синий, тьма.

<span class="voice">ВРАЧ</span> <span class="whisper">(Срываясь на шёпот):</span>
Правда... всё равно вскроется. Вы не сможете... это похоронить. Рано или поздно. Люди узнают. То, что вы делаете... это не наука. Это...

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(Перебивает, всё так же спокойно):</span>
Это — необходимость. Вы видели результаты. Вы видели, как опухоль исчезает. Вы просто не хотите видеть цену. Вы — слабый. Как и все они.

Внезапно, из темноты за спиной Врача, материализуется огромная фигура в грязном халате санитара. Беззвучно. Она хватает Врача за плечи и рывком утаскивает его в темноту правой части коридора. Папка падают на бетонный пол.

<span class="voice">ВРАЧ</span> <span class="whisper">(Отчаянный, полный ужаса крик):</span>
НЕТ! ПУСТИ! АЛЕКСАНДР! ВЫ НЕ ИМЕЕТЕ ПРАВА! ЭТО НЕ ЛЕЧЕНИЕ! ЭТО УБИЙСТВО!

Его крик переходит в сдавленный хрип, затем в звук глухих ударов и звона металлических инструментов. Слышно, как что-то тяжело падает на стол. Звук застёгивающихся ремней.

Александр не двигается. Он смотрит прямо перед собой, сквозь решётку, в темноту, где исчез Врач. Стробоскоп замирает на долгой, яркой синей вспышке.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(Кричит в сторону операционной. Его голос внезапно становится громким, командным, раздражённым. Ни капли сожаления.):</span>
Я сейчас подойду! Вколите ему пока успокоительное! Двойную дозу! И подготовьте третий сектор. Он у нас теперь — особый случай.

Синий свет гаснет. Наступает абсолютная, звенящая тишина.`,
next:'f_family' };

/* ============================================================
   ЭПИЗОД 3. СЕМЕЙНАЯ ИДИЛЛИЯ
   ============================================================ */

S.f_family = { type:'choice', title:'Эпизод 3. Семейная идиллия', subtitle:'Домашняя гостиная',
text:`Домашняя гостиная, мягкий тёплый свет, но видно, что семейного уюта нет. Никаких семейных фото, только книжные шкафы, диван, стол, стулья, холодильник, микроволновка, плита. На кухне накрыт ужин — идеально сервированный, но слишком формальный, как в ресторане.

ГОСТИНАЯ. ВЕЧЕР.

Екатерина накрыла на стол. Свеча. Две тарелки. Она поправляет салфетку, потом ещё раз. Слышен звук ключа. Входит Александр. Усталый. Пиджак в руке.

<span class="voice">ЕКАТЕРИНА:</span>
Ты пришёл.

<span class="voice">АЛЕКСАНДР:</span>
Пришёл.

<span class="voice">ЕКАТЕРИНА:</span>
Садись. Всё готово. Ещё тёплое.

Он смотрит на стол. Потом на неё. Кивает. Садится. Она садится напротив. Берёт салфетку, разворачивает.

<span class="voice">АЛЕКСАНДР:</span>
Ты не ела?

<span class="voice">ЕКАТЕРИНА:</span>
Ждала тебя.

<span class="voice">АЛЕКСАНДР:</span>
Не надо было.

<span class="voice">ЕКАТЕРИНА:</span>
Мне не сложно.

Пауза. Он берёт вилку. Крутит её в пальцах. Не ест.

<span class="voice">ЕКАТЕРИНА:</span>
Как прошло?

<span class="voice">АЛЕКСАНДР:</span>
Как всегда.

<span class="voice">ЕКАТЕРИНА:</span>
Устал?

<span class="voice">АЛЕКСАНДР:</span>
Есть немного.

Она кладёт себе на тарелку. Небольшую порцию. Смотрит на него. Он смотрит в тарелку.

<span class="voice">ЕКАТЕРИНА:</span>
Я сегодня была на кафедре. Ольга Петровна спрашивала про тебя.

<span class="voice">АЛЕКСАНДР:</span>
Что спрашивала?

<span class="voice">ЕКАТЕРИНА:</span>
Как ты..? Говорит, ты давно не заходил.

<span class="voice">АЛЕКСАНДР:</span>
Незачем.

<span class="voice">ЕКАТЕРИНА:</span>
Я так и сказала.

Пауза. Он откладывает вилку. Берёт стакан с водой. Пьёт. Смотрит на неё поверх стакана. Она замечает.

<span class="voice">ЕКАТЕРИНА:</span>
Что?

<span class="voice">АЛЕКСАНДР:</span>
Ничего.

<span class="voice">ЕКАТЕРИНА:</span>
Ты смотришь.

<span class="voice">АЛЕКСАНДР:</span>
Просто смотрю.

Она улыбается. Он не отвечает на улыбку. Отводит взгляд. Смотрит на свечу.

<span class="voice">ЕКАТЕРИНА:</span>
Я хотела тебе кое-что сказать.

<span class="voice">АЛЕКСАНДР:</span>
И я хотел.

Пауза. Оба молчат. Она ждёт. Он тоже ждёт. Никто не начинает.

<span class="voice">ЕКАТЕРИНА:</span>
Давай ты.

<span class="voice">АЛЕКСАНДР:</span>
Нет. Ты первая.

<span class="voice">ЕКАТЕРИНА:</span>
У меня не срочно.

<span class="voice">АЛЕКСАНДР:</span>
У меня тоже.

Он снова берёт вилку. Ест. Один кусок. Второй. Она смотрит на его руки.

<span class="voice">ЕКАТЕРИНА:</span>
Вкусно?

<span class="voice">АЛЕКСАНДР:</span>
Нормально.

<span class="voice">ЕКАТЕРИНА:</span>
Я старалась. Я специально приготовила твой любимый салат. Ты говорил, что любишь его..

<span class="voice">АЛЕКСАНДР:</span>
Вижу. Кажется, я говорил это год назад, когда мы только познакомились. Ты тогда ещё записывала мои лекции. Память у тебя отличная. Это полезно для студентки.

Он кладёт вилку. Вытирает рот салфеткой. Смотрит на неё. Долго. Она выдерживает взгляд. Потом опускает глаза.

<span class="voice">АЛЕКСАНДР:</span>
Катя.

<span class="voice">ЕКАТЕРИНА:</span>
Мм?

<span class="voice">АЛЕКСАНДР:</span>
Я собирался сказать, что мы должны завершить эти отношения.

Она поднимает голову. Не двигается.

<span class="voice">АЛЕКСАНДР:</span>
Ты должна уехать. Я уже снял для тебя квартиру. Я оплатил. На год вперёд.

Тишина. Он достаёт ключи из кармана и кладёт на стол. Свеча горит ровно. Она смотрит на него. Он смотрит в сторону.

<span class="voice">ЕКАТЕРИНА:</span>
Квартиру?

<span class="voice">АЛЕКСАНДР:</span>
Да.

<span class="voice">ЕКАТЕРИНА:</span>
Ты решил.

<span class="voice">АЛЕКСАНДР:</span>
Решил.

<span class="voice">ЕКАТЕРИНА:</span>
Когда?

<span class="voice">АЛЕКСАНДР:</span>
Месяц назад.

Она кивает. Медленно. Как будто соглашается с чем-то. Кладёт руку на живот. Он не замечает.

<span class="voice">ЕКАТЕРИНА:</span>
Как у тебя всё складно.. <span class="whisper">(язвительно усмехается)</span>

<span class="voice">АЛЕКСАНДР:</span>
Катя, не начинай.

<span class="voice">ЕКАТЕРИНА:</span>
Я не начинаю. Я просто говорю.

Пауза. Он встаёт. Берёт пиджак. Она не встаёт.

<span class="voice">ЕКАТЕРИНА:</span>
Я беременна.

Тест. Сегодня утром. Две полоски.

Пауза. Александр смотрит на неё. Не мигает.

<span class="voice">АЛЕКСАНДР:</span>
Ты это сейчас придумала?

<span class="voice">ЕКАТЕРИНА:</span>
Что?

<span class="voice">АЛЕКСАНДР:</span>
Чтобы я не ушёл. Придумала только что.

<span class="voice">ЕКАТЕРИНА:</span>
Тебе проще. Ты уже всё придумал, всё разложил — план, квартира, год вперёд. А я взяла и сказала тебе то, что в твою идеальную картинку не влезает. И что теперь мне делать? Что НАМ делать?

Он отводит взгляд. Смотрит на свечу. Она ждёт. Он молчит.

<span class="voice">АЛЕКСАНДР:</span>
Ясно...

Пауза. Свеча трещит. Воск капает на стол.`,
choices:[
{ text:'КОНЦОВКА 1. АБОРТ — «Это решит всё»', v:-1, log:'Семья: аборт', set:{child:false}, next:'d_diagnosis' },
{ text:'КОНЦОВКА 3. КЛЮЧИ — Молчание, Екатерина уходит', v:0, log:'Семья: молчание', set:{child:false}, next:'d_diagnosis' },
{ text:'КОНЦОВКА 2. СЕМЬЯ — «Или мы попробуем»', v:1, log:'Семья: ребёнок остаётся', set:{child:true}, next:'d_diagnosis' }
] };

/* ============================================================
   ЭПИЗОД 4. ДИАГНОЗ
   ============================================================ */

S.d_diagnosis = { type:'choice', title:'Эпизод 4. Диагноз', subtitle:'Кабинет в частной клинике',
text:`Просторный кабинет в частной клинике. На стенах — дипломы, грамоты, фотографии с конференций. За столом сидит <strong>ПРОФЕССОР ИГОРЬ ВАСИЛЬЕВИЧ</strong> (около 50 лет, седой, в очках), старый друг и однокурсник Александра Сергеевича. На столе — открытая папка с рентгеновскими снимками и анализами. Напротив <strong>АЛЕКСАНДР СЕРГЕЕВИЧ</strong>, одетый в дорогой костюм. В руке — чашка кофе, которую он так и не отпил.

<span class="voice">ИГОРЬ ВАСИЛЬЕВИЧ</span> <span class="whisper">(отводит взгляд от снимков, поправляет очки, говорит осторожно, с паузами):</span>
Саша...Сядь. ты меня извини, но я не мог тебе сказать это по телефону.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(стоит у окна, спиной к Игорю, смотрит в мутное стекло):</span>
Я постою. У вас тут всегда так холодно?

<span class="voice">ИГОРЬ:</span>
Саша, пожалуйста. Это разговор не на пять минут.

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(с холодной усмешкой):</span>
Игорь, не говори ерунды. Мы что, собрались обсуждать мои мелкие простуды? Говорил же – это переутомление. Выпиши мне рецепт на витамины и разойдёмся. У меня завтра совещание с министром, а ты меня тащишь сюда. Давай быстрее, что у тебя там? <span class="whisper">(Он усмехается, всем видом показывая, что относится к визиту как к причуде.)</span>

<span class="voice">ИГОРЬ ВАСИЛЬЕВИЧ</span> <span class="whisper">(вздыхает, поправляет очки):</span>
Ты жаловался на головные боли...

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(перебивает, торопит):</span>
Ерунда! Просто переутомление. У нас сейчас учёный совет каждый день. У всех сейчас голова кругом. Но ты уговорил меня на КТ. По блату, без очереди. Ну и?

<span class="voice">ИГОРЬ:</span>
Результаты пришли. Садись, Саша. Пожалуйста.

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(смеётся, но смех натянутый, садится):</span>
...

<span class="voice">ИГОРЬ ВАСИЛЬЕВИЧ</span> <span class="whisper">(тихо, серьёзно):</span>
Саша, вот снимок. Ты видишь здесь, в левой височной области — участок с нечётким контуром, с очагом повышенной плотности. Мы послали данные в Москву, оттуда пришло заключение. Это не метастаз, это первичная опухоль. <span class="danger">Глиболастома, Саша. Быстрорастущая.</span>

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(перебивает, резко, почти грубо):</span>
Стоп. Стоп-стоп-стоп. <span class="whisper">(он встаёт, начинает ходить по кабинету)</span> Ты хочешь сказать, что у меня рак? Игорь, ты меня разыгрываешь? Мы знакомы двадцать лет, ты знаешь, что я никогда не болею. Даже грипп обходит меня стороной. А ты мне тут...

<span class="whisper">(Игорь кладёт перед Петровым плёнку. Александр Сергеевич смотрит на неё, затем переводит взгляд на друга. В его глазах сначала непонимание, потом — ледяная усмешка.)</span>

<span class="voice">ИГОРЬ ВАСИЛЬЕВИЧ</span> <span class="whisper">(спокойно, но настойчиво):</span>
Я понимаю, это шок. Но результаты анализов — вот они, в папке. Ты можешь сам прочитать.

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(продолжая):</span>
Я знаю свой мозг! Я всю жизнь изучаю нейрофизиологию. Ты хочешь сказать, что я не заметил бы, если бы у меня что-то росло? Нет, Игорь, ты ошибся. Слушай, ты врач, я уважаю тебя. Но это либо ошибка, либо брак оборудования. Я поеду в онкологический центр в Германию, сделаю там все исследования. Они не подтвердят твой диагноз. И тогда ты извинишься передо мной за то, что заставил меня нервничать.

<span class="whisper">(Он берёт портфель, направляется к двери. Игорь Васильевич встаёт, делает шаг ему навстречу.)</span>

<span class="voice">ИГОРЬ ВАСИЛЬЕВИЧ:</span>
Саша, ты не понимаешь. Если ты упустишь время — через два месяца будет поздно. Даже для Германии. Я прошу тебя — начни лечение здесь, сейчас. У нас есть лучшие протоколы, я лично возьму твой случай. <span class="whisper">(мягко, с болью в голосе)</span>

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(резко оборачивается, голос срывается на крик):</span>
Замолчи! У меня есть планы, есть работа, понимаешь? Я не могу сейчас болеть, не могу! Я должен работать!

<span class="whisper">(Он снова хватается за голову. На этот раз жест отдаётся болью — он морщится, зажмуривается. ИГОРЬ ВАСИЛЬЕВИЧ встаёт, подаёт ему стакан воды.)</span>

<span class="voice">ИГОРЬ ВАСИЛЬЕВИЧ:</span>
У нас есть возможность сделать операцию. Ещё не поздно.

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(отпив воды, ставит стакан на стол, с иронией):</span>
Операция? Игорь, ты предлагаешь мне лечь под нож к каким-то недоучкам? Ты знаешь, сколько таких операций заканчивается инвалидностью? Я не позволю превратить себя в овощ.

<span class="whisper">(Он произносит это с пафосом, но в голосе слышна дрожь. Он и сам не верит в свои слова.)</span>

<span class="voice">ИГОРЬ ВАСИЛЬЕВИЧ</span> <span class="whisper">(тихо, почти шёпотом):</span>
Твой ум, Саша, который ты так ценишь, он ускользает...

<span class="voice">ИГОРЬ</span> <span class="whisper">(пауза):</span>
Хорошо. Езжай. Но сделай одно одолжение.

<span class="voice">АЛЕКСАНДР:</span>
Какое? Дать тебе денег на новый аппарат?

<span class="voice">ИГОРЬ:</span>
Возьми папку. Снимки, заключение. Возьми с собой. Дома, открой на просвет. Посмотри на контур. Ты сам онколог. Ты видел тысячи таких. Ты знаешь, как выглядит злокачественность. Ты просто не хочешь видеть её на своей плёнке.`,
choices:[
{ text:'Вариант А: «Взять папку»', v:1, log:'Диагноз: принятие', next:'t_experiment' },
{ text:'Вариант Б: «Не брать папку»', v:-1, log:'Диагноз: отрицание', set:{hasP:true}, next:'t_patient1' }
] };

/* ============================================================
   ИНДИВИДУАЛЬНОЕ ЗАДАНИЕ «ЭКСПЕРИМЕНТ НАД ИГРОКОМ»
   ============================================================ */

S.t_experiment = { type:'story', title:'Индивидуальное задание. Эксперимент над игроком', subtitle:'Операционная',
text:`Операционная в темноте.

<span class="sfx">Тяжёлые шаги. Скрип двери. Игрока-Пациента заводят в холодное помещение. Его укладывают на операционный стол. Металл холодный. Ремни затягиваются — на запястьях, на лодыжках, на груди, на голове.</span>

<span class="sfx">Тишина. Долгая. Слышно только дыхание Игрока-Пациента. Свет — резкий, белый. Над игроком куклы-медсёстры.</span>

<span class="whisper">(Пауза. Затем — звук шагов. Медленных, уверенных. Дверь открывается.)</span>

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(негромко, с раздражением, обращаясь к куклам-медсестрам):</span>
Он в сознании. Почему он в сознании? Я же сказал — дозу рассчитать по весу. Вы что, таблицу умножения забыли? Я же уточнил какая будет операция. Писал же в плане на день?

<span class="whisper">(Куклы синхронно кивают. Их движения — резкие, механические.)</span>

Ладно... <span class="whisper">(выдыхает, пытаясь контролировать ярость. Подходит к столу и открывает ящик.)</span>
У нас что наркоз закончился? <span class="whisper">(почти в ярости)</span>

<span class="whisper">(Куклы синхронно кивают)</span>

<span class="voice">АЛЕКСАНДР:</span>
...

<span class="whisper">(выдыхает, сдерживаясь. Подходит к столу. Наклоняется над Игроком-Пациентом. Гладит его по голове — медленно, почти нежно)</span>

Тише, тише. Не дёргайся. Понимаю, страшно. Все боятся. Но страх — это всего лишь химия. <span class="whisper">(Он отходит. Звук — он открывает металлический лоток. Инструменты звенят.)</span>

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(не оборачиваясь, к медсёстрам):</span>
Анестезию ввели? Хотя бы это вы осилили?

<span class="whisper">(Куклы кивают.)</span>

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(с усмешкой):</span>
Надо же. Прогресс. Ладно. Тогда без наркоза.

<span class="whisper">(ставит перегородку на грудь пациента, чтобы не видел, что происходит. полупрозрачная)</span>
<span class="whisper">(Александр может по воздуху трогать игрока, якобы прикасаясь к нему. Спрашивать, чувствуете? Игрок не чувствует. А если врёт, то говорить, что это мышечная память. Всё нормально.)</span>

<span class="voice">АЛЕКСАНДР:</span>
Наносим антисептик. <span class="whisper">(Нужно, чтоб он вонял. Можно слегка помазать игрока водой).</span> Берём скальпель и начинаем разрез <span class="whisper">(Скальпель ведёт линию по грудине. Можно слегка касаться пациента, очень медленно).</span> Кровь четыре единицы наготове? <span class="whisper">(На этот момент перчатки Александра должны быть в крови)</span> <span class="whisper">(Куклы кивают.)</span> Никак не могу пробиться. Берём пилу <span class="whisper">(звуки мед. Пилы)</span> ведём вдоль..

Берём захват, и вскрываем пошире.

<span class="whisper">(Александр работает спокойно, почти буднично.)</span>

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(комментирует, как лектор на кафедре):</span>
Смотрите внимательно. Вот здесь — лимфатический узел. Видите, как он увеличен? Это не метастаз. Пока нет. Но это уже не норма. Это — предвестник. Красиво, правда? Природа — лучший художник. Только рисует она по-другому.

<span class="whisper">(Пауза. Он что-то делает. Игрок-Пациент может почувствовать давление, но не боль — анестезия работает. Но он в сознании. Он слышит. Он чувствует, как копаются в его теле.)</span>

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(продолжает, обращаясь к куклам):</span>
А теперь — самое интересное. Мы вводим культуру. Живую. Она начнёт расти. Прямо здесь. Внутри. Через час он почувствует тепло. Через два — жар. Через три — начнётся то, что мы называем «ответом организма». Его собственные клетки начнут пожирать его изнутри. Иммунная система сходит с ума.

<span class="whisper">(Он отходит. Звук — он снимает перчатки. Бросает их в лоток.)</span>

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(к медсёстрам, спокойно):</span>
Зашейте. И дайте ему таблетку. Ту, синюю. Пусть поспит. Когда проснётся — он ничего не вспомнит. Это лучше для всех.

<span class="whisper">(Он идёт к двери. Останавливается.)</span>

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(не оборачиваясь):</span>
И да. Если он начнёт кричать — не обращайте внимания. Это не боль. Это память тела. Она проходит.

<span class="whisper">(Дверь закрывается. Тишина. Куклы медленно, синхронно поворачивают головы к Игроку-Пациенту. Их пустые глаза смотрят на него.)</span>

<span class="sfx">(Свет гаснет.)</span>`,
next:'pet_real' };

/* ============================================================
   ИНДИВИДУАЛЬНОЕ ЗАДАНИЕ «ПАЦИЕНТ № 1»
   ============================================================ */

S.t_patient1 = { type:'choice', title:'Индивидуальное задание. Пациент № 1', subtitle:'Клетка',
text:`Тёмный подвал. Клетка из толстых прутьев. За решёткой <strong>ПАЦИЕНТ</strong>. Он вскакивает, прижимается к прутьям, пальцы белеют.

<span class="voice">ПАЦИЕНТ:</span>
Доктор. Доктор, вы. Слушайте. Слушайте меня. Я знаю, вы главный. Я вижу, как они на вас смотрят. Вы тут бог, да? Вы можете всё. Скажите им. Скажите, чтобы открыли.

<span class="whisper">(Александр молчит. Он смотрит на Пациента так, как энтомолог смотрит на редкого жука. Без эмоций. С лёгким, почти незаметным любопытством.)</span>

<span class="voice">ПАЦИЕНТ</span> <span class="whisper">(Трясет прутья. Металл звенит.):</span>
Эй! Вы меня слышите? Я человек! Я не крыса! Послушайте, у меня есть мать. Она старенькая, она не переживет. Она с ума сойдет, если я пропаду. Вы же врач. Вы давали клятву. Гиппократа! Вы помните её?

<span class="whisper">(Александр не меняет позы. Дышит ровно.)</span>

<span class="voice">ПАЦИЕНТ</span> <span class="whisper">(Начинает метаться по камере, как тигр. Бьет кулаком в стену.):</span>
Что вы молчите?! Вы немой?! Скажите хоть слово! Вы же не робот! Я вижу, у вас лицо есть! У меня руки немеют! Я не чувствую ног по утрам! Что вы мне колете? Что за дрянь вы мне вгоняете в вены?! Это не лекарство, это яд! Вы меня убиваете медленно!

<span class="whisper">(Пациент сползает по стенке на пол, начинает плакать. Это искренне.)</span>

<span class="voice">ПАЦИЕНТ</span> <span class="whisper">(Тихо, с надрывом.):</span>
Пожалуйста... У меня ведь ничего нет. Ни дома, ни семьи. Я никому не нужен. Я думал, хуже уже не будет. А вы... Вы нашли меня на дне и решили, что я — мусор. Да? Материал? Расходник? Ну посмотрите вы на меня. Я же не зверь. Отпустите. Я никому не скажу. Я забуду этот подвал. Просто откройте дверь.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(Голос ровный, тихий, но слышный в каждом углу.):</span>
Ты закончил?

<span class="voice">ПАЦИЕНТ</span> <span class="whisper">(Замирает. Смотрит с надеждой.):</span>
Да... Да, я всё. Пожалуйста...`,
choices:[
{ text:'ВАРИАНТ 1: ВЫПУСТИТЬ (V+)', v:1, log:'Пациент №1: выпущен', next:'t_patient1_release' },
{ text:'ВАРИАНТ 2: НЕ ВЫПУСКАТЬ (V-)', v:-1, log:'Пациент №1: не выпущен', next:'t_patient1_hold' }
] };

S.t_patient1_release = { type:'story', title:'Пациент № 1. Выпустить', subtitle:'Зона врачей',
text:`<span class="whisper">(Пациент не верит своему счастью. Он медленно встает. Делает шаг. Второй. Он выходит в «зону врачей».)</span>

<span class="voice">ПАЦИЕНТ</span> <span class="whisper">(Шепотом.):</span>
Спасибо...

<span class="whisper">(Пациент с рычанием бросается на Александра. Это не просто побег, это ярость загнанного зверя. Он пытается вцепиться в горло.)</span>

<span class="voice">ПАЦИЕНТ</span> <span class="whisper">(Кричит):</span>
Сдохни, тварь! Ты! Ты всё это придумал!

<span class="whisper">(Медбрат реагирует мгновенно. Перехватывает Пациента, бьет его в солнечное сплетение, оттаскивает. Пациент хрипит, пытаясь достать до белого халата. Его швыряют обратно в камеру. Дверь захлопывается. Пациент колотится о решетку, но уже бессильно.)</span>

<span class="whisper">(Александр стоит там же, где и стоял. Он смотрит на Медбрата. Медбрат тяжело дышит, поправляя форму.)</span>

<span class="voice">МЕДБРАТ</span> <span class="whisper">(Ошарашенно):</span>
Профессор... Вы... Вы зачем его выпустили? Он же чуть вас не...

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(Перебивает. Голос ледяной.):</span>
Это был тест.

<span class="voice">МЕДБРАТ:</span>
Тест?..

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(Поправляет манжету халата.):</span>
Проверка вашей реакции, санитар. И... проверка его воли к жизни. Мозг не справляется с регенерацией, разум деградирует. Агрессия — это рефлекс спинного мозга, не более. Вы сработали чисто. Запишите в журнал: «Попытка нападения на персонал. Реакция — 0.8 секунды».

<span class="whisper">(Александр разворачивается и идет к выходу.)</span>

<span class="sfx">(Свет гаснет.)</span>`,
next:'pet_fake' };

S.t_patient1_hold = { type:'story', title:'Пациент № 1. Не выпускать', subtitle:'Клетка',
text:`<span class="whisper">(Александр не отдает команду. Он просто опускает руку. Пауза затягивается. Надежда в глазах Пациента гаснет, сменяясь тьмой.)</span>

<span class="voice">ПАЦИЕНТ</span> <span class="whisper">(Голос меняется. Становится низким, скрежещущим.):</span>
Значит, нет.

<span class="whisper">(Смотрит на Александра в упор.)</span>

<span class="voice">ПАЦИЕНТ:</span>
Ты не врач. Ты — доктор Менгеле. Ты — монстр в человеческой коже. Ты думаешь, что ты спасаешь мир? Ты просто мясник, который любит смотреть, как другие корчатся. Ты чувствуешь себя богом, да? Смотришь на меня, как на червяка.

<span class="whisper">(Начинает кричать, срываясь на визг.)</span>

Ты не бог! Ты — гной! Ты — раковая опухоль этого мира! Я буду сниться тебе! Я буду гнить в твоей памяти! Ты сдохнешь один или в окружении таких же выродков, как ты! Слышишь?! Гори в аду!

<span class="whisper">(Пациент бросается на решетку, пытаясь дотянуться до Александра сквозь прутья. Плюет в его сторону)</span>

<span class="voice">АЛЕКСАНДР:</span>
Санитар.

<span class="voice">МЕДБРАТ:</span>
Да, профессор.

<span class="voice">АЛЕКСАНДР:</span>
Вколите ему галоперидол. Двойную дозу.

<span class="voice">МЕДБРАТ:</span>
Слушаюсь.

<span class="whisper">(Медбрат достает шприц. Открывает дверь. Входит в камеру. Пациент пытается отбиваться, но силы неравны. Его валят на пол. вводят препарат. Пациент затихает, глядя в потолок стекленеющими глазами.)</span>

<span class="voice">МЕДБРАТ</span> <span class="whisper">(Выходя и запирая дверь):</span>
Готово. Он будет спать сутки.

<span class="voice">АЛЕКСАНДР:</span>
Отметьте в карте: «Прогрессирующая агрессия, спутанность сознания. Вероятно, новообразование в лобной доле давит на центры контроля эмоций. Поведение нестабильно, социально опасно». Утром продолжим. У нас впереди ещё много работы.

<span class="whisper">(Александр уходит. Медбрат выключает свет в камере.)</span>

<span class="sfx">(Занавес.)</span>`,
next:'pet_fake' };

/* ============================================================
   ЭПИЗОД 5. ГИБЕЛЬ ПИТОМЦА
   ============================================================ */

S.pet_real = { type:'story', title:'Эпизод 5. Гибель питомца (Теневой театр)', subtitle:'Ночь. Сад возле дома',
text:`Ночь, сад возле дома, лунный свет падает сквозь ветви деревьев.

Глубокая ночь. Двор залит холодным лунным светом, деревья отбрасывают причудливые тени, похожие на пальцы тянущихся рук. <strong>АЛЕКСАНДР СЕРГЕЕВИЧ</strong> стоит у калитки, не решаясь войти в дом. В руках он держит рентгеновский снимок, поднимает его к свету — тёмное пятно в височной доле видно даже в тусклом уличном освещении.

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(бормочет, нервно перебирая край плёнки):</span>
Ошибка... Это ошибка... Я не видел этого раньше... Там ничего нет... Нет...

<span class="whisper">(Он пытается убедить себя, но голос срывается, руки дрожат. Он комкает снимок, потом снова разглаживает, словно надеясь, что пятно исчезнет.)</span>

<span class="sfx">(Из будки за домом раздаётся радостный лай. Тяжёлый топот — и из темноты выбегает РАЛЬФ, огромный золотистый ротевйлер. Он бросается к хозяину, прыгает, пытается лизнуть в лицо, виляет обрубком хвоста.)</span>

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(раздражённо отталкивая пса):</span>
Ральф, отойди. Я не в настроении.

<span class="whisper">(Но пёс не понимает. Он снова подскакивает, тычется мокрым носом в ладонь, приносит игрушку и кладёт у ног, приглашая поиграть.)</span>

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(голос становится резче):</span>
Я сказал — отойди! НЕ СЕЙЧАС!

<span class="whisper">(Он толкает собаку ногой — не сильно, но достаточно, чтобы пёс отскочил. Ральф скулит, но через мгновение снова бежит к хозяину, подпрыгивает, хватает зубами рукав пиджака, тянет, рычит от удовольствия.)</span>

<span class="whisper">(Профессор чувствует, как внутри поднимается волна слепого раздражения. Он сжимает кулаки, пытаясь сдержаться, но голова начинает пульсировать, перед глазами плывут тени.)</span>

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(сквозь зубы):</span>
Прекрати... Прекрати сейчас же...

<span class="whisper">(Пёс не слышит. Он лает, прыгает, кружится, задевая ноги хозяина. В какой-то момент собака запрыгивает на него, и профессор теряет равновесие, падая на одно колено.)</span>

<span class="whisper">(Резкая боль пронзает голову — острая, оглушающая. Мир начинает расплываться, звуки становятся глухими, как через толщу воды. Тени удлиняются, ветки деревьев превращаются в тянущиеся руки.)</span>

<span class="whisper">(Он поднимает голову. Ральф исчез. На его месте сидит ИГОРЬ ВАСИЛЬЕВИЧ — старый друг, коллега, в белом халате, с папкой в руках. Он смотрит на Петрова суровым, осуждающим взглядом.)</span>

<span class="voice">ИГОРЬ ВАСИЛЬЕВИЧ</span> <span class="whisper">(спокойно, но жёстко):</span>
Саша, ты думаешь, что сможешь убежать от этого? Ты уже начал терять контроль. Опухоль растёт. Тебе осталось три, может быть четыре месяца.

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(отшатываясь, закрывая голову руками):</span>
Нет... Ты не здесь... Тебя здесь нет... Это галлюцинация...

<span class="voice">ИГОРЬ ВАСИЛЬЕВИЧ</span> <span class="whisper">(встаёт, медленно приближается):</span>
Ты умрёшь, Саша. Твой мозг будет разрушаться день за днём. Ты забудешь формулы, имена, лица. Ты забудешь, как дышать. Ты умрёшь в собственных экскрементах, не понимая, кто ты.

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(кричит, зажимая уши):</span>
Замолчи! Ты не имеешь права так говорить со мной! Я — профессор! Я — гений!

<span class="whisper">(Он вскакивает на ноги, но Игорь не отступает. Его лицо начинает искажаться. Очертания фигуры расплываются. Глаза становятся глубокими чёрными провалами, рот растягивается в неестественной улыбке, обнажая длинные острые зубы. Из горла вырывается низкий, звериный рык.)</span>

<span class="danger">МОНСТР/ИГОРЬ</span> <span class="whisper">(голос становится низким, хриплым, усиленным эхом):</span>
ТЫ НИЧТО, ПРОФЕССОР. ТЫ ПЫЛЬ. ТЫ ИСЧЕЗНЕШЬ, И ТВОИ ОТКРЫТИЯ УМРУТ ВМЕСТЕ С ТОБОЙ. ТЫ БОИШЬСЯ? ТЫ ДОЛЖЕН БОЯТЬСЯ. ПОТОМУ ЧТО СМЕРТЬ УЖЕ РЯДОМ. ОНА ДЫШИТ ТЕБЕ В ЗАТЫЛОК.

<span class="whisper">(Монстр делает шаг вперёд, протягивая к нему длинные, неестественно вытянутые руки с когтями. В одной руке он сжимает рентгеновский снимок, на котором тёмное пятно пульсирует, растёт, заливая весь снимок чернотой.)</span>

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(в панике, отступая):</span>
НЕ ПОДХОДИ! Я ПРЕДУПРЕЖДАЮ!

<span class="whisper">(Он озирается по сторонам. Его взгляд падает на лопату, прислонённую к забору. Он хватает её, сжимает обеими руками.)</span>

<span class="danger">МОНСТР</span> <span class="whisper">(смеётся, хрипло, зловеще):</span>
УДАРЬ, ПРОФЕССОР. ПОКАЖИ, КАКОЙ ТЫ СИЛЬНЫЙ. ПОКАЖИ, ЧТО ТЫ НЕ БОИШЬСЯ. УДАРЬ!

<span class="whisper">(Профессор с криком замахивается и со всей силы обрушивает лопату на монстра. Удар — и скрежет, удар — и хруст, удар — и жалобный визг, который тонет в грохоте собственного дыхания.)</span>

<span class="whisper">(Он продолжает бить, пока монстр не затихает. Лопата со звоном падает из ослабевших рук. Тяжёлое дыхание разрывает тишину ночи.)</span>

<span class="whisper">(Луна выходит из-за облаков. Свет заливает двор. Профессор медленно опускает взгляд.)</span>

<span class="danger">(На земле лежит Ральф. Его голова разбита, шерсть в крови, глаза открыты и стеклянны. Лопата валяется рядом — она вся в крови.)</span>

<span class="whisper">(Александр Сергеевич застывает. Он смотрит на свои руки. На рукавах пиджака — бурые пятна. Он не дышит несколько секунд, а затем с утробным, рвущимся из груди выдохом падает на колени.)</span>

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(хрипло, с ужасом):</span>
Нет... Нет-нет-нет... Ральф... Я... Я не хотел... Это не я... Это не я...

<span class="whisper">(Он гладит собаку по голове, трогает её ещё тёплую шерсть. Его пальцы дрожат, по лицу текут слёзы.)</span>

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(шёпотом, молящим голосом):</span>
Прости меня... Ральф... Прости... Я не знаю, что со мной... Я не контролирую... Я не...

<span class="whisper">(Он замолкает. В голове снова пульсирует — слабо, но напоминающе. Он знает, что это не конец. Что это повторится. Что он будет терять себя снова и снова.)</span>

<span class="whisper">(Он встаёт, хватает лопату. С огромным трудом он начинает копать землю у старой яблони. Мёрзлая, влажная земля неохотно поддаётся.)</span>

<span class="whisper">(Через полчаса яма готова. Он опускает туда тело собаки, поправляет ей лапы, словно она просто спит. Затем начинает засыпать. Земля комьями падает на золотистую шерсть.)</span>

<span class="whisper">(Завершив, он утрамбовывает землю ногой, кладёт сверху несколько камней. Стоит над могилой, не в силах уйти.)</span>

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(в пустоту, тихо):</span>
Я больше не знаю, кто я... Я не знаю, что реально, а что — нет... Если я мог убить тебя — значит, во мне уже нет человека... Только болезнь.`,
next:'after_pet_router' };

S.pet_fake = { type:'story', title:'Эпизод 5. Гибель питомца (лже-гибель)', subtitle:'Ночь. Сад возле дома',
text:`Ночь, сад возле дома, лунный свет падает сквозь ветви деревьев.

Глубокая ночь. Двор залит холодным лунным светом. <strong>АЛЕКСАНДР СЕРГЕЕВИЧ</strong> стоит у калитки, не решаясь войти в дом. В руках он держит рентгеновский снимок, поднимает его к свету — тёмное пятно в височной доле видно даже в тусклом уличном освещении.

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(бормочет):</span>
Ошибка... Это ошибка... Я не видел этого раньше... Там ничего нет... Нет...

<span class="sfx">(Из будки за домом раздаётся радостный лай. Тяжёлый топот — и из темноты выбегает РАЛЬФ, огромный золотистый ротевйлер. Он бросается к хозяину, прыгает.)</span>

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ:</span>
Ральф, отойди. Я не в настроении.

<span class="whisper">(Но пёс не понимает. Он снова подскакивает, тычется мокрым носом в ладонь, приносит игрушку.)</span>

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(голос становится резче):</span>
Я сказал — отойди! НЕ СЕЙЧАС!

<span class="whisper">(Он толкает собаку ногой. Ральф скулит, но через мгновение снова бежит к хозяину, подпрыгивает, хватает зубами рукав пиджака.)</span>

<span class="whisper">(Профессор чувствует, как внутри поднимается волна слепого раздражения. Голова начинает пульсировать.)</span>

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(сквозь зубы):</span>
Прекрати... Прекрати сейчас же...

<span class="whisper">(В какой-то момент собака запрыгивает на него, и профессор теряет равновесие.)</span>

<span class="whisper">(Резкая боль пронзает голову. Мир начинает расплываться. Тени удлиняются, ветки деревьев превращаются в тянущиеся руки.)</span>

<span class="whisper">(Он поднимает голову. Ральф исчез. На его месте сидит ИГОРЬ ВАСИЛЬЕВИЧ — старый друг, коллега, в белом халате, с папкой в руках.)</span>

<span class="voice">ИГОРЬ ВАСИЛЬЕВИЧ</span> <span class="whisper">(спокойно, но жёстко):</span>
Саша, ты думаешь, что сможешь убежать от этого? Ты уже начал терять контроль. Опухоль растёт.

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ:</span>
Нет... Ты не здесь... Тебя здесь нет... Это галлюцинация...

<span class="voice">ИГОРЬ ВАСИЛЬЕВИЧ:</span>
Ты умрёшь, Саша. Твой мозг будет разрушаться день за днём. Ты забудешь формулы, имена, лица.

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(кричит):</span>
Замолчи! Я — профессор! Я — гений!

<span class="whisper">(Его лицо начинает искажаться. Глаза становятся глубокими чёрными провалами, рот растягивается в неестественной улыбке, обнажая длинные острые зубы.)</span>

<span class="danger">МОНСТР/ИГОРЬ:</span>
ТЫ НИЧТО, ПРОФЕССОР. ТЫ ПЫЛЬ. СМЕРТЬ УЖЕ РЯДОМ.

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ:</span>
НЕ ПОДХОДИ! Я ПРЕДУПРЕЖДАЮ!

<span class="whisper">(Он хватает лопату, прислонённую к забору, сжимает обеими руками.)</span>

<span class="danger">МОНСТР:</span>
УДАРЬ, ПРОФЕССОР. УДАРЬ!

<span class="whisper">(Профессор с криком замахивается и со всей силы обрушивает лопату на монстра. Удар — и скрежет, удар — и хруст.)</span>

<span class="whisper">(Луна выходит из-за облаков. Свет заливает двор. Профессор медленно опускает взгляд.)</span>

<span class="danger">(На земле лежит Ральф. Его голова разбита, шерсть в крови, глаза открыты и стеклянны. Лопата валяется рядом — она вся в крови.)</span>

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ:</span>
Нет... Нет-нет-нет... Ральф... Я... Я не хотел... Это не я... Это не я...

<span class="whisper">(Он встаёт, хватает лопату. Копает землю у старой яблони. Опускает тело собаки, засыпает. Стоит над могилой.)</span>

<span class="voice">АЛЕКСАНДР СЕРГЕЕВИЧ</span> <span class="whisper">(в пустоту, тихо):</span>
Я больше не знаю, кто я... Если я мог убить тебя — значит, во мне уже нет человека... Только болезнь.

<span class="sfx">---</span>

<span class="whisper">Но на самом деле Ральф жив. Это была галлюцинация. Александр убил пустоту. Он не знает этого. И эта вина останется с ним навсегда.</span>`,
next:'after_pet_router' };

S.after_pet_router = { type:'router', resolve: function(){ return G.V.F === 1 ? 't_lobotomy_task' : 't_natasha'; } };

/* ============================================================
   ИНДИВИДУАЛЬНОЕ ЗАДАНИЕ «ЛОБОТОМИЯ»
   ============================================================ */

S.t_lobotomy_task = { type:'choice', title:'Индивидуальное задание. Лоботомия', subtitle:'Лаборатория. 1971 год',
text:`Лаборатория. Маленькая камера, разделённая решёткой на две части. В первой — пациентка (кукла, неотличимая от человека). Она сидит спиной к игроку, и её затылок через окошко в решётке высунут на вторую сторону. Кукла может немного двигаться с помощью скрытого механизма. Во второй части — Александр (игрок). Перед ним стол с инструментами. Тусклая лампа. Пахнет хлоркой, железом и чем-то сладковатым.

<span class="voice">АЛЕКСАНДР:</span> <span class="whisper">(это игрок, который смотрит воспоминание Александра от первого лица. Голос Александра доносится из колонок)</span>
Вы — Александр Петров, 24 года. Ординатор нейрохирургического отделения. 1971 год. Профессор Ковалёв поручил вам первую самостоятельную операцию — трепанацию черепа. Пациентка — девушка 19 лет. Диагноз: «агрессивная шизофрения».

<span class="whisper">(Игрок входит в лабораторию. Дверь закрывается с тяжёлым лязгом. Свет мигает. За решёткой, спиной к игроку, сидит ДЕВУШКА. Её затылок через окошко высунут на сторону игрока — виден только участок кожи под волосами. Она слегка покачивается. Слышно приглушённое мычание — рот заклеен пластырем. Рядом стоит ПРОФЕССОР КОВАЛЁВ — седой, в очках, с папкой.)</span>

<span class="voice">ПРОФЕССОР</span> <span class="whisper">(спокойно, буднично):</span>
Петров, подойди. Сегодня ты сделаешь трепанацию.
Повезло тебе, первая трепанация в 24 года. Моя первая трепанация была гораздо позже. Не бойся, это простая операция. Вскроем череп, введём электрод в лобную долю. Она станет тихой. Послушной. Счастливой. Ты готов?

<span class="whisper">(Девушка мотает головой, пытается освободиться. Механизм позволяет ей немного двигать головой про.)</span>

<span class="voice">ПРОФЕССОР:</span>
Новокаин. Чтобы не дёргалась. Теперь бери трепан. Разрез, оттяни кожу, пройди кость. Не повреди мозг. Начинай.

<span class="whisper">(Профессор протягивает игроку трепан — инструмент для сверления кости. Он холодный. Тяжёлый. В этот момент по громкой связи раздаётся детский смех, который быстро стихает.)</span>

<span class="danger">ГОЛОС В ГОЛОВЕ (шёпот Комов):</span>
Ты же хотел стать великим. Вот твой шанс. Одна операция — и ты в команде. Она всё равно никто. Овощ. Сделай это. Ты же понимаешь, что для неё так будет лучше.`,
choices:[
{ text:'Вариант А: «Сделать трепанацию» (V+1)', v:-1, log:'Лоботомия: согласие', next:'ep6_router' },
{ text:'Вариант Б: «Отказаться» (V-1)', v:1, log:'Лоботомия: отказ', next:'ep6_router' }
] };

/* ============================================================
   ИНДИВИДУАЛЬНОЕ ЗАДАНИЕ «НАТАША»
   ============================================================ */

S.t_natasha = { type:'story', title:'Индивидуальное задание. Наташа', subtitle:'Комната игрушек',
text:`Комната залита мертвенно-бледным светом. Это не палата, а склад. Отовсюду — со стен, с пола — на зрителя смотрят сотни игрушек. Куклы с оторванными головами, плюшевые медведи с вырванными глазами, заводные обезьянки, застывшие в жутком танце. Они образуют огромную гору в центре комнаты, которая шевелится. Воздух тяжелый, пахнет старой пластмассой, пылью и сладковатым запахом антисептика.

<strong>АЛЕКСАНДР</strong> (это игрок, который смотрит воспоминание Александра от первого лица. Голос Александра доносится из колонок).

<strong>НАТАША</strong> (7 лет). Она не сидит и не стоит. Она выныривает из толщи игрушек.

<span class="whisper">(Александр входит. Дверь закрывается с тяжелым металлическим лязгом. Он улыбается, но эта улыбка не касается глаз. Он оглядывает комнату)</span>

В центре горы игрушек начинается движение. Пластиковые руки и плюшевые лапы раздвигаются. Из этой массы прорывается голова Наташи. Ее волосы спутаны, на щеке прилипивая конфета.

<span class="voice">НАТАША</span> <span class="whisper">(Ее голос звонкий, но с хрипотцой, будто она долго молчала или надышалась пыли):</span>
Саша! Ты пришел! Я знала. Я слышала твои шаги сквозь стены. У тебя сердце стучит как большой барабан «тук-тук-тук»

<span class="voice">АЛЕКСАНДР:</span>
Конечно, пришел. Разве я мог не прийти? Я принес тебе подарок.

Он протягивает фарфоровую куклу. У куклы нет рта — только гладкий фарфор. Наташа не берет ее. Она смотрит на Александра.

<span class="voice">НАТАША:</span>
Она красивая. Но она мертвая. У нее внутри пусто. Я не хочу мертвую. Хочу живую. Скажи... Когда я попаду в мир, про который ты рассказывал?

Она чуть высовывает руки из игрушек. Руки в ярких перчатках.

<span class="voice">НАТАША:</span>
Там, в Волшебном Мире, игрушки живые. Они разговаривают. И нет уколов. Так ты сказал.

<span class="voice">АЛЕКСАНДР:</span>
Да, сказал. Там только сладости, воздушные шары и... вечный праздник. Я же обещал.

<span class="voice">НАТАША</span> <span class="whisper">(Мечтательно, глядя в потолок):</span>
Ты говорил... Там сахарные горы. И там можно есть мороженое сколько хочешь, и никто не скажет "нельзя". И там живут все дети, у которых нет родителей. И там... там ты будешь моим папой? Настоящим?

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(Голос тихий, вкрадчивый, как у гинтонизера):</span>
Настоящим. Там не будет боли, Наташенька. Там не будет этих противных...

<span class="voice">НАТАША</span> <span class="whisper">(Кивает, игрушки вокруг нее шуршат):</span>
Я послушная. Я делала всё, что ты говорил. Я пила горькие таблетки. Я терпела, когда мне делали уколы.

Она замолкает. Смотрит на него внимательно, как рентген.

<span class="voice">НАТАША:</span>
Саша, а ты придешь туда? Ко мне? <span class="whisper">(замолкает, замечая его взгляд)</span> А почему ты грустный?

Александр на секунду отводит взгляд. Он смотрит на свои руки — руки хирурга. Он сжимает и разжимает пальцы.

<span class="voice">АЛЕКСАНДР:</span>
Я... приду позже. У меня еще много дел здесь. Я должен закончить работу. Но ты пойдешь первой. Разведаешь там все. Выберешь нам дом.

<span class="voice">НАТАША</span> <span class="whisper">(Мечтательно, зарываясь глубже в игрушки, так что видны только глаза):</span>
Хочу розовый дом. И чтобы там была собака. Большая. Но добрая. А ты возьмешь анализы? Ты говорил, что возьмешь последний разочек.

<span class="voice">АЛЕКСАНДР:</span>
Да, Наташа. Последний разочек. Это просто проверка. Чтобы тебя пропустили в Волшебный Мир. Там строгие правила.

<span class="voice">НАТАША:</span>
Я не боюсь. Я знаю, что после укола я закрою глазки, и будет светло. А когда открою — там будут конфеты.

Она смотрит на него. В ее взгляде нет детской наивности. В нем — пугающая, абсолютная вера. Она медленно высовывает руку из груды плюша. Рука тонкая, в следах от капельниц.

<span class="voice">НАТАША:</span>
Саша, а если я уйду первой... Ты не забудешь меня?

Александр замирает. Этот вопрос бьет его сильнее, чем любой диагноз. Он смотрит на нее сверху вниз. Он видит в ней и пациентку, и потерянную любовь, и свою собственную монструозность.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(Тихо, почти шепотом):</span>
Я буду помнить всегда. Ты — мой самый важный... эксперимент. Самый важный.

<span class="voice">НАТАША:</span>
Тогда я готова. Делай укол. Я хочу увидеть волшебный мир.

<span class="voice">АЛЕКСАНДР:</span>
Сейчас дядя принесет шприц и всё сделает.

<span class="voice">НАТАША:</span>
Скорее бы.`,
next:'ep6_router' };

/* ============================================================
   ЭПИЗОД 6. КРОВЬ НА РУКАХ
   ============================================================ */

S.ep6_router = { type:'router', resolve: routeEp6 };

S.f_ek_1_1 = { type:'story', title:'Эпизод 6. Кровь на руках', subtitle:'Диалог 1.1. Агрессия. Собака мертва. Екатерина не знает про болезнь',
text:`Гостиная. Полумрак. Только торшер у дивана и свет из окна.

Звенящая тишина. Запах земли и металла (после сцены с собакой).

Александр сидит на диване, сгорбившись, глядя в одну точку. Свет от торшера выхватывает его лицо. Он не двигается. Слышны шаги. Входит сонная <strong>ЕКАТЕРИНА</strong>, кутаясь в халат.

<span class="voice">ЕКАТЕРИНА</span> <span class="whisper">(зевая, потирая поясницу):</span>
Саша? Ты почему сидишь в темноте? Я легла на минуточку, поясница разболелась — жуть. Даже не заметила, как уснула. Слушай, я Ральфа не покормила. Извини. Раз ты не спишь, может, ты его покормишь?

Александр молчит. Он смотрит на неё, но не видит.

<span class="voice">ЕКАТЕРИНА</span> <span class="whisper">(подходит ближе, обнимает себя за плечи):</span>
Саша, ты меня пугаешь. Что случилось? Ты как будто не слышишь меня.

Александр медленно встаёт и отходит к окну. Он стоит спиной к ней, смотрит в темноту. Его плечи напряжены. Екатерина вздыхает, подходит к столу, чтобы налить воды. Её взгляд падает на папку. Она открывает её.

<span class="voice">ЕКАТЕРИНА</span> <span class="whisper">(голос меняется, становится жестким):</span>
Что это такое? Саша? <span class="whisper">(читает)</span> Глиболастома... Ты что, болен?

Александр не оборачивается.

<span class="voice">ЕКАТЕРИНА:</span>
Я не так поняла, верно? Иначе ты бы мне рассказал. Ты бы обязательно рассказал об этом своей жене. Нормальный человек бы поделился этим. Ты умираешь? Саша, не молчи! Скажи что-нибудь!

Она подходит к нему, берет его за руку. Рука холодная. Он резко выдергивает её.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(тихо, с надрывом):</span>
Я убил его.

<span class="voice">ЕКАТЕРИНА</span> <span class="whisper">(не понимая):</span>
Кого? О чём ты?

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(поворачивается, глаза безумные):</span>
Ральфа. Я убил Ральфа. Лопатой. Разбил ему голову.

<span class="voice">ЕКАТЕРИНА</span> <span class="whisper">(отшатывается, прикрывая рот рукой):</span>
Господи, Саша... Ты... Ты что, сошел с ума?

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(наступает на неё):</span>
Ты залезла в мою папку. Ты не имела права. Это моё. Моё!

<span class="voice">ЕКАТЕРИНА</span> <span class="whisper">(кричит, срываясь):</span>
Я просто хочу, чтобы ты не умер! Потому что если ты умрёшь, я останусь одна с твоим ребёнком, без твоих денег и связей! И никто меня не возьмёт на работу с дипломом, который я недоучила, потому что забеременела от профессора! Ты думаешь, мне легко?!

Пауза. Александр замирает. Его лицо искажает гримаса отвращения и ярости.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(с холодной усмешкой):</span>
Ну вот, наконец-то честно. А то я уж думал, ты и правда меня любишь. Всё это время...

<span class="voice">ЕКАТЕРИНА:</span>
Саша, нет, я не это имела в виду...

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(перебивая, голос срывается на крик):</span>
Замолчи!

Он теряет контроль. Он толкает её. Екатерина падает и ударяется головой об край стола.

Александр стоит, тяжело дыша. Он смотрит на её тело. Потом на свои руки. Он медленно опускается на колени.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(шепотом):</span>
Катя... Катя, вставай. Я не хотел... Я не хотел...

<span class="sfx">Свет медленно гаснет, оставляя только силуэт Александра над телом жены.</span>`,
next:'t_sasha_small' };

S.f_ek_1_2 = { type:'story', title:'Эпизод 6. Кровь на руках', subtitle:'Диалог 1.2. Раскаяние. Собака мертва. Екатерина не знает про болезнь',
text:`Александр сидит на диване, обхватив голову руками. Входит <strong>ЕКАТЕРИНА</strong>, сонная, держится за поясницу.

<span class="voice">ЕКАТЕРИНА</span> <span class="whisper">(зевая, потирая поясницу):</span>
Саша? Ты почему сидишь в темноте? Я легла на минуточку, поясница разболелась — жуть. Даже не заметила, как уснула. Слушай, я Ральфа не покормила. Извини. Раз ты не спишь, может, ты его покормишь?

Александр поднимает на неё глаза. В них стоят слезы. Екатерина замирает.

<span class="voice">ЕКАТЕРИНА:</span>
Саша? Что случилось? Ты весь дрожишь.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(голос ломается):</span>
Я убил его, Катя. Я убил Ральфа.

<span class="voice">ЕКАТЕРИНА</span> <span class="whisper">(бледнеет):</span>
Что? Как? Саша, это шутка?

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(качает головой):</span>
Нет. Я... Я не понимаю, что со мной происходит. Я видел... Я видел монстра. Я защищался. А когда пришел в себя... <span class="whisper">(он смотрит на свои руки)</span> ...на земле лежал он. Я закопал его под яблоней.

Екатерина медленно садится рядом с ним. Она напугана, но не отстраняется.

<span class="voice">АЛЕКСАНДР:</span>
Я болен, Катя. У меня рак мозга. Глиболастома. Игорь сказал... Мне осталось несколько месяцев. Я не хотел тебе говорить. Я думал, справлюсь сам. Я обещал заботиться о тебе и ребенке. А вместо этого... Я стал монстром. Я не сдержал обещания. Ты заслуживаешь лучшего. Ты заслуживаешь нормального мужа, а не... этого.

<span class="voice">ЕКАТЕРИНА</span> <span class="whisper">(берет его за руку, крепко):</span>
Саша, посмотри на меня. Ты не монстр. Ты болен. Это болезнь. Ты понимаешь? Это опухоль съедает твой мозг, но это не ты.

<span class="voice">АЛЕКСАНДР:</span>
Я убил собаку...

<span class="voice">ЕКАТЕРИНА:</span>
Ты не контролировал себя. Но ты можешь это исправить. Ты должен лечь на лечение. Немедленно. У тебя есть связи, у тебя есть деньги. Ты — кормилец нашей семьи. Ты не имеешь права умирать. Слышишь? Ты нужен мне. И ребенку.

Александр смотрит на неё. В его глазах появляется проблеск надежды, смешанный с болью.

<span class="voice">АЛЕКСАНДР:</span>
А если я не справлюсь? Если я снова сорвусь?

<span class="voice">ЕКАТЕРИНА</span> <span class="whisper">(гладит его по щеке):</span>
Тогда мы справимся вместе. Я не оставлю тебя. Но ты должен бороться. Обещай мне.

Он кивает. Она обнимает его. Он прижимается к ней, как ребенок. Свет не гаснет, но становится теплее. Это момент ложного спасения.`,
next:'t_sasha_small' };

S.f_ek_1_3 = { type:'story', title:'Эпизод 6. Кровь на руках', subtitle:'Диалог 1.3. Агрессия. Собака жива. Екатерина знает про болезнь',
text:`Александр сидит на диване, глядя на чистые руки. Он уверен, что они в крови. Входит <strong>ЕКАТЕРИНА</strong>.

<span class="voice">ЕКАТЕРИНА</span> <span class="whisper">(зевая, потирая поясницу):</span>
Саша? Ты почему сидишь в темноте? Я легла на минуточку, поясница разболелась — жуть. Даже не заметила, как уснула. Слушай, я Ральфа не покормила. Извини. Раз ты не спишь, может, ты его покормишь?

Александр вздрагивает от слова «Ральф». Он смотрит на окно. Он уверен, что Ральф мертв.

<span class="voice">ЕКАТЕРИНА</span> <span class="whisper">(подходит, видит его состояние):</span>
Саша, мне недавно позвонил Игорь. Ты что, болен? Я не так поняла, верно? Иначе ты бы мне рассказал. Нормальный человек бы поделился таким с женой. Ты умираешь? Не молчи!

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(отходит к окну):</span>
Я убил его. Я убил Ральфа. Я закопал его под яблоней.

<span class="voice">ЕКАТЕРИНА</span> <span class="whisper">(в ужасе):</span>
Саша, Ральф жив! Я слышала, как он лает во дворе, когда шла сюда! Ты бредишь!

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(резко оборачивается):</span>
Нет! Я видел его мозг! Я чувствовал, как лопата входит в кость! Не ври мне! Ты хочешь, чтобы я сошел с ума?!

<span class="voice">ЕКАТЕРИНА</span> <span class="whisper">(кричит, срываясь):</span>
Я просто хочу, чтобы ты не умер! Потому что если ты умрёшь, я останусь одна с твоим ребёнком, без твоих денег и связей! И никто меня не возьмёт на работу с дипломом, который я недоучила, потому что забеременела от профессора! Ты думаешь, мне легко?!

Пауза. Александр замирает. Его лицо искажает гримаса отвращения и ярости.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(с холодной усмешкой):</span>
Ну вот, наконец-то честно. А то я уж думал, ты и правда меня любишь. Всё это время...

<span class="voice">ЕКАТЕРИНА:</span>
Саша, нет, я не это имела в виду...

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(перебивая, голос срывается на крик):</span>
Замолчи!

Он теряет контроль. Он толкает её. Екатерина падает с лестницы.

Александр стоит, тяжело дыша. Он смотрит на её тело. Потом на свои руки. Он медленно опускается на колени.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(шепотом):</span>
Катя... Катя, вставай. Я не хотел... Я не хотел...

<span class="sfx">Свет медленно гаснет, оставляя только силуэт Александра над телом жены.</span>`,
next:'t_sasha_small' };

S.f_ek_1_4 = { type:'story', title:'Эпизод 6. Кровь на руках', subtitle:'Диалог 1.4. Раскаяние. Собака жива. Екатерина знает про болезнь',
text:`Александр сидит на диване, глядя на чистые руки. Он уверен, что они в крови. Входит <strong>ЕКАТЕРИНА</strong>.

<span class="voice">ЕКАТЕРИНА</span> <span class="whisper">(зевая, потирая поясницу):</span>
Саша? Ты почему сидишь в темноте? Я легла на минуточку, поясница разболелась — жуть. Даже не заметила, как уснула. Слушай, я Ральфа не покормила. Извини. Раз ты не спишь, может, ты его покормишь?

Александр поднимает на неё глаза, полные слез.

<span class="voice">АЛЕКСАНДР:</span>
Я убил его, Катя. Я убил Ральфа.

<span class="voice">ЕКАТЕРИНА</span> <span class="whisper">(замирает):</span>
Саша, о чем ты? Ральф живой. Вот он во дворе бегает.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(смотрит на свои руки):</span>
Нет... Я помню кровь. Я помню, как закапывал его. Это было так реально...

<span class="voice">ЕКАТЕРИНА</span> <span class="whisper">(подходит, садится рядом, берет его руки):</span>
Посмотри на меня. Твои руки чистые. Ральф жив. Ты просто перенервничал. Игорь звонил, сказал, что ты болен. У тебя рак, да?

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(кивает, голос дрожит):</span>
Глиболастома. Я... Я не хотел тебе говорить. Я обещал заботиться о тебе и ребенке. А сам... Я превращаюсь в чудовище. Я теряю контроль. Ты заслуживаешь лучшего мужа. Нормального. Здорового.

<span class="voice">ЕКАТЕРИНА</span> <span class="whisper">(крепко сжимает его руки):</span>
Саша, посмотри на меня. Ты не чудовище. Ты больной человек. И ты нужен мне. Ты нужен нашему ребенку. Ты — наша опора. У тебя есть связи, есть деньги. Ты не должен умирать. Ты должен лечь на лечение. Немедленно.

<span class="voice">АЛЕКСАНДР:</span>
А если я не справлюсь?

<span class="voice">ЕКАТЕРИНА:</span>
Мы справимся. Вместе. Но ты должен обещать мне, что начнешь бороться. Прямо сейчас.

Он смотрит на неё. В его глазах — облегчение и страх. Он кивает. Она обнимает его. Он плачет у неё на плече. Свет становится теплее.`,
next:'t_sasha_small' };

S.f_el_2_1 = { type:'story', title:'Эпизод 6. Кровь на руках', subtitle:'Диалог 2.1. Агрессия. Собака мертва. Елена не знает про болезнь',
text:`Кати нет. Александр один в пустом доме. Елена приходит как коллега, с которой у них романтические отношения. Она пришла с операции.

<span class="sfx">Звук: Дверь открывается без стука. Входит ЕЛЕНА ИВАНОВНА, уставшая, но возбуждённая.</span>

<span class="voice">ЕЛЕНА:</span>
Александр Сергеевич, Вы не поверите! Сегодня оперировала свинью. Вырезали опухоль. Я выработала новое седативное, которое быстрее усыпляет животных. Оно работает за тридцать секунд! Я принесла вам образец. Можем проверить на подопытных... <span class="whisper">(Замечает его состояние).</span> Александр Сергеевич?..

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(сидит на диване, смотрит на папку):</span>
...

<span class="voice">ЕЛЕНА</span> <span class="whisper">(присматривается к папке, садится напротив, открывает папку, просвечивает снимки на люстре и с напором спрашивает):</span>
И когда ты собирался рассказать мне о том, что у тебя рак?

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(сидит на диване, смотрит в одну точку):</span>
Я убил Ральфа.

<span class="voice">ЕЛЕНА</span> <span class="whisper">(замирает):</span>
Что?

<span class="voice">АЛЕКСАНДР:</span>
Лопатой. Я закопал его. Я не контролирую себя, Елена.

<span class="voice">ЕЛЕНА</span> <span class="whisper">(профессиональным строгим тоном):</span>
Александр Сергеевич, с этим не шутят. Сейчас же поедем в клинику <span class="whisper">(более мягко)</span> Я проведу сбор всех анализов...

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(вскакивает, перебивая):</span>
Ты хочешь сказать, что я болен? Ты хочешь экспериментировать на мне, как на той свинье?!

<span class="voice">ЕЛЕНА</span> <span class="whisper">(отступает):</span>
Нет, я просто беспокоюсь о Вас! Вы — мой учитель, я...

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(кричит):</span>
Ты хочешь моей смерти! Вы все хотите моей смерти! Ты демон! <span class="whisper">(Хватает стул, замахивается).</span>

<span class="voice">ЕЛЕНА</span> <span class="whisper">(действует на рефлексах. Она достаёт шприц. Он надвигается. Она делает шаг вперёд и вонзает иглу ему в бедро).</span>
Простите меня, Александр Сергеевич. Простите.

<span class="sfx">(Александр замирает. Его глаза расширяются. Он пытается сделать шаг, но ноги подкашиваются. Он падает на колени).</span>

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(заплетающимся языком):</span>
Что... что ты...

<span class="voice">ЕЛЕНА</span> <span class="whisper">(садится рядом с ним, держит его за руку):</span>
Это седативное. Оно просто усыпит вас. Всё будет хорошо.

<span class="whisper">(Александр падает лицом на пол. Елена переворачивает его на бок, проверяет пульс. Он в отключке).</span>

<span class="voice">ЕЛЕНА</span> <span class="whisper">(тихо, гладит его по голове):</span>
Я люблю вас, Александр Сергеевич. Я вас не брошу. Я вас вылечу. Обещаю.

<span class="danger">(V = -1. Коми получают питание от его беспомощности).</span>`,
next:'t_sasha_small' };

S.f_el_2_2 = { type:'story', title:'Эпизод 6. Кровь на руках', subtitle:'Диалог 2.2. Раскаяние. Собака мертва. Елена не знает про болезнь',
text:`<span class="sfx">Звук: Дверь открывается без стука. Входит ЕЛЕНА ИВАНОВНА, уставшая, но возбуждённая.</span>

<span class="voice">ЕЛЕНА:</span>
Александр Сергеевич, Вы не поверите! Сегодня оперировала свинью. Вырезали опухоль. Я выработала новое седативное, которое быстрее усыпляет животных. Оно работает за тридцать секунд! Я принесла вам образец. Можем проверить на подопытных... <span class="whisper">(Замечает его состояние).</span> Александр Сергеевич?..

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(сидит на диване, смотрит на папку):</span>
...

<span class="voice">ЕЛЕНА</span> <span class="whisper">(присматривается к папке, садится напротив, открывает папку, просвечивает снимки на люстре и с напором спрашивает):</span>
И когда ты собирался рассказать мне о том, что у тебя рак?

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(сидит на диване, смотрит в одну точку):</span>
Я убил Ральфа.

<span class="voice">ЕЛЕНА</span> <span class="whisper">(замирает):</span>
Что?

<span class="voice">АЛЕКСАНДР:</span>
Я монстр. Я убил единственное существо, которое меня любило. Что дальше?

<span class="voice">ЕЛЕНА</span> <span class="whisper">(берёт его за руку):</span>
Вы не монстр. Вы — гений. Вы — человек, который спас тысячи жизней...

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(прерывая речь Елены):</span>
Елена. У меня рак. Глиболастома, быстрорастущая. Сегодня пришли анализы. Уже поздно что-то делать.

<span class="voice">ЕЛЕНА:</span>
Не поздно. Ваш проект Искусственная кома! Погружение пациента в глубокий сон. Я лично буду следить за Вашим состоянием.

<span class="voice">АЛЕКСАНДР:</span>
Да! <span class="whisper">(вскакивает)</span> Как я сам до этого не додумался! <span class="whisper">(поцелуй в лоб Елены)</span> Но...но...Эксперимент ни разу не проводился это на людях...Это опасно... Хотя. Мы можем выиграть время. Рост опухоли замедляется в коме. <span class="whisper">(ползет на коленях к Елене, с воодушевлением, она как пророк)</span> У меня появится шанс. <span class="whisper">(долгая пауза, они смотрят друг другу в глаза, Елена пытается поцеловать Александра, Александр резко встает и идет мельтешит по комнате)</span> У людей буду я. Человек, который избавит их от рака раз и навсегда.

<span class="voice">ЕЛЕНА</span> <span class="whisper">(смотрит на него, в её взгляде — фанатичная преданность):</span>
Вы — мой кумир. Я мечтала работать с Вами. Тот день, когда вы взяли меня в проект, был самым счастливым в моей жизни. Я всегда любила Вас. И я сделаю всё, чтобы Вы выжили.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(сдаётся):</span>
Хорошо. Я согласен. Я доверяю тебе.

<span class="danger">(V = +1. Елена помогает ему встать. Они уходят. Но игроки чувствуют, что это не спасение, а ловушка. «Комы» — это не лекарство, это паразиты).</span>`,
next:'t_sasha_small' };

S.f_el_2_3 = { type:'story', title:'Эпизод 6. Кровь на руках', subtitle:'Диалог 2.3. Агрессия. Собака жива. Елена знает про болезнь',
text:`<span class="sfx">Звук: Дверь открывается без стука. Входит ЕЛЕНА ИВАНОВНА, уставшая, но возбуждённая.</span>

<span class="voice">ЕЛЕНА:</span>
Александр Сергеевич, Вы не поверите! Сегодня оперировала свинью. Вырезали опухоль. Я выработала новое седативное, которое быстрее усыпляет животных. Оно работает за тридцать секунд! Я принесла вам образец. Можем проверить на подопытных... <span class="whisper">(Замечает его состояние).</span> Господи, что с Вами?

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(сидит на диване, смотрит в одну точку):</span>
Я убил Ральфа.

<span class="voice">ЕЛЕНА</span> <span class="whisper">(хмурится):</span>
Что? Нет, он во дворе. Я видела его во дворе.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(встаёт, надвигается):</span>
Ты лжёшь! Как и все! Вы хотите меня свести с ума! Ты — демон в человеческом обличье!

<span class="voice">ЕЛЕНА</span> <span class="whisper">(подходит ближе, профессиональным тоном):</span>
Александр Сергеевич, Вы переутомились, наверное, опять всю ночь писали исследования по вскрытию собак и уснули...Вам это наверняка приснилось!

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(вскакивает, глаза наливаются кровью):</span>
Ты хочешь сказать, что я болен? Может ты хочешь экспериментировать на мне, как на той свинье?!

<span class="voice">ЕЛЕНА</span> <span class="whisper">(отступает):</span>
Нет, я просто беспокоюсь о Вас! Вы — мой учитель, я...

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(кричит):</span>
Ты хочешь моей смерти! Вы все хотите моей смерти! Ты демон! <span class="whisper">(Хватает стул, замахивается).</span>

<span class="voice">ЕЛЕНА</span> <span class="whisper">(действует на рефлексах. Она достаёт шприц. Он надвигается. Она делает шаг вперёд и вонзает иглу ему в бедро).</span>
Простите меня, Александр Сергеевич. Простите.

<span class="sfx">(Александр замирает. Его глаза расширяются. Он пытается сделать шаг, но ноги подкашиваются. Он падает на колени).</span>

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(заплетающимся языком):</span>
Что... что ты...

<span class="voice">ЕЛЕНА</span> <span class="whisper">(закрывает дверь на ключ, садится рядом с ним, держит его за руку):</span>
Это седативное. Оно просто усыпит вас. Всё будет хорошо.

<span class="whisper">(Александр падает лицом на пол. Елена переворачивает его на бок, проверяет пульс. Он в отключке).</span>

<span class="voice">ЕЛЕНА</span> <span class="whisper">(тихо, гладит его по голове):</span>
Я люблю вас, Александр Сергеевич. Я вас не брошу. Я вас вылечу. Обещаю.

<span class="danger">(V = -1. Коми получают питание от его беспомощности).</span>`,
next:'t_sasha_small' };

S.f_el_2_4 = { type:'story', title:'Эпизод 6. Кровь на руках', subtitle:'Диалог 2.4. Раскаяние. Собака жива. Елена знает про болезнь',
text:`<span class="sfx">Звук: Дверь открывается без стука. Входит ЕЛЕНА ИВАНОВНА, уставшая, но возбуждённая.</span>

<span class="voice">ЕЛЕНА:</span>
Александр Сергеевич, Вы не поверите! Сегодня оперировала свинью. Вырезали опухоль. Я выработала новое седативное, которое быстрее усыпляет животных. Оно работает за тридцать секунд! Я принесла вам образец. Можем проверить на подопытных... <span class="whisper">(Замечает его состояние).</span> Александр Сергеевич?..

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(сидит на диване, смотрит в одну точку):</span>
Я убил Ральфа.

<span class="voice">ЕЛЕНА</span> <span class="whisper">(замирает):</span>
Что?

<span class="voice">АЛЕКСАНДР:</span>
Я монстр. Я убил единственное существо, которое меня любило. Что дальше?

<span class="voice">ЕЛЕНА</span> <span class="whisper">(подходит, смотрит в окно):</span>
Ральф жив. Вон он, бегает за мотыльком Посмотрите.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(подходит к окну, видит собаку):</span>
Но... я помню... я помню кровь... я помню, как закапывал...

<span class="voice">ЕЛЕНА:</span>
Это была галлюцинация. Опухоль. Она заставляет вас видеть то, чего нет. Вы не убивали его. Вы не монстр.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(осознание):</span>
Значит... ты знаешь?

<span class="voice">ЕЛЕНА</span> <span class="whisper">(берёт его за руку):</span>
Да, мне позвонил Игорь. Вы не монстр. Вы — гений. Вы — человек, который спас тысячи жизней...

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(прерывая речь Елены):</span>
Уже поздно что-то делать.

<span class="voice">ЕЛЕНА:</span>
Не поздно. Ваш проект Искусственная кома! Погружение пациента в глубокий сон. Я лично буду следить за Вашим состоянием.

<span class="voice">АЛЕКСАНДР:</span>
Да! <span class="whisper">(вскакивает)</span> Как я сам до этого не додумался! <span class="whisper">(поцелуй в лоб Елены)</span> Но...но...Эксперимент ни разу не проводился это на людях...Это опасно... Хотя. Мы можем выиграть время. Рост опухоли замедляется в коме. <span class="whisper">(ползет на коленях к Елене, с воодушевлением, она как пророк)</span> У меня появится шанс. <span class="whisper">(долгая пауза, они смотрят друг другу в глаза, Елена пытается поцеловать Александра, Александр резко встает и идет мельтешит по комнате)</span> У людей буду я. Человек, который избавит их от рака раз и навсегда.

<span class="voice">ЕЛЕНА</span> <span class="whisper">(смотрит на него, в её взгляде — фанатичная преданность):</span>
Вы — мой кумир. Я мечтала работать с Вами. Тот день, когда вы взяли меня в проект, был самым счастливым в моей жизни. Я всегда любила Вас. И я сделаю всё, чтобы Вы выжили.

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(сдаётся):</span>
Хорошо. Я согласен. Я доверяю тебе.

<span class="danger">(V = +1. Елена помогает ему встать. Они уходят. Но игроки чувствуют, что это не спасение, а ловушка. «Комы» — это не лекарство, это паразиты).</span>`,
next:'t_sasha_small' };

/* ============================================================
   ИНДИВИДУАЛЬНОЕ ЗАДАНИЕ «САША МЕЛКИЙ»
   ============================================================ */

S.t_sasha_small = { type:'story', title:'Индивидуальное задание. Саша мелкий', subtitle:'Комната матери Александра',
text:`Локация: Комната матери Александра.

<span class="sfx">Звук: Тиканье старых часов, шум дождя за окном.</span>

<span class="whisper">(Перед игроками — одноместная кровать. На ней лежит ЖЕНЩИНА. Она не двигается. Только едва заметное дыхание. Рядом на коленях стоит КУКЛА-МАРИОНЕТКА — мальчик 7 лет. В руках у него игрушечный стетоскоп. Куклой управляет АКТЁР В ЧЁРНОМ. Он остаётся в тени, но его руки, держащие нити, видны.)</span>

<span class="voice">САША</span> <span class="whisper">(кукла, голос живого актёра за кадром — наивный, звонкий):</span>
Мама... Ты спишь?

Я знаю, что ты не спишь. Я слышу, как ты дышишь. Ты дышишь так... будто внутри тебя сидит кто-то большой и злой. Он грызет тебя изнутри. Я видел, как доктор выходил от тебя. Что значит «Неоперабельно»? Это как «нельзя вылечить», да?

Я сделаю лекарство. Как сироп от кашля. Помнишь? Ты давала мне ложку. Горький. Противный. Но потом — раз! — и не болит. Я сделаю такой же. Только от рака. Ты выпьешь ложечку, поморщишься... и всё. Чудище внутри тебя уснёт. И ты встанешь. Утром. Как раньше. И знаешь, что будет потом? Я тебе расскажу. Я всё придумал. я вылечу всех. Всех-всех, я обещаю. Слышишь? Обещаю! Я не буду прятать его. Я отдам всем. Пусть никто не умирает. Никогда. Это же так просто, правда?

<span class="whisper">(Кукла наклоняется, поправляет одеяло на груди матери. Движения марионетки чуть угловатые, но полные нежности.)</span>

<span class="voice">МАМА</span> <span class="whisper">(тихо, почти неслышно):</span>
Я верю тебе, мой хороший. Ты у меня самый добрый. Самое главное... не потеряй себя, когда вырастешь. Оставайся таким же... светлым.

<span class="voice">САША:</span>
Я буду героем. Про меня напишут в газете. «Пионер Саша спас свою маму». Все дети будут мной гордиться. Все мамы будут завидовать тебе. «Какой у вас хороший сын». А ты будешь улыбаться. Как раньше. Ты помнишь, как ты улыбалась? Я — помню. Ты только дождись...

<span class="whisper">(Кукла замирает. Свет начинает мерцать. Тёплая картинка трескается, как старая плёнка.. Кукла и мать исчезают.)</span>

<span class="whisper">(На их месте — взрослый АЛЕКСАНДР. Он смотрит на игроков глазами, полными слёз.)</span>

<span class="voice">АЛЕКСАНДР</span> <span class="whisper">(шёпотом, срываясь):</span>
Я не успел... Я не нашёл таблетку... Я стал монстром... но я так старался... Я обещал...

<span class="sfx">(Свет гаснет. Остаётся только тяжёлое дыхание игроков и тиканье часов.)</span>`,
next:'resolve' };

S.resolve = { type:'resolve', title:'Счёт', subtitle:'Подсчёт V-шкалы', text:'Подсчёт очков...', next:'ending' };
S.ending = { type:'ending', title:'Финал', subtitle:'', text:'' };

/* ============================================================
   КОНЦОВКИ
   ============================================================ */

var E = {
e11: { title:'Концовка 1.1', subtitle:'Игроки выходят с Александром. Александр — убийца. Компромат не опубликован', cls:'e1',
text:`Игроки выходят. Александр выходит. Все живы — на пороге лаборатории. Но свобода пахнет гарью. Екатерина мертва. Он убил её — своими руками, в припадке, который сам не смог объяснить.

Игроков выводят из лаборатории под предлогом «медицинского осмотра». Их ведут по длинному коридору.

Двери закрываются. Свет гаснет. Никто не выходит. Игроков убивают как свидетелей.

Александра Сергеевича Петрова, великого врача, гения, филантропа, заключают под стражу прямо в больничной палате. Компромат не опубликован. Журналист мёртв. Плёнки сгорели. Мир так и не узнал, кем был человек, которого они спасали.` },
e12: { title:'Концовка 1.2', subtitle:'Игроки выходят с Александром. Александр — гений. Все живы', cls:'e2',
text:`Игроки выходят. Александр выходит. Все живы. Компромат не опубликован. Скандала нет. Мир по-прежнему верит в своего героя. Екатерина жива.

Игроки получают вознаграждение. Конверты. Напоминание о неразглашении. Их выводят через чёрный ход.

Елена Ивановна смотрит им вслед. В её глазах — не благодарность. Облегчение. И что-то ещё — тёмное, как осадок на дне лабораторной колбы.` },
e21: { title:'Концовка 2.1', subtitle:'Игроки живы, Александр мёртв. Елена убивает свидетелей', cls:'e3',
text:`Игроки выходят. Александр — нет.

Он остался там. В лабиринте. В коконе. В коме, которая так и не отпустила. Компромат не опубликован. Никто не узнает правды. Александра Сергеевича Петрова признают посмертно гением. Памятник. Улица. Премия его имени. Слёзы на камеру.

Елена Ивановна стоит у выхода из лаборатории. Она смотрит на игроков — живых свидетелей, которые видели слишком много. Игроков выводят из лаборатории под предлогом «медицинского осмотра». Их ведут по длинному коридору. Двери закрываются. Она не говорит ни слова. Просто кивает оператору. Двери блокируются. Газ. Свет гаснет. Никто не выходит. Игроков убивают как свидетелей.

Двери блокируются. Газ. Свет гаснет. Никто не выходит. Игроков убивают как свидетелей.

Екатерина Петрова — мертва или жива, уже не имеет значения. Она просто исчезает из уравнения.

Елена становится главной.` },
e22: { title:'Концовка 2.2', subtitle:'Игроки живы, Александр мёртв. Елена признаёт вину', cls:'e4',
text:`Игроки выходят. Александр — нет.

Компромат опубликован. Утренние газеты выходят с заголовками: «Гений оказался монстром», «Профессор Петров ставил опыты на людях», «Светило российской медицины — серийный убийца».

Елена Ивановна даёт показания. Она плачет. Она говорит, что не знала. Что верила. Что он обманул всех. Её отправляют под домашний арест, потом — в тюрьму. Она не сопротивляется.

Екатерина Петрова — мертва или жива. Её имя мелькает в новостях, но быстро исчезает — скандал важнее.

Игроки выходят через служебный вход. Их никто не встречает. Никто не благодарит. Они просто растворяются в городе, который так и не узнал, что они сделали.` },
e31: { title:'Концовка 3.1', subtitle:'Все мертвы. Компромат не опубликован. Елена — главная', cls:'e5',
text:`Никто не выходит. Ни игроки. Ни Александр. Компромат не опубликован. Мир не знает правды. Александра Сергеевича Петрова признают посмертно гением. Памятник. Улица. Премия. Слёзы.

Елена Ивановна стоит в опустевшей лаборатории. N тел. N пустых кресел. N браслетов, которые больше не мигают. Она остаётся одна. С проектом. С тайной. С грузом, который никто не разделит.

Она выключает свет. Дверь закрывается. Лаборатория становится могилой. Елена становится главной.` },
e32: { title:'Концовка 3.2', subtitle:'Все мертвы. Компромат опубликован. Елена — суицид', cls:'e6',
text:`Игроки не вышли. Александр не вышел. Все мертвы. Компромат опубликован. Скандал. «Гений» оказался монстром. Елена Ивановна не выдержала.

Локация: Лаборатория после провала. Аварийный красный свет. На мониторах — плоские линии. В креслах — тела игроков, накрытые простынями. В стеклянной капсуле — тело Александра. Воздух пахнет озоном, хлоркой и горелой проводкой. На стене — проекция новостной ленты: «Гений оказался монстром», «Профессор Петров ставил опыты на людях», «Следственный комитет ищет сообщницу — Е. И. Смирнову».

Игроки мертвы, но их сознание застряло в лаборатории. Они — призраки. Они не могут вмешаться. Они не могут отвернуться. Это их наказание: смотреть.

<span class="sfx">Сцена РАДИО</span>

...Смирнова Елена Ивановна, пятьдесят пять лет, научный руководитель закрытого проекта... при обнаружении не приближаться. Считается вооружённой и опасной...

<span class="sfx">песня: Одинокая птица Наутилус Помпилус</span>

Елена входит в лабораторию. Она без халата. В руке — планшет, который уже никому не нужен. Она останавливается. Смотрит на тела. Долго. Потом подходит к капсуле Александра. Кладёт ладонь на стекло.

<span class="voice">ЕЛЕНА</span> <span class="whisper">(тихо):</span>
Саша... они всё узнали. Твои плёнки. Твои отчёты. Твои «клинические случаи».

<span class="whisper">(усмехается, но глаза пустые)</span>

Я говорила: сожги. Ты сказал: «Наука не боится правды». Вот и не боится. Она тебя переживёт.

<span class="whisper">(пауза)</span>

Меня — тоже.

Елена обходит комнату, встаёт на стул, надевается петля, задыхается долго. Тело Елены качается, как маятник.

<span class="voice">ЕЛЕНА:</span>
Саша, я иду к тебе... Петля натягивается.` }
};

/* ============================================================
   ЛОГИКА
   ============================================================ */

var V_KEYS = ['H','J','F','D','P','L'];
var SCENE_TO_V = { h_glory:'H', j_journalist:'J', f_family:'F', d_diagnosis:'D', t_patient1:'P', t_lobotomy_task:'L' };
var MOOD = { AGGR:'Агрессия', REPENT:'Раскаяние', NEUTRAL:'-' };
var ORDER = ['intro_lab','intro_rules','intro_dive','h_glory','t_vrach','j_journalist','j_branch_pay','j_branch_refuse','j_branch_silence','f_family','d_diagnosis','t_experiment','t_patient1','t_patient1_release','t_patient1_hold','pet_real','pet_fake','after_pet_router','t_lobotomy_task','t_natasha','ep6_router','f_ek_1_1','f_ek_1_2','f_ek_1_3','f_ek_1_4','f_el_2_1','f_el_2_2','f_el_2_3','f_el_2_4','t_sasha_small','resolve'];

function makeState(){
  var V = {};
  for (var i = 0; i < V_KEYS.length; i++) V[V_KEYS[i]] = null;
  return { V:V, hasJ:false, hasP:false, child:false, publicGenius:true, ekaterinaDies:false, playersDie:false, canSave:false, sPlus:0, sMinus:0, log:[], currentScene:'intro_lab', ending:null };
}
var G = makeState();

function resetG(){
  var fresh = makeState();
  for (var k in G) delete G[k];
  for (var k2 in fresh) G[k2] = fresh[k2];
}

function accum(){
  var sp = 0, sm = 0;
  for (var i = 0; i < V_KEYS.length; i++){
    var k = V_KEYS[i];
    if (k === 'J' && !G.hasJ) continue;
    if (k === 'P' && !G.hasP) continue;
    var v = G.V[k];
    if (v === 1) sp++; else if (v === -1) sm++;
  }
  G.sPlus = sp; G.sMinus = sm;
}
function balance(){ return G.sPlus - G.sMinus; }
function isAggr(){ return balance() > 0; }
function isNeutral(){ return G.sPlus === 0 && G.sMinus === 0; }

function routeEp6(){
  var aggr = isAggr();
  var child = G.child;
  var dogDead = G.V.D === 1;
  if (child) return aggr ? (dogDead ? 'f_ek_1_1' : 'f_ek_1_3') : (dogDead ? 'f_ek_1_2' : 'f_ek_1_4');
  return aggr ? (dogDead ? 'f_el_2_1' : 'f_el_2_3') : (dogDead ? 'f_el_2_2' : 'f_el_2_4');
}

function computeEnding(){
  accum();
  G.ekaterinaDies = G.child && isAggr();
  G.publicGenius = !(G.hasJ && G.V.J === -1);
  var canSave = false;
  if (G.publicGenius && G.V.L === 1){
    if (G.V.D === 1) canSave = true;
    else if (G.V.D === -1 && G.hasP && G.V.P === 1) canSave = true;
  }
  G.canSave = canSave;
  G.playersDie = G.V.L === -1;
  if (canSave) G.ending = G.ekaterinaDies ? 'e11' : 'e12';
  else if (G.playersDie) G.ending = G.publicGenius ? 'e31' : 'e32';
  else G.ending = G.publicGenius ? 'e21' : 'e22';
}

function $(id){ return document.getElementById(id); }
var $title, $subtitle, $text, $choices, $scene, $end, $etitle, $etext, $estats, $log, $dbg, $pplus, $pminus, $pbal, $mood, $pfill, $plabel;

function buildDOM(){
  var style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);
  var wrap = document.createElement('div');
  wrap.innerHTML = HTML;
  while (wrap.firstChild) document.body.appendChild(wrap.firstChild);
  $title=$('title'); $subtitle=$('subtitle'); $text=$('text'); $choices=$('choices');
  $scene=$('scene'); $end=$('end'); $etitle=$('etitle'); $etext=$('etext');
  $estats=$('estats'); $log=$('log'); $dbg=$('dbg');
  $pplus=$('pplus'); $pminus=$('pminus'); $pbal=$('pbal'); $mood=$('mood');
  $pfill=$('pfill'); $plabel=$('plabel');
  $('dtog').addEventListener('click', toggleDebug);
  $('restart').addEventListener('click', restart);
}

var dbgOn = false;

function updStatus(){
  accum();
  $pplus.textContent = 'S+ : ' + G.sPlus;
  $pminus.textContent = 'S- : ' + G.sMinus;
  var b = balance();
  $pbal.textContent = 'Баланс: ' + (b >= 0 ? '+' : '') + b;
  $mood.textContent = isNeutral() ? MOOD.NEUTRAL : (b > 0 ? MOOD.AGGR : MOOD.REPENT);
  if (dbgOn) updDebug();
}

function updProgress(id){
  var i = ORDER.indexOf(id);
  var total = ORDER.length - 1;
  var p = i >= 0 ? Math.min(100, Math.round(i / total * 100)) : 100;
  $pfill.style.width = p + '%';
}

function makeStoryButton(next){
  var b = document.createElement('button');
  b.className = 'pbtn'; b.type = 'button'; b.textContent = 'Продолжить';
  b.addEventListener('click', function(){ render(next); updStatus(); });
  return b;
}
function makeChoiceButton(choice){
  var b = document.createElement('button');
  b.className = 'cbtn'; b.type = 'button';
  b.textContent = choice.text;
  b.addEventListener('click', function(){ handleChoice(choice); });
  return b;
}
function makeResolveButton(){
  var b = document.createElement('button');
  b.className = 'pbtn'; b.type = 'button'; b.textContent = 'Узнать судьбу';
  b.addEventListener('click', function(){ computeEnding(); render('ending'); });
  return b;
}

function render(id){
  var sc = S[id];
  if (!sc){ console.error('Сцена не найдена:', id); return; }
  if (sc.type === 'router'){ render(sc.resolve()); return; }

  function resetScroll(){
    try {
      var ae = document.activeElement;
      if (ae && ae !== document.body && ae.blur) ae.blur();
    } catch(e){}
    var se = document.scrollingElement || document.documentElement || document.body;
    if (se) se.scrollTop = 0;
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
    try { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); }
    catch(e){ window.scrollTo(0, 0); }
    try { window.scroll(0, 0); } catch(e){}
  }

  $scene.classList.add('fading-out');

  setTimeout(function(){
    G.currentScene = id;
    updProgress(id);

    if (sc.type === 'ending'){
      renderEnding();

      Audio2.init();
      Audio2.whoosh();
      Audio2.playSceneAmbient('ending');
      if (G.ending && SCREAMER_SCENES[G.ending]) {
        Audio2.tryPlayScreamer(G.ending);
      }

      resetScroll();
      requestAnimationFrame(function(){
        resetScroll();
        requestAnimationFrame(function(){ resetScroll(); });
      });
      setTimeout(resetScroll, 30);
      setTimeout(resetScroll, 120);
      setTimeout(resetScroll, 350);

      $scene.classList.remove('fading-out');
      return;
    }

    $scene.style.display = 'flex';
    $end.style.display = 'none';
    $title.textContent = sc.title || '';
    $subtitle.textContent = sc.subtitle || '';
    $text.innerHTML = colorizeText(sc.text || '');
    $choices.innerHTML = '';

    if (sc.type === 'story'){
      $choices.appendChild(makeStoryButton(sc.next));
    } else if (sc.type === 'choice'){
      for (var i = 0; i < sc.choices.length; i++) $choices.appendChild(makeChoiceButton(sc.choices[i]));
    } else if (sc.type === 'resolve'){
      $choices.appendChild(makeResolveButton());
    }

    updStatus();

    Audio2.init();
    Audio2.whoosh();
    Audio2.playSceneAmbient(id);
    Audio2.tryPlayScreamer(id);
    if (SCREAMER_SCENES[id]) setTimeout(function(){ Audio2.heartbeat(); }, 900);

    resetScroll();
    requestAnimationFrame(function(){
      resetScroll();
      requestAnimationFrame(function(){ resetScroll(); });
    });
    setTimeout(resetScroll, 30);
    setTimeout(resetScroll, 120);
    setTimeout(resetScroll, 350);

    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        $scene.classList.remove('fading-out');
      });
    });
  }, 300);
}

function handleChoice(c){
  var key = SCENE_TO_V[G.currentScene];
  if (key) G.V[key] = c.v;
  if (c.set){ for (var k in c.set) G[k] = c.set[k]; }
  if (c.log) addLog(c.log, c.v);
  render(c.next);
}

function addLog(text, v){
  G.log.push({ text:text, v:v });
  var d = document.createElement('div');
  d.className = v === 1 ? 'lplus' : v === -1 ? 'lminus' : 'lzero';
  d.textContent = '* ' + text + (v === 1 ? ' [+1]' : v === -1 ? ' [-1]' : ' [0]');
  $log.appendChild(d);
  $log.scrollTop = $log.scrollHeight;
}

function renderEnding(){
  var en = E[G.ending];
  if (!en){ console.error('Концовка не найдена:', G.ending); return; }
  $scene.style.display = 'none';
  $end.style.display = 'block';
  $etitle.textContent = en.title;
  $etitle.className = en.cls;
  $etext.innerHTML = en.text;
  var m = isNeutral() ? MOOD.NEUTRAL : (isAggr() ? MOOD.AGGR : MOOD.REPENT);
  $estats.innerHTML = '<strong>' + en.subtitle + '</strong><br><br>' +
    'S+ = ' + G.sPlus + ' | S- = ' + G.sMinus + '<br>' +
    'Настроение: ' + m + '<br>' +
    'Репутация: ' + (G.publicGenius ? 'гений' : 'убийца') + '<br>' +
    'Спасение Александра: ' + (G.canSave ? 'да' : 'нет') + '<br>' +
    'Игроки погибают: ' + (G.playersDie ? 'да' : 'нет') + '<br>' +
    'Екатерина мертва: ' + (G.ekaterinaDies ? 'да' : 'нет');
  $pfill.style.width = '100%';
  $plabel.textContent = 'Финал';
  updStatus();
}

function updDebug(){
  if (!$dbg) return;
  var dogDead = G.V.D === 1;
  var branch = G.child ? 'ребёнок (F+)' : 'без ребёнка (F-/F0)';
  var reason;
  if (!G.publicGenius) reason = 'компромат опубликован (J-)';
  else if (G.V.L === -1) reason = 'лоботомия (L-)';
  else if (G.V.L === null) reason = 'лоботомия не пройдена';
  else if (G.V.D === 1) reason = 'принятие (D+) + L+';
  else if (G.hasP && G.V.P === 1) reason = 'D- + P+ + L+';
  else if (G.hasP && G.V.P === -1) reason = 'D- + P-';
  else reason = 'условия не выполнены';
  var vparts = [];
  for (var i = 0; i < V_KEYS.length; i++) vparts.push(V_KEYS[i] + '=' + G.V[V_KEYS[i]]);
  $dbg.innerHTML = '<strong>DEBUG</strong><br>' +
    'scene: ' + G.currentScene + '<br>' +
    'V: ' + vparts.join(' ') + '<br>' +
    'branch: ' + branch + ' | dogDead=' + dogDead + ' | hasJ=' + G.hasJ + ' | hasP=' + G.hasP + '<br>' +
    'S+=' + G.sPlus + ' S-=' + G.sMinus + ' balance=' + balance() + '<br>' +
    'canSave=' + G.canSave + ' playersDie=' + G.playersDie + ' ekaterinaDies=' + G.ekaterinaDies + '<br>' +
    'reason: ' + reason + '<br>' +
    'ending=' + G.ending;
}

function toggleDebug(){ dbgOn = !dbgOn; $dbg.classList.toggle('on', dbgOn); updDebug(); }

function restart(){
  resetG();
  $log.innerHTML = '';
  $dbg.innerHTML = '';
  $end.style.display = 'none';
  $scene.style.display = 'flex';
  updStatus();
  render('intro_lab');
}

function boot(){
     Mp3.preloadAll();
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  document.body.removeAttribute('style');
  document.body.style.display = 'block';
  document.body.style.padding = '0';
  document.body.style.margin = '0';
  document.body.style.alignItems = 'initial';
  document.body.style.justifyContent = 'initial';
  document.body.style.minHeight = '100vh';
  document.body.style.overflowX = 'hidden';
  document.body.style.overflowY = 'auto';
  document.body.style.overflowAnchor = 'none';

  buildDOM();
  updStatus();

  var initAudio = function(){
    Audio2.init();
    document.removeEventListener('pointerdown', initAudio);
    document.removeEventListener('keydown', initAudio);
    document.removeEventListener('touchstart', initAudio);
  };
  document.addEventListener('pointerdown', initAudio);
  document.addEventListener('keydown', initAudio);
  document.addEventListener('touchstart', initAudio);

  document.addEventListener('click', function(e){
    Audio2.init();
    var t = e.target;
    while (t && t !== document.body){
      if (t.classList && t.classList.contains('cbtn')){ Audio2.clickChoice(t); return; }
      if (t.classList && t.classList.contains('pbtn')){
        if (t.id === 'restart') Audio2.clickRestart();
        else Audio2.clickContinue();
        return;
      }
      if (t.id === 'dtog'){ Audio2.clickToggle(); return; }
      t = t.parentNode;
    }
  });

  document.addEventListener('visibilitychange', function(){
    if (document.hidden) Audio2.setMuted(true);
    else Audio2.setMuted(false);
  });

  render('intro_lab');
}

if (document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

})();
