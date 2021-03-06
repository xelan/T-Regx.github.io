---
id: match
title: Match a subject
---

Using `pattern()->match()` you can:
 - Test a subject against a pattern: [`test()`](#test-a-subject)/[`fails()`](#test-a-subject)
 - Retrieve matches from the subject: [`first()`](#one)/[`all()`](#many)/[`only()`](#many)
 - Get capturing groups from matches: [`group()`](match-details.md)/[`Match.group()`](match-details.md)/[`groups()`](match-details.md)
 - Invoke callbacks for matches: [`first()`](match-first.md#use-first-with-callback)/[`forFirst()`](match-for-first.md)/[`forEach()`](match-for-each.md)/[`map()`](match-map.md)/[`flatMap()`](match-flat-map.md)

## Test a subject

If you only need to check whether a pattern matches a subject, use:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="T-Regx"
  values={[
    { label: 'T-Regx', value: 'T-Regx', },
    { label: 'PHP', value: 'PHP', },
  ]
}>
<TabItem value="T-Regx">

```php
pattern('[0-9]+')->test("I'm 19 years old");
```

</TabItem>
<TabItem value="PHP">

```php
preg::match('/[0-9]+/', "I'm 19 years old") > 0;
```

</TabItem>
</Tabs>

...or to check whether it doesn't:

<Tabs
  defaultValue="T-Regx"
  values={[
    { label: 'T-Regx', value: 'T-Regx', },
    { label: 'PHP', value: 'PHP', },
  ]
}>
<TabItem value="T-Regx">

```php
pattern('[0-9]{3}')->fails("I'm 19 years old");
```

</TabItem>
<TabItem value="PHP">

```php
preg::match('/[0-9]{3}/', "I'm 19 years old") === 0;
```

</TabItem>
</Tabs>


Of course `pattern()->match()` throws an exception if the pattern is invalid (or in case of any other error).

> You can also use `pattern()->match()->test()` and `pattern()->match()->fails()`.

## Retrieve matches

### Many

You can easily retrieve matched occurrences of a pattern in your subject.

<Tabs
  defaultValue="T-Regx"
  values={[
    { label: 'T-Regx', value: 'T-Regx', },
    { label: 'PHP', value: 'PHP', },
  ]
}>
<TabItem value="T-Regx">

```php
pattern('[0-9]+')->match("I'm 19. I was born in 1999, on May 12")->all();
```

</TabItem>
<TabItem value="PHP">

```php
preg::match_all('/[0-9]+/', "I'm 19. I was born in 1999, on May 12", $matches);
return $matches[0];
```

</TabItem>
</Tabs>

<!--Result-Value-->
```php
['19', '1999', '12']
```

You can limit your matches with `only(int)`.

<Tabs
  defaultValue="T-Regx"
  values={[
    { label: 'T-Regx', value: 'T-Regx', },
    { label: 'PHP', value: 'PHP', },
  ]
}>
<TabItem value="T-Regx">

```php
pattern('[0-9]+')->match("I'm 19. I was born in 1999, on May 12")->only(2);
```

</TabItem>
<TabItem value="PHP">

```php
preg::match_all('/[0-9]+/', "I'm 19. I was born in 1999, on May 12", $matches);
return array_slice($matches[0], 0, 2);
```

</TabItem>
</Tabs>

<!--Result-Value-->

```php
['19', '1999']
```

### One

To get the first occurrence of a matched pattern, call [`first()`](match-first.md).

<Tabs
  defaultValue="T-Regx"
  values={[
    { label: 'T-Regx', value: 'T-Regx', },
    { label: 'PHP', value: 'PHP', },
  ]
}>
<TabItem value="T-Regx">

```php
pattern('[0-9]+')->match("I'm 19 years old. I was born in 1999")->first();
```

</TabItem>
<TabItem value="PHP">

```php
if (preg::match('/[0-9]+/', "I'm 19 years old. I was born in 1999", $match)) {
    return $match[0];
}
throw new SubjectNotMatchedException();
```

</TabItem>
</Tabs>

<!--Result-Value-->
```php
'19'
```

Read on the [next page](match-first.md) to learn more about [`first()`](match-first.md).

## Unmatched subject

### `all()`/`only()`

If you call `all()` or `only()` on a subject that doesn't match your pattern, you'll receive an empty array.

<Tabs
  defaultValue="T-Regx"
  values={[
    { label: 'T-Regx', value: 'T-Regx', },
    { label: 'PHP', value: 'PHP', },
  ]
}>
<TabItem value="T-Regx">

```php
pattern('\d+')->match('Word')->all();
```

</TabItem>
<TabItem value="PHP">

```php
preg::match_all('/\d+/', 'Word', $match);
return $match[0];
```

</TabItem>
</Tabs>

<!--Result-Value-->
```php
[]
```

### `first()`

If, however, subject doesn't match your pattern and you use `first()` - `SubjectNotMatchedException` is thrown.

<Tabs
  defaultValue="T-Regx"
  values={[
    { label: 'T-Regx', value: 'T-Regx', },
    { label: 'PHP', value: 'PHP', },
  ]
}>
<TabItem value="T-Regx">

```php
try {
    return pattern('\d+')->match('Word')->first();
}
catch (SubjectNotMatchedException $e) {
    // handle
}
```

</TabItem>
<TabItem value="PHP">

```php
try {
    if (preg::match('/\d+/', 'Word', $match)) {
        return $match[0];
    }
    throw new SubjectNotMatchedException();
}
catch (SubjectNotMatchedException $e) {
    // handle
}
```

</TabItem>
</Tabs>


## Protect the developer

Please, keep in mind that T-Regx aims to relieve you (a programmer) from any [**brain strain**](overview.md#brain-strain),
therefore if you 
