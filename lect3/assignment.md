- JSX
- React.createElement vs JSX
- Benefits of JSX
- Behind the Scenes of JSX
- Babel & parcel role in JSX
- Components
- Functional Components
    - Composing Components


# What is JSX?
Jsx is the javascript extension and also known javascript XML. It is used javascript with React
Jsx allow you to write the html-like code within your javascript code
In this code, the <h1>Hello, World!</h1> part is written in JSX. It looks like HTML but is actually JavaScript. It gets transformed by a tool like Babel into regular JavaScript code that the browser can understand.

# Superpowers of JSX 
we can write the react componenet using React.createElement() but this would make our code unreadable and tedious hence we use jsx to make our code readable and to write the html-like syntax


# Role of type attribute in script tag? What options can I use there?
The `type` attribute in a `<script>` tag specifies the type or language of the script being executed. It tells the browser how to interpret and execute the content of the `<script>` element. The `type` attribute is not limited to just JavaScript; it can be used to specify various scripting and programming languages. However, for JavaScript, it's common to omit the `type` attribute because JavaScript is the default scripting language for browsers.

Here are some common options for the `type` attribute in a `<script>` tag:

1. JavaScript (Default):
   ```html
   <script>
     // JavaScript code here
   </script>
   ```

   You can omit the `type` attribute, and the browser will assume it's JavaScript by default.

2. ECMAScript 6 (ES6):
   ```html
   <script type="text/javascript">
     // ES6 JavaScript code here
   </script>
   ```

   This specifies that the JavaScript code is written in ECMAScript 6 (ES6).

3. JavaScript MIME Type:
   ```html
   <script type="application/javascript">
     // JavaScript code here
   </script>
   ```

   Using `type="application/javascript"` explicitly declares the script as JavaScript.

4. JSON:
   ```html
   <script type="application/json">
     { "key": "value" }
   </script>
   ```

   You can use the `type` attribute to indicate that the content is JSON data.

5. Other Languages:
   You can specify the `type` attribute for other scripting or programming languages, such as:

   - `type="text/css"` for CSS.
   - `type="text/html"` for HTML templates.
   - `type="text/plain"` for plain text.

Note that in modern web development, it's common to rely on the default behavior for JavaScript without specifying the `type` attribute explicitly. This is because browsers assume JavaScript when the `type` attribute is omitted. However, specifying the `type` attribute can be useful when you're dealing with non-JavaScript content or need to ensure compatibility with older browsers.




# {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
In JSX, the different ways you've presented, `{TitleComponent}`, `{<TitleComponent/>}`, and `{<TitleComponent></TitleComponent>}`, have distinct meanings and use cases:

1. `{TitleComponent}`:
   This is used to reference a component or a variable within your JSX code. It assumes that `TitleComponent` is a valid React component or variable that holds a component. When you use it within JSX, it simply represents the component or value. It's not a self-closing component, so it should be used within the context of another component or JSX structure.

   Example:
   ```jsx
   <div>
     <TitleComponent />
     {/* Other JSX code */}
   </div>
   ```

2. `{<TitleComponent/>}`:
   This is a self-closing JSX element that renders the `TitleComponent` component. It's the most """common way""" to render a React component in JSX when you don't need to pass any props or include child elements within the component.

   Example:
   ```jsx
   <div>
     <TitleComponent />
     {/* Other JSX code */}
   </div>
   ```

3. `{<TitleComponent></TitleComponent>}`:
   This is also a way to render the `TitleComponent`, but it's not self-closing. You would use this format if you want to include child elements within the `TitleComponent`. This is useful when your component is designed to wrap and render its children.

   Example:
   ```jsx
   <div>
     <TitleComponent>
       <span>Child Element</span>
     </TitleComponent>
     {/* Other JSX code */}
   </div>
   ```

The choice between these three options depends on the requirements of your application and the structure of your React components. The most commonly used option is `{<TitleComponent/>}` for rendering standalone components, but you would use the other formats when you need to embed components within other JSX or when your component requires children.





