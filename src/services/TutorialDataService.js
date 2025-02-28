import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/posts?_limit=5");
  }

  get(id) {
    return http.get(`/posts/${id}`);
  }

  create(data) {
    return http.post("/posts", data);
  }

  update(id, data) {
    return http.put(`/posts/${id}`, data);
  }

  delete(id) {
    return http.delete(`/posts/${id}`);
  }

  deleteAll() {
    return http.delete(`/posts`);
  }

  findByTitle(title) {
    return http.get(`/posts?title=${title}`);
  }
}

export default new TutorialDataService();