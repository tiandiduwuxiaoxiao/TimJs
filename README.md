# TimJs
one repository for npm package which can get Tim's message via javascript

please install the package with npm and use the 'TimJs' class to get Tim's message like below:

First, please run the command:  
```npm i tim-message-js```  
Then the package will installed under one folder,for example 'test', the will create a folder named 'node_nodules'.

If everything completed above. You can use the package with bolow code with js:  
```var TimJs = require('tim-message-js');```  
```var tim = new TimJs(25, 999999);```

The paramters for the constructor is optional.  
After that, the object 'tim' will have some property and methods. Below is the list:
- age
- name
- account

+ getAge()
+ getName()
+ getAccount()
+ getGirlFriend()
