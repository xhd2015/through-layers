# Link
http://tldp.org/  the Linux Documentation Project
# Support
{} -- a list of command, no subshell is created, ';' is required
 { list; }

# Bypass ssh tty
```bash
# NOTE, -e may not be supported, and you may also add  '-o "StrictHostKeyChecking no"' to avoid ssh host checking
 { script -qefc 'scp p.py root@10.101.92.121:/root';} <<< '079d5c'
```

# knowing the tty
```bash
tty
/dev/pts/0
```

# Here document
This type of redirection instructs the shell to read input from the current source until a line containing only word (with no trailing blanks) is seen. All of the lines read up to that point are then used as the standard input (or file descriptor n if n is specified) for a command.

The format of here-documents is:

[n]<<[-]word
        here-document
delimiter
No parameter and variable expansion, command substitution, arithmetic expansion, or filename expansion is performed on word. If any part of word is quoted, the delimiter is the result of quote removal on word, and the lines in the here-document are not expanded. If word is unquoted, all lines of the here-document are subjected to parameter expansion, command substitution, and arithmetic expansion, the character sequence \newline is ignored, and ‘\’ must be used to quote the characters ‘\’, ‘$’, and ‘`’.

note:delimiter is quote removed word
NOTE: if word is quoted, then the string is verbatim.
# Here string
[n]<<< word


# Readline Libarary(lanage vim like, key emacs like)
Ctrl-<k> = Line Editing
Meta-<k> = Word Editing


Ctrl-k =  kill to end
Crtl-u = kill to start
Meta-Del = delete backward a word
Ctrl-w = delete a word,until last space

Ctrl-b = backward a character
Meta-b = forward a character

Meta-b = backward a word
Meta-f = forward a word

Ctrl-y = yank

Ctrl-a = to head
Ctrl-e = to end

Ctrl-d = delete a character


Ctrl-p = previous history
Ctrl-n = next history

Ctrl-v = add next character verbatim, that is , escape control character, try to input 'Ctrl-v <return>', you will get ^M


Ctrl-x Ctrl-u - undo