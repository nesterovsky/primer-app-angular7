# Troubleshooting asociados a la creacion de mi primera app en angular 7

### Error # 1

Realizando la creacion del proyecto con el siguiente comando

######  ng new angular-to-do

Se obtuvo el siguiente error:

![1556073173731](C:\Users\Gabi\AppData\Roaming\Typora\typora-user-images\1556073173731.png)

ejecutamos lo siguiente

![1556073213226](C:\Users\Gabi\AppData\Roaming\Typora\typora-user-images\1556073213226.png)

Nos cambia el mensaje

![1556075271360](C:\Users\Gabi\AppData\Roaming\Typora\typora-user-images\1556075271360.png)

Se procede a validar que este instalado el git local y se cierra esa command prompt y se ejecuta uno como administrador. Con ello quedo resuelto el problema:

![1556078239642](C:\Users\Gabi\AppData\Roaming\Typora\typora-user-images\1556078239642.png)

### Error # 2

Al momento de desplegar la app con Netlify, es importante colocar las credenciales del proyecto en firebase existentes en el archivo environment.ts en el archivo environment.prod.ts, asi solucionaremos el error: 

![1559187863897](C:\Users\Gabi\AppData\Roaming\Typora\typora-user-images\1559187863897.png)

