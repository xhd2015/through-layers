# Hope
Of course life is full of hope, so is programming.

We plan to make this editor a plugin for Visual Studio Code, wishing it completing the following funcitons:

- Write Sql with table and columns resolving,hinting and auto-complete
- Design methods with 4 layers
- Other advanced functions

# Other Interesting Problems#1: how to use typescript in conjunction with node, using the webpack?
at tsconfig.json
   at compilerOptions
      set target = es6
      set moduleResolution = node
at webpack.config.js
   add module
        {
            test:/\.tsx?$/,
            use:[{
                  loader:'ts-loader '
            }]
        }
   add resolve
       add extensions :[".tsx",".ts"]
    set target = node
   at  node
       set __filename=false, __dirname=false