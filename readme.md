
## KATA SOLUTION 

To test the solution just

```
node main.js
```

and type any argument to test the parsing result. Both string and array are supported. Some basic validation is performed and may be improved to better check malformed/wrong inputs. 

Some examples

```
node main.js
bar    
Parsing result: {}
--bar
Parsing result: {"bar":true}
--foo bar
Parsing result: {"foo":"bar"}
--foo bar bar2 bar3
Parsing result: {"foo":["bar","bar2","bar3"]}
--foo bar --foo2 1 2 --foo bar2 bar3 --foo2
Parsing result: {"foo":["bar","bar2","bar3"],"foo2":[1,2]}
--foo bar --foo2 1 2 --foo bar2 bar3 --foo3
Parsing result: {"foo":["bar","bar2","bar3"],"foo2":[1,2],"foo3":true}
[--bar]
Parsing result: {"bar":true}
[--bar4,--bar2,--bar3,foo,foo2,--bar2,3,--bar]
Parsing result: {"bar4":true,"bar2":3,"bar3":["foo","foo2"],"bar":true}
[--foo, --foo2, test, test2, --bar, --foo, 2]
Parsing result: {"foo":2,"foo2":["test","test2"],"bar":true}
```
