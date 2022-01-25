module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        lGrayish:"hsl(210, 46%, 95%)",
        dGrayish:"hsl(217, 19%, 35%)",
        gBlue:"hsl(212, 23%, 69%)",
        dDBlue:"hsl(214, 17%, 51%)"
      },
      screens:{
        mob:"375px",
        desk:"1440px"
      },
      fontSize:{
        def:["0.8125rem",{lineHeight:"1"}],
        small:["0.5125rem",{lineHeight:"1"}]
      }
    },
  },
  plugins: [],
}
