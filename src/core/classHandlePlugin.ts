export default function classHandlePlugin() {
  return {
    name: 'class-handle',
    transform(code: string, id: string) {
      if (id.endsWith('.vue')) {
        const pattern = /class="([^"]*)"/g

        code = code.replace(pattern, (_: any, className: string) => {
          let classItems = className.split(' ')
          classItems = classItems.map((item) => item.replace(/\n/g, ''))
          classItems = classItems.filter((item) => item !== '')
          classItems = classItems.map((item) => {
            if (/^(.+)?\[(.*)](.+)?$/.test(item)) {
              item = item.replace(/\[/g, '_').replace(/\]/g, '_')
              if (item.includes("'")) {
                item = item.replaceAll("'", '-')
              }
              if (item.includes('"')) {
                item = item.replaceAll('"', '-')
              }
            }
            if (item.includes(':')) {
              item = item.replace(':', '_')
            }
            return item
          })
          className = classItems.join(' ')
          return `class="${className}"`
        })
      }
      return {
        code
      }
    }
  }
}
