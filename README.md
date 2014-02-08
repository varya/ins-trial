# Demo project of a static page with BEM

http://varya.me/ins-trial/desktop.bundles/index/index.html

## Application idea

### A piece of theory
The application is implemented using [BEM methodogy](http://bem.info) and some
BEM code which has already been written and used.
BEM works with all of the technologies usually used for web interface objects (CSS, templates, JavaScript).

To learn about BEM methodology, check out the following links in English:
  * [Official web site](http://bem.info)
  * [Quick start with full BEM stack](http://bem.info/articles/start-with-project-stub/)
  * [A new method to develop frontend](http://coding.smashingmagazine.com/front-end-methodology-bem-file-system-representation/)
  @ SmashingMagazine

### Code reuse
The application uses BEM libraries of independent components
  * **bem-core**
    * [bem-core documentation](http://bem.info/libs/bem-core/1.1.0)
    * [bem-core repository](https://github.com/bem/bem-core)
 * **bem-components**
   * [bem-components repository](https://github.com/bem/bem-components)

All the interface elements are implemented as independent components. Some of
them redefine library components.

 * [project
 component storage](https://github.com/varya/ins-trial/tree/master/desktop.blocks)
 * [example of
 a component redefining](https://github.com/varya/ins-trial/tree/master/desktop.blocks/button)
 * [expample of full component
 implementation](https://github.com/varya/ins-trial/tree/master/desktop.blocks/select)

### CSS approach
CSS for all the components is written according to BEM methodology. Thus, every
entity can set any place within a page and work independently.<br/>
Sometimes this approah leads to similar pieces of code which might be saved
([like
here](https://github.com/varya/ins-trial/blob/master/desktop.blocks/button/button.css).
But thanks to [CSSO utility](http://bem.info/tools/optimizers/csso/) all the
copy-paste pieces are optimized when building in the production mode.

### JavaScript approach
JavaScript code for all of the blocks is written in terms of BEM. This is possible with
a helper block
`i-bem`
provided by ``bem-core`` block library. The idea can be understood from [Tutorial
on JavaScript in BEM terms](https://github.com/bem/bem-js-tutorial).

In short, the important ideas are the following:
 * Each block has a JavaSript ``class``.
 * Each block representation is an ``instance`` of its class.
 * A block (class) is described declaratively.
 * A block (and its elements) can react on setting (or deleting) their modifiers doing something.
 * Many helpers for event delegation ideas.
 * Lazy initialization for blocks.

The approach enables to create independent and _reusable_ components. Although
creating a strickly consistent component takes time. Thus, you can also explore
other examples of using JavaScript in BEM terms:

 * **independent select block**
   * [live page
   example](http://varya.me/scoreboard-experiment/desktop.bundles/index/index.html)
   * [block
   code](https://github.com/varya/scoreboard-experiment/tree/master/ya-libs/islands-components/common.blocks/select)
 * **single page application**
   * [live
   example](http://varya.me/sc-challenge/)
   * [repo &
   explanations](https://github.com/varya/sc-challenge)

### Tempates
A special JavaScript-based template engine is used to turn data into HTML.

The basic information is in [xjst repo](https://github.com/veged/xjst) and at the
[BEMHTML syntax
documentation](http://bem.info/libs/bem-core/1.0.0/bemhtml/reference/).

Briefly, it is as declarative as XSLT but as fast as JavaScript. Actually BEMHTML code turns into ugly plain JavaScript
when compiling the project.

It is possible to be run on both client and server sides. In this example a part
of filter table (one row) is built on server when compiling the page. And
another part (additional row) is built on client from the JavaScript application
using the same templates. [The details can be seen from the
code](https://github.com/varya/ins-trial/blob/master/desktop.blocks/filter/filter.js#L68)

## Advantages
Speaking about advantages of using BEM for this application I would like to say:

#### Code reuse
Every technology in BEM has its own sort of inheritance. So, it is posible to reuse code from libraries by tuning it
for a particular project.

#### Encapsulation
The application is divided into independent parts (which are the blocks). So, it makes it possible to keep the code in order.

### Event delegation
All the events are watched using the idea of delegation. DOM event handlers are binded to
the ``document`` object, and BEM events are delegated from an instance to its class.

### Declarative approach
Defining `onSetMod` and `onElemSetMod` properties makes it possible to
describe a block reaction
at the setting of a modifier to a block or its element. With this it is easy to make the block consistent.
The advantage is a well-designed application and fewer bugs.

### Live (lazy) initialization
Special methods are used to ensure that an instance (block) JavaScript object occurs in
the browser memory only when it is needed. For example, when a user clicks a particular block element.

---

## Installation Requirements (for development)

- [node.js](http://nodejs.org/)

You may also consider [installing bem-tools locally to your environment](http://bem.info/tools/bem/installation/) for [ease of use](#an-easier-more-beautiful-way), though it is **not required**

---

### Installation:

So, how easy is it to get started with BEM?  *Super easy*.

It's as easy as...
    
1. ›`git clone git://github.com/bem/project-stub.git`
2. ›`cd project-stub`
3. ›`make`

*(hint: execute the above commands in your terminal)*

Now that `bem server` is running, check it out:

````
Navigate to: http://localhost:8080/desktop.bundles/index/index.html
````

(here, have a link: [http://localhost:8080/desktop.bundles/index/index.html](http://localhost:8080/desktop.bundles/index/index.html))

---

**That's it, it's that simple. Congratulations, your BEM project is already underway!**

---

[BEM](http://bem.info) is an abbreviation for Block-Element-Modifier.  [BEM](http://bem.info) is a way to write code which is easy to support and develop.

For more information about the BEM metodology check out [http://bem.info](http://bem.info/).
