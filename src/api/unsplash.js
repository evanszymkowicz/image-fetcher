import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID d92d7481830508f78be383ff84156b0ba9d6f834d29cdd67f4541db18b27af32"
  }
});
