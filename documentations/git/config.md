# Config Files
File|    Option
--   |    -
/etc/gitconfig|--system
~/.gitconfig, ~/.config/git/config|--global
.git/config   | --local

# Basic Configuration

Config |  Value  | Example
-- | - | -
**Core** | - | -
core.editor | `vi`,`emacs`,default `vi` | `emacs`
commit.template | a template file, used when a commit message is not specified | ~/.gitmessage.txt
core.pager|  the pager, default `less`,candidate:`more`, ture off:`''`|`less`
core.excludesfile | the `.gitignore` file|`.gitignore`
**Colors** | - | -
color.ui | whether to color,`true`, `false`, `always`,command line option `--color` can override this | `true`
color.* | for `branch`,`diff`,`interactive`,`status` | color.diff = `true`
**Formatting** | - | -
core.autocrlf | on windows,set it to `true`(default for windows) will automatically convert `lf` to `crlf` , candidate:`input`(for linux users)| `true`
core.whitespace| three are turned on:`blank-at-eol`,`blank-at-eof`,`space-before-tab`, three are turned off:`indent-with-non-tab`,`tab-in-indent`,`cr-at-eof`, these configs can be used when using `diff`, and `apply`:` git apply --whitespace=fix|warn <patch>`|appending: `-space-before-tab,indent-with-non-tab,tab-in-indent,cr-at-eol`, reset:`trailing-space,-space-before-tab,indent-with-non-tab,tab-in-indent,cr-at-eol`
**Server**|-|-
receive.denyDeletes| whether accept deleting|`true`

# CLI
```bash
# list all
git config --list
```