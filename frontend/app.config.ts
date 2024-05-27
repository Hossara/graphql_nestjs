export default defineAppConfig({
  ui: {
    primary: 'sky',
    gray: 'slate',
    checkbox: {
      base: 'w-6 h-6 cursor-pointer dark:checked:bg-purple-dark',
      rounded: 'rounded-full',
      border: 'border-2 dark:border-blue',
      form: 'dark:checked:bg-[length:65%]',
      background: ' dark:bg-transparent'
    },
    card: {
      base: 'hover:shadow-xl',
      background: "dark:bg-[#262626] dark:hover:bg-[#333333]",
      ring: 'ring-2 dark:ring-[#333333] duration-[0.2s]'
    }
  }
})