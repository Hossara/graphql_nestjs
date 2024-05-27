import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        "inter" : ["Inter" , "arial" , "sans-serif"]
      },
      colors: {
        "blue-dark": "#1E6F9F",
        "blue": "#4EA8DE",
        "purple-dark": "#5E60CE",
        "purple": "#8284FA",
        "danger": "#E25858"
      }
    },
  },
}
