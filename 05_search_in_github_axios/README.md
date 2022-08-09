## `1. Some knowledge about Search in Github Application`
1. We should consider the failed contiditon, when the components have to communicate with network.
2. Some tips about ES6:<br>
   `let obj = {a:{b:1}};` <br>
   `const {a} = obj; `<br>
   `const {a:{b}} = obj;` <br>
   `const {a:{b:value}} = obj;  // rename the b to value `<br>

3. Pubsub:<br>

   -- First **subscribe**, and the **publish** <br>
   -- This can communicate between **any** two components.<br>
   -- **ATTENTION:** You need to call **unsubscribe** in componentWillUnmount<br>

4. We can use **fetch** to send request: <br>

   `try{`<br>
            `const reponse = await fetch(`https://api.github.com/search/users?q=${keyword}`)`<br>
            `const data = await reponse.json()`<br>
            `PubSub.publish('zdliu', {isLoading: false, users: data.items})`<br>
        `}`<br>
   `catch (error){`<br>
            `PubSub.publish('zdliu', {isLoading: false, err: error.message})`<br>
   `}`<br>

