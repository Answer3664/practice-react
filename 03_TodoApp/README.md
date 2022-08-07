## `1. Some knowledge about TODO Application`
1. Split up the components and implement the static component, **Attention:** the useage of className and style
2. Initial the list dynamicly, how to decide which component contain the **Data** we used? <br>
   -- Some particular component: put data in **itself's state**. <br>
   -- A lot of component all use this data: put this data in **father component** (state promotion).<br>

3. Communication between father and son component:<br>

   -- Father-Son: just use props direcly. <br>
   -- Son-Father: The father need to send the son a **function** by props previously.<br>

4. **Attention:** the difference between **defaultChecked** and **Checked**, same relationship between **defaultValue** and **value**
5. Where the **state** is, where the **operation** is.

