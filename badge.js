function myCard_more(e) {
  var win = window.open();
  win.document.write(e);
}
(function(){
  const font_size_text="10px";  
  var elements = document.getElementsByClassName("cert_badge");
    for(var i = 0; i < elements.length; i++) {
      const cert_canvas = elements[i];
      cert_canvas.setAttribute('style','display: inline-block;');
      cert_canvas.setAttribute('scrolling','no');
      let cert_name =cert_canvas.getAttribute('cert_name').toUpperCase();
      if(cert_name.length > 80){
        cert_name=cert_name.substring(0, 77)+"...";
      }
      let cert_type ="TYPE: "+cert_canvas.getAttribute('cert_type').toUpperCase();
      if(cert_type.length > 80){
        cert_type=cert_type.substring(0, 77)+"...";
      }
      let cert_issuer='ISSUER: '+cert_canvas.getAttribute('cert_issuer').toUpperCase();
      if(cert_issuer.length > 80){
        cert_issuer=cert_issuer.substring(0, 77)+"...";
      }
      let cert_logo=cert_canvas.getAttribute('cert_logo');
      let cert_href=cert_canvas.getAttribute('cert_href');
      const cert_card = document.createElement('a');
      cert_card.setAttribute('href',cert_href);
      cert_card.setAttribute('style','text-decoration:none; color: inherit;')
      cert_card.setAttribute('target','_blank');
      cert_card.setAttribute('rel','noopener noreferrer');
      const cert_body = document.createElement('div');
      cert_body.setAttribute('style','text-align: center; min-width:150px; max-width: 150px; width: 150px; min-height: 250px; max-height: 250px; height: 250px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; border: 2px solid grey; border-radius: 5px; padding: 5px; margin: 2px;');
      cert_body.setAttribute('onmouseover',"this.style.box-shadow='0 8px 16px 0 rgba(0,0,0,0.2);'");
      cert_body.setAttribute('onmouseout',"this.style.box-shadow=''");
      const cert_img = document.createElement('img');
      cert_img.setAttribute('src', cert_logo);
      cert_img.setAttribute('style','height: 105px; width:105px;');
      const cert_container = document.createElement('div');
      cert_container.setAttribute('style','padding: 2px 16px;');
      const cert_container_cert_name = document.createElement('div');
      cert_container_cert_name.setAttribute('style','height: 80px; font-size: '+font_size_text+'; white-space: pre-wrap; word-wrap: break-word; overflow: hidden; text-overflow: ellipsis;');
      cert_container_cert_name.innerHTML=cert_name
      const cert_container_cert_type = document.createElement('div');
      cert_container_cert_type.setAttribute('style','font-size: '+font_size_text+'; white-space: nowrap; word-wrap: break-word; overflow: hidden; text-overflow: ellipsis;');
      cert_container_cert_type.innerHTML=cert_type
      const cert_container_cert_issuer = document.createElement('div'); 
      cert_container_cert_issuer.setAttribute('style','font-size: '+font_size_text+'; white-space: nowrap; word-wrap: break-word; overflow: hidden; text-overflow: ellipsis;');
      cert_container_cert_issuer.innerHTML=cert_issuer
      cert_container.appendChild(cert_container_cert_name);
      cert_container.appendChild(cert_container_cert_type);
      cert_container.appendChild(cert_container_cert_issuer);
      cert_body.appendChild(cert_img);
      cert_body.appendChild(cert_container);
      cert_card.appendChild(cert_body);
      cert_canvas.replaceChild(cert_card, cert_canvas.childNodes[0]);
    }
    }).call(this);
(function(){
      const font_size_text="10px";
      var elements = document.getElementsByClassName("cards_bagde");
      for(var i = 0; i < elements.length; i++) {
        const cards_canvas = elements[i];
        cards_canvas.setAttribute('style','display: inline-block;');
        cards_canvas.setAttribute('scrolling','no');
        let card_name =cards_canvas.getAttribute('card_name').toUpperCase();
        if(card_name.length > 80){
          card_name=card_name.substring(0, 77)+"...";
        }
        let card_type ="TYPE: "+cards_canvas.getAttribute('card_type').toUpperCase();
        if(card_type.length > 80){
          card_type=card_type.substring(0, 77)+"...";
        }
        let card_issuer='ISSUER: '+cards_canvas.getAttribute('card_issuer').toUpperCase();
        if(card_issuer.length > 80){
          card_issuer=card_issuer.substring(0, 77)+"...";
        }
        let card_logo=cards_canvas.getAttribute('card_logo');
        const card_card = document.createElement('a');
        card_card.setAttribute('href',"activarjs.html");
        card_card.setAttribute('onClick','myCard_more("<a>asdasd</a>");return false;');
        card_card.setAttribute('style','text-decoration:none; color: inherit;')
        //card_card.setAttribute('target','_blank');
        //card_card.setAttribute('rel','noopener noreferrer');
        const card_body = document.createElement('div');
        card_body.setAttribute('style','text-align: center; min-width:150px; max-width: 150px; width: 150px; min-height: 250px; max-height: 250px; height: 250px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; border: 2px solid grey; border-radius: 5px; padding: 5px; margin: 2px;');
        card_body.setAttribute('onmouseover',"this.style.box-shadow='0 8px 16px 0 rgba(0,0,0,0.2);'");
        card_body.setAttribute('onmouseout',"this.style.box-shadow=''");
        const card_img = document.createElement('img');
        card_img.setAttribute('src', card_logo);
        card_img.setAttribute('style','height: 105px; width:105px;');
        const card_container = document.createElement('div');
        card_container.setAttribute('style','padding: 2px 16px;');
        const card_container_cert_name = document.createElement('div');
        card_container_cert_name.setAttribute('style','height: 80px; font-size: '+font_size_text+'; white-space: pre-wrap; word-wrap: break-word; overflow: hidden; text-overflow: ellipsis;');
        card_container_cert_name.innerHTML=card_name
        const card_container_cert_type = document.createElement('div');
        card_container_cert_type.setAttribute('style','font-size: '+font_size_text+'; white-space: nowrap; word-wrap: break-word; overflow: hidden; text-overflow: ellipsis;');
        card_container_cert_type.innerHTML=card_type
        const card_container_cert_issuer = document.createElement('div'); 
        card_container_cert_issuer.setAttribute('style','font-size: '+font_size_text+'; white-space: nowrap; word-wrap: break-word; overflow: hidden; text-overflow: ellipsis;');
        card_container_cert_issuer.innerHTML=card_issuer
        card_container.appendChild(card_container_cert_name);
        card_container.appendChild(card_container_cert_type);
        card_container.appendChild(card_container_cert_issuer);
        card_body.appendChild(card_img);
        card_body.appendChild(card_container);
        card_card.appendChild(card_body);
        cards_canvas.replaceChild(card_card, cards_canvas.childNodes[0]);
        console.log(card_name)
      }
    }).call(this);