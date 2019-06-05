---
id: quoting
title: Quoting
---

There are two methods `Pattern::quote()` and `Pattern::unquote()`, first of which works as `preg_quote()` is supposed to
work:

```php
<?php
Pattern::quote("Welcome\How are you?");
```
```text
Welcome\\How are you\?
```
...second of which is the direct opposite:
```php
<?php
Pattern::unquote("Welcome\\How are you\?");
```
```text
Welcome\How are you?
```

Please, keep in mind that this **is not** a safe way to create patterns with unsafe characters - for that, consider
using [Prepared Patterns](prepared-patterns.md).

## Contract

These two methods should be transitive, so:

```php
<?php
$output = Pattern::unquote(Pattern::quote($input));
```

The contract is `$input === $output` for any `$input` value.