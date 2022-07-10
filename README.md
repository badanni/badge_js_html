# digital_badges_wp
 
Es un pequeño proyecto de prueba para realizar una badge de la siguiente dimension 150px x 250px .

# Como utilizarlo

1. Crear un contenedor para todas las badges (visual) que se van a definir

```
<div>
Agregue contenido aqui
</div>
```
2. Agregue un archivo para descargar, una imagen que represente el archivo, la etiqueta html debe tener la clase "cert_badge" y los parametros cert_logo, cert_href, cert_name, cert_type, cert_issuer.    

```
<div class="cert_badge" 
    cert_logo="PCEP_logo.png" 
    cert_href="https:PCEP_Certificado.pdf" 
    cert_name="Certified Entry Level Python Programmer" 
    cert_type="Certificate" 
    cert_issuer="Python Institute">
    PCEP
</div>
```
