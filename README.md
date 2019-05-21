# Mi primera app en Angular 7

Instalamos Node.js 

![1556069407911](https://user-images.githubusercontent.com/47821726/56707182-b0f94b00-66cc-11e9-9049-a6fd63a76f8d.png)

Luego de instalado, validamos sus versiones:

![1556069462896](https://user-images.githubusercontent.com/47821726/56707254-f584e680-66cc-11e9-87ff-432bac833e6f.png)

Instalamos el angular CLI de manera global, para que este presente en todos nuestros proyectos, ejecutando por consola lo siguiente:

> > npm install -g @angular/cli

Nos vamos al directorio donde queremos crear nuestro proyecto y procedemos a crearlo:

![1556070142116](https://user-images.githubusercontent.com/47821726/56707256-fb7ac780-66cc-11e9-9359-05fd30e16f0b.png)

ng -- significa que haremos uso de angular cli

new -- para crear el proyecto nuevo

angular-to-do -- el nombre de nuestra aplicacion

Al presionar enter, nos pregunta si deseamos usar Angular routing que es una propiedad para navegar entre varias pantallas, le decimos que si; y posteriormente te pregunta que tipo de formato de estilo usaremos, en este caso seleccionamos CSS.

![1556071538627](https://user-images.githubusercontent.com/47821726/56707286-0fbec480-66cd-11e9-909e-c64949b3a8f9.png)

Importante tener conexion a internet. Realizando la operacion me genero un error que fue resuelto. Puede observarse su troubleshooting en la documentacion asociada en su error numero 1. Finaliza exitosamente la instalacion:

![1556077742205](https://user-images.githubusercontent.com/47821726/56707314-2c5afc80-66cd-11e9-90ae-1c7477405d0d.png)

Ahora utilizaremos el editor de codigo de nuestra preferencia, en este caso trabajaremos con Visual Studio Code.  Nos situamos en la carpeta del proyecto y escribimos lo siguiente para abra automaticamente el proyecto con Visual Studio Code:

![1556078599007](https://user-images.githubusercontent.com/47821726/56707324-35e46480-66cd-11e9-8a28-48090b75a718.png)

![1556078977333](https://user-images.githubusercontent.com/47821726/56707326-3977eb80-66cd-11e9-8992-76ff1e09af26.png)

Procedemos a ejecutar el proyecto, bien sea por la terminal en la que venimos trabajando o por la terminal que trae VS:

![1556079139489](https://user-images.githubusercontent.com/47821726/56707328-3c72dc00-66cd-11e9-8b46-c259cfb59f06.png)

![1556079215773](https://user-images.githubusercontent.com/47821726/56707332-3f6dcc80-66cd-11e9-9b70-9d3b4b58b359.png)

Luego de que finaliza el proceso de compilacion, gracias al parametro -o que colocamos en el comando, despliega automaticamente en el navegador la aplicacion de Angular:

![1556079386537](https://user-images.githubusercontent.com/47821726/56707334-4268bd00-66cd-11e9-945a-0961168714c6.png)

Nos dirigiremos a la pagina web de Firebase para crear un nuevo proyecto y a su vez la BD que es NoSQL:

<https://firebase.google.com/>

![1557429406578](C:\Users\Gabi\AppData\Roaming\Typora\typora-user-images\1557429406578.png)

Comenzar -- Agregar un nuevo proyecto

![1557429763638](C:\Users\Gabi\AppData\Roaming\Typora\typora-user-images\1557429763638.png)

![1557429834967](C:\Users\Gabi\AppData\Roaming\Typora\typora-user-images\1557429834967.png)

Se crea el nuevo proyecto. Ahora procederemos a crear la BD de CloudFirestore 

![1557430477123](C:\Users\Gabi\AppData\Roaming\Typora\typora-user-images\1557430477123.png)

Habilitamos los permisos (a modo de prueba, esto hace que los permisos esten abiertos.) Seguido de ellos, damos click en "Project Overview" -- damos click en </> y copiamos lo que vemos a continuacion en el archivo environment.ts de nuestro proyecto (estas son las credenciales de conexion):

![1557431033239](C:\Users\Gabi\AppData\Roaming\Typora\typora-user-images\1557431033239.png)

Luego, nos pocisionamos en el archivo app.module.ts y agregamos los imports de AngularFireModule, AngularFirestoreModule, environment y adicional NgModule y ReactiveFormsModule indicados en la imagen asi como luego hacer uso en el modulo de esos elementos (@NgModule):

![1557431128033](C:\Users\Gabi\AppData\Roaming\Typora\typora-user-images\1557431128033.png)

Posterior a ello, nos dirigimos al archivo angular.json y agregamos la ubicacion en nuestro proyecto de bootstrap:

![1557431435397](C:\Users\Gabi\AppData\Roaming\Typora\typora-user-images\1557431435397.png)

Paramos y volvemos a ejecutar el servidor: ng serve -o y luego de que compile para que tome los cambios, podremos observar que la fuente de las letras es diferente:

![1557431527867](C:\Users\Gabi\AppData\Roaming\Typora\typora-user-images\1557431527867.png)

Ahora crearemos un nuevo componente que sera la pantalla inicial de nuestra aplicacion. Abrimos una nueva consola en VS Code y colocamos el siguiente comando: ng generate component todo/todo-list

![1557431886107](C:\Users\Gabi\AppData\Roaming\Typora\typora-user-images\1557431886107.png)

ng -- indica que estamos creando el componente usando Angular CLI

generate component -- cpomando para generear el componente

todo/ -- va a crearlo en una carpeta todo (esto por temas de organizacion)

todo-list -- sera el nombre de nuestro componente

Luego de ejecutarlo, vemos que se crea el componente y se actualiza el app.module.ts, podemos observarlo:

![1557432214137](C:\Users\Gabi\AppData\Roaming\Typora\typora-user-images\1557432214137.png)

todos los componentes que vamos a usar deben estar declarados en el archivo app.module.ts en la seccion declarations de @NgModule.

Aca podemos observar el componente que acabamos de crear:

![1557432341023](C:\Users\Gabi\AppData\Roaming\Typora\typora-user-images\1557432341023.png)

