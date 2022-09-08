export const config = {
  API_PORT: 8000,
  BASE_URL: "http://127.0.0.1",

  get API_HOST() {
    return this.BASE_URL + ":" + this.API_PORT;
  },
};
