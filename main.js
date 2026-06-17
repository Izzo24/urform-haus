/* 原形 URFORM — 互動 */
(function(){
  // 行動選單
  var burger=document.querySelector('.burger');
  var menu=document.getElementById('menu');
  if(burger&&menu){
    burger.addEventListener('click',function(){
      var open=menu.classList.toggle('open');
      burger.setAttribute('aria-expanded',open?'true':'false');
    });
  }
  // 年份
  var y=document.getElementById('yr');
  if(y) y.textContent=new Date().getFullYear();

  // 購物車數量（前端示意，不送出）
  var cartCount=0;
  function refreshCart(){
    document.querySelectorAll('[data-cart-count]').forEach(function(el){el.textContent=cartCount;});
  }
  document.querySelectorAll('[data-add-cart]').forEach(function(btn){
    btn.addEventListener('click',function(e){
      e.preventDefault();
      cartCount++; refreshCart();
      btn.textContent='已加入購物車 ('+cartCount+')';
      setTimeout(function(){btn.textContent=btn.getAttribute('data-label')||'加入購物車';},1600);
    });
  });
  refreshCart();

  // 商品顏色選擇
  document.querySelectorAll('[data-swatches]').forEach(function(group){
    var label=group.parentNode.querySelector('[data-color-label]');
    group.querySelectorAll('.swatch').forEach(function(sw){
      sw.addEventListener('click',function(){
        group.querySelectorAll('.swatch').forEach(function(s){s.setAttribute('aria-pressed','false');});
        sw.setAttribute('aria-pressed','true');
        if(label) label.textContent=sw.getAttribute('data-name');
      });
    });
  });

  // 聯絡表單（前端驗證示意，不實際送出）
  var form=document.querySelector('form.contact');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var note=form.querySelector('.formnote');
      var name=form.querySelector('#f-name');
      if(name&&!name.value.trim()){name.focus();return;}
      if(note){note.classList.add('show');note.textContent='感謝您的來信！這是預覽展示站,表單尚未串接後端,我們已收到您的填寫內容(僅在本機示意)。';}
      form.querySelectorAll('input,textarea').forEach(function(el){if(el.type!=='submit')el.value='';});
    });
  }
})();
