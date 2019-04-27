import http from "k6/http";
export const options = {
  vus: 100,
  duration: "5m"
}; //makes 100 users constantly making requests, run for 5 minutes

export default function() {
  http.get("localhost:3003/api/about/aaaaa");
};