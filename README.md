# TimJs
one repository for npm package which for users can get Tim's message via javascript.

please install the package with npm and use the 'TimJs' class to get Tim's message as below steps:

First, please run the command:  

```npm i tim-message-js```  

Then the package will be installed under one folder,for example 'test', the will create a folder named 'node_nodules' in the 'test' folder.
If everything completed above. You can use the package with bolow code with js:  

```var TimJs = require('tim-message-js');```  
```var tim = new TimJs(25, 999999);```

The paramters for the constructor is optional.  
After that, the object 'tim' will has some property and methods and you can't add additional property or method on the object anymore. Below is the list:
- age
- name
- account

+ getAge()
+ getName()
+ getAccount()
+ getGirlFriend()
eval("for(var i=0; i<10; i++){alert('test');}");
