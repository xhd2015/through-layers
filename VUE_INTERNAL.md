# Vue Internal Concept
- Dep

It denotes an object that Watchers depends on

Each Dep will have a global unique auto increment id.

Deps are commonly used by a proxy of an object,of which the proxy adds dependency when getter is called, and notify update when setter is called with a different value.

Core Dep Properties and Methods:

1.id

2.subs[] -- subscribers

Core Global Properties:

1.Dep.target -- the most recent object that reaches evaluation of current object

2.targetStack[] -- a stack that records all Dep.target in most recently used order

- Observer

An Observer is just a Dep that adds with some extra Vue characteristics.Specifically, it is to proxy Vue root data.

- Watcher

A Watcher is a stub to watch other Deps(proxied object,including Observer), or another group of Watchers.

A Watcher keep a list of Deps that it depends on, whenever it is re-evaluated because any of its dependency has changed, it will recollect a new list of that dependency.

A Watcher can also be a dependency for other watchers,and this relies on a very obvious and simple rule: the value of the Watcher changes only if either of its dependency is changed.So when it is used as a dependency to other watchers, instead of being a Dep, it exposes its list of dependency to these watchers.

And to be simple, all setter call by either a computed property or a watcher, will finally fall into calling setter of an object that has or has not a Dep stub, no matter they call the setter directly, or call setter of other watchers.So a property of any type in a Vue instance will change only if any property with a Dep changes, and it is not limited that Dep object belongs to the same Vue instance.

Core Watcher Properties and Methods:

1.deps[]  -- dependency list

2.get()   -- collect



# Few Points About Vue
- computed property is a watcher associated with a dep(dependency)

- plain data property is proxied by reactive setter and getter pair

- Observer is a value with a dep, created by calling observe(data)

- A Watcher has a deps[] array, which makes it a big Dep also.




- dep.depend() -->  let current watcher depends on dep --> e.g. dep.becomeDepenedencyOf(watcher)
- Dep.target == current watcher
- any reactiveGetter call will make it a dependency to current watcher, and only in that way can the watcher receive update from any of the dependency key(they will be marked dirty)

- by targetStack,the dependency is correctly injected to the 'active' watcher.
- Dep.target means the most recently object entry point that reaches the evaluation of current object.It is conceptually a stub, a ladder.

- dep.sub, that is , a short name for dep.subscribers

- after calling get() of Watcher, the collected dependency will be next iteration's dependency if 

- after watcher evaluated,and deps[] are updated into next iteration, if Dep.target exist, then the watcher will inject all of its next iteration's deps[] into the target. This assumes a simple truth: the watcher value will only change only if any of its dependency changed.

- a simple test: a,b watch on c,  and c changed,that is, c will call notify and mark a,b dirty, so that a,b,  get updated in next tick. Remember, in vue, nextTick is regularly called, it is not real-time, but almost real-time.

# Play Yourself
Look, I got a vue library for you: [vue.common.dev.test-core.js](vue.common.dev.test-core.js), it is taken from github of vue, version 3, and it tastes good.I have added some custom variables to it, they can be accessed via 'global':`global.myObservers, global.myWatchers, global.myDeps`.
 
 Just type `node vue.common.dev.test-core.js`, you will get some meaningful result.

Debug yourself, I won't bother you.
