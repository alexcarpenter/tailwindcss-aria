# tailwindcss-aria

> TailwindCSS variants to style elements based on aria attributes values.

## aria-current

Available values: `page`, `step`, `location`, `date`, `time`, `true`, `false`.

```html
<nav>
  <ul>
    <li>
      <a href="/" class="text-green-700 current:text-green-900">Home</a>
    </li>
    <li>
      <a href="/about" class="text-green-700 current:text-green-900" aria-current="page">About</a>
    </li>
    <li>
      <a href="/contact" class="text-green-700 current:text-green-900">Contact</a>
    </li>
  </ul>
</nav>
```

## aria-expanded

```html
<button aria-expanded="true" class="inline-flex align-items-center space-y-2 bg-gray-700 expanded:bg-gray-900">
  <span>Toggle me</span>
  <svg class="expanded:rotate-180">...</svg>
</button>
```

## LICENSE

[MIT](LICENSE)
