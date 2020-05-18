let myApp = new Vue({
  el: "#app",
  data: {
    url: "https://api.npoint.io/906c14ba38db9ecc9e8d",
    books: [],
    search: "",
  },
  methods: {
    cogerLibros() {
      fetch(this.url)
        .then(res => res.json())
        .then(json => (this.books = json.books));
    },
  },
  computed: {
    filterBooks() {
      // .filter me  crea un nuevo array con los elementos que cumplan la condición de la función.
      return this.books.filter(book => {
        return (
          // .match devuelve las coincidencias dentro de una cadena, en este caso busca las
          // coincidencias de title dentro de search.
          // toUpperCase me devuelve el valor el vakor de la cadena en mayúsculas.
          book.title.toUpperCase().match(this.search.toUpperCase()) ||
          book.details.toUpperCase().match(this.search.toUpperCase())
        );
      });
    },
  },
  //  inicia   variables del estado de manera asíncrona
  created() {
    this.cogerLibros();
  },
});
