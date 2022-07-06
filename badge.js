(function(){
    var elements = document.getElementsByClassName("cert_badge");
    for(var i = 0; i < elements.length; i++) {
      const cert_canvas = elements[i];
      cert_canvas.setAttribute('style','display: inline-block;');
      cert_canvas.setAttribute('scrolling','no');
      let cert_name =cert_canvas.getAttribute('cert_name');
      if(cert_name.length > 18){
        cert_name=cert_name.substring(0, 14)+'...';
      }else{
        cert_name=cert_name+'&nbsp;'.repeat(17-cert_name.length);
      }
      let cert_issuer=cert_canvas.getAttribute('cert_issuer');
      if(cert_issuer.length > 10){
        cert_issuer='Issuer: '+cert_issuer.substring(0, 6)+'...';
      }else{
        cert_issuer='Issuer: '+cert_issuer+'&nbsp;'.repeat(9-cert_issuer.length);
      }
      let cert_logo=cert_canvas.getAttribute('cert_logo');
      let cert_href=cert_canvas.getAttribute('cert_href');
      const cert_card = document.createElement('a');
      cert_card.setAttribute('href',cert_href);
      cert_card.setAttribute('style','text-decoration:none; color: inherit;')
      cert_card.setAttribute('target','_blank');
      cert_card.setAttribute('rel','noopener noreferrer');
      const cert_body = document.createElement('div');
      cert_body.setAttribute('style','text-align: center; min-width:150px; max-width: 150px; width: 150px; min-height: 250px; max-height: 250px; height: 250px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; border: 2px solid grey; border-radius: 5px; padding: 5px;');
      cert_body.setAttribute('onmouseover',"this.style.box-shadow='0 8px 16px 0 rgba(0,0,0,0.2);'");
      cert_body.setAttribute('onmouseout',"this.style.box-shadow=''");
      const cert_img = document.createElement('img');
      cert_img.setAttribute('src', cert_logo);
      cert_img.setAttribute('style','height: 105px; width:105px;');
      const cert_container = document.createElement('div');
      cert_container.setAttribute('style','padding: 2px 16px;');
      cert_container.innerHTML='<h4><b>'+cert_name+'</b></h4><p>'+cert_issuer+'</p>';
      cert_body.appendChild(cert_img);
      cert_body.appendChild(cert_container);
      cert_card.appendChild(cert_body);
      cert_canvas.replaceChild(cert_card, cert_canvas.childNodes[0]);
    }
    }).call(this);